'use client'
import { useInView } from 'react-intersection-observer';


export default function Step1() {

  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-(--breakpoint-2xl) px-4 md:px-8">
          <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">Step1: ソースコードをGitHubにアップロード</h1>

          <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
            <img src="/built-on-aws/built-on-aws-2.jpg" loading="lazy" alt="Photo by Sorato Ozaki" className="h-full w-full object-cover object-center" />
          </div>
          {/* <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Features</h2> */}
          {/* <p className="text-gray-500 sm:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p> */}
        </div>
      </div>
    </>
  )
}
