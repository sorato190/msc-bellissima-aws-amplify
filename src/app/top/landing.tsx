"use client";
import { useInView } from "react-intersection-observer";

export default function Top() {
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  const heightClass = "h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-screen max-h-[900px]";

  return (
    <>
      {/* Top */}
      <div
        className={
          inView
            ? `relative ${heightClass} overflow-hidden bg-cover bg-no-repeat text-center`
            : `${heightClass} invisible`
        }
        ref={ref}
      >
        {/* 背景画像 */}
        <img
          src="/top/top-msc-bellissima.jpg"
          loading="lazy"
          alt="Photo by Sorato Ozaki"
          className="h-full w-full object-cover object-center z-0"
        />

        {/* テキストオーバーレイ */}
        <div className="absolute inset-0 z-10 flex items-end justify-center px-4">
          <h3 className="flex items-center w-full">
            <span className="grow bg-linear-to-r from-transparent to-gray-200 rounded h-0.5 mb-5 sm:mb-10 lg:mb-20"></span>
            <div className="mb-5 sm:mb-10 lg:mb-20 bg-gray-400 bg-opacity-50 text-gray-200 p-2 sm:p-3 md:p-5 border-2 border-gray-200 relative">
              <h2 className="font-dancing text-sm sm:text-xl md:text-3xl font-bold whitespace-nowrap">
                MSC Bellissima Cruise Tour
              </h2>
            </div>
            <span className="grow bg-linear-to-l from-transparent to-gray-200 rounded h-0.5 mb-5 sm:mb-10 lg:mb-20"></span>
          </h3>
        </div>
      </div>
    </>
  );
}
