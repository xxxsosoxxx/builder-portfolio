import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioPhotos } from "./portfolioPhotos";

export interface Photo {
  id: number;
  src: string;
  title: string;
  date: string;
  description?: string;
}

function GalleryItem({
  photo,
  index,
  onOpen,
  setRowSpan,
}: {
  photo: Photo;
  index: number;
  onOpen: (photo: Photo) => void;
  setRowSpan: (index: number, span: number) => void;
}) {
  const imgRef = useRef<HTMLImageElement>(null);

  // When image loads, measure its height and set grid row span
  const handleLoad = () => {
    if (imgRef.current) {
      // 1px is the grid auto-rows value below
      const rowHeight = 1;
      const height = imgRef.current.getBoundingClientRect().height;
      const span = Math.ceil(height / rowHeight);
      setRowSpan(index, span);
    }
  };

  return (
    <div
      className="group relative cursor-pointer overflow-hidden bg-white border border-gray-100 hover:border-gray-300 transition-all duration-700 hover:shadow-2xl rounded-lg"
      onClick={() => onOpen(photo)}
    >
      <div className="relative w-full overflow-hidden rounded-lg">
        <img
          ref={imgRef}
          src={photo.src}
          alt={photo.title}
          className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105 rounded-lg"
          loading="lazy"
          onLoad={handleLoad}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition duration-500 pointer-events-none z-20 rounded-lg" />

        {/* Text gradient */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 rounded-b-lg">
          <h3 className="text-white font-heading font-semibold text-lg mb-1 leading-tight">
            {photo.title}
          </h3>
          <p className="text-white/80 text-sm leading-snug">{photo.date}</p>
        </div>
      </div>
    </div>
  );
}

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [columnCount, setColumnCount] = useState(4);
  const [rowSpans, setRowSpans] = useState<number[]>(() =>
    Array(portfolioPhotos.length).fill(30)
  );

  // Responsive column count
  useEffect(() => {
    const updateColumnCount = () => {
      if (window.innerWidth >= 1280) setColumnCount(4); // xl
      else if (window.innerWidth >= 1024) setColumnCount(3); // lg
      else if (window.innerWidth >= 768) setColumnCount(2); // md
      else setColumnCount(1);
    };
    updateColumnCount();
    window.addEventListener("resize", updateColumnCount);
    return () => window.removeEventListener("resize", updateColumnCount);
  }, []);

  // Set row span for each image
  const setRowSpan = (index: number, span: number) => {
    setRowSpans((prev) => {
      const next = [...prev];
      next[index] = span;
      return next;
    });
  };

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
      {/* Masonry Grid */}
      <div className="w-full bg-white">
        <div className="mx-auto max-w-none px-0">
          <div
            className={`grid gap-4 p-4
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              auto-rows-[1px]`}
          >
            {portfolioPhotos.map((photo, index) => (
              <div
                key={photo.id}
                style={{
                  gridRowEnd: `span ${rowSpans[index]}`,
                }}
              >
                <GalleryItem
                  photo={photo}
                  index={index}
                  onOpen={openLightbox}
                  setRowSpan={setRowSpan}
                />
              </div>
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
