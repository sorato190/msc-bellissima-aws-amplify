'use client'
import { useInView } from 'react-intersection-observer';


export default function TourSchedule() {

  const { ref, inView } = useInView({
    threshold: 0.6,
    // triggerOnce: true
  });

  return (
    <>
      {/* ツアー工程の紹介 */}
      <div className={inView ? "animate-tracking-in-contract-bck-bottom" : "invisible"} ref={ref}>
        <div className="h-48 w-full flex justify-center items-center">
          <h1 className="text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">Tour Schedule</h1>
        </div>
      </div>
      <div className={inView ? "animate-slide-right" : "invisible"} ref={ref}>
        {/* 台風の影響 */}
        <div className="mb-8 flex flex-wrap justify-between md:mb-16">
          <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/4 lg:pb-24 lg:pt-48">
            <h1 className="mb-4 text-4xl font-bold text-black sm:text-4xl md:mb-8 md:text-5xl">台風6号の影響</h1>
            <p className="mx-auto max-w-screen-lg text-gray-900 md:text-4xl text-center">
              航路が変更に！</p>
          </div>

          <div className="mb-12 flex w-full md:mb-16 lg:w-3/4">
            <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
              <img src="/top/top-msc-bellissima-4.jpg" loading="lazy" alt="Photo by Kaung Htet" className="h-full w-full object-cover object-center" />
            </div>

            <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <img src="/top/top-msc-bellissima-3.jpg" loading="lazy" alt="Photo by Manny Moreno" className="h-full w-full object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}