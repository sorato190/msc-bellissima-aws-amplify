'use client'
import { useInView } from 'react-intersection-observer';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Feature from './feature';


export default function BuiltOnAws() {

  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  return (
    <div className='mx-5 md:mx-10'>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <p className="mb-2 text-center font-semibold text-indigo-500 md:mb-3 text-2xl">Site Infomation</p>
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 md:text-4xl">This site built on [AWS Amplify]</h2>
          <p className="mx-auto max-w-screen-2xl text-center text-gray-500 text-xl">AWS Amplifyというサービスを利用して、数回のクリックでデプロイすることができる。</p>
        </div>
      </div>
      {/*  */}
      {/* <section>
        <div class="skewed relative z-0">
          <div class="absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-blue-800 transform skew-y-6 origin-top-right"></div>
        </div>
      </section> */}

      <Step1 />
      <Step2 />
      <Step3 />
      <Feature />
    </div>
  )
}
