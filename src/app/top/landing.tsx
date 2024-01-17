'use client'
import { useInView } from 'react-intersection-observer';

export default function Top() {

  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true
  });

  return (
    <>
      {/* Top */}
      <div className={inView ? "md:animate-fade-in relative overflow-hidden bg-cover bg-no-repeat text-center" : "h-5/6 invisible"} ref={ref}>
        <img src="/top/top-msc-bellissima.jpg" loading="lazy" alt="Photo by Sorato Ozaki" className="h-full w-full rounded-sm object-cover object-center" />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed flex items-end justify-center">
          <h3 className="flex items-center w-full">
            <span className="flex-grow bg-gradient-to-r from-transparent to-gray-200 rounded h-0.5 mb-5 lg:mb-20"></span>
            <div className="mb-5 lg:mb-20 bg-gray-400 bg-opacity-50 text-gray-200 p-1 md:p-5 border-solid border-2 border-gray-200 relative">
              <h2 className="font-dancing text-md md:text-3xl font-bold">MSC Bellissima Cruise Tour</h2>
            </div>
            <span className="flex-grow bg-gradient-to-l from-transparent to-gray-200 rounded h-0.5 mb-5 lg:mb-20"></span>
          </h3>
        </div>
      </div>
    </>
  )
}