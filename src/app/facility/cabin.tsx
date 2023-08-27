'use client'
import { useInView } from 'react-intersection-observer';
import NextImage from 'next/image'

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
            <h1 className={inView ? "animate-tracking-in-expand mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl" : "invisible"}>Cabin Deck 12</h1>

            <p className={inView ? "animate-slide-top max-w-md leading-relaxed text-gray-900 xl:text-lg" : "invisible"}>デッキ12の海側バルコニー客室。海が見えるバルコニーがついてて良かったが、今回のツアーのように人が少ないとビュッフェで海側の席に座れるので海が見れなくてもいいかも。</p>
          </div>

          <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
            <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
              <NextImage src="/facility/facility-cabin-1.jpg" width={600} height={500} loading="lazy" alt="Photo by Ozaki Sorato" className="h-full w-full object-cover object-center" />
            </div>

            <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <NextImage src="/facility/facility-cabin-2.jpg" width={600} height={500} loading="lazy" alt="Photo by Ozaki Sorato" className="h-full w-full object-cover object-center" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}