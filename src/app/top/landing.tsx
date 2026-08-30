"use client";
import { useInView } from "react-intersection-observer";

export default function Top() {
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  const heightClass = "h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-screen max-h-[900px]";
  // 親コンテナの max-width に関わらず画面幅いっぱいに広げる
  const fullBleedClass = "w-screen relative left-1/2 -ml-[50vw]";

  return (
    <>
      {/* Top */}
      <div
        className={
          inView
            ? `relative ${fullBleedClass} ${heightClass} overflow-hidden bg-cover bg-no-repeat text-center`
            : `${fullBleedClass} ${heightClass} invisible`
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
            <span className="grow bg-linear-to-r from-transparent to-sky-100 rounded h-0.5 mb-5 sm:mb-10 lg:mb-20"></span>
            <div className="mb-5 sm:mb-10 lg:mb-20 bg-cyan-950/40 backdrop-blur-sm text-sky-50 p-2 sm:p-3 md:p-5 border-2 border-sky-100/70 relative">
              <h2 className="font-dancing text-sm sm:text-xl md:text-3xl font-bold whitespace-nowrap">
                MSC Bellissima Cruise Tour
              </h2>
            </div>
            <span className="grow bg-linear-to-l from-transparent to-sky-100 rounded h-0.5 mb-5 sm:mb-10 lg:mb-20"></span>
          </h3>
        </div>
      </div>
    </>
  );
}
