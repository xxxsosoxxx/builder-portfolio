import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

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
    src: "https://cdn.builder.io/api/v1/image/assets%2F32dbebdc41de4f02a397c4bcb49e3699%2F7f99b673551e42f7a1aa9f5d299383b4",
    title: "Editorial Elegance",
    date: "2024",
  },
  {
    id: 2,
    src: "https://cdn.builder.io/api/v1/image/assets%2F32dbebdc41de4f02a397c4bcb49e3699%2Ffb7ebdc4c25d4040959fabaaeb0b73c2",
    title: "Minimal Portrait",
    date: "2024",
  },
  {
    id: 3,
    src: "https://cdn.builder.io/api/v1/image/assets%2F32dbebdc41de4f02a397c4bcb49e3699%2F1b24dd9abce746b59f806c1a5236ccf4",
    title: "Studio Session",
    date: "2023",
  },
  {
    id: 4,
    src: "https://cdn.builder.io/api/v1/image/assets%2F32dbebdc41de4f02a397c4bcb49e3699%2F39ae354a5de64b75a7918a8dcc956a79",
    title: "Fashion Week",
    date: "2023",
  },
  {
    id: 5,
    src: "https://cdn.builder.io/api/v1/image/assets%2F32dbebdc41de4f02a397c4bcb49e3699%2F4dc6d7a13a9647ae957989d7d2e2c7b1",
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
    src: "https://cdn.builder.io/api/v1/image/assets%2F32dbebdc41de4f02a397c4bcb49e3699%2F65820ec40cc545acab7282e498c68871",
    title: "Natural Light",
    date: "2022",
  },
  {
    id: 8,
    src: "https://cdn.builder.io/api/v1/image/assets%2F32dbebdc41de4f02a397c4bcb49e3699%2F895184b13b3a4547b9b9ed67507d64cb",
    title: "Geometric Lines",
    date: "2022",
  },
  {
    id: 9,
    src: "https://cdn.builder.io/api/v1/image/assets%2F32dbebdc41de4f02a397c4bcb49e3699%2Fb7e390106dde40a4953a6198c465cc92",
    title: "Avant-garde",
    date: "2022",
  },
  {
    id: 10,
    src: "https://cdn.builder.io/api/v1/image/assets%2F32dbebdc41de4f02a397c4bcb49e3699%2Fca83b3a31a5a44558340cf8cf52254fd",
    title: "Contemporary",
    date: "2022",
  },
  {
    id: 11,
    src: "https://cdn.builder.io/api/v1/image/assets%2F32dbebdc41de4f02a397c4bcb49e3699%2F0f272da6581b4517947777272ae9bafd",
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

function GalleryItem({
  photo,
  index,
  onOpen,
}: {
  photo: Photo;
  index: number;
  onOpen: (photo: Photo) => void;
}) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      ref={ref}
      className={`group relative break-inside-avoid cursor-pointer overflow-hidden bg-white border border-gray-100 hover:border-gray-300 transition-all duration-700 hover:shadow-2xl ${
        isVisible
          ? "animate-fade-in opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      onClick={() => onOpen(photo)}
      style={{
        transitionDelay: `${index * 0.05}s`,
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        {/* Loading placeholder */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
          </div>
        )}

        <img
          src={photo.src}
          alt={photo.title}
          className={`w-full h-auto object-cover transition-all duration-700 ease-out group-hover:scale-110 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
      </div>

      {/* Info overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0">
        <h3 className="text-white font-heading font-semibold text-lg mb-1">
          {photo.title}
        </h3>
        <p className="text-white/80 text-caption">{photo.date}</p>
      </div>

      {/* Hover shadow effect */}
      <div className="absolute -inset-2 bg-black/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 blur-sm" />
    </div>
  );
}

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedPhoto]);

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
          <div className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3 xl:columns-4 p-4 masonry-grid">
            {portfolioPhotos.map((photo, index) => (
              <GalleryItem
                key={photo.id}
                photo={photo}
                index={index}
                onOpen={openLightbox}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 lightbox-enter"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-60 text-white hover:text-gray-300 transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          {/* Navigation buttons */}
          {currentIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto(-1);
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
              aria-label="Previous image"
            >
              <ChevronLeft size={48} />
            </button>
          )}

          {currentIndex < portfolioPhotos.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto(1);
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
              aria-label="Next image"
            >
              <ChevronRight size={48} />
            </button>
          )}

          {/* Main image */}
          <div
            className="relative max-w-full max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
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
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm bg-black/30 px-3 py-1 rounded-full">
            {currentIndex + 1} / {portfolioPhotos.length}
          </div>
        </div>
      )}
    </>
  );
}
