import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Photo {
  id: number;
  src: string;
  title: string;
  date: string;
  description?: string;
}

const portfolioPhotos: Photo[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Editorial Elegance",
    date: "2024",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Minimal Portrait",
    date: "2024",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Studio Session",
    date: "2023",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Fashion Week",
    date: "2023",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Runway Ready",
    date: "2023",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1506629905607-f686f47a4418?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Black & White",
    date: "2023",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Natural Light",
    date: "2022",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1512310604669-443f26c35f52?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Geometric Lines",
    date: "2022",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Avant-garde",
    date: "2022",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Contemporary",
    date: "2022",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1500336624523-d727130c3328?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Vintage Inspired",
    date: "2021",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1494790108755-2616c1c32ef8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Urban Portrait",
    date: "2021",
  },
];

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;

      switch (e.key) {
        case "Escape":
          setSelectedPhoto(null);
          break;
        case "ArrowLeft":
          navigatePhoto(-1);
          break;
        case "ArrowRight":
          navigatePhoto(1);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto, currentIndex]);

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
    setCurrentIndex(portfolioPhotos.findIndex((p) => p.id === photo.id));
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: number) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < portfolioPhotos.length) {
      setCurrentIndex(newIndex);
      setSelectedPhoto(portfolioPhotos[newIndex]);
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="w-full bg-white">
        <div className="mx-auto max-w-none px-0">
          <div className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3 xl:columns-4 p-4">
            {portfolioPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="group relative break-inside-avoid cursor-pointer overflow-hidden bg-white border border-gray-100 hover:border-gray-300 transition-all duration-500"
                onClick={() => openLightbox(photo)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

                  {/* Shadow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl" />
                </div>

                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0">
                  <h3 className="text-white font-heading font-semibold text-lg mb-1">
                    {photo.title}
                  </h3>
                  <p className="text-white/80 text-caption">{photo.date}</p>
                </div>

                {/* Hover shadow effect */}
                <div className="absolute -inset-4 bg-black/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 blur-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-60 text-white hover:text-gray-300 transition-colors duration-300"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          {/* Navigation buttons */}
          {currentIndex > 0 && (
            <button
              onClick={() => navigatePhoto(-1)}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft size={48} />
            </button>
          )}

          {currentIndex < portfolioPhotos.length - 1 && (
            <button
              onClick={() => navigatePhoto(1)}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors duration-300"
              aria-label="Next image"
            >
              <ChevronRight size={48} />
            </button>
          )}

          {/* Main image */}
          <div className="relative max-w-full max-h-full flex items-center justify-center">
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              className="max-w-full max-h-[90vh] object-contain"
            />

            {/* Image info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h2 className="text-white text-2xl font-heading font-semibold mb-2">
                {selectedPhoto.title}
              </h2>
              <p className="text-white/80 text-lg">{selectedPhoto.date}</p>
              {selectedPhoto.description && (
                <p className="text-white/70 text-body mt-2">
                  {selectedPhoto.description}
                </p>
              )}
            </div>
          </div>

          {/* Image counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentIndex + 1} / {portfolioPhotos.length}
          </div>
        </div>
      )}
    </>
  );
}
