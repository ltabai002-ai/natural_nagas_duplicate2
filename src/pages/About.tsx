import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Award, Users, Heart, MapPin, Target, Trees, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const About = () => {
  const [expandedMilestone, setExpandedMilestone] = useState<number | null>(null);

  const milestones = [
    {
      year: '2012',
      title: 'Foundation & Amur Falcon Crisis Response',
      description: 'Natural Nagas was founded (Reg. No. HOME/SRC-6390 dated 07-08-2012) in response to the Amur Falcon massacre in Nagaland, inspired by wildlife photography at Kaziranga National Park in 2011.',
      expandedContent: 'Due to the exposé on the massacre of the Amur Falcons which went viral globally, Natural Nagas along with the Wildlife Trust of India spearheaded the Amur Falcon Conservation. The initial efforts consisted of photography, video and print documentation along with Entry Point Activities (EPA) like Awareness Campaigns through Workshops, Signages, volunteerism, outdoor activities for eco-tourism, Grain for Grain, Bird for Bird, patrolling squads (Hunter to Protector), reliefs for land owners of the Raptors roosting site which were supported by the Wildlife Trust of India. Natural Nagas also supported the Forest Department of Nagaland in various activities and capacities.',
      facebookAlbum: 'https://www.facebook.com/media/set/?set=a.158108057688333&type=3',
      hasExpandedContent: true,
      icon: Target
    },
    {
      year: '2013',
      title: 'Historic MoU & Conservation Success',
      description: 'Signed tripartite MOU with Wildlife Trust of India and village councils of Pangti, Sungro, and Ashaa. Achieved zero killing of Amur Falcons from 100,000+ killed in 2012.',
      expandedHeading: 'Amur Falcon Conservation 2013',
      externalLinks: [
        {
          title: 'India moves rapidly to protect Amur Falcons from mass hunting',
          url: 'https://news.mongabay.com/2013/09/india-moves-rapidly-to-protect-amur-falcons-from-mass-hunting/',
          source: 'Mongabay'
        }
      ],
      hasExpandedContent: true,
      icon: Award
    },
    {
      year: '2015',
      title: 'Green Dream Project Launch',
      description: 'Launched Green Village New Riphyim initiative with the motto "Of the community, by the community and for the community" as a model sustainable village.',
      expandedHeading: 'Green Dream Project 2015',
      externalLinks: [
        {
          title: 'New Riphyim leads way environment conservation',
          url: 'https://morungexpress.com/new-riphyim-leads-way-environment-conservation',
          source: 'Morung Express'
        }
      ],
      hasExpandedContent: true,
      icon: Trees
    },
    {
      year: '2018',
      title: 'First Amur Falcon Festival',
      description: 'Organized the first-ever Amur Falcon Conservation Festival (Nov 8-10, 2018) at Doyang reservoir, promoting eco-tourism and conservation awareness.',
      expandedContent: 'Natural Nagas was entrusted with the first "Amur Falcon Conservation Festival" which was held from the 8th-10th of November 2018. The festival celebrates the Amur Falcons who travel up to 22,000 km per year with the biggest congregation at the Doyang reservoir in Wokha. The objectives of the Amur Falcon festival was to create and spread awareness on wildlife conservation, explore the potential of outdoor activities, adventure sports, watersports, angling, culture, so as to address alternative and sustainable livelihood opportunities for the community through eco-tourism.',
      externalLinks: [
        {
          title: 'Amur Falcon Conservation Week and Festival 2018',
          url: 'https://morungexpress.com/amur-falcon-conservation-week-and-festival-2018',
          source: 'Morung Express'
        },
        {
          title: 'The first-ever Amur Falcon Conservation Week festivals in Wokha, Nagaland',
          url: 'https://www.outlooktraveller.com/News/the-first-ever-amur-falcon-conservation-week-festivals-in-wokha-nagaland',
          source: 'Outlook Traveller'
        }
      ],
      hasExpandedContent: true,
      icon: Calendar
    },
    {
      year: '2021',
      title: 'Major Project Partnerships',
      description: 'Began partnerships with JICA NFMP Project and World Bank ELEMENT Project for large-scale ecosystem management and forest conservation.',
      hasExpandedContent: false,
      icon: Users
    },
    {
      year: '2025',
      title: '13+ Years of Conservation Impact',
      description: 'Continuing to expand conservation programs across 40+ villages in Wokha district and beyond, with focus on community-based conservation.',
      hasExpandedContent: false,
      icon: MapPin
    }
  ];

  const steveStory = {
    name: 'Steve Odyuo',
    role: 'Founder & Chairman',
    profileImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    serpentEagleImage: 'https://page.gensparksite.com/v1/base64_upload/47032b890920a7e84e23797cc3041f4a',
    
    // Story Section 1: Educational Background & Professional Journey
    background: {
      title: "The Making of a Conservation Leader",
      content: `Steve Odyuo's journey to conservation leadership began with a solid educational foundation as a graduate who would later emerge as a prominent social activist and entrepreneur. His path wasn't traditional – while many conservationists start with formal wildlife training, Steve's route was shaped by a deep, innate connection to nature and an entrepreneurial spirit that would prove invaluable in building sustainable conservation programs.

Before founding Natural Nagas, Steve was already established as a social activist, understanding the intricate relationships between communities and their environment. His background as an entrepreneur gave him unique insights into creating sustainable, community-driven initiatives that could generate both environmental and economic benefits. This combination of social awareness and business acumen would later become the cornerstone of Natural Nagas' approach to conservation.

His passion for wildlife and travel photography wasn't just a hobby – it was developing into a powerful tool for storytelling and advocacy. As an outdoor and wildlife enthusiast, Steve spent countless hours in nature, building the deep understanding of ecosystems and wildlife behavior that would inform his conservation strategies. This hands-on experience, combined with his educational background, positioned him perfectly for the transformative moment that would change his life forever.`
    },

    // Story Section 2: The Inspiration Moment
    inspiration: {
      title: "The Moment Everything Changed",
      location: "Kaziranga National Park, Assam",
      year: "2011",
      content: `On a visit to Kaziranga National Park in Assam, Steve captured a shot of a serpent eagle flying off with a snake. This photograph led to his passion for wildlife photography and marked the beginning of his conservation journey.

Through discussions with fellow wildlife enthusiasts from all over the country, Steve deeply felt the need for conservation of wildlife in Nagaland. Recognizing this gap, the organization came to being with fellow wildlife enthusiasts and photographers of Nagaland who shared the same vision.

The name "Natural Nagas" stems from the tribal Nagas who are basically natural biologists, knowing their land, flora and fauna through their practical exposure and ancestral practices. This traditional knowledge, combined with the inspiration from that serpent eagle moment, became the foundation upon which Natural Nagas was built in 2012.`,
      imageCaption: "This picture taken in Kaziranga National Park in 2011 is the inspiration for the birth of Natural Nagas."
    },

    // Story Section 3: Key Achievements & Recognition
    achievements: {
      title: "Conservation Victories That Changed Lives",
      content: `Since that transformative moment in Kaziranga, Steve has built an extraordinary legacy of conservation achievements that have not only protected wildlife but transformed entire communities. His approach combines scientific rigor with deep community engagement, creating solutions that are both effective and sustainable.

**The Amur Falcon Miracle:** Perhaps Steve's most celebrated achievement came in response to one of conservation's darkest moments. When the global community discovered that over 100,000 Amur Falcons were being killed annually in Nagaland, Steve didn't just see a crisis – he saw an opportunity for transformation. Through Natural Nagas' leadership and partnership with the Wildlife Trust of India, he orchestrated one of conservation's greatest success stories. By 2013, the killing had dropped to zero in protected areas, and what was once a site of massacre became a celebrated conservation sanctuary.

**Human-Elephant Conflict Innovation:** Understanding that conservation must serve both wildlife and communities, Steve developed the groundbreaking Rapid Action Program (RAP) for human-elephant conflict mitigation. This innovative approach doesn't just manage conflicts – it prevents them while creating economic opportunities for local communities.

**Species Recovery Champion:** Under Steve's leadership, Natural Nagas achieved the remarkable rescue and rediscovery of the Black Soft Shell Turtle, bringing a species back from the brink of local extinction through careful research, community engagement, and habitat restoration.

**Community Transformation:** The Green Dream Project stands as a testament to Steve's vision of conservation as community empowerment. By creating model village initiatives that demonstrate sustainable living, he's proven that environmental protection and community prosperity can flourish together.

Steve's creative and innovative awareness strategies have revolutionized how conservation messages reach communities, making environmental protection not just understood but embraced at the grassroots level.`,
      positions: [
        'Member of State Wildlife Advisory Board Nagaland',
        'Member Standing Committee on Environment, BAN'
      ]
    },

    // Story Section 4: 10-Year Vision
    vision: {
      title: "Vision for the Next 10 Years",
      content: `Steve's vision for Natural Nagas in the next ten years is clear and focused: "To create a generation of responsible citizens who can safeguard and take care of our environment in a sustainable way."

This vision drives every program and initiative that Natural Nagas undertakes. Steve believes that lasting conservation success comes through empowering local communities and nurturing environmental consciousness in the younger generation.

Over the next decade, Steve aims to expand Natural Nagas' community-based conservation model across more villages in Nagaland and the Northeast region. The goal is to create a network of environmentally conscious communities where traditional ecological knowledge works hand-in-hand with modern conservation practices.

The organization will continue to focus on building capacity among local youth, training them as conservation leaders who understand both their cultural heritage and contemporary environmental challenges. Through education, awareness programs, and hands-on conservation work, Steve envisions a future where environmental protection becomes a natural part of community life.

This ten-year vision is about creating lasting change – ensuring that the conservation work started today continues through future generations of responsible citizens who are equipped and motivated to protect their natural heritage.`
    }
  };

  const partners = [
    {
      name: 'Wildlife Trust of India (WTI)',
      description: 'Leading wildlife conservation organization providing technical support and expertise.',
      type: 'Conservation Partner',
      logo: 'https://page.gensparksite.com/v1/base64_upload/1f53816299f13dff03ff51dfc6deb63a'
    },
    {
      name: 'Japan International Cooperation Agency (JICA)',
      description: 'Supporting sustainable development and environmental conservation initiatives.',
      type: 'Development Partner',
      logo: 'https://page.gensparksite.com/v1/base64_upload/be32e5ba1299edc81113e85e20173f17'
    },
    {
      name: 'World Bank',
      description: 'Funding critical conservation projects through the ELEMENT program.',
      type: 'Funding Partner',
      logo: 'https://page.gensparksite.com/v1/base64_upload/7c4148661ab930baa129e2bc9ae9d449'
    },
    {
      name: 'Government of Nagaland',
      description: 'Official support and collaboration for state-wide conservation policies.',
      type: 'Government Partner',
      logo: 'https://page.gensparksite.com/v1/base64_upload/42c35b5280d0b027b5bdfba7838ae142'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl text-emerald-200 max-w-3xl mx-auto">
              Born from passion, driven by purpose, sustained by community partnership
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Origin Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/30 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-200/30 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">The Beginning</h2>
              </div>
              
              <div className="prose prose-lg text-gray-700">
                <p>
                  Natural Nagas was officially registered (HOME/SRC-6390) on August 7, 2012, in Wokha, Nagaland, 
                  born from founder Steve Odyuo's transformative wildlife photography experience at Kaziranga National Park in 2011. 
                  A shot of a serpent eagle flying off with a snake ignited his passion for wildlife photography and conservation.
                </p>
                <p>
                  The organization emerged in response to the exposé on the massacre of Amur Falcons in Nagaland, 
                  which went viral globally. Natural Nagas, along with the Wildlife Trust of India, spearheaded 
                  the Amur Falcon Conservation project, achieving remarkable success - from over 100,000 birds 
                  killed in 2012 to zero killing in Pangti village by 2013.
                </p>
                <p>
                  The name "Natural Nagas" stems from the tribal Nagas who are basically natural biologists, 
                  knowing their land, flora and fauna through practical exposure and ancestral practices. 
                  Today, with 13+ years of conservation work, we continue Steve's vision to create a generation 
                  of responsible citizens who can safeguard and take care of our environment in a sustainable way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership</h2>
            <p className="text-xl text-gray-600">The story of a conservation visionary</p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Header Profile */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 relative">
                  <img 
                    src={steveStory.profileImage} 
                    alt={steveStory.name}
                    className="w-full h-80 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 sm:p-6 lg:hidden">
                    <div className="text-white">
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">{steveStory.name}</h3>
                      <div className="text-emerald-200 font-semibold text-sm sm:text-base">{steveStory.role}</div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-2/3 p-6 sm:p-8 lg:p-12 flex items-center">
                  <div className="w-full">
                    <div className="hidden lg:block mb-6">
                      <h3 className="text-3xl xl:text-4xl font-bold text-gray-900 mb-2">{steveStory.name}</h3>
                      <div className="text-emerald-600 font-semibold text-lg xl:text-xl">{steveStory.role}</div>
                    </div>
                    
                    <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                      From a wildlife photography moment in Kaziranga to leading one of Northeast India's most impactful conservation organizations, Steve Odyuo's journey embodies the transformative power of passion meeting purpose.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
                      <div className="bg-emerald-100 text-emerald-700 px-2 sm:px-3 py-1 rounded-full">13+ Years Conservation Leadership</div>
                      <div className="bg-emerald-100 text-emerald-700 px-2 sm:px-3 py-1 rounded-full">Wildlife Photography</div>
                      <div className="bg-emerald-100 text-emerald-700 px-2 sm:px-3 py-1 rounded-full">Community Engagement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Section 1: Educational Background */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{steveStory.background.title}</h3>
              </div>
              
              <div className="prose prose-base sm:prose-lg max-w-none text-gray-700 leading-relaxed">
                {steveStory.background.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 sm:mb-6 text-sm sm:text-base">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Story Section 2: The Inspiration Moment */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl shadow-lg overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-6 sm:p-8 lg:p-12">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6 sm:mb-8">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{steveStory.inspiration.title}</h3>
                      <div className="text-emerald-600 font-semibold text-base sm:text-lg">
                        {steveStory.inspiration.location}, {steveStory.inspiration.year}
                      </div>
                    </div>
                  </div>
                  
                  <div className="prose prose-base sm:prose-lg max-w-none text-gray-700 leading-relaxed">
                    {steveStory.inspiration.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 sm:mb-6 text-sm sm:text-base">{paragraph}</p>
                    ))}
                  </div>
                </div>
                
                <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[600px]">
                  <img 
                    src={steveStory.serpentEagleImage} 
                    alt="Serpent Eagle - The Inspiration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 sm:p-6">
                    <div className="text-white">
                      <p className="text-xs sm:text-sm font-medium italic leading-relaxed">{steveStory.inspiration.imageCaption}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Section 3: Key Achievements */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{steveStory.achievements.title}</h3>
              </div>
              
              <div className="prose prose-base sm:prose-lg max-w-none text-gray-700 leading-relaxed mb-6 sm:mb-8">
                {steveStory.achievements.content.split('\n\n').map((paragraph, index) => (
                  <div key={index} className="mb-4 sm:mb-6">
                    {paragraph.startsWith('**') ? (
                      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-3 sm:p-4 rounded-r-lg">
                        <h4 className="font-bold text-emerald-900 mb-2 text-sm sm:text-base">{paragraph.match(/\*\*(.*?)\*\*/)?.[1]}</h4>
                        <p className="text-gray-700 text-sm sm:text-base">{paragraph.replace(/\*\*(.*?)\*\*:\s*/, '')}</p>
                      </div>
                    ) : (
                      <p className="text-sm sm:text-base">{paragraph}</p>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="bg-emerald-50 rounded-lg p-4 sm:p-6">
                <h4 className="font-bold text-emerald-900 mb-3 sm:mb-4 text-base sm:text-lg">Current Leadership Positions</h4>
                <div className="space-y-2">
                  {steveStory.achievements.positions.map((position, index) => (
                    <div key={index} className="flex items-center gap-2 text-emerald-700">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="font-medium text-sm sm:text-base">{position}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Story Section 4: 10-Year Vision */}
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl shadow-xl text-white p-6 sm:p-8 lg:p-12">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">{steveStory.vision.title}</h3>
              </div>
              
              <div className="prose prose-base sm:prose-lg max-w-none text-white/90 leading-relaxed">
                {steveStory.vision.content.split('\n\n').map((paragraph, index) => (
                  paragraph.includes('"') ? (
                    <blockquote key={index} className="border-l-4 border-white/30 pl-4 sm:pl-6 italic text-lg sm:text-xl font-medium text-white mb-4 sm:mb-6">
                      {paragraph.match(/"(.*?)"/)?.[1]}
                    </blockquote>
                  ) : (
                    <p key={index} className="mb-4 sm:mb-6 text-sm sm:text-base">{paragraph}</p>
                  )
                ))}
              </div>
              
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/20">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-white/80">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="font-medium text-sm sm:text-base">Founded Natural Nagas in 2012 • 13+ Years of Conservation Leadership</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="w-8 h-8 text-emerald-600" />
                <h3 className="text-2xl font-bold text-gray-900">Growing Conservation Team</h3>
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                We're continuously expanding our team of dedicated conservationists, researchers, 
                field workers, and community organizers. Join Steve's mission to create a generation 
                of responsible citizens safeguarding our environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/get-involved#volunteer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  <Heart className="w-5 h-5" />
                  Join Our Mission
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  <MapPin className="w-5 h-5" />
                  Contact Leadership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our conservation story</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                const isExpanded = expandedMilestone === index;
                return (
                  <div key={index} className="relative flex items-start gap-4 sm:gap-6">
                    {/* Timeline node */}
                    <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-gray-50 rounded-lg p-4 sm:p-6 hover:bg-emerald-50 transition-colors duration-300">
                      <div className="text-emerald-600 font-bold text-base sm:text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">{milestone.description}</p>
                      
                      {milestone.hasExpandedContent && (
                        <>
                          {/* Read More Button */}
                          <button
                            onClick={() => setExpandedMilestone(isExpanded ? null : index)}
                            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm sm:text-base transition-colors duration-200 mb-4"
                          >
                            {isExpanded ? (
                              <>
                                <ChevronUp className="w-4 h-4" />
                                Read Less
                              </>
                            ) : (
                              <>
                                <ChevronDown className="w-4 h-4" />
                                Read More
                              </>
                            )}
                          </button>
                          
                          {/* Expanded Content */}
                          {isExpanded && (
                            <div className="border-t border-gray-200 pt-4 space-y-4">
                              {/* Expanded Heading */}
                              {milestone.expandedHeading && (
                                <h4 className="font-bold text-emerald-900 text-base sm:text-lg mb-3">
                                  {milestone.expandedHeading}
                                </h4>
                              )}
                              
                              {/* Expanded Text Content */}
                              {milestone.expandedContent && (
                                <div className="prose prose-sm sm:prose-base max-w-none">
                                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                                    {milestone.expandedContent}
                                  </p>
                                </div>
                              )}
                              
                              {/* External Links */}
                              {milestone.externalLinks && milestone.externalLinks.length > 0 && (
                                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                                  <h5 className="font-semibold text-emerald-900 mb-3 text-sm sm:text-base">
                                    Related Articles & Coverage
                                  </h5>
                                  <div className="space-y-3">
                                    {milestone.externalLinks.map((link, linkIndex) => (
                                      <div key={linkIndex} className="flex items-start gap-2">
                                        <ExternalLink className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                          <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-emerald-700 hover:text-emerald-800 font-medium text-sm sm:text-base leading-tight block mb-1 hover:underline"
                                          >
                                            {link.title}
                                          </a>
                                          <span className="text-gray-500 text-xs sm:text-sm">{link.source}</span>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                              
                              {/* Facebook Album Embed */}
                              {milestone.facebookAlbum && (
                                <div className="mt-6">
                                  <h4 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">
                                    Photo Gallery - Amur Falcon Conservation
                                  </h4>
                                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                                    <div className="aspect-video w-full">
                                      <iframe
                                        src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(milestone.facebookAlbum)}&width=500&show_text=false&height=400&appId`}
                                        width="100%"
                                        height="400"
                                        style={{ border: 'none', overflow: 'hidden' }}
                                        scrolling="no"
                                        frameBorder="0"
                                        allowFullScreen
                                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                        className="w-full h-full"
                                        title="Amur Falcon Conservation Photos"
                                      />
                                    </div>
                                    <div className="p-3 sm:p-4 bg-gray-50 border-t">
                                      <p className="text-xs sm:text-sm text-gray-600">
                                        Swipe through the photos to see our conservation efforts in action.
                                        <a 
                                          href={milestone.facebookAlbum} 
                                          target="_blank" 
                                          rel="noopener noreferrer"
                                          className="text-emerald-600 hover:text-emerald-700 ml-2 font-medium"
                                        >
                                          View on Facebook →
                                        </a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Collaborators */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partners & Collaborators</h2>
            <p className="text-xl text-gray-600">Building conservation success through strategic partnerships</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-transparent rounded-lg flex items-center justify-center flex-shrink-0 p-1">
                    {partner.logo ? (
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="w-full h-full object-contain drop-shadow-sm"
                        style={{ background: 'transparent' }}
                      />
                    ) : (
                      <Award className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-emerald-600 text-xs sm:text-sm font-medium mb-1">{partner.type}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">{partner.name}</h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl text-emerald-200 mb-8">
            Join our mission to protect Nagaland's incredible biodiversity and support local communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-involved"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Support Our Work
            </Link>
            <Link
              to="/contact"
              className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;