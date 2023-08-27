'use client'
import { useInView } from 'react-intersection-observer';
import NextImage from 'next/image'

export default function Buffet() {

  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  return (
    <>
      {/* デッキ15 ビュッフェの紹介 */}
      {/* <!-- text - start --> */}
      <div className="mt-16 mb-16">
        <div className={inView ? "animate-tracking-in-contract-bck-bottom" : "invisible"} ref={ref}>
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-800 md:mb-6 sm:text-5xl md:mb-8 md:text-6xl">Deck 15 Buffet</h2>
        </div>
        <div className={inView ? "animate-slide-top" : "invisible"} ref={ref}>
          <p className="mx-auto max-w-screen-md text-gray-900 md:text-lg">ビュッフェスペースはかなり広くて料理の種類も豊富。ハンバーガーとフライドポテト、日本食、イタリアンなど色々あるので飽きなかった。<br />水、コーヒー、牛乳、ジュース(数種類)は無料。05:00 - 23:00頃まで空いているので終日航海の日はここで読書をすることも。仕事してる人や、夏休みの宿題をする子供もいた。</p>
        </div>
      </div>
      {/* <!-- text - end --> */}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
        {/* <!-- image - start --> */}
        <a href="#" className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
          <NextImage src="/facility/facility-buffet-1.jpg" width={600} height={500} loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        </a>
        {/* <!-- image - end --> */}

        {/* <!-- image - start --> */}
        <a href="#" className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
          <NextImage src="/facility/facility-buffet-2.jpg" width={600} height={500} loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        </a>
        {/* <!-- image - end --> */}

        {/* <!-- image - start --> */}
        <a href="#" className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
          <NextImage src="/facility/facility-buffet-3.jpg" width={600} height={500} loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        </a>
        {/* <!-- image - end --> */}
      </div>
    </>
  );
}