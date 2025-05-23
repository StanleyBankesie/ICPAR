import SectionTitle from "../common/SectionTitle";
const Chapters = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <SectionTitle title="ICPAR CHAPTERS" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 mt-18">
            <div>
              <div className="  bg-primary-100 rounded-full flex items-center justify-center mb-8 shadow-md py-8 px-2 mx-10">
                <span className="text-2xl text-primary-700">
                  Liberia Chapter
                </span>
              </div>
            </div>
            <div>
              <div className=" bg-primary-100 rounded-full flex items-center justify-center mb-8 shadow-md py-8 px-2 mx-10">
                <span className="text-2xl text-primary-700">
                  Ghana/Nigeria Chapter
                </span>
              </div>
            </div>
            <div>
              <div className=" bg-primary-100 rounded-full flex items-center justify-center mb-4 shadow-md py-8 px-2 mx-10">
                <span className="text-2xl text-primary-700">
                  Sierra Leone Chapter
                </span>
              </div>
            </div>
            <div>
              <div className=" bg-primary-100 rounded-full flex items-center justify-center mb-4 shadow-md py-8 px-2 mx-5">
                <span className="text-2xl text-primary-700">
                  USA/UK Chapter
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chapters;
