import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  GraduationCap, 
  Calendar, 
  Bird, 
  TreePine,
  Award,
  TrendingUp,
  Heart,
  Download,
  Star,
  MapPin,
  Target
} from 'lucide-react';

const Impact = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const overviewStats = [
    { number: '13+', label: 'Years of Conservation', icon: Calendar, color: 'emerald' },
    { number: '40+', label: 'Villages Engaged', icon: Users, color: 'blue' },
    { number: '50+', label: 'Schools Educated', icon: GraduationCap, color: 'purple' },
    { number: '25+', label: 'Species Protected', icon: Bird, color: 'green' },
    { number: '10,000+', label: 'Amur Falcons Saved', icon: Bird, color: 'amber' },
    { number: '1,500+', label: 'Trees Planted', icon: TreePine, color: 'emerald' },
    { number: '2,000+', label: 'Students Reached', icon: GraduationCap, color: 'blue' },
    { number: '85%', label: 'Conflict Reduction', icon: TrendingUp, color: 'red' }
  ];

  const successStories = [
    {
      title: 'From Hunters to Protectors: The Pangti Village Transformation',
      description: 'Once a major hunting site for Amur Falcons, Pangti village has become their biggest protector. The community now earns income through eco-tourism while ensuring the safety of thousands of migrating birds.',
      image: 'https://images.pexels.com/photos/3646176/pexels-photo-3646176.jpeg',
      impact: '5,000+ Falcons Protected Annually',
      location: 'Pangti Village, Wokha'
    },
    {
      title: 'New Riphyim: A Model Green Village',
      description: 'Through the Green Dream Project, New Riphyim has transformed into a model of sustainable development, demonstrating how conservation and community development can go hand in hand.',
      image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg',
      impact: '50 Families Benefited',
      location: 'New Riphyim Village'
    },
    {
      title: 'Youth Conservation Champions',
      description: 'Students from our education programs have become conservation ambassadors in their communities, leading local initiatives and inspiring environmental action among peers.',
      image: 'https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg',
      impact: '200+ Youth Ambassadors',
      location: 'Across Nagaland'
    }
  ];

  const financialData = [
    { year: '2024', programs: 75, education: 15, administration: 10 },
    { year: '2023', programs: 78, education: 14, administration: 8 },
    { year: '2022', programs: 72, education: 18, administration: 10 }
  ];

  const donors = [
    { name: 'Wildlife Trust of India', type: 'Institutional Partner', contribution: 'Major' },
    { name: 'JICA', type: 'International Agency', contribution: 'Major' },
    { name: 'World Bank ELEMENT', type: 'Development Bank', contribution: 'Major' },
    { name: 'Government of Nagaland', type: 'Government Partner', contribution: 'Major' },
    { name: 'Individual Donors', type: 'Community Support', contribution: '500+ Contributors' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-100 text-emerald-600',
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600',
      green: 'bg-green-100 text-green-600',
      amber: 'bg-amber-100 text-amber-600',
      red: 'bg-red-100 text-red-600'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Impact</h1>
          <p className="text-xl md:text-2xl text-emerald-200 max-w-3xl mx-auto">
            Transparent reporting of our conservation achievements and community impact
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { id: 'overview', label: 'Overview', icon: Target },
              { id: 'stories', label: 'Success Stories', icon: Star },
              { id: 'financials', label: 'Financials', icon: TrendingUp },
              { id: 'supporters', label: 'Supporters', icon: Heart }
            ].map(tab => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Conservation Impact Dashboard</h2>
              <p className="text-xl text-gray-600">13+ years of measurable conservation success</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {overviewStats.map((stat, index) => {
                const IconComponent = stat.icon;
                const colorClasses = getColorClasses(stat.color);
                
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-500">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${colorClasses} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Impact Areas */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-emerald-50 rounded-xl p-8">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-6">
                  <Bird className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Wildlife Protection</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 25+ species under protection</li>
                  <li>• 10,000+ Amur Falcons saved annually</li>
                  <li>• 85% reduction in hunting activities</li>
                  <li>• 50+ rescued Black Soft-shell Turtles</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-8">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Engagement</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 40+ villages actively engaged</li>
                  <li>• 500+ families directly benefited</li>
                  <li>• 200+ community volunteers</li>
                  <li>• 15 community forest committees</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-8">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Education Impact</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 50+ schools partnership</li>
                  <li>• 2,000+ students educated</li>
                  <li>• 100+ teachers trained</li>
                  <li>• 5 documentaries produced</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'stories' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600">Real impact, real communities, real change</p>
            </div>
            
            <div className="space-y-16">
              {successStories.map((story, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                  <div className="lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src={story.image}
                        alt={story.title}
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-2 rounded-lg text-sm font-medium">
                        {story.impact}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2">
                    <div className="flex items-center gap-2 text-emerald-600 mb-4">
                      <MapPin className="w-5 h-5" />
                      <span className="font-medium">{story.location}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{story.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{story.description}</p>
                    <div className="bg-emerald-50 rounded-lg p-4">
                      <div className="text-emerald-600 font-semibold text-sm mb-1">KEY IMPACT</div>
                      <div className="text-emerald-800 font-bold">{story.impact}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'financials' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Financial Transparency</h2>
              <p className="text-xl text-gray-600">How your contributions create conservation impact</p>
            </div>
            
            {/* Fund Allocation */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Fund Allocation (2024)</h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl font-bold text-emerald-600">75%</div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Conservation Programs</h4>
                  <p className="text-gray-600">Direct funding for wildlife protection and habitat conservation</p>
                </div>
                
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl font-bold text-blue-600">15%</div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Education & Outreach</h4>
                  <p className="text-gray-600">School programs, community awareness, and capacity building</p>
                </div>
                
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl font-bold text-gray-600">10%</div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Administration</h4>
                  <p className="text-gray-600">Operational costs, monitoring, and organizational development</p>
                </div>
              </div>
            </div>

            {/* Annual Reports */}
            <div className="grid md:grid-cols-3 gap-8">
              {financialData.map((year, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-emerald-600">{year.year}</div>
                    <div className="text-gray-600">Financial Report</div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Programs</span>
                      <span className="font-bold text-emerald-600">{year.programs}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Education</span>
                      <span className="font-bold text-blue-600">{year.education}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Administration</span>
                      <span className="font-bold text-gray-600">{year.administration}%</span>
                    </div>
                  </div>
                  
                  <button className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                    <Download className="w-4 h-4" />
                    Download Report
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'supporters' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Supporters</h2>
              <p className="text-xl text-gray-600">Conservation partners who make our work possible</p>
            </div>
            
            {/* Major Supporters */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Major Partners & Donors</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {donors.map((donor, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="w-8 h-8 text-emerald-600" />
                      <div>
                        <div className="font-bold text-gray-900">{donor.name}</div>
                        <div className="text-emerald-600 text-sm">{donor.type}</div>
                      </div>
                    </div>
                    <div className="text-gray-700 font-medium">{donor.contribution}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="bg-emerald-50 rounded-2xl p-8 text-center">
              <Heart className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You</h3>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                We extend our heartfelt gratitude to all our supporters, partners, volunteers, 
                and community members who make our conservation work possible. Every contribution, 
                no matter the size, creates meaningful impact for wildlife and communities.
              </p>
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div>
                  <div className="text-2xl font-bold text-emerald-600">500+</div>
                  <div className="text-gray-600">Individual Donors</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">50+</div>
                  <div className="text-gray-600">Corporate Partners</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">200+</div>
                  <div className="text-gray-600">Volunteers</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Create Impact with Us</h2>
          <p className="text-xl text-emerald-200 mb-8">
            Join our mission and help us achieve even greater conservation impact in the coming years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-involved"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Support Our Mission
            </Link>
            <Link
              to="/contact"
              className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Partner with Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;