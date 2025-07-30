import React from "react";
import PageBanner from "../components/common/PageBanner";
import SectionTitle from "../components/common/SectionTitle";

const AboutUsPage: React.FC = () => {
  return (
    <div>
      <PageBanner
        title="About Us"
        subtitle="Learn about our mission, vision, and values"
        bgImage="https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-cormorant font-bold text-primary-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                The International Council of the Prophetic Apostolic Roundtable
                (ICPAR) is a global network of prophetic and apostolic leaders
                dedicated to advancing the Kingdom of God through authentic
                revelation, servant leadership, and global unity.INTERNATIONAL
                COUNCIL OF THE PROPHETIC APOSTOLIC ROUNDTABLE, we are a group of
                men and women of God brought together through the vision of our
                president Apostle Prophet Amos Walter Zor (founder of Prayer
                Garden International Ministry-Liberia) to raise up ministers of
                the Gospel that have been trodden down and stopped in ministry
                and to resurrect and restore them to fully function in their
                calling and not to abandon their calling.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our mission is to restore the authentic prophetic and apostolic
                foundations in the global church, providing sound doctrine,
                spiritual insight, and godly leadership for the body of Christ
                worldwide.
              </p>
              <p className="text-lg text-gray-700">
                We are committed to raising up the next generation of prophetic
                and apostolic voices, equipping them with wisdom, integrity, and
                discernment to serve the church and impact nations.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7708823/pexels-photo-7708823.jpeg?auto=compress&cs=tinysrgb&w=1280"
                alt="Leaders in prayer"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-800 text-white p-6 rounded-lg shadow-lg">
                <p className="font-cormorant italic text-xl">
                  "Unity in divine purpose, diversity in divine expression."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          To meet the evolving demands and aspirations of the times, the
          council's name was changed to the International Council of the
          Prophetic Apostolic Roundtable (ICPAR) on 6th October 2023 by the
          General Council, during its annual delegates meeting held at East
          Legon, Accra, Ghana. The new name, ICPAR, was subsequently
          re-registered with the Registrar General of Ghana.
          <SectionTitle title="Our History" />
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <p>
                A four-member church fellowship first considered the founding of
                a council to embrace evangelicals across all nations. The
                founding churches were: Prayer Garden International Ministry,
                Ornament of Grace Church, House of Bread Bethlehem Fellowship
                Center, and Glory gate of Zion Ministry.
              </p>

              <p>
                As a result, APRIC (Apostolic Prophetic Roundtable International
                Council) was founded on 3rd March 2022 at a meeting held at the
                premises of Ornament of Grace Church, Abelemkpe, Accra. The
                following ministers were present: 1. Apostle Prophet Amos W. Zor
                – Prayer Garden International Ministry, Liberia 2. Rev. Dr.
                Prince I. A. Larbitey – Ornament of Grace Church, Ghana 3. Rev.
                (WO1 rtd) Dzorvakpor Joseph – House of Bread Bethlehem
                Fellowship Center, Ghana 4. Apostle Dr. Helena Sarpai-Nunoo –
                Glory gate of Zion Ministry, Ghana
              </p>

              <p>
                APRIC was established to unite believers in the Christian faith
                across Africa and the world. It was Apostle Prophet Amos Walter
                Zor, founder of Prayer Garden International Ministry (Liberia),
                who moved the historic motion for the formation of the Apostolic
                Prophetic Roundtable International Council (APRIC).
              </p>

              <p>
                The motion was seconded by Rev. Dr. Prince I. A. Larbitey of
                Ornament of Grace Church, and was unanimously adopted. APRIC
                was, therefore, officially inaugurated on Thursday, 6th November
                2022, at the premises of Ornament of Grace Church and duly
                registered with the Registrar General in Ghana.
              </p>
              <p>
                To meet the evolving demands and aspirations of the times, the
                council's name was changed to the International Council of the
                Prophetic Apostolic Roundtable (ICPAR) on 6th October 2023 by
                the General Council, during its annual delegates meeting held at
                East Legon, Accra, Ghana. The new name, ICPAR, was subsequently
                re-registered with the Registrar General of Ghana.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle title="Our Core Values" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-primary-700">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Authentic Revelation
              </h3>
              <p className="text-gray-600">
                We value genuine prophetic insight that aligns with scripture
                and carries the weight of divine authority rather than human
                manipulation.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-primary-700">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Spiritual Integrity
              </h3>
              <p className="text-gray-600">
                We maintain the highest standards of personal character,
                ministerial accountability, and ethical conduct in all our
                affairs.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-primary-700">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Servant Leadership</h3>
              <p className="text-gray-600">
                We believe that true apostolic authority is demonstrated through
                sacrificial service rather than domination or control.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-primary-700">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Unity</h3>
              <p className="text-gray-600">
                We champion unity within diversity, recognizing that the global
                body of Christ expresses itself through various cultures,
                traditions, and denominations.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-primary-700">5</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Generational Transfer
              </h3>
              <p className="text-gray-600">
                We are committed to mentoring and empowering the next generation
                of prophetic and apostolic leaders through intentional
                relationships and structured training.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-primary-700">6</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Kingdom Impact</h3>
              <p className="text-gray-600">
                We measure success not by organizational size but by
                transformational influence in communities, cities, and nations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle
            title="ICPAR Chapters"
            subtitle="We are united in faith across nations, bringing light and hope to communities around the world."
          />

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
                <span className="text-2xl text-primary-700 text-center">
                  Ghana/Nigeria Chapter
                </span>
              </div>
            </div>
            <div>
              <div className=" bg-primary-100 rounded-full flex items-center justify-center mb-4 shadow-md py-8 px-2 mx-10">
                <span className="text-2xl text-primary-700 text-center">
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

export default AboutUsPage;
