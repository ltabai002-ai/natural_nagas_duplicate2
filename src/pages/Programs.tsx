import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bird, Trees, GanttChart as Elephant, Users, Award, MapPin, Calendar, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const Programs = () => {
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);

  const toggleExpanded = (programId: string) => {
    setExpandedProgram(expandedProgram === programId ? null : programId);
  };

  // Chunglikha Visit Photo Gallery
  const chunglikhaPhotos = [
    {
      url: 'https://page.gensparksite.com/v1/base64_upload/047ead02b15cae824119ff2fc3cd6a82',
      title: 'IMG_3238 - Community Meeting Discussion',
      description: 'Community leaders presenting village statistics and council information'
    },
    {
      url: 'https://page.gensparksite.com/v1/base64_upload/8e5b3b16bed476c73613db5fcf01097d',
      title: '_MG_8303 - Village Assembly Hall',
      description: 'Community members gathered for environmental awareness session'
    },
    {
      url: 'https://page.gensparksite.com/v1/base64_upload/9e378ef3ee0e45cfc9bb9bdf76b2b1c8',
      title: '_MG_8378 - Waste Management Initiative',
      description: 'Traditional basket used for community cleanliness drive'
    },
    {
      url: 'https://page.gensparksite.com/v1/base64_upload/9ed8edae8aad414b1d8beb94c64288d7',
      title: '_MG_8322 - Forest Path Inspection',
      description: 'Team documenting conservation areas and natural pathways'
    },
    {
      url: 'https://page.gensparksite.com/v1/base64_upload/bb538e85d5e6cceacf378ada55ee82ac',
      title: '_MG_8354 - Village Area Survey',
      description: 'Community visit through village areas and green spaces'
    },
    {
      url: 'https://page.gensparksite.com/v1/base64_upload/b82e7f041821cbfe34bd4df9540651d9',
      title: 'IMG_3169 - Chunglikha Community Hall',
      description: 'Group photo at Chunglikha Community Hall with village representatives'
    }
  ];

  // Water Table Recharge Photo Gallery
  const waterTableRechargePhotos = [
    {
      url: '/images/water-table-recharge/water_01.jpg',
      title: 'Water Recharge Project Site',
      description: 'Community-led water table recharge infrastructure development'
    },
    {
      url: '/images/water-table-recharge/water_02.jpg',
      title: 'Water Conservation Structure',
      description: 'Traditional water harvesting and conservation techniques implementation'
    },
    {
      url: '/images/water-table-recharge/water_03.jpg',
      title: 'Community Water Project',
      description: 'Village water resource management and sustainable practices'
    },
    {
      url: '/images/water-table-recharge/water_04.jpg',
      title: 'Water Table Enhancement',
      description: 'Natural water recharge system construction and monitoring'
    },
    {
      url: '/images/water-table-recharge/water_05.jpg',
      title: 'Sustainable Water Management',
      description: 'Community participation in water conservation and recharge activities'
    },
    {
      url: '/images/water-table-recharge/water_06.jpg',
      title: 'Water Resource Development',
      description: 'Long-term water security through community-based recharge projects'
    }
  ];

  // Activities under Green Dream Project (GDP) Photo Gallery
  const gdpActivityPhotos = [
    // Original 14 photos from external URLs
    {
      url: 'https://page.gensparksite.com/v1/base64_upload/e2a29cf6201dc5b33c53127ab2805157',
      title: 'Traditional Craft Workshop',
      description: 'Community members learning traditional bamboo weaving and basket making skills'
    },
    {
      url: 'https://page.gensparksite.com/v1/base64_upload/90d33c5241fd10dac809f0c6e7bbe21f',
      title: 'Community Group Meeting',
      description: 'Village representatives gathering for community development discussions'
    },
    {
      url: 'https://page.gensparksite.com/v1/base64_upload/2cd1bc1dce43c21d8d6dffd034abb3c0',
      title: 'Women\'s Skill Development Workshop',
      description: 'Women participating in hands-on training for traditional string and textile crafts'
    },
    {
      url: 'https://page.gensparksite.com/v1/base64_upload/1990fd4733c8952d244137ed54868652',
      title: 'Traditional Craft Training Session',
      description: 'Participants learning beadwork and traditional textile techniques'
    },
    {
      url: 'https://page.gensparksite.com/v1/base64_upload/c465c159287d35b74334f239eb3167d5',
      title: 'Community Hall Gathering',
      description: 'Community members assembled for environmental awareness and development programs'
    },
    {
      url: 'https://page.gensparksite.com/v1/base64_upload/7e74979930d30bada4d074c0f44385b6',
      title: 'Youth Team Building Activity',
      description: 'Energetic group activity promoting community engagement and team spirit'
    },
    {
      url: 'https://page.gensparksite.com/v1/base64_upload/4cd2bc03cebf72713b8fb5c8c6cf8f6d',
      title: 'Environmental Training Camp',
      description: 'Outdoor camping and environmental education session in natural forest setting'
    },
    {
      url: 'https://page.gensparksite.com/v1/base64_upload/912660a848e57e7f8eea9c9e397e50fa',
      title: 'Sustainable Camping Workshop',
      description: 'Community members learning eco-friendly camping and outdoor survival skills'
    },
    {
      url: 'https://page.gensparksite.com/v1/base64_upload/55421b933fead3eb6e1b873bcb7bfb8a',
      title: 'Forest Path Maintenance',
      description: 'Community volunteers clearing and maintaining natural pathways for conservation'
    },
    {
      url: 'https://page.gensparksite.com/v1/base64_upload/7a3a7658c2b3b96f820d78208f53b23e',
      title: 'Village Infrastructure Development',
      description: 'Community project planning for sustainable water conservation and management'
    },
    {
      url: 'https://page.gensparksite.com/v1/base64_upload/4d5137aa872d23487982753ec14a6342',
      title: 'Traditional Building Construction',
      description: 'Community building project using eco-friendly materials and traditional techniques'
    },
    {
      url: 'https://page.gensparksite.com/v1/base64_upload/329d73a40b29f941753bbe1f2e7b2113',
      title: 'Community Training Distribution',
      description: 'Participants receiving materials and instructions for sustainable development activities'
    },
    {
      url: 'https://page.gensparksite.com/v1/base64_upload/ab470dd430ed6b2b36798fbb60a0fbb2',
      title: 'Agricultural Support Program',
      description: 'Community members receiving supplies and training for sustainable farming practices'
    },
    {
      url: 'https://page.gensparksite.com/v1/base64_upload/0f1a9f9c16ef4d138c3ac76c0f813f68',
      title: 'Traditional Cooking Methods',
      description: 'Demonstration of eco-friendly cooking practices using traditional wood-fired stoves'
    },
    // New 15 photos from Google Drive (downloaded locally)
    {
      url: '/images/gdp-activities/photo_01.jpg',
      title: 'GDP Activity Photo 1',
      description: 'Community development activity under Green Dream Project initiative'
    },
    {
      url: '/images/gdp-activities/photo_02.jpg',
      title: 'GDP Activity Photo 2',
      description: 'Environmental conservation training session with local participants'
    },
    {
      url: '/images/gdp-activities/photo_03.jpg',
      title: 'GDP Activity Photo 3',
      description: 'Sustainable development workshop for community empowerment'
    },
    {
      url: '/images/gdp-activities/photo_04.jpg',
      title: 'GDP Activity Photo 4',
      description: 'Traditional skills preservation and cultural heritage activities'
    },
    {
      url: '/images/gdp-activities/photo_05.jpg',
      title: 'GDP Activity Photo 5',
      description: 'Community engagement and participatory development sessions'
    },
    {
      url: '/images/gdp-activities/photo_06.jpg',
      title: 'GDP Activity Photo 6',
      description: 'Environmental awareness and biodiversity conservation programs'
    },
    {
      url: '/images/gdp-activities/photo_07.jpg',
      title: 'GDP Activity Photo 7',
      description: 'Village infrastructure development and sustainability projects'
    },
    {
      url: '/images/gdp-activities/photo_08.jpg',
      title: 'GDP Activity Photo 8',
      description: 'Capacity building and skill development training programs'
    },
    {
      url: '/images/gdp-activities/photo_09.jpg',
      title: 'GDP Activity Photo 9',
      description: 'Community-led conservation initiatives and green practices'
    },
    {
      url: '/images/gdp-activities/photo_10.jpg',
      title: 'GDP Activity Photo 10',
      description: 'Collaborative projects for sustainable village development'
    },
    {
      url: '/images/gdp-activities/photo_11.jpg',
      title: 'GDP Activity Photo 11',
      description: 'Educational workshops on environmental protection and conservation'
    },
    {
      url: '/images/gdp-activities/photo_12.jpg',
      title: 'GDP Activity Photo 12',
      description: 'Traditional knowledge sharing and cultural exchange activities'
    },
    {
      url: '/images/gdp-activities/photo_13.jpg',
      title: 'GDP Activity Photo 13',
      description: 'Sustainable agriculture and eco-friendly farming practices demonstration'
    },
    {
      url: '/images/gdp-activities/photo_14.jpg',
      title: 'GDP Activity Photo 14',
      description: 'Community mobilization for environmental stewardship and conservation'
    },
    {
      url: '/images/gdp-activities/photo_15.jpg',
      title: 'GDP Activity Photo 15',
      description: 'Green village development model implementation and monitoring'
    }
  ];

  const flagshipPrograms = [
    {
      id: 'green-dream',
      title: 'Green Dream Project (GDP)',
      subtitle: 'Model Green Village New Riphyim Initiative',
      description: 'Green Village New Riphyim with the motto "Of the community, by the community and for the community" was adopted as a model village for disseminating awareness and education about sustainable development and biodiversity conservation. Launched on World Environment Day 2015.',
      image: '/images/green-dream/main/gdp_main.jpg',
      impact: ['Model Village Program', 'Water Table Recharge Projects', 'Sustainable Development Focus'],
      status: 'Ongoing Since 2015',
      icon: Trees
    },
    {
      id: 'jica-nfmp',
      title: 'JICA NFMP Project',
      subtitle: 'Natural Forest Management Project Partnership',
      description: 'As an organization familiar with the local landscape in Wokha district, Natural Nagas provides experts, logistics and data for this Japan-funded forest management project. We monitor, train and handhold community representatives across 24 villages in 4 batches.',
      image: '/images/jica-nfmp/main/jica_nfmp_main.jpg',
      impact: ['24 Villages Across 4 Batches', 'Wokha District Focus', 'Community Training & Monitoring'],
      status: 'Active Partnership',
      icon: Trees
    },
    {
      id: 'element',
      title: 'ELEMENT World Bank Project',
      subtitle: 'Enhancing Landscape and Ecosystem Management ($225.5M)',
      description: 'Natural Nagas has officially signed a contract with the Government of Nagaland as part of the ELEMENT Project. We provide expertise, logistics, data, and community training across two Protected Forest Areas (PFAs) in Wokha district covering 23 villages.',
      image: '/images/element-worldbank/main/element_main.jpg',
      impact: ['PFA 1: 10 Villages', 'PFA 2: 13 Villages', 'Wokha District Coverage'],
      status: 'Active Contract',
      icon: Award
    }
  ];

  // Amur Falcon Photo Galleries
  const amurFalconMouPhotos = [
    {
      url: '/images/amur-falcon/mou-signing/mou_01.jpg',
      title: 'MOU Signing Ceremony',
      description: 'Historic MOU signing with Pangti village for Amur Falcon conservation'
    },
    {
      url: '/images/amur-falcon/mou-signing/mou_02.jpg',
      title: 'Community Leaders Agreement',
      description: 'Village leaders committing to zero hunting policy for Amur Falcons'
    }
  ];

  const birdForBirdPhotos = [
    {
      url: '/images/amur-falcon/bird-for-bird/bird_01.jpg',
      title: 'Bird for Bird Initiative',
      description: 'Community compensation program for falcon conservation'
    },
    {
      url: '/images/amur-falcon/bird-for-bird/bird_02.jpg',
      title: 'Alternative Livelihood Program',
      description: 'Providing domestic birds as compensation for hunting cessation'
    },
    {
      url: '/images/amur-falcon/bird-for-bird/bird_03.jpg',
      title: 'Community Participation',
      description: 'Villagers actively participating in conservation initiatives'
    },
    {
      url: '/images/amur-falcon/bird-for-bird/bird_04.jpg',
      title: 'Sustainable Income Generation',
      description: 'Alternative income sources through poultry distribution'
    },
    {
      url: '/images/amur-falcon/bird-for-bird/bird_05.jpg',
      title: 'Conservation Education',
      description: 'Teaching communities about Amur Falcon migration patterns'
    },
    {
      url: '/images/amur-falcon/bird-for-bird/bird_06.jpg',
      title: 'Village Engagement',
      description: 'Community meetings for conservation awareness'
    },
    {
      url: '/images/amur-falcon/bird-for-bird/bird_07.jpg',
      title: 'Success Stories',
      description: 'Documenting positive impact of Bird for Bird program'
    },
    {
      url: '/images/amur-falcon/bird-for-bird/bird_08.jpg',
      title: 'Community Support',
      description: 'Local support for Amur Falcon protection initiatives'
    },
    {
      url: '/images/amur-falcon/bird-for-bird/bird_09.jpg',
      title: 'Program Implementation',
      description: 'On-ground execution of conservation strategies'
    },
    {
      url: '/images/amur-falcon/bird-for-bird/bird_10.jpg',
      title: 'Conservation Partnership',
      description: 'Collaborative efforts between Natural Nagas and communities'
    }
  ];

  const patrollingSquadPhotos = [
    {
      url: '/images/amur-falcon/patrolling-squad/patrol_01.jpg',
      title: 'Patrolling Squad Formation',
      description: 'Community patrolling teams monitoring falcon roosting sites'
    },
    {
      url: '/images/amur-falcon/patrolling-squad/patrol_02.jpg',
      title: 'Night Patrol Operations',
      description: 'Round-the-clock monitoring during migration season'
    },
    {
      url: '/images/amur-falcon/patrolling-squad/patrol_03.jpg',
      title: 'Community Vigilance',
      description: 'Local volunteers ensuring falcon safety'
    },
    {
      url: '/images/amur-falcon/patrolling-squad/patrol_04.jpg',
      title: 'Protection Activities',
      description: 'Active protection measures during roosting periods'
    },
    {
      url: '/images/amur-falcon/patrolling-squad/patrol_05.jpg',
      title: 'Monitoring Teams',
      description: 'Trained community members tracking falcon movements'
    },
    {
      url: '/images/amur-falcon/patrolling-squad/patrol_06.jpg',
      title: 'Conservation Patrol',
      description: 'Systematic patrolling of critical habitat areas'
    },
    {
      url: '/images/amur-falcon/patrolling-squad/patrol_07.jpg',
      title: 'Squad Training',
      description: 'Capacity building for effective falcon protection'
    },
    {
      url: '/images/amur-falcon/patrolling-squad/patrol_08.jpg',
      title: 'Field Operations',
      description: 'Coordinated field activities for falcon conservation'
    },
    {
      url: '/images/amur-falcon/patrolling-squad/patrol_09.jpg',
      title: 'Community Coordination',
      description: 'Inter-village coordination for comprehensive protection'
    },
    {
      url: '/images/amur-falcon/patrolling-squad/patrol_10.jpg',
      title: 'Safety Monitoring',
      description: 'Ensuring safe passage during falcon migration'
    },
    {
      url: '/images/amur-falcon/patrolling-squad/patrol_11.jpg',
      title: 'Dedicated Volunteers',
      description: 'Community volunteers committed to falcon conservation'
    },
    {
      url: '/images/amur-falcon/patrolling-squad/patrol_12.jpg',
      title: 'Habitat Protection',
      description: 'Protecting critical roosting and feeding areas'
    },
    {
      url: '/images/amur-falcon/patrolling-squad/patrol_13.jpg',
      title: 'Migration Monitoring',
      description: 'Tracking falcon migration patterns and behavior'
    },
    {
      url: '/images/amur-falcon/patrolling-squad/patrol_14.jpg',
      title: 'Conservation Success',
      description: 'Celebrating achievements in falcon protection'
    },
    {
      url: '/images/amur-falcon/patrolling-squad/patrol_15.jpg',
      title: 'Ongoing Vigilance',
      description: 'Continuous monitoring for long-term conservation success'
    }
  ];

  const wildlifeProjects = [
    {
      id: 'amur-falcon',
      title: 'Amur Falcon Conservation',
      subtitle: 'From 100,000+ Killed to Zero - Nagaland as Falcon Capital of World',
      description: 'Our flagship program transformed Nagaland from a massacre site to a safe haven for Amur Falcons. Partnering with WTI, we signed historic MoUs with Pangti, Sungro, and Ashaa villages. The program includes Bird-for-Bird initiatives, Grain-for-Grain compensation, patrolling squads, and the annual Amur Falcon Festival.',
      image: '/images/amur-falcon/main/amur_falcon_main.jpg',
      impact: 'Zero Killing Achieved in 2013',
      status: 'Active Since 2012',
      icon: Bird,
      isMainProject: true
    },
    {
      id: 'black-turtle',
      title: 'Black Soft-shell Turtle Conservation',
      subtitle: 'Rediscovering Species Back from Extinction - Wozhu Tsophow Wetlands',
      description: 'A miraculous conservation success story. The Black Soft-shell Turtle (Nilssonia nigricans) was declared Extinct in Wild by IUCN in 2002. Natural Nagas made the groundbreaking rediscovery of this species at Wozhu Tsophow wetlands in Old Akuk village, Wokha District, proving that dedicated conservation efforts can bring species back from the brink.',
      image: 'https://drive.google.com/thumbnail?id=1N7Q0yFP7aYWye6n9fYJn_35IWNzSNb3Q&sz=w1000',
      impact: 'Species Back from Extinction',
      status: 'Rediscovered 2019',
      icon: MapPin,
      isMainProject: true
    },
    {
      id: 'elephant-conflict',
      title: 'Human-Elephant Conflict Mitigation',
      subtitle: 'Rapid Action Programme (RAP) - Community-Wildlife Coexistence',
      description: 'Addressing critical human-elephant conflict in Wokha District through strategic partnership with Wildlife Trust of India (WTI). Our Rapid Action Programme provides immediate relief to affected households in Pangti, Sungro, and Ashaa villages, while developing long-term solutions for peaceful coexistence between communities and Asian elephants.',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg',
      impact: 'RAP Program with WTI',
      status: 'Active Partnership',
      icon: Elephant,
      isMainProject: true
    }
  ];



  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl md:text-2xl text-emerald-200 max-w-3xl mx-auto">
            Community-driven conservation initiatives protecting Nagaland's unique biodiversity
          </p>
        </div>
      </section>

      {/* Flagship Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flagship Programs</h2>
            <p className="text-xl text-gray-600">Large-scale initiatives driving conservation impact across Nagaland</p>
          </div>
          
          <div className="space-y-20">
            {flagshipPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div key={program.id} id={program.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                  <div className="lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-emerald-600 font-medium">
                          {program.status}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{program.title}</h3>
                        <div className="text-emerald-600 font-semibold">{program.subtitle}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{program.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      {program.impact.map((item, idx) => (
                        <div key={idx} className="bg-emerald-50 rounded-lg p-3 text-center">
                          <div className="text-emerald-600 font-bold text-sm">{item}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4">
                      {(program.id === 'green-dream' || program.id === 'jica-nfmp' || program.id === 'element') && (
                        <button
                          onClick={() => toggleExpanded(program.id)}
                          className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                        >
                          {expandedProgram === program.id ? 'Read Less' : 'Read More'}
                          {expandedProgram === program.id ? 
                            <ChevronUp className="w-5 h-5" /> : 
                            <ChevronDown className="w-5 h-5" />
                          }
                        </button>
                      )}
                      <Link
                        to="/get-involved"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        Support This Program <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>

                    {/* Expanded Content for Green Dream Project */}
                    {program.id === 'green-dream' && expandedProgram === 'green-dream' && (
                      <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border-l-4 border-emerald-500 animate-in slide-in-from-top duration-300">
                        {/* External Link */}
                        <div className="mb-6">
                          <a
                            href="https://morungexpress.com/new-riphyim-leads-way-environment-conservation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-lg transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                            Read: New Riphyim leads way in environment conservation - Morung Express
                          </a>
                        </div>

                        {/* World Environment Day 2018 */}
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-emerald-600" />
                            World Environment Day 2018
                          </h4>
                          <div className="bg-white rounded-lg p-4 shadow-sm">
                            <iframe
                              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fnaturalnagas.org%2Fposts%2Fpfbid0idA7DwnbHNVMuPEhi4jvgcy7NJ7ihyWHPZTtTmNFXdbR2KADNFzEsgzuob8KiENbl&show_text=true&width=500"
                              width="500"
                              height="300"
                              style={{border: 'none', overflow: 'hidden'}}
                              scrolling="no"
                              frameBorder="0"
                              allowFullScreen={true}
                              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                              className="w-full max-w-md mx-auto"
                            />
                          </div>
                        </div>

                        {/* Happy Earth Day 2019 */}
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-emerald-600" />
                            Natural Nagas - Happy Earth Day 2019
                          </h4>
                          <div className="bg-white rounded-lg p-4 shadow-sm">
                            <iframe
                              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fnaturalnagas.org%2Fposts%2Fpfbid02rEh8zse9Qkn25X3Wt4G7eGc1gomzgMrsU7XJvHJPAzLGiYRSYyZwy1anQ6ts9Wntl&show_text=true&width=500"
                              width="500"
                              height="300"
                              style={{border: 'none', overflow: 'hidden'}}
                              scrolling="no"
                              frameBorder="0"
                              allowFullScreen={true}
                              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                              className="w-full max-w-md mx-auto"
                            />
                          </div>
                        </div>

                        {/* Chunglikha Visit Photo Gallery */}
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Users className="w-5 h-5 text-emerald-600" />
                            Chunglikha Visit
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {chunglikhaPhotos.map((photo, idx) => (
                              <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300">
                                <div className="relative h-48 overflow-hidden">
                                  <img
                                    src={photo.url}
                                    alt={photo.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                  <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {photo.title}
                                  </div>
                                </div>
                                <div className="p-3">
                                  <p className="text-gray-600 text-sm">{photo.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Exposure visit to the cleanest village in Nagaland */}
                        <div className="mt-12">
                          <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <Award className="w-5 h-5 text-emerald-600" />
                            Exposure visit to the cleanest village in Nagaland
                          </h4>
                          
                          {/* Activities under GDP */}
                          <div className="mb-6">
                            <h5 className="text-lg font-semibold text-gray-800 mb-4">
                              Activities under the Green Dream Project (GDP)
                            </h5>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {gdpActivityPhotos.map((photo, idx) => (
                                <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300">
                                  <div className="relative h-48 overflow-hidden">
                                    <img
                                      src={photo.url}
                                      alt={photo.title}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      {photo.title}
                                    </div>
                                  </div>
                                  <div className="p-3">
                                    <p className="text-gray-600 text-sm">{photo.description}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                        {/* Green Dream Project (GDP) Water Table Recharge */}
                        <div className="mt-12">
                          <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <Users className="w-5 h-5 text-emerald-600" />
                            Green Dream Project (GDP) Water Table Recharge
                          </h4>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {waterTableRechargePhotos.map((photo, idx) => (
                              <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300">
                                <div className="relative h-48 overflow-hidden">
                                  <img
                                    src={photo.url}
                                    alt={photo.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                  <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {photo.title}
                                  </div>
                                </div>
                                <div className="p-3">
                                  <p className="text-gray-600 text-sm">{photo.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        </div>
                      </div>
                    )}

                    {/* Expanded Content for JICA NFMP Project */}
                    {program.id === 'jica-nfmp' && expandedProgram === 'jica-nfmp' && (
                      <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-500 animate-in slide-in-from-top duration-300">
                        
                        {/* Batch Information */}
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <Trees className="w-5 h-5 text-emerald-600" />
                            24 Villages Covered Across 4 Batches
                          </h4>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Batch 1 */}
                            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-400">
                              <h5 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                                <Award className="w-4 h-4" />
                                Batch-1 (3 Villages)
                              </h5>
                              <ul className="space-y-1 text-gray-700">
                                <li className="flex items-center gap-2">
                                  <MapPin className="w-3 h-3 text-green-500" />
                                  Wokha
                                </li>
                                <li className="flex items-center gap-2">
                                  <MapPin className="w-3 h-3 text-green-500" />
                                  New Riphyim
                                </li>
                                <li className="flex items-center gap-2">
                                  <MapPin className="w-3 h-3 text-green-500" />
                                  Old Riphyim
                                </li>
                              </ul>
                            </div>

                            {/* Batch 2 */}
                            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-400">
                              <h5 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                                <Award className="w-4 h-4" />
                                Batch-2 (6 Villages)
                              </h5>
                              <ul className="space-y-1 text-gray-700">
                                <li className="flex items-center gap-2">
                                  <MapPin className="w-3 h-3 text-green-500" />
                                  New Wokha
                                </li>
                                <li className="flex items-center gap-2">
                                  <MapPin className="w-3 h-3 text-green-500" />
                                  Longsa
                                </li>
                                <li className="flex items-center gap-2">
                                  <MapPin className="w-3 h-3 text-green-500" />
                                  Longsachung
                                </li>
                                <li className="flex items-center gap-2">
                                  <MapPin className="w-3 h-3 text-green-500" />
                                  Yikhum
                                </li>
                                <li className="flex items-center gap-2">
                                  <MapPin className="w-3 h-3 text-green-500" />
                                  Old Changsu
                                </li>
                                <li className="flex items-center gap-2">
                                  <MapPin className="w-3 h-3 text-green-500" />
                                  Nungying
                                </li>
                              </ul>
                            </div>

                            {/* Batch 3 */}
                            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-400">
                              <h5 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                                <Award className="w-4 h-4" />
                                Batch-3 (5 Villages)
                              </h5>
                              <ul className="space-y-1 text-gray-700">
                                <li className="flex items-center gap-2">
                                  <MapPin className="w-3 h-3 text-green-500" />
                                  Yanthamo
                                </li>
                                <li className="flex items-center gap-2">
                                  <MapPin className="w-3 h-3 text-green-500" />
                                  Niroyo
                                </li>
                                <li className="flex items-center gap-2">
                                  <MapPin className="w-3 h-3 text-green-500" />
                                  Phiro
                                </li>
                                <li className="flex items-center gap-2">
                                  <MapPin className="w-3 h-3 text-green-500" />
                                  Tsungiki
                                </li>
                                <li className="flex items-center gap-2">
                                  <MapPin className="w-3 h-3 text-green-500" />
                                  New Changsu
                                </li>
                              </ul>
                            </div>

                            {/* Batch 4 */}
                            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-400">
                              <h5 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                                <Award className="w-4 h-4" />
                                Batch-4 (6 Villages)
                              </h5>
                              <ul className="space-y-1 text-gray-700">
                                <li className="flex items-center gap-2">
                                  <MapPin className="w-3 h-3 text-green-500" />
                                  Humtso
                                </li>
                                <li className="flex items-center gap-2">
                                  <MapPin className="w-3 h-3 text-green-500" />
                                  Elumyo
                                </li>
                                <li className="flex items-center gap-2">
                                  <MapPin className="w-3 h-3 text-green-500" />
                                  N.Longidang
                                </li>
                                <li className="flex items-center gap-2">
                                  <MapPin className="w-3 h-3 text-green-500" />
                                  Shaki
                                </li>
                                <li className="flex items-center gap-2">
                                  <MapPin className="w-3 h-3 text-green-500" />
                                  Koio
                                </li>
                                <li className="flex items-center gap-2">
                                  <MapPin className="w-3 h-3 text-green-500" />
                                  Mungya
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="mt-6 bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                            <p className="text-emerald-800 text-sm">
                              <strong>Partnership Impact:</strong> Natural Nagas provides local expertise, logistics coordination, and community data management for this Japan International Cooperation Agency (JICA) funded initiative, ensuring sustainable forest management practices across Wokha District.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Expanded Content for ELEMENT World Bank Project */}
                    {program.id === 'element' && expandedProgram === 'element' && (
                      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-500 animate-in slide-in-from-top duration-300">
                        
                        {/* Responsibilities */}
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Award className="w-5 h-5 text-blue-600" />
                            Our Responsibilities
                          </h4>
                          <div className="bg-white rounded-lg p-4 shadow-sm">
                            <p className="text-gray-700 leading-relaxed">
                              As an organization familiar with the local landscape, Natural Nagas has been entrusted to provide experts on various subjects, logistics and data. The organization monitors, trains and handholds the community representatives to create a successful impact on the conservation efforts through this project.
                            </p>
                          </div>
                        </div>

                        {/* Communities Involved */}
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <Users className="w-5 h-5 text-blue-600" />
                            Communities Involved - 23 Villages Across 2 PFAs
                          </h4>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* PFA 1 */}
                            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-400">
                              <h5 className="font-bold text-blue-700 mb-4 flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                PFA 1 Wokha (10 Villages)
                              </h5>
                              <div className="grid grid-cols-2 gap-2">
                                {[
                                  'Aree New', 'Aree Old', 'Meshangpen', 'New Riphyim', 'Olkotso',
                                  'Pangti', 'Pyotchu', 'Tsopo', 'Tsungiki', 'Wokha'
                                ].map((village, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                                    {village}
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* PFA 2 */}
                            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-400">
                              <h5 className="font-bold text-blue-700 mb-4 flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                PFA 2 Wokha (13 Villages)
                              </h5>
                              <div className="grid grid-cols-2 gap-2">
                                {[
                                  'Akuk Old', 'Chudi', 'Lakhuti', 'Longtsung', 'Lotsu', 'Mekokla', 'Moilan',
                                  'Morakjo', 'Pyangsa', 'Sanis', 'Sunglup', 'Upper Baghty', 'Yonchicho'
                                ].map((village, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                                    {village}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                            <p className="text-blue-800 text-sm">
                              <strong>Project Impact:</strong> Through the ELEMENT World Bank Project, Natural Nagas enhances landscape and ecosystem management across Protected Forest Areas (PFAs), working directly with 23 village communities to strengthen conservation efforts and sustainable development practices in Wokha District.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wildlife Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Wildlife Conservation Projects</h2>
            <p className="text-xl text-gray-600">Targeted efforts to protect endangered and vulnerable species</p>
          </div>
          
          <div className="space-y-12">
            {/* Main Amur Falcon Project */}
            {wildlifeProjects
              .filter(project => project.isMainProject)
              .map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <div key={project.id} id={project.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="lg:flex">
                      <div className="lg:w-1/2">
                        <div className="relative h-96 lg:h-full overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-emerald-600 font-medium">
                              {project.status}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:w-1/2 p-8 lg:p-12">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-gray-900">{project.title}</h3>
                            <div className="text-emerald-600 font-semibold">{project.subtitle}</div>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">{project.description}</p>
                        
                        <div className="bg-emerald-50 rounded-lg p-4 mb-6">
                          <div className="flex items-center gap-2 text-emerald-700 font-bold">
                            <IconComponent className="w-5 h-5" />
                            <span>Key Achievement: {project.impact}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4">
                          <button
                            onClick={() => toggleExpanded(project.id)}
                            className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                          >
                            {expandedProgram === project.id ? 'Read Less' : 'Read More'}
                            {expandedProgram === project.id ? 
                              <ChevronUp className="w-5 h-5" /> : 
                              <ChevronDown className="w-5 h-5" />
                            }
                          </button>
                          <Link
                            to="/get-involved"
                            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                          >
                            Support Conservation <ArrowRight className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content for Amur Falcon Conservation */}
                    {project.id === 'amur-falcon' && expandedProgram === 'amur-falcon' && (
                      <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border-l-4 border-emerald-500 animate-in slide-in-from-top duration-300">
                        
                        {/* Conservation Story */}
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Bird className="w-5 h-5 text-emerald-600" />
                            The Conservation Story
                          </h4>
                          <div className="bg-white rounded-lg p-6 shadow-sm">
                            <p className="text-gray-700 leading-relaxed mb-4">
                              The Amur Falcon conservation story is one of the most remarkable wildlife conservation success stories in Northeast India. What started as a massacre site where over 100,000 Amur Falcons were killed annually has transformed into the world's largest roosting site for these magnificent birds.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              In 2012, Natural Nagas partnered with Wildlife Trust of India (WTI) to launch this groundbreaking conservation initiative. Through community engagement, alternative livelihood programs, and dedicated protection measures, we successfully achieved zero killing by 2013.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                              Today, Nagaland proudly holds the title of "Falcon Capital of the World," with Doyang reservoir area hosting nearly 1 million Amur Falcons during their annual migration. This transformation showcases the power of community-based conservation and sustainable development.
                            </p>
                          </div>
                        </div>

                        {/* MOU Signing Section */}
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Award className="w-5 h-5 text-emerald-600" />
                            Historic MOU Signing with Villages
                          </h4>
                          
                          <div className="mb-6 bg-white rounded-lg p-4 shadow-sm">
                            <a
                              href="https://india.mongabay.com/2012/11/07/amur-falcons-get-a-lifeline-in-nagaland/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-lg transition-colors mb-4"
                            >
                              <ExternalLink className="w-5 h-5" />
                              Read: Amur Falcons get a lifeline in Nagaland - Mongabay India
                            </a>
                            <p className="text-gray-700 leading-relaxed">
                              Natural Nagas signed historic Memorandums of Understanding (MOUs) with Pangti, Sungro, and Ashaa villages, creating the foundation for community-based conservation efforts. These agreements established zero-hunting policies and community participation frameworks.
                            </p>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {amurFalconMouPhotos.map((photo, idx) => (
                              <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300">
                                <div className="relative h-48 overflow-hidden">
                                  <img
                                    src={photo.url}
                                    alt={photo.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                  <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {photo.title}
                                  </div>
                                </div>
                                <div className="p-3">
                                  <p className="text-gray-600 text-sm">{photo.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Bird for Bird Project */}
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Users className="w-5 h-5 text-emerald-600" />
                            Bird for Bird Initiative
                          </h4>
                          
                          <div className="mb-6 bg-white rounded-lg p-4 shadow-sm">
                            <p className="text-gray-700 leading-relaxed">
                              The Bird for Bird project provides alternative livelihood options to communities previously dependent on falcon hunting. Through this innovative program, families receive domestic birds (chickens, ducks) as compensation for ceasing hunting activities, creating sustainable income sources while protecting the falcons.
                            </p>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {birdForBirdPhotos.map((photo, idx) => (
                              <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300">
                                <div className="relative h-48 overflow-hidden">
                                  <img
                                    src={photo.url}
                                    alt={photo.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                  <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {photo.title}
                                  </div>
                                </div>
                                <div className="p-3">
                                  <p className="text-gray-600 text-sm">{photo.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Patrolling Squad */}
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-emerald-600" />
                            Community Patrolling Squad
                          </h4>
                          
                          <div className="mb-6 bg-white rounded-lg p-4 shadow-sm">
                            <p className="text-gray-700 leading-relaxed">
                              Dedicated community patrolling squads monitor falcon roosting sites throughout the migration season. These trained volunteers conduct round-the-clock surveillance, ensuring the safety of roosting falcons and preventing any hunting activities. The patrolling teams have been instrumental in maintaining zero killing since 2013.
                            </p>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {patrollingSquadPhotos.map((photo, idx) => (
                              <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300">
                                <div className="relative h-48 overflow-hidden">
                                  <img
                                    src={photo.url}
                                    alt={photo.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                  <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {photo.title}
                                  </div>
                                </div>
                                <div className="p-3">
                                  <p className="text-gray-600 text-sm">{photo.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Additional Programs */}
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <Award className="w-5 h-5 text-emerald-600" />
                            Additional Conservation Programs
                          </h4>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Signage Program */}
                            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-emerald-400">
                              <h5 className="font-bold text-emerald-700 mb-3 flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                Signage & Awareness Program
                              </h5>
                              <p className="text-gray-700 text-sm leading-relaxed">
                                Strategic placement of conservation signage throughout the Doyang reservoir area to educate visitors and local communities about Amur Falcon conservation. These multilingual signs promote awareness and encourage responsible behavior around roosting sites.
                              </p>
                            </div>

                            {/* Relief Program */}
                            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-emerald-400">
                              <h5 className="font-bold text-emerald-700 mb-3 flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                Community Relief Program
                              </h5>
                              <p className="text-gray-700 text-sm leading-relaxed">
                                Direct support to affected families and communities through compensation schemes, alternative livelihood training, and capacity building programs. This comprehensive relief system ensures sustainable conservation while addressing community needs.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Conservation Impact */}
                        <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-lg p-6 border-l-4 border-emerald-600">
                          <h4 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
                            <Award className="w-5 h-5" />
                            Conservation Impact & Recognition
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white rounded-lg p-4">
                              <h5 className="font-semibold text-emerald-700 mb-2">Global Recognition</h5>
                              <p className="text-gray-700 text-sm">Nagaland recognized as "Falcon Capital of the World" with nearly 1 million falcons roosting annually</p>
                            </div>
                            <div className="bg-white rounded-lg p-4">
                              <h5 className="font-semibold text-emerald-700 mb-2">Zero Killing Achievement</h5>
                              <p className="text-gray-700 text-sm">Complete elimination of falcon hunting from 100,000+ killed annually to zero since 2013</p>
                            </div>
                            <div className="bg-white rounded-lg p-4">
                              <h5 className="font-semibold text-emerald-700 mb-2">Community Transformation</h5>
                              <p className="text-gray-700 text-sm">Successful transition of hunter communities to conservation advocates and eco-tourism guides</p>
                            </div>
                            <div className="bg-white rounded-lg p-4">
                              <h5 className="font-semibold text-emerald-700 mb-2">Annual Festival</h5>
                              <p className="text-gray-700 text-sm">Established Amur Falcon Festival celebrating conservation success and promoting eco-tourism</p>
                            </div>
                          </div>
                        </div>

                      </div>
                    )}

                    {/* Expanded Content for Black Soft-shell Turtle Conservation */}
                    {project.id === 'black-turtle' && expandedProgram === 'black-turtle' && (
                      <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border-l-4 border-emerald-500 animate-in slide-in-from-top duration-300">
                        
                        {/* Conservation Story */}
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-emerald-600" />
                            The Rediscovery Story
                          </h4>
                          <div className="bg-white rounded-lg p-6 shadow-sm">
                            <p className="text-gray-700 leading-relaxed mb-4">
                              The Black Soft-shell Turtle (Nilssonia nigricans) was declared "Extinct in Wild" by the International Union for Conservation of Nature (IUCN) in 2002. This freshwater turtle species was presumed lost forever, with the last known populations disappearing from their native habitats.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              In a remarkable turn of events, Natural Nagas made the groundbreaking rediscovery of this species at Wozhu Tsophow wetlands in Old Akuk village, Wokha District. This discovery not only brought hope for the species but also highlighted the importance of wetland conservation in Nagaland.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                              Our ongoing conservation efforts focus on habitat protection, community awareness, and scientific monitoring to ensure the long-term survival of this critically important species in its natural environment.
                            </p>
                          </div>
                        </div>

                        {/* News Coverage & Documentation */}
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <ExternalLink className="w-5 h-5 text-emerald-600" />
                            Media Coverage & Documentation
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4 mb-6">
                            <a 
                              href="https://morungexpress.com/turtle-species-thought-extinct-wild-discovered-nagaland"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border-l-4 border-emerald-500"
                            >
                              <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                Morung Express News Report
                                <ExternalLink className="w-4 h-4" />
                              </h5>
                              <p className="text-gray-600 text-sm">"Turtle species thought extinct in wild discovered in Nagaland"</p>
                            </a>
                            <a 
                              href="https://indiasendangered.com/turtle-thought-to-be-extinct-in-the-wild-discovered-in-nagaland/?fbclid=IwY2xjawMLrO5leHRuA2FlbQIxMQABHjTPWMapFde9TMVzemNrRPFyg2cuKQI2fDry1Trqp-heJtFos_DpQl_XqlTi_aem_tZzvc5gZj40Yu8BXQOgdAQ"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border-l-4 border-emerald-500"
                            >
                              <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                India's Endangered Report
                                <ExternalLink className="w-4 h-4" />
                              </h5>
                              <p className="text-gray-600 text-sm">"Turtle thought to be extinct in the wild discovered in Nagaland"</p>
                            </a>
                          </div>
                        </div>

                        {/* Authentic Images Gallery */}
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-emerald-600" />
                            Discovery Documentation
                          </h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                              <img 
                                src="https://drive.google.com/thumbnail?id=1N7Q0yFP7aYWye6n9fYJn_35IWNzSNb3Q&sz=w1000" 
                                alt="Black Soft-shell Turtle at Wozhu Tsophow wetlands"
                                className="w-full h-48 object-cover"
                              />
                              <div className="p-4">
                                <h5 className="font-semibold text-gray-900 mb-2">Black Soft-shell Turtle Discovery</h5>
                                <p className="text-gray-600 text-sm mb-2">Species rediscovered at Wozhu Tsophow wetlands, Old Akuk village</p>
                                <a 
                                  href="https://www.facebook.com/naturalnagas.org/posts/pfbid02gYv7HavZiW1X2oEwsNYo45ejZXc1PwnYouiPMm5uytb1n4R3hF3G1UgGNqMnHEjLl"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-emerald-600 text-sm hover:text-emerald-700 flex items-center gap-1"
                                >
                                  View on Facebook <ExternalLink className="w-3 h-3" />
                                </a>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                              <img 
                                src="https://drive.google.com/thumbnail?id=1KG26n10hAQsEH1bRd4x7xjpZZjSeOKlb&sz=w1000" 
                                alt="Conservation team documenting turtle species"
                                className="w-full h-48 object-cover"
                              />
                              <div className="p-4">
                                <h5 className="font-semibold text-gray-900 mb-2">Conservation Documentation</h5>
                                <p className="text-gray-600 text-sm mb-2">Natural Nagas team documenting the rediscovered species</p>
                                <a 
                                  href="https://www.facebook.com/naturalnagas.org/posts/pfbid02HcxPVVmA2e2es6WkgFr6d9hUE7wbVKDcP1fzQPkiTwAgsAzKTS9socz5wWxyfzaPl"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-emerald-600 text-sm hover:text-emerald-700 flex items-center gap-1"
                                >
                                  View on Facebook <ExternalLink className="w-3 h-3" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    )}

                    {/* Expanded Content for Human-Elephant Conflict Mitigation */}
                    {project.id === 'elephant-conflict' && expandedProgram === 'elephant-conflict' && (
                      <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border-l-4 border-emerald-500 animate-in slide-in-from-top duration-300">
                        
                        {/* Program Overview */}
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Elephant className="w-5 h-5 text-emerald-600" />
                            Rapid Action Programme (RAP)
                          </h4>
                          <div className="bg-white rounded-lg p-6 shadow-sm">
                            <p className="text-gray-700 leading-relaxed mb-4">
                              Human-elephant conflict is a critical conservation challenge in Wokha District, where Asian elephants often raid crops and threaten rural livelihoods. Our partnership with Wildlife Trust of India (WTI) addresses this urgent issue through the Rapid Action Programme (RAP).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              The program provides immediate relief to affected households in Pangti, Sungro, and Ashaa villages, while developing sustainable long-term solutions for peaceful coexistence between communities and elephants. We focus on both emergency response and preventive measures.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                              Through community-based approaches, we're creating a model for human-wildlife coexistence that protects both elephant populations and rural livelihoods across northeastern India.
                            </p>
                          </div>
                        </div>

                        {/* Expert Analysis & Insights */}
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <ExternalLink className="w-5 h-5 text-emerald-600" />
                            Expert Analysis & Research
                          </h4>
                          <div className="bg-white rounded-lg p-6 shadow-sm">
                            <a 
                              href="https://morungexpress.com/on-the-human-animal-conflict-in-wokha?fbclid=IwY2xjawMLnVVleHRuA2FlbQIxMABicmlkETA3QzFob24xNkNoTGplbm1zAR4fq9kWDL6bgKZ8sopLHxoV2_se2VtSI5ZixpSXddzbahKjB5Wwu1HvpLnjig_aem_PkV3Om6T0hwWa8FvWWyneQ"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block hover:bg-gray-50 transition-colors duration-200 border-l-4 border-emerald-500 pl-4"
                            >
                              <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                "On the Human-Animal Conflict in Wokha" 
                                <ExternalLink className="w-4 h-4" />
                              </h5>
                              <p className="text-gray-600 text-sm mb-2">
                                In-depth analysis by Steve Odyuo examining the challenges and solutions for human-animal conflict in Wokha District
                              </p>
                              <p className="text-emerald-600 text-sm font-medium">
                                Published by Morung Express - Expert Perspective on Conservation Challenges
                              </p>
                            </a>
                          </div>
                        </div>

                      </div>
                    )}
                    
                  </div>
                );
              })}
            

          </div>
        </div>
      </section>


      {/* Get Involved CTA */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Support Our Conservation Work</h2>
          <p className="text-xl text-emerald-200 mb-8">
            Every contribution helps us protect more species, engage more communities, and create lasting conservation impact.
          </p>
          <Link
            to="/get-involved"
            className="inline-flex items-center gap-2 bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Involved Today <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Programs;