import React, { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxImage {
  url: string;
  title: string;
  description: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, currentIndex, onClose, onNavigate }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const currentImage = images[currentIndex];
  const totalImages = images.length;

  const minSwipeDistance = 50;

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setIsLoading(true);
      onNavigate(currentIndex - 1);
    }
  }, [currentIndex, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < totalImages - 1) {
      setIsLoading(true);
      onNavigate(currentIndex + 1);
    }
  }, [currentIndex, totalImages, onNavigate]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        handlePrevious();
        break;
      case 'ArrowRight':
        handleNext();
        break;
    }
  }, [onClose, handlePrevious, handleNext]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [handleKeyDown]);

  useEffect(() => {
    setIsLoading(true);
  }, [currentIndex]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <div className="absolute top-4 left-4 z-50 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
        <span className="text-white font-medium text-sm">
          {currentIndex + 1} / {totalImages}
        </span>
      </div>

      {currentIndex > 0 && (
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
        </button>
      )}

      {currentIndex < totalImages - 1 && (
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group"
          aria-label="Next image"
        >
          <ChevronRight className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
        </button>
      )}

      <div
        className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative w-full max-w-6xl max-h-[80vh] flex items-center justify-center">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
          )}

          <img
            src={currentImage.url}
            alt={currentImage.title}
            className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
            onLoad={() => setIsLoading(false)}
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        <div
          className="mt-6 max-w-3xl bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            {currentImage.title}
          </h3>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed">
            {currentImage.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
