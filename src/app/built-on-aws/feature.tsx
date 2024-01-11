'use client'
import { useInView } from 'react-intersection-observer';


export default function Feature() {

  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="animate-slide-in-right md:pt-8">
            <div className='flex flex-col justify-center items-center'>
              <h1 className="mb-4 text-center text-3xl font-semibold text-gray-900 sm:text-4xl md:mb-6 md:text-left">AWS Amplifyの特徴</h1>
              <ul className="space-y-4 text-center text-gray-900 mb-10">
                <li className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-7 h-7 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                  <span className='leading-relaxed text-left text-base md:text-xl'>ネットワーク、サーバー、OSの構築が不要！</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-7 h-7 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                  <span className='leading-relaxed text-left text-base md:text-xl'>GitHubにコードをアップするだけで自動でビルド！</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-7 h-7 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                  <span className='leading-relaxed text-left text-base md:text-xl'>品証、本番とブランチを分けておくだけでそれぞれの環境がすぐに構築できる。</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-7 h-7 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                  <span className='leading-relaxed text-left text-base md:text-xl'>他のAWSサービスとも連携可能（データベース、認証機能、APIなど）</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-7 h-7 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                  <span className='leading-relaxed text-left text-base md:text-xl'>コードを更新時に、自動でテストツールを動かすこともできる</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-7 h-7 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                  <span className='leading-relaxed text-left text-base md:text-xl'>GUIでアプリを作成できるAmplify Studioも利用可能</span>
                </li>
              </ul>
              <p className="max-w-md leading-relaxed text-left text-gray-900 xl:text-base md:text-xl">
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
