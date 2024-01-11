'use client'
import { useInView } from 'react-intersection-observer';


export default function Cabin() {

  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  return (
    <>
      {/* 客室紹介 */}
      <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-8 flex flex-wrap justify-between md:mb-16">
          <div ref={ref} className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
            <h1 className={inView ? "animate-tracking-in-expand mb-4 text-2xl md:text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl" : "invisible"}>Cabin Deck 12</h1>

            <p className={inView ? "md:animate-slide-top max-w-md leading-relaxed text-gray-900 text-base xl:text-xl" : "invisible"}>
              デッキ12の海側バルコニー客室。<br />
              海が見えるバルコニーがついてて良かったが、日中は部屋にいないので海が見れなくてもいいかも。</p>
          </div>

          <div className="tracking-in-contract-bck-bottom mb-12 flex w-full md:mb-16 lg:w-2/3">
            <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
              <img src="/facility/facility-cabin-1.jpg" loading="lazy" alt="Photo by Ozaki Sorato" className="h-full w-full object-cover object-center" />
            </div>

            <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <img src="/facility/facility-cabin-2.jpg" loading="lazy" alt="Photo by Ozaki Sorato" className="h-full w-full object-cover object-center" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}