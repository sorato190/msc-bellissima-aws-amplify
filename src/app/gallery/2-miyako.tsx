'use client'

import { useInView } from 'react-intersection-observer';

export default function Miyako() {

  const { ref, inView } = useInView({
    // ref要素が現れてから50px過ぎたら
    // rootMargin: "-100px",
    threshold: 0.6,
    // 最初の一度だけ実行
    // triggerOnce: true,
  });

  return (
    <>
      {/* デッキ15 ビュッフェの紹介 */}
      {/* <!-- title - start --> */}
      <div className="mt-5 mb-5 md:mt-8 md:mb-8">
        <div className={inView ? "animate-tracking-in-expand" : "nvisible"} ref={ref}>
          <h2 className="flex flex-row flex-nowrap items-center mt-24">
            <span className="grow block border-t border-blue-700"></span>
            <span className="font-lora flex-none block mx-10 px-6 py-2.5 text-xl rounded leading-none font-medium bg-sky-500 text-white">
              2023/08/04 宮古
            </span>
            <span className="grow block border-t border-blue-700"></span>
          </h2>
        </div>
      </div>
      {/* <!-- title - end --> */}

      {/* <!-- text - start --> */}
      <div className={inView ? "animate-slide-top" : "invisible"} ref={ref}>
        <p className="mx-auto text-center max-w-(--breakpoint-lg) text-gray-900 md:text-xl">オプショナルツアーで有名どころを観光<br />
          浄土ヶ浜、日本三大鍾乳洞の「龍泉洞」など。ホテルで昼食を食べたが、宮古として瓶に詰められた海鮮を売り出し中らしい。美味しかった。</p>
      </div>
      {/* <!-- text - end --> */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
        {/* <!-- image - start --> */}
        <a href="#" className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
          <img src="/gallery/miyako-1.jpg" loading="lazy" alt="Photo by Sorato Ozaki" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        </a>
        {/* <!-- image - end --> */}

        {/* <!-- image - start --> */}
        <a href="#" className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
          <img src="/gallery/miyako-2.jpg" loading="lazy" alt="Photo by Sorato Ozaki" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        </a>
        {/* <!-- image - end --> */}

        {/* <!-- image - start --> */}
        <a href="#" className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
          <img src="/gallery/miyako-3.jpg" loading="lazy" alt="Photo by Sorato Ozaki" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        </a>
        {/* <!-- image - end --> */}
      </div>
    </>
  )
}