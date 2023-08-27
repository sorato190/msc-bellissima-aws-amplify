'use client'
import { useInView } from 'react-intersection-observer';


export default function Theater() {

  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  return (
    <>
      {/* ショーの紹介 */}
      {/* <!-- text - start --> */}
      <div className="mt-16 mb-10 md:mb-16">
        <div className={inView ? "animate-tracking-in-contract-bck-bottom" : "invisible"} ref={ref}>
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-800 md:mb-6 sm:text-5xl md:mb-8 md:text-6xl">Deck6/7  Theater and Casino</h2>
        </div>
        <div className={inView ? "animate-slide-top" : "invisible"} ref={ref}>
          <p className="mx-auto max-w-screen-md text-gray-900 md:text-lg">デッキの前方に無料で見れるロンドンシアター、デッキ後方に有料で見れるカルーセルラウンジのシアターがある。日替わりでショーやバンドの演奏などが行われている。<br />
            有料のカルーセルラウンジは18$くらい。カジノは青森出発後にできるようになった。トータルで100$→500$くらいに増えた。
          </p>
        </div>
      </div>
      {/* <!-- text - end --> */}

      <div className="h-200 grid gap-6 sm:grid-cols-2">
        {/* <!-- product - start --> */}
        <div className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src="/facility/facility-theater-1.jpg" loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

          <div className="relative flex flex-col">
            <span className="text-gray-300">London Theater</span>
            {/* <span className="text-lg font-semibold text-white lg:text-xl">Decoration</span> */}
          </div>
        </div>
        {/* <!-- product - end --> */}

        {/* <!-- product - start --> */}
        <div className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src="/facility/facility-casino-1.jpg" loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

          <div className="relative flex flex-col">
            <span className="text-gray-300">Casino</span>
            {/* <span className="text-lg font-semibold text-white lg:text-xl">Furniture</span> */}
          </div>
        </div>
        {/* <!-- product - end --> */}
      </div>
    </>
  );
}