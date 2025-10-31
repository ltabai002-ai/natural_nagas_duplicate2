import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Image as ImageIcon } from 'lucide-react';
import Lightbox from '../components/Lightbox';

const Gallery = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('gdp');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGallery, setCurrentGallery] = useState<Array<{url: string; title: string; description: string}>>([]);

  const toggleExpanded = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const openLightbox = (gallery: Array<{url: string; title: string; description: string}>, index: number) => {
    setCurrentGallery(gallery);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateLightbox = (index: number) => {
    setCurrentImageIndex(index);
  };

  const getGoogleDriveImageUrl = (url: string, size: string = 'w800') => {
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (fileIdMatch) {
      return `https://drive.google.com/thumbnail?id=${fileIdMatch[1]}&sz=${size}`;
    }
    return url;
  };

  const galleryData = {
    gdp: {
      title: 'Green Dream Project (GDP)',
      subsections: [
        {
          title: 'Chunglikha Visit',
          photos: [
            {
              url: '/images/chunglikha-visit/_MG_8303.webp',
              title: 'Community Assembly Hall Meeting',
              description: 'Community members gathered inside Chunglikha Community Hall for environmental awareness session'
            },
            {
              url: '/images/chunglikha-visit/_MG_8378.webp',
              title: 'Group Photo at Chunglikha Community Hall',
              description: 'Team and village representatives at Chunglikha Community Hall showcasing community partnership'
            },
            {
              url: '/images/chunglikha-visit/_MG_8322.webp',
              title: 'Community Village Walk',
              description: 'Team and community members walking through village areas and green spaces during site visit'
            },
            {
              url: '/images/chunglikha-visit/_MG_8354.webp',
              title: 'Forest Path Documentation',
              description: 'Team documenting conservation areas and natural pathways through forested village areas'
            },
            {
              url: '/images/chunglikha-visit/IMG_3238.webp',
              title: 'Community Leader Presentation',
              description: 'Village leader presenting statistics and council information with community representatives'
            },
            {
              url: '/images/chunglikha-visit/IMG_3169.webp',
              title: 'Waste Management Initiative',
              description: 'Traditional basket collection system used for community cleanliness and waste management drive'
            }
          ]
        },
        {
          title: 'Exposure visit to the cleanest village in Nagaland',
          photos: [
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
            },
            {
              url: '/images/gdp-activities/ecotourism workshop on homestays.webp',
              title: 'Ecotourism Workshop on Homestays',
              description: 'Community workshop promoting sustainable ecotourism through homestay development and local participation'
            }
          ]
        },
        {
          title: 'Green Dream Project (GDP) Water Table Recharge',
          photos: [
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
          ]
        }
      ]
    },
    jica: {
      title: 'JICA NFMP Project',
      photos: [
        {
          url: '/images/jica-nfmp/main/jica_nfmp_main.jpg',
          title: 'JICA NFMP Project',
          description: 'Natural Forest Management Project Partnership with 24 villages across Wokha District'
        }
      ]
    },
    element: {
      title: 'ELEMENT World Bank Project',
      photos: [
        {
          url: '/images/element-worldbank/main/element_main.jpg',
          title: 'ELEMENT World Bank Project',
          description: 'Enhancing Landscape and Ecosystem Management across 23 villages in two Protected Forest Areas'
        }
      ]
    },
    amurFalcon: {
      title: 'Amur Falcon Conservation',
      subsections: [
        {
          title: 'Historic MOU Signing with Villages',
          photos: [
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
          ]
        },
        {
          title: 'Bird for Bird Initiative',
          photos: [
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
          ]
        },
        {
          title: 'Community Patrolling Squad',
          photos: [
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
          ]
        }
      ]
    },
    blackTurtle: {
      title: 'Black Soft-shell Turtle Conservation',
      photos: [
        {
          url: 'https://drive.google.com/thumbnail?id=1N7Q0yFP7aYWye6n9fYJn_35IWNzSNb3Q&sz=w1000',
          title: 'Black Soft-shell Turtle Discovery',
          description: 'Species rediscovered at Wozhu Tsophow wetlands, Old Akuk village - Back from extinction'
        },
        {
          url: 'https://drive.google.com/thumbnail?id=1KG26n10hAQsEH1bRd4x7xjpZZjSeOKlb&sz=w1000',
          title: 'Conservation Documentation',
          description: 'Natural Nagas team documenting the rediscovered species'
        }
      ]
    },
    hecWorkshops: {
      title: 'Human Elephant Conflict Mitigation',
      photos: [
        {
          url: getGoogleDriveImageUrl('https://drive.google.com/file/d/13_RFe5MAKnEhhOTEigPNgMtteNT--WKd/view?usp=sharing'),
          title: 'Workshop on HEC August 2025',
          description: 'Comprehensive workshop addressing human-elephant conflict mitigation strategies'
        },
        {
          url: getGoogleDriveImageUrl('https://drive.google.com/file/d/1SsDcDcL_4Aa7oUzwpdeICCk187Ua_Zrc/view?usp=sharing'),
          title: 'Workshop on Community Reserves',
          description: 'Natural Nagas participated in Workshop on Community Reserves - Peaceful Coexistence with the Wild'
        },
        {
          url: getGoogleDriveImageUrl('https://drive.google.com/file/d/1bjBptpKDESE50ziUr69Nfi2H_wM6_1cZ/view?usp=sharing'),
          title: 'Human/Elephant Conflict Mitigation Workshop',
          description: 'Comprehensive workshop on conflict mitigation strategies and community-based solutions'
        },
        {
          url: getGoogleDriveImageUrl('https://drive.google.com/file/d/1t6dIw-lqDWQrLJsufuvz-AjJGNdMB9HQ/view?usp=sharing'),
          title: 'AAE (Animal Action Education) Drawings',
          description: 'Art Contest with theme "Elephants Never Forget" covering 40+ schools - Sponsored by IFAW and WTI'
        },
        {
          url: getGoogleDriveImageUrl('https://drive.google.com/file/d/10XNkAMGyaidgTdPDBC1ASQCd8C8CGkXX/view?usp=sharing'),
          title: 'Elephants Return After 100 Years',
          description: 'Historic documentation of elephants returning to areas after a century'
        }
      ]
    },
    dhandeli: {
      title: 'Dhandeli Karnataka Training and Exposure Trip',
      photos: [
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
      ].map((url, i) => ({
        url: getGoogleDriveImageUrl(url, 'w600'),
        title: `Dhandeli Karnataka Training ${i + 1}`,
        description: 'Training and exposure trip to Dhandeli Karnataka for conservation capacity building'
      }))
    },
    wed2025: {
      title: 'World Environment Day 2025',
      photos: [
        {
          url: getGoogleDriveImageUrl('https://drive.google.com/file/d/17ED7XbDedZMMgn_QIMHewgEjozRrlgr1/view?usp=sharing'),
          title: 'World Environment Day 2025',
          description: 'Theme: "Ending Plastic Pollution Globally" - Awareness and action campaign at Longphijü'
        }
      ]
    },
    earthDay: {
      title: 'Earth Day 2022 Activities',
      photos: [
        'https://drive.google.com/file/d/1xjcfvnfAz5UYlknCGMsWnhOOCePPgjvO/view?usp=drive_link',
        'https://drive.google.com/file/d/1uSsFHetYnno2t1m5zLmH1-F-KR6FH6Nk/view?usp=drive_link',
        'https://drive.google.com/file/d/1jE6zH1PGfA657PuLMucnQ3Hnsu2TX2b3/view?usp=drive_link',
        'https://drive.google.com/file/d/1Y6CKqiFZUJQ9VHoakI00TevQxjWVPuAe/view?usp=drive_link',
        'https://drive.google.com/file/d/1CUdJCqDv7vGToAlF-d0zzzOSKztFzJ8I/view?usp=drive_link'
      ].map((url, i) => ({
        url: getGoogleDriveImageUrl(url, 'w600'),
        title: `Earth Day 2022 Activity ${i + 1}`,
        description: 'Community participation in Earth Day 2022 environmental awareness and conservation initiatives'
      }))
    },
    otherActivities: {
      title: 'Community Activities & Events',
      photos: [
        {
          url: getGoogleDriveImageUrl('https://drive.google.com/file/d/1NcsoHJnU6ecxdZ_of5NQWJonvM5pn2A_/view?usp=drive_link'),
          title: 'Doyang Clean up Drive',
          description: 'Addressing the catastrophic invasion of toxic waste at the Doyang reservoir in Wokha Nagaland'
        },
        {
          url: getGoogleDriveImageUrl('https://drive.google.com/file/d/1MLfiMzSd_C2Ac3uVLAhJ10c46SPYXklu/view?usp=drive_link'),
          title: 'International Women\'s Day',
          description: 'Celebrating women\'s contributions to environmental conservation and community development'
        },
        {
          url: getGoogleDriveImageUrl('https://drive.google.com/file/d/1GS4F_gt66YWM4dGszZX86kBmiMARyfec/view?usp=drive_link'),
          title: 'Awareness Campaigns',
          description: 'Community awareness and education programs for environmental conservation and wildlife protection'
        },
        {
          url: getGoogleDriveImageUrl('https://drive.google.com/file/d/1t6dIw-lqDWQrLJsufuvz-AjJGNdMB9HQ/view?usp=drive_link'),
          title: 'AAE School Activities',
          description: 'Animal Action Education Art Contest covering 40+ schools - Sponsored by IFAW and WTI'
        }
      ]
    },
    plantation: {
      title: 'Plantation Drives',
      photos: [
        'https://drive.google.com/file/d/1QjG9UyC9c97VEVQaCOqU1UrJYhN5Otjg/view?usp=drive_link',
        'https://drive.google.com/file/d/1XZ-LdTcXWvJ-DfzZ_2YZT-vgjyMvPOA2/view?usp=drive_link',
        'https://drive.google.com/file/d/1XeGp1PSlVLb37xNxDaEa_gcI76mftmHE/view?usp=drive_link',
        'https://drive.google.com/file/d/1FaGrj5-jBDwuvOkdciYOIXObVGEyl188/view?usp=drive_link',
        'https://drive.google.com/file/d/1Wse3P7aAzdK8hwrwkKS2S-pcitfjs2YH/view?usp=drive_link',
        'https://drive.google.com/file/d/1D9OV9PInVkAVefQBGafgmq3BvyEF45qN/view?usp=drive_link'
      ].map((url, i) => ({
        url: getGoogleDriveImageUrl(url, 'w600'),
        title: `Plantation Drive ${i + 1}`,
        description: '500 saplings of Rhododendron Arboreum at Mt. Tiyi with Wokha Village Council'
      }))
    }
  };

  const renderPhotoGrid = (photos: Array<{url: string; title: string; description: string}>, galleryKey: string) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map((photo, idx) => (
        <div
          key={`${galleryKey}-${idx}`}
          className="group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
          onClick={() => openLightbox(photos, idx)}
        >
          <div className="relative aspect-square overflow-hidden">
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                <div className="text-sm font-semibold line-clamp-1">{photo.title}</div>
              </div>
            </div>
          </div>
          <div className="p-3">
            <p className="text-gray-600 text-sm line-clamp-2">{photo.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const totalPhotos = Object.values(galleryData).reduce((total, section) => {
    if ('subsections' in section) {
      return total + section.subsections.reduce((sum, sub) => sum + sub.photos.length, 0);
    }
    return total + section.photos.length;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Photo Gallery</h1>
          <p className="text-xl md:text-2xl text-emerald-200 max-w-3xl mx-auto mb-6">
            Visual documentation of Natural Nagas' conservation journey across Nagaland
          </p>
          <div className="flex items-center justify-center gap-2 text-emerald-200">
            <ImageIcon className="w-5 h-5" />
            <span className="font-semibold">{totalPhotos}+ Photos</span>
            <span className="mx-2">•</span>
            <span>13+ Years of Conservation</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleExpanded('gdp')}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-gray-900">{galleryData.gdp.title}</h2>
                  <p className="text-gray-600">
                    {galleryData.gdp.subsections.reduce((sum, sub) => sum + sub.photos.length, 0)} photos
                  </p>
                </div>
              </div>
              {expandedSection === 'gdp' ? (
                <ChevronUp className="w-6 h-6 text-gray-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400" />
              )}
            </button>
            {expandedSection === 'gdp' && (
              <div className="p-6 pt-0 space-y-8">
                {galleryData.gdp.subsections.map((subsection, subIdx) => (
                  <div key={subIdx}>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{subsection.title}</h3>
                    {renderPhotoGrid(subsection.photos, `gdp-${subIdx}`)}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleExpanded('jica')}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-gray-900">{galleryData.jica.title}</h2>
                  <p className="text-gray-600">{galleryData.jica.photos.length} photos</p>
                </div>
              </div>
              {expandedSection === 'jica' ? (
                <ChevronUp className="w-6 h-6 text-gray-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400" />
              )}
            </button>
            {expandedSection === 'jica' && (
              <div className="p-6 pt-0">
                {renderPhotoGrid(galleryData.jica.photos, 'jica')}
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleExpanded('element')}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-gray-900">{galleryData.element.title}</h2>
                  <p className="text-gray-600">{galleryData.element.photos.length} photos</p>
                </div>
              </div>
              {expandedSection === 'element' ? (
                <ChevronUp className="w-6 h-6 text-gray-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400" />
              )}
            </button>
            {expandedSection === 'element' && (
              <div className="p-6 pt-0">
                {renderPhotoGrid(galleryData.element.photos, 'element')}
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleExpanded('amurFalcon')}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-amber-600" />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-gray-900">{galleryData.amurFalcon.title}</h2>
                  <p className="text-gray-600">
                    {galleryData.amurFalcon.subsections.reduce((sum, sub) => sum + sub.photos.length, 0)} photos
                  </p>
                </div>
              </div>
              {expandedSection === 'amurFalcon' ? (
                <ChevronUp className="w-6 h-6 text-gray-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400" />
              )}
            </button>
            {expandedSection === 'amurFalcon' && (
              <div className="p-6 pt-0 space-y-8">
                {galleryData.amurFalcon.subsections.map((subsection, subIdx) => (
                  <div key={subIdx}>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{subsection.title}</h3>
                    {renderPhotoGrid(subsection.photos, `amur-${subIdx}`)}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleExpanded('blackTurtle')}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-teal-600" />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-gray-900">{galleryData.blackTurtle.title}</h2>
                  <p className="text-gray-600">{galleryData.blackTurtle.photos.length} photos</p>
                </div>
              </div>
              {expandedSection === 'blackTurtle' ? (
                <ChevronUp className="w-6 h-6 text-gray-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400" />
              )}
            </button>
            {expandedSection === 'blackTurtle' && (
              <div className="p-6 pt-0">
                {renderPhotoGrid(galleryData.blackTurtle.photos, 'blackTurtle')}
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleExpanded('hecWorkshops')}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-gray-900">{galleryData.hecWorkshops.title}</h2>
                  <p className="text-gray-600">{galleryData.hecWorkshops.photos.length} photos</p>
                </div>
              </div>
              {expandedSection === 'hecWorkshops' ? (
                <ChevronUp className="w-6 h-6 text-gray-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400" />
              )}
            </button>
            {expandedSection === 'hecWorkshops' && (
              <div className="p-6 pt-0">
                {renderPhotoGrid(galleryData.hecWorkshops.photos, 'hecWorkshops')}
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleExpanded('dhandeli')}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-gray-900">{galleryData.dhandeli.title}</h2>
                  <p className="text-gray-600">{galleryData.dhandeli.photos.length} photos</p>
                </div>
              </div>
              {expandedSection === 'dhandeli' ? (
                <ChevronUp className="w-6 h-6 text-gray-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400" />
              )}
            </button>
            {expandedSection === 'dhandeli' && (
              <div className="p-6 pt-0">
                {renderPhotoGrid(galleryData.dhandeli.photos, 'dhandeli')}
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleExpanded('wed2025')}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-lime-600" />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-gray-900">{galleryData.wed2025.title}</h2>
                  <p className="text-gray-600">{galleryData.wed2025.photos.length} photos</p>
                </div>
              </div>
              {expandedSection === 'wed2025' ? (
                <ChevronUp className="w-6 h-6 text-gray-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400" />
              )}
            </button>
            {expandedSection === 'wed2025' && (
              <div className="p-6 pt-0">
                {renderPhotoGrid(galleryData.wed2025.photos, 'wed2025')}
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleExpanded('earthDay')}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-sky-600" />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-gray-900">{galleryData.earthDay.title}</h2>
                  <p className="text-gray-600">{galleryData.earthDay.photos.length} photos</p>
                </div>
              </div>
              {expandedSection === 'earthDay' ? (
                <ChevronUp className="w-6 h-6 text-gray-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400" />
              )}
            </button>
            {expandedSection === 'earthDay' && (
              <div className="p-6 pt-0">
                {renderPhotoGrid(galleryData.earthDay.photos, 'earthDay')}
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleExpanded('otherActivities')}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-pink-600" />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-gray-900">{galleryData.otherActivities.title}</h2>
                  <p className="text-gray-600">{galleryData.otherActivities.photos.length} photos</p>
                </div>
              </div>
              {expandedSection === 'otherActivities' ? (
                <ChevronUp className="w-6 h-6 text-gray-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400" />
              )}
            </button>
            {expandedSection === 'otherActivities' && (
              <div className="p-6 pt-0">
                {renderPhotoGrid(galleryData.otherActivities.photos, 'otherActivities')}
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleExpanded('plantation')}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-gray-900">{galleryData.plantation.title}</h2>
                  <p className="text-gray-600">{galleryData.plantation.photos.length} photos</p>
                </div>
              </div>
              {expandedSection === 'plantation' ? (
                <ChevronUp className="w-6 h-6 text-gray-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400" />
              )}
            </button>
            {expandedSection === 'plantation' && (
              <div className="p-6 pt-0">
                {renderPhotoGrid(galleryData.plantation.photos, 'plantation')}
              </div>
            )}
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={currentGallery}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </div>
  );
};

export default Gallery;
