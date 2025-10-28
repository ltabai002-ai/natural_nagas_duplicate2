import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, ArrowRight, ExternalLink, Award, GanttChart as Elephant, ChevronDown, ChevronUp, Leaf, Trees, Globe, Recycle, Heart } from 'lucide-react';

const Events = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleExpanded = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  // Helper function to convert Google Drive URLs to thumbnail URLs
  const getGoogleDriveImageUrl = (url: string, size: string = 'w800') => {
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (fileIdMatch) {
      return `https://drive.google.com/thumbnail?id=${fileIdMatch[1]}&sz=${size}`;
    }
    return url;
  };

  // Photo galleries
  const dhandeliImages = [
    'https://drive.google.com/file/d/1Usl4Zk0JLyMINxd8bmH9-04BuXJf9Nu6/view?usp=drive_link',
    'https://drive.google.com/file/d/1cRvjd7db3uR3KvDN2-pKCc4tbD0cT_tO/view?usp=drive_link',
    'https://drive.google.com/file/d/1X-nxP3zqF4LQu4-HRBj5i4zNeLF9xvX5/view?usp=drive_link',
    'https://drive.google.com/file/d/1HyTERH9CBxPC1tWnTBEvREk78vopeR4v/view?usp=drive_link',
    'https://drive.google.com/file/d/1A8OAIdS3KGeRGrjK0wq-2YGZ9APOG4DA/view?usp=drive_link',
    'https://drive.google.com/file/d/1q4YjuyO0QF7h9LGLC86Pz4SvYWOWK8Nm/view?usp=drive_link',
    'https://drive.google.com/file/d/1YhffQQO4bSARXkyuZ4ePKSiTB38wXcnz/view?usp=drive_link',
    'https://drive.google.com/file/d/1nQ8AG36jCjTK4Pq_TUJMoOS9qxF1o1nc/view?usp=drive_link',
    'https://drive.google.com/file/d/1_BwQcxcmNG909_cuOtboSUj-Sn-YCOHn/view?usp=drive_link',
    'https://drive.google.com/file/d/1F9cghGdVrwDtFg3xDIdNMGHLmtyVI48k/view?usp=drive_link',
    'https://drive.google.com/file/d/1OMGdZoBILviLl335RPk8TGyGmbc0ZvB3/view?usp=drive_link',
    'https://drive.google.com/file/d/15v8jm2Rg1ym9zvDYFHGQ0BN1NFLT2iiZ/view?usp=drive_link',
    'https://drive.google.com/file/d/1aYgdHS7ubQxaIaPzdu-LwtU14UwKJElJ/view?usp=drive_link',
    'https://drive.google.com/file/d/1NCsp8RikTWus26S5Bl8RBfdLTT7go--r/view?usp=drive_link',
    'https://drive.google.com/file/d/1CjS59VmxBhPDM-igN8Z4ZuWzDrurDQHL/view?usp=drive_link'
  ];

  const plantationImages = [
    'https://drive.google.com/file/d/1QjG9UyC9c97VEVQaCOqU1UrJYhN5Otjg/view?usp=drive_link',
    'https://drive.google.com/file/d/1XZ-LdTcXWvJ-DfzZ_2YZT-vgjyMvPOA2/view?usp=drive_link',
    'https://drive.google.com/file/d/1XeGp1PSlVLb37xNxDaEa_gcI76mftmHE/view?usp=drive_link',
    'https://drive.google.com/file/d/1FaGrj5-jBDwuvOkdciYOIXObVGEyl188/view?usp=drive_link',
    'https://drive.google.com/file/d/1Wse3P7aAzdK8hwrwkKS2S-pcitfjs2YH/view?usp=drive_link',
    'https://drive.google.com/file/d/1D9OV9PInVkAVefQBGafgmq3BvyEF45qN/view?usp=drive_link'
  ];

  const earthDayImages = [
    'https://drive.google.com/file/d/1xjcfvnfAz5UYlknCGMsWnhOOCePPgjvO/view?usp=drive_link',
    'https://drive.google.com/file/d/1uSsFHetYnno2t1m5zLmH1-F-KR6FH6Nk/view?usp=drive_link',
    'https://drive.google.com/file/d/1jE6zH1PGfA657PuLMucnQ3Hnsu2TX2b3/view?usp=drive_link',
    'https://drive.google.com/file/d/1Y6CKqiFZUJQ9VHoakI00TevQxjWVPuAe/view?usp=drive_link',
    'https://drive.google.com/file/d/1CUdJCqDv7vGToAlF-d0zzzOSKztFzJ8I/view?usp=drive_link'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Following Home page pattern */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${getGoogleDriveImageUrl('https://drive.google.com/file/d/1Y_QN6tgFHHxyxY8Y5OW6xtEjLk38hTp0/view?usp=drive_link', 'w1200')})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Events & Activities
            <span className="block text-emerald-400">Conservation in Action</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Discover Natural Nagas' conservation efforts and community engagement activities across Nagaland since 2012
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/get-involved"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Join Our Mission
            </Link>
            <Link
              to="/programs"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Human Elephant Conflict Section - Following Programs page pattern */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Human Elephant Conflict Mitigation</h2>
            <p className="text-xl text-gray-600">Community-based solutions for peaceful coexistence with elephants</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Workshop on HEC August 2025 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={getGoogleDriveImageUrl('https://drive.google.com/file/d/13_RFe5MAKnEhhOTEigPNgMtteNT--WKd/view?usp=sharing')} 
                  alt="Workshop on HEC August 2025"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium bg-emerald-600 px-3 py-1 rounded-full">
                    August 2025
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  Workshop on HEC August 2025
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Comprehensive workshop addressing human-elephant conflict mitigation strategies and community engagement.
                </p>
                <a
                  href="https://www.facebook.com/photo/?fbid=735129089151707&set=a.155721790425776"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
                >
                  View on Facebook <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Community Reserves Workshop */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={getGoogleDriveImageUrl('https://drive.google.com/file/d/1SsDcDcL_4Aa7oUzwpdeICCk187Ua_Zrc/view?usp=sharing')} 
                  alt="Community Reserves Workshop"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium bg-emerald-600 px-3 py-1 rounded-full">
                    Community Workshop
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  Workshop on Community Reserves
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Natural Nagas participated in the Workshop on Community Reserves, with the theme 'Peaceful Coexistence with the Wild'.
                </p>
                <a
                  href="https://www.facebook.com/naturalnagas.org/posts/pfbid0dsfWSv1jKg9wb7YH6qAkMZvYqbX8fpek5dENX96upwnaadyaG8u96MhBcVsvoKal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
                >
                  View on Facebook <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* HEC Mitigation Workshop */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={getGoogleDriveImageUrl('https://drive.google.com/file/d/1bjBptpKDESE50ziUr69Nfi2H_wM6_1cZ/view?usp=sharing')} 
                  alt="Human/Elephant Conflict Mitigation Workshop"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium bg-emerald-600 px-3 py-1 rounded-full">
                    Mitigation Workshop
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  Human/Elephant Conflict Mitigation Workshop
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Comprehensive workshop on conflict mitigation strategies and community-based solutions.
                </p>
                <a
                  href="https://www.facebook.com/media/set/?set=a.496535080512294&type=3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
                >
                  View Gallery <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* AAE Drawings */}
            <div id="aae-drawings" className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={getGoogleDriveImageUrl('https://drive.google.com/file/d/1t6dIw-lqDWQrLJsufuvz-AjJGNdMB9HQ/view?usp=sharing')} 
                  alt="AAE (Animal Action Education) Drawings"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium bg-emerald-600 px-3 py-1 rounded-full">
                    November 24, 2013
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  AAE (Animal Action Education) Drawings
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Animal Action Education Art Contest with theme "Elephants Never Forget" held in Nagaland covering over 40 schools. Sponsored by IFAW and WTI, monitored by Natural Nagas.
                </p>
                <a
                  href="https://www.facebook.com/media/set/?set=a.238688159630322&type=3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
                >
                  View Art Contest <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Elephants Return After 100 Years */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={getGoogleDriveImageUrl('https://drive.google.com/file/d/10XNkAMGyaidgTdPDBC1ASQCd8C8CGkXX/view?usp=sharing')} 
                  alt="Elephants Return After 100 Years"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium bg-emerald-600 px-3 py-1 rounded-full">
                    Historic Return
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  Elephants Return After 100 Years
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Historic documentation of elephants returning to areas after a century, marking successful conservation efforts.
                </p>
                <a
                  href="https://www.facebook.com/media/set/?set=a.178444882321317&type=3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
                >
                  View Gallery <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* RAP Program Section */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Rapid Action Program (RAP)</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The human-elephant conflict in Wokha District caused loss of livelihood to the villagers in the Pangti, Sungro and Ashaa areas. 
              In order to address the conflict, a RAP was initiated by WTI with its collaborating partner The Natural Nagas in September 2013. 
              Grain for Grain: Entry Point Activity (EPA).
            </p>
            <a 
              href="https://www.wti.org.in/news/99-households-get-grain-for-grain-relief-in-nagaland/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
            >
              Read More About RAP Program <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Dhandeli Karnataka Gallery */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Dhandeli Karnataka Training and Exposure Trip</h3>
              <button
                onClick={() => toggleExpanded('dhandeli')}
                className="flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
              >
                {expandedSection === 'dhandeli' ? (
                  <>Hide Gallery <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>View Gallery <ChevronDown className="w-4 h-4" /></>
                )}
              </button>
            </div>
            
            {expandedSection === 'dhandeli' && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {dhandeliImages.map((imageUrl, index) => (
                  <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden group">
                    <img
                      src={getGoogleDriveImageUrl(imageUrl, 'w400')}
                      alt={`Dhandeli Karnataka Training ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* World Environment Day Section - Following About page alternating pattern */}
      <section id="world-environment-day" className="py-20 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">World Environment Day Celebrations</h2>
            <p className="text-xl text-emerald-200">Annual environmental awareness and action campaigns since 2015</p>
          </div>

          {/* WED 2025 - Featured */}
          <div className="mb-16 bg-emerald-800 rounded-xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-emerald-200">World Environment Day 2025</h3>
                <div className="text-sm font-medium bg-emerald-600 px-3 py-1 rounded-full inline-block mb-4">
                  "Ending Plastic Pollution Globally"
                </div>
                <p className="text-emerald-100 mb-6 leading-relaxed">
                  On the occasion of World Environment Day 2025, the Natural Nagas Team carried out a meaningful awareness and action campaign at Longphijü, 
                  a once-celebrated natural site in Wokha district now burdened by neglect and pollution. The team collected plastic waste using eco-friendly 
                  jute sacks and documented environmental hazards affecting the aquatic ecosystem.
                </p>
                <a
                  href="https://www.facebook.com/photo?fbid=687245183940098&set=pcb.687245310606752"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-300 font-semibold hover:text-white transition-colors duration-300"
                >
                  View Campaign <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <img 
                  src={getGoogleDriveImageUrl('https://drive.google.com/file/d/17ED7XbDedZMMgn_QIMHewgEjozRrlgr1/view?usp=sharing')} 
                  alt="World Environment Day 2025"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Other WED Years */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-emerald-800 rounded-lg p-6 text-center group hover:bg-emerald-700 transition-colors duration-300">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500 transition-colors duration-300">
                <Calendar className="w-10 h-10" />
              </div>
              <div className="text-2xl font-bold text-emerald-400 mb-2">2023</div>
              <div className="text-emerald-200 font-medium mb-4">Forest Division Partnership</div>
              <a
                href="https://www.facebook.com/media/set/?set=a.241333595197928&type=3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-white text-sm transition-colors"
              >
                View Activities
              </a>
            </div>

            <div className="bg-emerald-800 rounded-lg p-6 text-center group hover:bg-emerald-700 transition-colors duration-300">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500 transition-colors duration-300">
                <Trees className="w-10 h-10" />
              </div>
              <div className="text-2xl font-bold text-emerald-400 mb-2">2022</div>
              <div className="text-emerald-200 font-medium mb-4">50th Year Celebration</div>
              <a
                href="https://www.facebook.com/photo/?fbid=2274754762690308&set=pcb.2274755722690212"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-white text-sm transition-colors"
              >
                View at Doyang
              </a>
            </div>

            <div className="bg-emerald-800 rounded-lg p-6 text-center group hover:bg-emerald-700 transition-colors duration-300">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500 transition-colors duration-300">
                <Award className="w-10 h-10" />
              </div>
              <div className="text-2xl font-bold text-emerald-400 mb-2">2017</div>
              <div className="text-emerald-200 font-medium mb-4">Inter-School Competition</div>
              <a
                href="https://www.facebook.com/photo/?fbid=843410222491443&set=a.843409862491479"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-white text-sm transition-colors"
              >
                Tsumang Lake Project
              </a>
            </div>

            <div className="bg-emerald-800 rounded-lg p-6 text-center group hover:bg-emerald-700 transition-colors duration-300">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500 transition-colors duration-300">
                <Leaf className="w-10 h-10" />
              </div>
              <div className="text-2xl font-bold text-emerald-400 mb-2">2015</div>
              <div className="text-emerald-200 font-medium mb-4">Green Village Launch</div>
              <a
                href="https://www.facebook.com/media/set/?set=a.492080420957760&type=3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-white text-sm transition-colors"
              >
                New Riphyim Initiative
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Earth Day & Other Activities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Earth Day & Conservation Activities</h2>
            <p className="text-xl text-gray-600">Community engagement through environmental awareness and action</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Earth Day 2022 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500 lg:col-span-2">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                  Earth Day 2022 Activities
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  {earthDayImages.slice(0, 6).map((imageUrl, index) => (
                    <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={getGoogleDriveImageUrl(imageUrl, 'w400')}
                        alt={`Earth Day 2022 - ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Community participation in Earth Day 2022 activities including environmental awareness and conservation initiatives.
                </p>
                <button
                  onClick={() => toggleExpanded('earth-day')}
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
                >
                  {expandedSection === 'earth-day' ? 'Hide' : 'View'} Facebook Links 
                  {expandedSection === 'earth-day' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {expandedSection === 'earth-day' && (
                  <div className="mt-4 space-y-2 text-sm">
                    <a href="https://www.facebook.com/photo?fbid=2242112509287867&set=pcb.2242112879287830" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                      Earth Day Activity 1 <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                    <a href="https://www.facebook.com/photo?fbid=2240397069459411&set=pcb.2240397892792662" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                      Earth Day Activity 2 <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                    <a href="https://www.facebook.com/naturalnagas.org/posts/pfbid02nNGQmdJPStVQ4BTgTikFmDs6RwhohWQeiPArtipiTt13Ufj4f1dGcNBDX5sGodYKl" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                      Earth Day Post <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Clean-up Drives */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={getGoogleDriveImageUrl('https://drive.google.com/file/d/1NcsoHJnU6ecxdZ_of5NQWJonvM5pn2A_/view?usp=drive_link')} 
                  alt="Doyang Clean up"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium bg-emerald-600 px-3 py-1 rounded-full">
                    June 12, 2024
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  Doyang Clean up Drive
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Addressing the catastrophic invasion of toxic waste at the Doyang reservoir in Wokha Nagaland.
                </p>
                <a
                  href="https://www.facebook.com/photo/?fbid=444727794858506&set=a.155721790425776"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
                >
                  View Campaign <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* International Women's Day */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={getGoogleDriveImageUrl('https://drive.google.com/file/d/1MLfiMzSd_C2Ac3uVLAhJ10c46SPYXklu/view?usp=drive_link')} 
                  alt="International Women's Day"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium bg-emerald-600 px-3 py-1 rounded-full">
                    Women's Day
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  International Women's Day
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Celebrating women's contributions to environmental conservation and community development.
                </p>
                <a
                  href="https://www.facebook.com/photo/?fbid=2210170492482069&set=a.243153175850487"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
                >
                  View Celebration <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Awareness Campaigns */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={getGoogleDriveImageUrl('https://drive.google.com/file/d/1GS4F_gt66YWM4dGszZX86kBmiMARyfec/view?usp=drive_link')} 
                  alt="Awareness Campaigns"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium bg-emerald-600 px-3 py-1 rounded-full">
                    Community Outreach
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  Awareness Campaigns
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Community awareness and education programs for environmental conservation and wildlife protection.
                </p>
                <a
                  href="https://www.facebook.com/media/set/?set=a.219832711515867&type=3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
                >
                  View Gallery <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* School Activities */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={getGoogleDriveImageUrl('https://drive.google.com/file/d/1t6dIw-lqDWQrLJsufuvz-AjJGNdMB9HQ/view?usp=drive_link')} 
                  alt="AAE School Activities"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium bg-emerald-600 px-3 py-1 rounded-full">
                    40+ Schools
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  AAE School Activities
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Animal Action Education Art Contest with theme "Elephants Never Forget" covering 40+ schools. Sponsored by IFAW and WTI.
                </p>
                <a
                  href="https://www.facebook.com/media/set/?set=a.238688159630322&type=3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
                >
                  View Art Contest <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Plantation Drives Gallery */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Plantation Drives</h3>
                <p className="text-gray-600">500 saplings of Rhododendron Arboreum at Mt. Tiyi with Wokha Village Council</p>
              </div>
              <button
                onClick={() => toggleExpanded('plantation')}
                className="flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
              >
                {expandedSection === 'plantation' ? (
                  <>Hide Gallery <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>View Gallery <ChevronDown className="w-4 h-4" /></>
                )}
              </button>
            </div>
            
            {expandedSection === 'plantation' && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {plantationImages.map((imageUrl, index) => (
                  <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden group">
                    <img
                      src={getGoogleDriveImageUrl(imageUrl, 'w400')}
                      alt={`Plantation Drive ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action - Following Home page pattern */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Conservation Mission</h2>
          <p className="text-xl text-emerald-200 mb-8 max-w-3xl mx-auto">
            Be part of Natural Nagas' ongoing efforts to protect Nagaland's biodiversity and empower communities through conservation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/get-involved"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Involved
            </Link>
            <Link
              to="/programs"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Our Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;