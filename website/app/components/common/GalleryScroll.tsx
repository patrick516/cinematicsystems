"use client";

const ALL_PICTURES = [
  "/pictures/WhatsApp-Image-2026-05-08-at-13.00.54.jpeg",
  "/pictures/WhatsApp-Image-2026-05-08-at-13.00.54-1.jpeg",
  "/pictures/WhatsApp-Image-2026-05-08-at-13.00.55.jpeg",
  "/pictures/WhatsApp-Image-2026-05-08-at-13.00.55-1.jpeg",
  "/pictures/WhatsApp-Image-2026-05-08-at-13.00.56.jpeg",
  "/pictures/WhatsApp-Image-2026-05-08-at-13.00.57.jpeg",
  "/pictures/WhatsApp-Image-2026-05-08-at-13.00.57-1.jpeg",
  "/pictures/WhatsApp-Image-2026-05-08-at-13.00.57-2.jpeg",
  "/pictures/WhatsApp-Image-2026-05-08-at-13.00.58.jpeg",
  "/pictures/WhatsApp-Image-2026-05-08-at-13.00.58-1.jpeg",
  "/pictures/WhatsApp-Image-2026-05-08-at-13.00.59.jpeg",
  "/pictures/WhatsApp-Image-2026-05-08-at-13.00.59-1.jpeg",
  "/pictures/WhatsApp-Image-2026-05-08-at-13.00.59-2.jpeg",
  "/pictures/WhatsApp-Image-2026-05-08-at-13.00.59-3.jpeg",
  "/pictures/WhatsApp-Image-2026-05-08-at-13.01.00.jpeg",
  "/pictures/WhatsApp-Image-2026-05-08-at-13.01.00-1.jpeg",
  "/pictures/WhatsApp-Image-2026-05-08-at-13.01.00-2.jpeg",
  "/pictures/WhatsApp-Image-2026-05-08-at-13.01.01.jpeg",
  "/pictures/WhatsApp-Image-2026-05-08-at-13.01.01-1.jpeg",
  "/pictures/WhatsApp-Image-2026-05-08-at-13.01.01-2.jpeg",
  "/pictures/WhatsApp-Image-2026-05-08-at-13.01.01-3.jpeg",
  "/pictures/WhatsApp-Image-2026-05-08-at-13.01.02.jpeg",
];

// Duplicate for seamless infinite loop
const PICTURES = [...ALL_PICTURES, ...ALL_PICTURES];

type Props = {
  serviceName: string; // e.g. "CCTV Installation" — used for alt text
};

export default function GalleryScroll({ serviceName }: Props) {
  return (
    <div className="mb-14">
      <p className="text-sm font-semibold text-gray-700 mb-3">Our Work</p>
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex gap-3 animate-scroll-left"
          style={{ width: "max-content" }}
        >
          {PICTURES.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-56 h-40 rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-gray-100"
            >
              <img
                src={src}
                alt={`${serviceName} installation by Cinematic Systems Johannesburg ${(i % ALL_PICTURES.length) + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
