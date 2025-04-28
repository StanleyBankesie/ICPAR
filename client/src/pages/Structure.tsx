import React from 'react';
import PageBanner from '../components/common/PageBanner';
import SectionTitle from '../components/common/SectionTitle';
import { Globe, Users, Map, BookOpen } from 'lucide-react';

const StructurePage: React.FC = () => {
  return (
    <div>
      <PageBanner 
        title="Our Structure" 
        subtitle="Understanding the organization and governance of ICPAR"
        bgImage="https://images.pexels.com/photos/590037/pexels-photo-590037.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="Organizational Structure"
            subtitle="The International Council of the Prophetic Apostolic Roundtable operates with a clear structure designed to facilitate global ministry while honoring regional distinctives."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Governance Model</h3>
              <p className="text-lg text-gray-700 mb-4">
                ICPAR is governed by a combination of apostolic authority and collaborative counsel. While we recognize the need for clear leadership, we also value the wisdom that comes from multiple voices.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our structure reflects both biblical principles of spiritual oversight and practical considerations for global ministry. We balance centralized vision with decentralized implementation.
              </p>
              <p className="text-lg text-gray-700">
                This approach allows us to maintain doctrinal consistency and operational flexibility, ensuring that our prophetic and apostolic mandate can be fulfilled in diverse cultural contexts.
              </p>
            </div>
            <div className="relative">
              <div className="bg-white shadow-lg rounded-lg p-8">
                <div className="max-w-md mx-auto">
                  <div className="flex justify-center mb-8">
                    <div className="w-24 h-24 rounded-full bg-primary-100 flex items-center justify-center">
                      <Globe className="h-12 w-12 text-primary-700" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                          <span className="text-primary-700 font-bold">1</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Global Executive Council</h4>
                        <p className="text-gray-600">Provides overall vision, guidance, and accountability</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                          <span className="text-primary-700 font-bold">2</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Continental Directors</h4>
                        <p className="text-gray-600">Oversee regional implementation and cultural adaptation</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                          <span className="text-primary-700 font-bold">3</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">National Chapters</h4>
                        <p className="text-gray-600">Facilitate local networking and implementation</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                          <span className="text-primary-700 font-bold">4</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Individual Members</h4>
                        <p className="text-gray-600">Carry the vision into local communities and ministries</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle title="Key Functional Areas" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Prophetic Training</h3>
              <p className="text-gray-600 mb-4">
                Developing standardized curriculum and training methodologies for nurturing prophetic gifts with biblical accuracy and spiritual maturity.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">•</span>
                  <span>Foundational Courses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">•</span>
                  <span>Advanced Prophetic Schools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">•</span>
                  <span>Prophetic Ethics</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Initiatives</h3>
              <p className="text-gray-600 mb-4">
                Coordinating worldwide prayer movements, prophetic declarations, and strategic apostolic missions to address critical global issues.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">•</span>
                  <span>Global Prayer Networks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">•</span>
                  <span>Strategic Mission Projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">•</span>
                  <span>International Summits</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Leadership Development</h3>
              <p className="text-gray-600 mb-4">
                Mentoring emerging prophetic and apostolic leaders through intentional relationships, structured programs, and practical ministry opportunities.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">•</span>
                  <span>Mentorship Programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">•</span>
                  <span>Executive Leadership Track</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">•</span>
                  <span>Next Generation Initiative</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Map className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Regional Networks</h3>
              <p className="text-gray-600 mb-4">
                Establishing and strengthening apostolic networks within specific geographical regions to address contextual needs and opportunities.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">•</span>
                  <span>Continental Summits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">•</span>
                  <span>Regional Conferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">•</span>
                  <span>Local Chapter Development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div className="bg-primary-900 rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-6">Our Governing Principles</h2>
                <p className="text-xl mb-8">
                  The council is governed by these key principles that ensure both spiritual integrity and organizational effectiveness.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Biblical Authority</h3>
                      <p className="text-gray-300">
                        Scripture remains our ultimate authority for doctrine, practice, and governance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Servant Leadership</h3>
                      <p className="text-gray-300">
                        All authority within the council is exercised through service rather than dominance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Relational Connection</h3>
                      <p className="text-gray-300">
                        Formal structures are supported by authentic relationships and genuine community.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Accountable Authority</h3>
                      <p className="text-gray-300">
                        Every leader, regardless of position, maintains transparent accountability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div 
                className="bg-cover bg-center" 
                style={{ 
                  backgroundImage: "url('https://images.pexels.com/photos/7708882/pexels-photo-7708882.jpeg?auto=compress&cs=tinysrgb&w=1280')",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StructurePage;