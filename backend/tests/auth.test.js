const request = require("supertest");
const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const authRoutes = require("../routes/auth");
const authMiddleware = require("../middleware/authMiddleware");

const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);

describe("Admin Authentication", () => {
  let server;
  beforeAll(() => {
    server = app.listen(4000);
  });

  afterAll((done) => {
    server.close(done);
  });

  // Mock User model methods
  beforeEach(() => {
    jest.spyOn(User, "findOne").mockImplementation(({ username }) => {
      if (username === "admin") {
        return Promise.resolve({
          _id: "123",
          username: "admin",
          role: "admin",
          comparePassword: (password) =>
            Promise.resolve(password === "password123"),
        });
      }
      return Promise.resolve(null);
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("Login with valid admin credentials returns token", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ username: "admin", password: "password123" });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  test("Login with invalid credentials returns 401", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ username: "admin", password: "wrongpassword" });
    expect(res.statusCode).toBe(401);
  });

  test("Login with non-admin user returns 403", async () => {
    User.findOne.mockImplementationOnce(() =>
      Promise.resolve({
        _id: "124",
        username: "user",
        role: "user",
        comparePassword: () => Promise.resolve(true),
      })
    );
    const res = await request(app)
      .post("/api/auth/login")
      .send({ username: "user", password: "password123" });
    expect(res.statusCode).toBe(403);
  });

  test("Auth middleware allows access with valid admin token", () => {
    const token = jwt.sign(
      { id: "123", role: "admin" },
      process.env.JWT_SECRET || "your_jwt_secret"
    );
    const req = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const res = {};
    const next = jest.fn();

    authMiddleware(req, res, next);
    expect(next).toHaveBeenCalled();
    expect(req.user).toBeDefined();
  });

  test("Auth middleware denies access with invalid token", () => {
    const req = {
      headers: {
        authorization: "Bearer invalidtoken",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    authMiddleware(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      message: "Invalid or expired token",
    });
    expect(next).not.toHaveBeenCalled();
  });

  test("Auth middleware denies access with missing token", () => {
    const req = {
      headers: {},
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    authMiddleware(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      message: "Authorization header missing or malformed",
    });
    expect(next).not.toHaveBeenCalled();
  });

  test("Auth middleware denies access if role is not admin", () => {
    const token = jwt.sign(
      { id: "123", role: "user" },
      process.env.JWT_SECRET || "your_jwt_secret"
    );
    const req = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    authMiddleware(req, res, next);
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ message: "Access denied" });
    expect(next).not.toHaveBeenCalled();
  });
});
