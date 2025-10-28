import React from 'react';
import { Link } from 'react-router-dom';
import { Download, BookOpen, Calendar, Eye, ArrowRight, FileText, Video, Newspaper, Clock, Youtube } from 'lucide-react';

const Publications = () => {
  const annualReports = [
    {
      year: '2024',
      title: 'Annual Report 2024: Conservation Milestones',
      description: 'Comprehensive overview of our conservation achievements, community impact, and financial transparency for 2024.',
      pages: 48,
      downloadUrl: '#',
      featured: true
    },
    {
      year: '2023',
      title: 'Annual Report 2023: Community-Led Conservation',
      description: 'Detailed documentation of our programs and their impact on local communities and wildlife.',
      pages: 44,
      downloadUrl: '#',
      featured: false
    },
    {
      year: '2022',
      title: 'Annual Report 2022: Growing Impact',
      description: 'Celebrating our tenth year with expanded programs and increased conservation impact.',
      pages: 40,
      downloadUrl: '#',
      featured: false
    }
  ];

  const mediaCoverage = [
    {
      title: 'The Amur Falcon Success Story: How Community Action Saved a Species',
      publication: 'Mongabay India',
      date: '2024-12-15',
      type: 'Feature Article',
      url: '#',
      image: 'https://images.pexels.com/photos/3646176/pexels-photo-3646176.jpeg'
    },
    {
      title: 'Nagaland\'s Green Revolution: Community-Led Conservation',
      publication: 'Outlook Traveller',
      date: '2024-11-20',
      type: 'Travel Feature',
      url: '#',
      image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg'
    },
    {
      title: 'Indigenous Wisdom Meets Modern Conservation in Northeast India',
      publication: 'The Hindu',
      date: '2024-10-08',
      type: 'News Article',
      url: '#',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg'
    },
    {
      title: 'Protecting the Longest Migration: Amur Falcons in Nagaland',
      publication: 'Wildlife Today',
      date: '2024-09-12',
      type: 'Magazine Feature',
      url: '#',
      image: 'https://images.pexels.com/photos/3646176/pexels-photo-3646176.jpeg'
    }
  ];

  const blogPosts = [
    {
      title: 'The Return of the Amur Falcons: A Conservation Success Story',
      excerpt: 'After years of dedicated conservation efforts, we celebrate the increasing numbers of Amur Falcons choosing Nagaland as their safe haven during migration...',
      date: '2025-01-15',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/3646176/pexels-photo-3646176.jpeg',
      category: 'Wildlife Conservation'
    },
    {
      title: 'Community-Led Conservation: Lessons from New Riphyim',
      excerpt: 'How local communities are leading environmental restoration efforts in rural Nagaland, creating models for sustainable development that other villages can follow...',
      date: '2025-01-10',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg',
      category: 'Community Impact'
    },
    {
      title: 'Education for Conservation: Reaching 50+ Schools',
      excerpt: 'Our education programs continue to inspire young minds about wildlife conservation, creating the next generation of environmental stewards in Nagaland...',
      date: '2025-01-05',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg',
      category: 'Education'
    },
    {
      title: 'Human-Elephant Coexistence: Finding Solutions Together',
      excerpt: 'Innovative approaches to reducing human-elephant conflict through community engagement and traditional ecological knowledge...',
      date: '2024-12-28',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg',
      category: 'Wildlife Conservation'
    }
  ];

  const documentaries = [
    {
      title: 'Radio Featuring Steve Odyuo: AKASHVANI MOKOKCHUNG',
      duration: 'Radio Interview',
      year: '2024',
      description: 'Radio interview with Steve Odyuo discussing Natural Nagas conservation efforts and community engagement.',
      thumbnail: 'https://drive.google.com/thumbnail?id=14qnbF1NrNoTRwbh9rQ9fPnGqwbljVSd7&sz=w1000',
      url: 'https://youtu.be/g707YTMXa3Y?si=vQqZQKBgYkLCe4xf',
      type: 'youtube'
    },
    {
      title: 'Podcast Featuring Steve Odyuo',
      duration: 'Podcast',
      year: '2018',
      description: 'Rediscovery Podcast featuring Steve Odyuo discussing conservation initiatives and community-based environmental work in Nagaland.',
      thumbnail: 'https://drive.google.com/thumbnail?id=1Qn-83ssNI0YtwLJ3r0YynTg0f2mPUY4e&sz=w1000',
      url: 'https://rediscoveryproject.com/2018/03/22/rediscovery-podcast-steve-odoyo-nagaland/?fbclid=IwY2xjawMLq-RleHRuA2FlbQIxMQABHpdEAYOOjLRmjSknUEwZCpwBpHJKHor6RoNyflEWkMrbmQzPwIsnK1VD5yuc_aem_Zdm0ApXbloPSUJYRItfmhw',
      type: 'external'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Publications & Media</h1>
          <p className="text-xl md:text-2xl text-emerald-200 max-w-3xl mx-auto">
            Reports, articles, and media coverage documenting our conservation journey
          </p>
        </div>
      </section>

      {/* Mistnet Magazine */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Mistnet Magazine</h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">Our conservation magazine featuring stories, research, and community insights</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-0">
                {/* Magazine Cover/Visual */}
                <div className="relative h-64 sm:h-80 lg:h-auto overflow-hidden order-1 lg:order-none">
                  <img 
                    src="https://drive.google.com/thumbnail?id=1PwRPqlLq1zcML0r4Cx3dQ9OhN-5fcQJH&sz=w1000"
                    alt="Mistnet Magazine Cover"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 sm:mb-4">
                      <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">Mistnet</h3>
                    <p className="text-emerald-200 text-sm sm:text-base">Conservation Magazine</p>
                    <div className="mt-2 sm:mt-3 text-white/80">
                      <div className="flex items-center gap-2 text-xs sm:text-sm">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Latest Edition Available</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-none">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      <Newspaper className="w-4 h-4" />
                      Digital Magazine
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                      Explore Nature Through Stories
                    </h4>
                    <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                      Dive into our digital magazine featuring conservation success stories, wildlife research, 
                      community initiatives, and insights from the field. Experience interactive content with 
                      our flipbook format.
                    </p>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                      <span>Interactive flipbook experience</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                      <span>Conservation stories & research</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                      <span>Community spotlight features</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <a
                      href="https://www.flipbookpdf.net/web/site/87e9d1c705310edbc786a332bf0293ab44b1d767202509.pdf.html#page/1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 sm:gap-3 w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                    >
                      <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-6 transition-transform duration-300 flex-shrink-0" />
                      <span className="truncate">Read Mistnet Magazine</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                    </a>
                    
                    <div className="text-center">
                      <p className="text-xs sm:text-sm text-gray-600 px-2">
                        Opens in interactive flipbook format • Best viewed on desktop
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Media Coverage</h2>
            <p className="text-xl text-gray-600">Our conservation work featured in leading publications</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mediaCoverage.map((article, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium bg-emerald-600 px-3 py-1 rounded-full">
                      {article.publication}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">Published by {article.publication}</p>
                  <a
                    href={article.url}
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">Conservation insights and stories from the field</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium bg-emerald-600 px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Documentaries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Documentaries</h2>
            <p className="text-xl text-gray-600">Visual stories of our conservation journey</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {documentaries.map((doc, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={doc.thumbnail}
                    alt={doc.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium bg-emerald-600 px-3 py-1 rounded-full">
                      {doc.year}
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 text-white">
                    <div className="text-sm font-medium bg-black/70 px-3 py-1 rounded-full">
                      {doc.duration}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {doc.url ? (
                      <a 
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-emerald-600 rounded-full p-4 shadow-lg transform scale-110 hover:bg-emerald-50 transition-colors duration-300"
                      >
                        {doc.title === 'Radio Featuring Steve Odyuo: AKASHVANI MOKOKCHUNG' ? (
                          <Youtube className="w-8 h-8" />
                        ) : (
                          <Video className="w-8 h-8" />
                        )}
                      </a>
                    ) : (
                      <button className="bg-white text-emerald-600 rounded-full p-4 shadow-lg transform scale-110">
                        <Video className="w-8 h-8" />
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">{doc.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{doc.description}</p>
                  
                  {doc.url ? (
                    <a 
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
                    >
                      {doc.type === 'youtube' ? 'Watch Video' : doc.type === 'external' ? 'Listen Podcast' : 'Watch Documentary'} <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <button className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300">
                      Watch Documentary <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Annual Reports</h2>
            <p className="text-xl text-gray-600">Transparent documentation of our conservation impact and operations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {annualReports.map((report, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500 ${report.featured ? 'ring-2 ring-emerald-200' : ''}`}>
                {report.featured && (
                  <div className="bg-emerald-600 text-white text-center py-2 text-sm font-bold">
                    Latest Report
                  </div>
                )}
                <div className="p-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors duration-300">
                    <FileText className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <div className="text-emerald-600 font-bold text-2xl mb-2">{report.year}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{report.title}</h3>
                  <p className="text-gray-700 mb-4">{report.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>{report.pages} pages</span>
                    <span>PDF Format</span>
                  </div>
                  
                  <a
                    href={report.downloadUrl}
                    className="inline-flex items-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-lg font-semibold text-center transition-colors duration-300"
                  >
                    <Download className="w-4 h-4" />
                    Download Report
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Newspaper className="w-8 h-8" />
            <h2 className="text-3xl font-bold">Stay Updated</h2>
          </div>
          <p className="text-xl text-emerald-200 mb-8">
            Subscribe to our newsletter for the latest conservation stories and program updates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 border border-gray-300 focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
            />
            <button className="bg-white text-emerald-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
              Subscribe
            </button>
          </div>
          
          <p className="text-emerald-200 text-sm mt-4">
            Monthly updates • No spam • Unsubscribe anytime
          </p>
        </div>
      </section>
    </div>
  );
};

export default Publications;