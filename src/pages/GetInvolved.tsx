import React, { useState } from 'react';
import { 
  Heart, 
  Users, 
  Handshake, 
  ArrowRight, 
  CreditCard, 
  Building2, 
  Globe,
  Award,
  Calendar,
  Mail,
  Phone
} from 'lucide-react';

const GetInvolved = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donationType, setDonationType] = useState('monthly');

  const donationOptions = [
    { amount: 500, impact: 'Feeds 10 school children during conservation camp' },
    { amount: 1000, impact: 'Supports one day of community awareness program' },
    { amount: 2500, impact: 'Funds educational materials for one school' },
    { amount: 5000, impact: 'Sponsors Amur Falcon monitoring for one week' },
  ];

  // VOLUNTEER OPPORTUNITIES DATA - COMMENTED OUT FOR LATER USE
  /*
  const volunteerOpportunities = [
    {
      title: 'Field Research Assistant',
      commitment: '2-3 months',
      location: 'Various sites in Nagaland',
      description: 'Assist with wildlife monitoring, data collection, and conservation research activities.',
      requirements: ['Environmental science background preferred', 'Physical fitness for field work', 'Commitment to 2-3 months'],
      icon: Award
    },
    {
      title: 'Education Program Coordinator',
      commitment: '6 months - 1 year',
      location: 'Wokha and surrounding areas',
      description: 'Help develop and implement conservation education programs in schools and communities.',
      requirements: ['Teaching or education experience', 'Local language skills helpful', 'Passion for environmental education'],
      icon: Users
    },
    {
      title: 'Community Outreach Volunteer',
      commitment: 'Flexible',
      location: 'Village communities',
      description: 'Support community engagement initiatives and help build relationships with local stakeholders.',
      requirements: ['Strong communication skills', 'Cultural sensitivity', 'Willingness to travel to villages'],
      icon: Heart
    },
    {
      title: 'Digital Content Creator',
      commitment: 'Part-time',
      location: 'Remote/On-site',
      description: 'Create engaging content for our digital platforms including photography, videography, and social media.',
      requirements: ['Photography/videography skills', 'Social media experience', 'Creative storytelling ability'],
      icon: Globe
    }
  ];
  */

  const partnershipTiers = [
    {
      title: 'Conservation Champion',
      amount: '₹1,00,000+',
      benefits: [
        'Annual impact report with detailed metrics',
        'Site visits and field trip opportunities',
        'Recognition on website and annual report',
        'Quarterly progress updates',
        'Involvement in program planning'
      ],
      color: 'emerald'
    },
    {
      title: 'Wildlife Protector',
      amount: '₹50,000+',
      benefits: [
        'Bi-annual impact reports',
        'Recognition on website',
        'Quarterly updates via email',
        'Invitation to annual events'
      ],
      color: 'blue'
    },
    {
      title: 'Community Supporter',
      amount: '₹25,000+',
      benefits: [
        'Annual impact summary',
        'Website acknowledgment',
        'Regular email updates',
        'Event invitations'
      ],
      color: 'green'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl md:text-2xl text-emerald-200 max-w-3xl mx-auto">
            Join us in protecting Nagaland's incredible biodiversity and empowering local communities
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ways to Make a Difference</h2>
            <p className="text-xl text-gray-600">Choose how you'd like to support our conservation mission</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Donate</h3>
              <p className="text-gray-700 mb-6">
                Support our conservation programs with financial contributions that directly fund wildlife protection and community development.
              </p>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                Start Donating
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer</h3>
              <p className="text-gray-700 mb-6">
                Join our team of dedicated volunteers and contribute your skills, time, and passion to conservation efforts on the ground.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                Join Our Team
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Partner</h3>
              <p className="text-gray-700 mb-6">
                Form strategic partnerships with us to amplify conservation impact through collaborative programs and shared resources.
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                Explore Partnership
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Make a Donation</h2>
            <p className="text-xl text-gray-600">Every contribution directly supports wildlife conservation and community development</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Donation Type Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
              <button
                onClick={() => setDonationType('monthly')}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  donationType === 'monthly'
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setDonationType('one-time')}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  donationType === 'one-time'
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                One-time
              </button>
            </div>

            {/* Preset Amounts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {donationOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setDonationAmount(option.amount.toString())}
                  className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                    donationAmount === option.amount.toString()
                      ? 'border-emerald-600 bg-emerald-50'
                      : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-50'
                  }`}
                >
                  <div className="font-bold text-xl text-gray-900 mb-1">₹{option.amount}</div>
                  <div className="text-sm text-gray-600">{option.impact}</div>
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Other Amount (₹)
              </label>
              <input
                type="number"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                placeholder="Enter custom amount"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-lg"
              />
            </div>

            {/* Payment Methods */}
            <div className="space-y-4">
              <div className="text-lg font-semibold text-gray-900 mb-4">Payment Options</div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-6 h-6 text-emerald-600" />
                    <div>
                      <div className="font-semibold text-gray-900">UPI Payment</div>
                      <div className="text-sm text-gray-600">Google Pay, PhonePe, Paytm</div>
                    </div>
                  </div>
                </div>
                
                <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-emerald-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Bank Transfer</div>
                      <div className="text-sm text-gray-600">Direct bank transfer</div>
                    </div>
                  </div>
                </div>
                
                <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Globe className="w-6 h-6 text-emerald-600" />
                    <div>
                      <div className="font-semibold text-gray-900">International</div>
                      <div className="text-sm text-gray-600">Coming Soon</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Donate ₹{donationAmount || '0'} {donationType === 'monthly' ? 'Monthly' : 'Now'}
            </button>
          </div>
        </div>
      </section>

      {/* Volunteer Section - COMMENTED OUT FOR LATER USE */}
      {/*
      <section id="volunteer" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h2>
            <p className="text-xl text-gray-600">Join our team and contribute your skills to conservation action</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-500">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{opportunity.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {opportunity.commitment}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {opportunity.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{opportunity.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-1">
                      {opportunity.requirements.map((req, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                    Apply Now
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      */}

      {/* Partnership Section */}
      <section id="partnership" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-gray-600">Collaborate with us for greater conservation impact</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {partnershipTiers.map((tier, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-500`}>
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${
                  tier.color === 'emerald' ? 'from-emerald-400 to-emerald-600' :
                  tier.color === 'blue' ? 'from-blue-400 to-blue-600' :
                  'from-green-400 to-green-600'
                }`}></div>
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.title}</h3>
                  <div className="text-3xl font-bold text-emerald-600">{tier.amount}</div>
                  <div className="text-gray-600">Annual Partnership</div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                  Become a Partner
                </button>
              </div>
            ))}
          </div>

          {/* Custom Partnership */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <Handshake className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Custom Partnership</h3>
              <p className="text-lg text-gray-700 mb-8">
                Looking for a tailored partnership opportunity? We work with organizations of all sizes 
                to create custom collaboration agreements that align with your CSR goals and our conservation mission.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-3">Partnership Types:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Program-specific funding</li>
                    <li>• Research collaborations</li>
                    <li>• Employee engagement programs</li>
                    <li>• Technology partnerships</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits Include:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• CSR impact documentation</li>
                    <li>• Brand visibility opportunities</li>
                    <li>• Employee engagement activities</li>
                    <li>• Sustainability reporting support</li>
                  </ul>
                </div>
              </div>
              
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
                Discuss Partnership
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-emerald-200">
              Contact us to discuss how you can support our conservation mission
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Mail className="w-8 h-8 mx-auto mb-4 text-emerald-300" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-emerald-200 mb-4">Get in touch for any questions or partnership discussions</p>
              <a 
                href="mailto:info@naturalnagas.org"
                className="text-emerald-300 hover:text-white font-semibold transition-colors duration-300"
              >
                info@naturalnagas.org
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Phone className="w-8 h-8 mx-auto mb-4 text-emerald-300" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-emerald-200 mb-4">Speak directly with our team about getting involved</p>
              <a 
                href="tel:+919876543210"
                className="text-emerald-300 hover:text-white font-semibold transition-colors duration-300"
              >
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;