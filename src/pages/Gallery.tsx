import React, { useState } from 'react';
import { X, Play, Eye, Calendar } from 'lucide-react';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const photos = [
    {
      id: 1,
      title: 'Amur Falcon in Flight',
      category: 'wildlife',
      image: 'https://images.pexels.com/photos/3646176/pexels-photo-3646176.jpeg',
      description: 'Magnificent Amur Falcon captured during migration stopover in Nagaland'
    },
    {
      id: 2,
      title: 'Community Forest Walk',
      category: 'community',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      description: 'Local community members participating in educational forest walk'
    },
    {
      id: 3,
      title: 'Green Dream Village',
      category: 'community',
      image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg',
      description: 'New Riphyim village showcasing sustainable development practices'
    },
    {
      id: 4,
      title: 'Asian Elephant',
      category: 'wildlife',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg',
      description: 'Asian elephant in natural habitat, part of conflict mitigation program'
    },
    {
      id: 5,
      title: 'Student Conservation Program',
      category: 'education',
      image: 'https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg',
      description: 'Students participating in hands-on conservation education'
    },
    {
      id: 6,
      title: 'Forest Conservation Area',
      category: 'conservation',
      image: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg',
      description: 'Protected forest area under community management'
    },
    {
      id: 7,
      title: 'Traditional Knowledge Sharing',
      category: 'community',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      description: 'Elder sharing traditional ecological knowledge with younger generation'
    },
    {
      id: 8,
      title: 'Bird Watching Session',
      category: 'education',
      image: 'https://images.pexels.com/photos/1661546/pexels-photo-1661546.jpeg',
      description: 'Community bird watching and identification session'
    },
    {
      id: 9,
      title: 'Hornbill Sighting',
      category: 'wildlife',
      image: 'https://images.pexels.com/photos/1661546/pexels-photo-1661546.jpeg',
      description: 'Great Indian Hornbill spotted in Nagaland forests'
    },
    {
      id: 10,
      title: 'Tree Planting Drive',
      category: 'conservation',
      image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg',
      description: 'Community tree planting initiative for forest restoration'
    },
    {
      id: 11,
      title: 'Youth Conservation Camp',
      category: 'education',
      image: 'https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg',
      description: 'Young conservationists learning field research techniques'
    },
    {
      id: 12,
      title: 'Amur Falcon Festival',
      category: 'community',
      image: 'https://images.pexels.com/photos/3646176/pexels-photo-3646176.jpeg',
      description: 'Annual Amur Falcon Festival celebrating conservation success'
    }
  ];

  const videos = [
    {
      id: 'v1',
      title: 'Wings of Hope: Amur Falcon Documentary',
      thumbnail: 'https://images.pexels.com/photos/3646176/pexels-photo-3646176.jpeg',
      duration: '45:30',
      description: 'Complete documentary on Amur Falcon conservation efforts in Nagaland',
      category: 'documentary'
    },
    {
      id: 'v2',
      title: 'Green Dreams Village Tour',
      thumbnail: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg',
      duration: '12:45',
      description: 'Virtual tour of the transformed New Riphyim village',
      category: 'community'
    },
    {
      id: 'v3',
      title: 'Conservation Education in Action',
      thumbnail: 'https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg',
      duration: '8:20',
      description: 'Students learning about wildlife conservation through hands-on activities',
      category: 'education'
    },
    {
      id: 'v4',
      title: 'Elephant Corridor Project',
      thumbnail: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg',
      duration: '15:10',
      description: 'Creating safe passage corridors for Asian elephants',
      category: 'wildlife'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Media', count: photos.length + videos.length },
    { id: 'wildlife', label: 'Wildlife', count: photos.filter(p => p.category === 'wildlife').length + videos.filter(v => v.category === 'wildlife').length },
    { id: 'community', label: 'Community', count: photos.filter(p => p.category === 'community').length + videos.filter(v => v.category === 'community').length },
    { id: 'education', label: 'Education', count: photos.filter(p => p.category === 'education').length + videos.filter(v => v.category === 'education').length },
    { id: 'conservation', label: 'Conservation', count: photos.filter(p => p.category === 'conservation').length }
  ];

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  const filteredVideos = activeCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
          <p className="text-xl md:text-2xl text-emerald-200 max-w-3xl mx-auto">
            Visual stories of conservation success and community engagement
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      {(activeCategory === 'all' || filteredPhotos.length > 0) && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Photo Gallery</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPhotos.map(photo => (
                <div 
                  key={photo.id}
                  className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
                  onClick={() => setSelectedMedia(photo)}
                >
                  <img 
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold mb-1">{photo.title}</h3>
                      <p className="text-sm text-gray-200 line-clamp-2">{photo.description}</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Eye className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Video Library */}
      {(activeCategory === 'all' || filteredVideos.length > 0) && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Video Library</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map(video => (
                <div 
                  key={video.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedMedia(video)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white text-emerald-600 rounded-full p-4 shadow-lg transform scale-110">
                        <Play className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {video.duration}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                      {video.title}
                    </h3>
                    <p className="text-gray-700 text-sm line-clamp-2">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Modal for Media Viewing */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
              
              <img 
                src={selectedMedia.image || selectedMedia.thumbnail}
                alt={selectedMedia.title}
                className="w-full h-96 object-cover rounded-t-2xl"
              />
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedMedia.title}</h3>
              <p className="text-gray-700 leading-relaxed">{selectedMedia.description}</p>
              
              {selectedMedia.duration && (
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Play className="w-5 h-5" />
                    <span>Duration: {selectedMedia.duration}</span>
                  </div>
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300">
                    Watch Full Video
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Gallery Highlights</h2>
            <p className="text-xl text-emerald-200">Capturing conservation moments since 2012</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-emerald-200">Wildlife Photos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">300+</div>
              <div className="text-emerald-200">Community Images</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-emerald-200">Video Stories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-emerald-200">Documentaries</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;