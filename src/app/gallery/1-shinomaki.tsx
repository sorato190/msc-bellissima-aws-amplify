'use client'

import { useInView } from 'react-intersection-observer';

export default function Ishinomaki() {

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
      {/* デザインサンプル
      <div className="relative max-w-(--breakpoint-xl) p-4 px-4 mx-auto bg-white sm:px-6 lg:px-8 py-26 lg:mt-20">
        <div className="relative">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
              <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
                Interactive
              </p>
              <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9">
                Interactivity between team members is the key of the success.
              </h4>
              <p className="mt-4 text-lg leading-6 text-gray-500">
                Build a simply and powered collaborative space for all your team. Track, share, measure, you have a fully control, it&#x27;s never be simply and efficient.
              </p>
              <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex items-center justify-center shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full drark:bg-transparent">
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                        </path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base font-medium leading-6 text-gray-500">
                      Live modifications
                    </span>
                  </div>
                </li>
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex items-center justify-center shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full drark:bg-transparent">
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                        </path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base font-medium leading-6 text-gray-500">
                      Data tracker
                    </span>
                  </div>
                </li>
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex items-center justify-center shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full drark:bg-transparent">
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                        </path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base font-medium leading-6 text-gray-500">
                      24/24 support
                    </span>
                  </div>
                </li>
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex items-center justify-center shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full drark:bg-transparent">
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                        </path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base font-medium leading-6 text-gray-500">
                      Free tips to improve work time
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
              <div className="relative space-y-4">
                <div className="flex items-end justify-center space-x-4 lg:justify-start">
                  <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src="/gallery/ishinomaki-1.jpg" alt="1" />
                  <img className="w-40 rounded-lg shadow-lg md:w-64" width="260" src="/gallery/ishinomaki-1.jpg" alt="2" />
                </div>
                <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                  <img className="w-24 rounded-lg shadow-lg md:w-40" width="170" src="/gallery/ishinomaki-1.jpg" alt="3" />
                  <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src="/gallery/ishinomaki-1.jpg" alt="4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      */}

      {/* <!-- title - start --> */}
      <div className="mt-5 mb-5 md:mt-8 md:mb-8">
        <div className={inView ? "animate-tracking-in-expand" : "nvisible"} ref={ref}>
          <h2 className="flex flex-row flex-nowrap items-center mt-24">
            <span className="grow block border-t border-blue-700"></span>
            <span className="font-lora flex-none block mx-10 px-6 py-2.5 text-xl rounded leading-none font-medium bg-sky-500 text-white">
              2023/08/03 石巻
            </span>
            <span className="grow block border-t border-blue-700"></span>
          </h2>
        </div>
      </div>
      {/* <!-- title - end --> */}

      {/* <!-- text - start --> */}
      <div className={inView ? "md:animate-slide-top" : "invisible"} ref={ref}>
        <p className="mx-auto text-left md:text-center max-w-(--breakpoint-lg) text-gray-900 md:text-xl">
          ・石巻は宮城県だが、実際にはお隣岩手県の中尊寺金色堂までレンタカーでドライブ<br />
          ・海鮮丼は「いしのまき元気いちば」で食べた。真ん中の写真は道の駅から見える「石ノ森萬画館」</p>
      </div>
      {/* <!-- text - end --> */}

      {/* <!-- Image - start --> */}
      < div className="md:mx-10 grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8" >
        {/* <!-- image - start --> */}
        < a href="#" className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96" >
          <img src="/gallery/ishinomaki-1.jpg" loading="lazy" alt="Photo by Sorato Ozaki" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        </a >
        {/* <!-- image - end --> */}

        {/* <!-- image - start --> */}
        <a href="#" className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
          <img src="/gallery/ishinomaki-2.jpg" loading="lazy" alt="Photo by Sorato Ozaki" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        </a>
        {/* <!-- image - end --> */}

        {/* <!-- image - start --> */}
        <a href="#" className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
          <img src="/gallery/ishinomaki-3.jpg" loading="lazy" alt="Photo by Sorato Ozaki" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        </a>
        {/* <!-- image - end --> */}
      </div >
    </>
  )
}