'use client'
import { useInView } from 'react-intersection-observer';


export default function ApplicationComment() {

  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  return (
    <>
      <h2 className={inView ? "animate-tracking-in-contract-bck mb-5 text-center mt-10 mb-2 text-4xl font-semibold text-gray-900" : "invisible"} ref={ref}>
        アプリの利用について
      </h2>
      <ul className={inView ? "animate-tracking-in-expand max-w-screen-xl space-y-1 text-gray-500 list-none list-inside" : "invisible"} ref={ref}>
        <li className='text-xl text-gray-900'>
          ・インターネット接続については24時間プランやクルーズ全日プランなどがあるが、申し込みはしなかった。
        </li>
        <li className='text-xl text-gray-900'>
          ・船内のイベントから自分が行きたいものを選択してスケジュールを作成できる。自由に作成はできないのが少し不便。
        </li>
        <li className='text-xl text-gray-900'>
          ・有料のレストランやショーについてはアプリで予約できない。船内のクルーに予約してもらう。
        </li>
      </ul>
    </>
  )
}
