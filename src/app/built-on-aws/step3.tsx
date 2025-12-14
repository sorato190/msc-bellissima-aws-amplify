'use client'
import { useInView } from 'react-intersection-observer';


export default function Step3() {

  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-(--breakpoint-2xl) px-4 md:px-8">
          <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">Step3: コードの変更を検知して自動でアプリを再構築</h1>

          <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
            <img src="/built-on-aws/built-on-aws-4.jpg" loading="lazy" alt="Photo by Sorato Ozaki" className="h-full w-full object-cover object-center" />
          </div>
        </div>
      </div>
    </>
  )
}
