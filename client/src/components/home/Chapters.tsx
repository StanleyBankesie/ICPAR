import SectionTitle from "../common/SectionTitle";
const Chapters = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <SectionTitle title="ICPAR CHAPTERS" />
          <h3>
            We are united in faith across nations, bringing light and hope to
            communities around the world.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 mt-18">
            <div>
              <div className="  bg-primary-100 rounded-full flex items-center justify-center mb-8 shadow-md py-8 px-2 mx-10">
                <span className="text-2xl text-primary-700">Liberia</span>
              </div>
            </div>
            <div>
              <div className=" bg-primary-100 rounded-full flex items-center justify-center mb-8 shadow-md py-8 px-2 mx-10">
                <span className="text-2xl text-primary-700">Ghana/Nigeria</span>
              </div>
            </div>
            <div>
              <div className=" bg-primary-100 rounded-full flex items-center justify-center mb-4 shadow-md py-8 px-2 mx-10">
                <span className="text-2xl text-primary-700">Sierra Leone</span>
              </div>
            </div>
            <div>
              <div className=" bg-primary-100 rounded-full flex items-center justify-center mb-4 shadow-md py-8 px-2 mx-5">
                <span className="text-2xl text-primary-700">USA/UK</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chapters;
