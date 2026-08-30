'use client'
import { useInView } from 'react-intersection-observer';


export default function ApplicationGallery() {

  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  return (
    <>
      {/* <!-- text - start --> */}
      <div className="mt-16 mb-16">
        <div className={inView ? "animate-tracking-in-contract-bck-bottom" : "invisible"} ref={ref}>
          <h2 className="mb-4 text-center text-2xl font-bold text-slate-600 md:mb-6 md:text-3xl md:mb-8">App image</h2>
        </div>
        <div className={inView ? "md:animate-slide-top" : "invisible"} ref={ref}>
        </div>
      </div>
      {/* <!-- text - end --> */}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:gap-8">
        {/* <!-- image - start --> */}
        <a href="#" className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-sky-50 shadow-lg md:h-auto">
          <img src="/msc-for-me/msc-for-me-2.jpg" loading="lazy" alt="Photo by Sorato Ozaki" className="w-full object-cover object-center" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-cyan-950 via-transparent to-transparent opacity-50"></div>
        </a>
        {/* <!-- image - end --> */}

        {/* <!-- image - start --> */}
        <a href="#" className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-sky-50 shadow-lg md:h-auto">
          <img src="/msc-for-me/msc-for-me-3.jpg" loading="lazy" alt="Photo by Sorato Ozaki" className="w-full object-cover object-center" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-cyan-950 via-transparent to-transparent opacity-50"></div>
        </a>
        {/* <!-- image - end --> */}

        {/* <!-- image - start --> */}
        <a href="#" className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-sky-50 shadow-lg md:h-auto">
          <img src="/msc-for-me/msc-for-me-4.jpg" loading="lazy" alt="Photo by Sorato Ozaki" className="w-full object-cover object-center" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-cyan-950 via-transparent to-transparent opacity-50"></div>
        </a>
        {/* <!-- image - end --> */}
      </div>
      <div className="mt-24 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:gap-8">
        {/* <!-- image - start --> */}
        <a href="#" className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-sky-50 shadow-lg md:h-auto">
          <img src="/msc-for-me/msc-for-me-5.jpg" loading="lazy" alt="Photo by Sorato Ozaki" className="w-full object-cover object-center" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-cyan-950 via-transparent to-transparent opacity-50"></div>
        </a>
        {/* <!-- image - end --> */}

        {/* <!-- image - start --> */}
        <a href="#" className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-sky-50 shadow-lg md:h-auto">
          <img src="/msc-for-me/msc-for-me-6.jpg" loading="lazy" alt="Photo by Sorato Ozaki" className="w-full object-cover object-center" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-cyan-950 via-transparent to-transparent opacity-50"></div>
        </a>
        {/* <!-- image - end --> */}

        {/* <!-- image - start --> */}
        <a href="#" className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-sky-50 shadow-lg md:h-auto">
          <img src="/msc-for-me/msc-for-me-7.jpg" loading="lazy" alt="Photo by Sorato Ozaki" className="w-full object-cover object-center" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-cyan-950 via-transparent to-transparent opacity-50"></div>
        </a>
        {/* <!-- image - end --> */}
      </div>
    </>
  );
}