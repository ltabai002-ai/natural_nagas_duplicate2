import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const faqCategories = [
    {
      title: 'General Questions',
      questions: [
        {
          question: 'What is Natural Nagas Conservation Initiative?',
          answer: 'Natural Nagas is a community-led conservation organization founded in 2012 in Nagaland, India. We focus on protecting wildlife, particularly the Amur Falcon, while empowering local communities through sustainable development and environmental education.'
        },
        {
          question: 'Where do you operate?',
          answer: 'We primarily operate in Nagaland, India, with programs across multiple districts. Our main activities are centered around Wokha district, but we engage with communities throughout the state and collaborate on regional conservation initiatives.'
        },
        {
          question: 'How can I stay updated with your work?',
          answer: 'You can stay updated by subscribing to our newsletter, following us on social media, visiting our website regularly, or attending our public events. We also publish annual reports and regular blog updates about our conservation work.'
        }
      ]
    },
    {
      title: 'Donations & Support',
      questions: [
        {
          question: 'How can I donate to Natural Nagas?',
          answer: 'You can donate through our website using UPI payments, bank transfers, or online payment methods. We accept both one-time and recurring monthly donations. Visit our "Get Involved" page for detailed payment options.'
        },
        {
          question: 'Is my donation tax-deductible?',
          answer: 'Yes, donations to Natural Nagas are eligible for tax deduction under Section 80G of the Income Tax Act. We will provide you with the necessary receipts and documentation for tax purposes.'
        },
        {
          question: 'How do you use donations?',
          answer: 'We allocate funds transparently: 75% goes directly to conservation programs, 15% to education and outreach, and 10% to administration. We publish detailed financial reports annually showing exactly how donations are used.'
        },
        {
          question: 'Can I sponsor specific programs?',
          answer: 'Yes! You can sponsor specific programs like the Amur Falcon Conservation, Green Dream Project, or our education initiatives. Contact us to discuss targeted sponsorship options that align with your interests.'
        }
      ]
    },
    {
      title: 'Volunteering',
      questions: [
        {
          question: 'What volunteer opportunities are available?',
          answer: 'We offer various volunteering opportunities including field research assistance, education program coordination, community outreach, and digital content creation. Opportunities range from short-term assignments to long-term commitments.'
        },
        {
          question: 'Do I need specific qualifications to volunteer?',
          answer: 'Requirements vary by role. Some positions benefit from environmental science backgrounds or teaching experience, while others simply require passion for conservation. We provide training and orientation for all volunteers.'
        },
        {
          question: 'Do you provide accommodation for volunteers?',
          answer: 'For long-term volunteers and researchers, we can help arrange accommodation with local families or partner organizations. This provides a great opportunity to experience local culture while contributing to conservation.'
        },
        {
          question: 'Can international volunteers apply?',
          answer: 'Yes, we welcome international volunteers! However, you\'ll need appropriate visas and permits. We can provide invitation letters and guidance on the visa process for serious applicants with relevant skills.'
        }
      ]
    },
    {
      title: 'Programs & Impact',
      questions: [
        {
          question: 'What is the Amur Falcon Conservation program?',
          answer: 'Our flagship program protects Amur Falcons during their migration stopover in Nagaland. We work with communities to eliminate hunting, create alternative livelihoods through eco-tourism, and monitor falcon populations during their stay.'
        },
        {
          question: 'How successful has your conservation work been?',
          answer: 'Over 13 years, we\'ve achieved significant impact: protecting 10,000+ Amur Falcons annually, reducing hunting by 85%, engaging 40+ villages, educating 2,000+ students, and establishing sustainable conservation models that other regions can replicate.'
        },
        {
          question: 'Do you work only with wildlife conservation?',
          answer: 'While wildlife conservation is central to our mission, we take a holistic approach that includes community development, education, sustainable agriculture, forest restoration, and building local capacity for long-term environmental stewardship.'
        },
        {
          question: 'How do you measure your impact?',
          answer: 'We use rigorous monitoring and evaluation methods including wildlife population surveys, community feedback assessments, education program evaluations, and third-party impact studies. All results are published in our annual transparency reports.'
        }
      ]
    },
    {
      title: 'Partnerships',
      questions: [
        {
          question: 'How can organizations partner with you?',
          answer: 'We welcome partnerships with corporations, NGOs, government agencies, and academic institutions. Partnership opportunities include program funding, research collaboration, employee engagement programs, and joint conservation initiatives.'
        },
        {
          question: 'What are the benefits of partnering with Natural Nagas?',
          answer: 'Partners gain meaningful CSR impact, brand association with successful conservation work, employee engagement opportunities, detailed impact reporting, and the satisfaction of contributing to genuine environmental and social change.'
        },
        {
          question: 'Do you collaborate with government agencies?',
          answer: 'Yes, we work closely with the Government of Nagaland, Forest Department, and various state agencies. These partnerships help scale our impact and integrate conservation into official policies and programs.'
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap((category, categoryIndex) =>
    category.questions.map((q, questionIndex) => ({
      ...q,
      id: `${categoryIndex}-${questionIndex}`,
      category: category.title
    }))
  );

  const filteredQuestions = searchTerm
    ? allQuestions.filter(q =>
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allQuestions;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl text-emerald-200 max-w-3xl mx-auto">
            Find answers to common questions about our conservation work and how to get involved
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!searchTerm ? (
            // Category-based display
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">{category.title}</h2>
                  <div className="space-y-4">
                    {category.questions.map((qa, questionIndex) => {
                      const questionId = `${categoryIndex}-${questionIndex}`;
                      const isActive = activeQuestion === parseInt(questionId.replace('-', ''));
                      
                      return (
                        <div key={questionIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                          <button
                            onClick={() => setActiveQuestion(isActive ? null : parseInt(questionId.replace('-', '')))}
                            className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                          >
                            <span className="font-semibold text-gray-900 pr-4">{qa.question}</span>
                            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${isActive ? 'rotate-180' : ''}`} />
                          </button>
                          
                          {isActive && (
                            <div className="px-6 pb-6">
                              <div className="pt-4 border-t border-gray-200">
                                <p className="text-gray-700 leading-relaxed">{qa.answer}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Search results display
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Search Results ({filteredQuestions.length})
                </h2>
                <p className="text-gray-600">Results for "{searchTerm}"</p>
              </div>
              
              {filteredQuestions.length > 0 ? (
                <div className="space-y-4">
                  {filteredQuestions.map((qa, index) => {
                    const isActive = activeQuestion === index;
                    
                    return (
                      <div key={qa.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                          onClick={() => setActiveQuestion(isActive ? null : index)}
                          className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                        >
                          <div className="pr-4">
                            <span className="font-semibold text-gray-900 block">{qa.question}</span>
                            <span className="text-sm text-emerald-600 mt-1">{qa.category}</span>
                          </div>
                          <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${isActive ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {isActive && (
                          <div className="px-6 pb-6">
                            <div className="pt-4 border-t border-gray-200">
                              <p className="text-gray-700 leading-relaxed">{qa.answer}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12">
                  <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600">Try adjusting your search terms or browse our categories above.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="w-16 h-16 mx-auto mb-6 text-emerald-300" />
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-emerald-200 mb-8">
            Can't find what you're looking for? Our team is here to help with any specific questions about our programs or how to get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Contact Our Team
            </Link>
            <a
              href="mailto:info@naturalnagas.org"
              className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;