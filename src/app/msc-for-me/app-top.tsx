'use client'
import { useInView } from 'react-intersection-observer';
import NextImage from 'next/image'

export default function ApplicationTop() {

  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  return (
    <>
      {/* 客室紹介 */}
      <div className={inView ? "animate-tracking-in-expand mt-15 h-24 w-full flex justify-center items-center" : "mt-15 h-24 invisible"} ref={ref}>
        <h1 className="text-4xl font-bold text-black sm:text-5xl md:text-6xl">MSC for Me</h1>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        <div>
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <NextImage src="/msc-for-me/msc-for-me-1.jpg" width={600} height={500} loading="lazy" alt="Photo by Martin Sanchez" className="h-full w-full object-cover object-center" />
          </div>
        </div>

        <div className="md:pt-8">
          <div className='flex flex-col justify-center'>
            <p className="text-xl text-center font-bold text-indigo-500 md:text-left">What is [MSC for Me?]</p>
            <h1 className="mb-4 text-center text-3xl font-semibold text-gray-900 sm:text-4xl md:mb-6 md:text-left">船内で利用できるスマホアプリ</h1>
            <ul className="space-y-4 text-left text-gray-900 mb-10">
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-7 h-7 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span className='leading-relaxed text-xl'>航程の確認</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-7 h-7 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span className='leading-relaxed text-xl'>１日の詳細スケジュール</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-7 h-7 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span className='leading-relaxed text-xl'>シアターショーの予約</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-7 h-7 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span className='leading-relaxed text-xl'>寄港地の天気</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-7 h-7 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span className='leading-relaxed text-xl'>船内のマップ</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-7 h-7 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span className='leading-relaxed text-xl'>チャット</span>
              </li>
            </ul>
            <p className="max-w-md leading-relaxed text-gray-900 xl:text-lg">
              船内にはWiFiのフリースポットがあり、AndroidやIOSのアプリストアからダウンロードした「MSC for ME」を利用できる。<br /><br />
              インターネットには繋がっておらず、インターネットにアクセスするには有料のインターネットパッケージを購入する必要がある。<br /><br />
              チャット機能があるので、離れていてもコミュニケーションは可能。キャビン番号と名前を入力することでチャットできる人を追加することができる。<br /><br />
            </p>
          </div>
        </div>

      </div>
    </>
  );
}