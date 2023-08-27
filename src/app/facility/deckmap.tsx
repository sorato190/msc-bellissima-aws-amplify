'use client'
import { useInView } from 'react-intersection-observer';


export default function DeckMap() {

  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  return (
    <>
      {/* 各デッキ紹介 */}
      <div className={inView ? "animate-tracking-in-expand mt-15 h-24 w-full flex justify-center items-center" : "mt-15 h-24 invisible"} ref={ref}>
        <h1 className="text-4xl font-bold text-black sm:text-5xl md:text-6xl">Onboard Guide</h1>
      </div>
      <div className="bg-white py-3 ">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <div className="h-64 overflow-hidden mt-20 rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <img src="/facility/facility-1.jpg" loading="lazy" alt="Photo by Kaung Htet" className="h-full w-full object-cover object-center" />
              </div>
            </div>
            <div className="md:pt-8">
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full text-center text-lg font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
                          <tr>
                            <th scope="col" className="px-2 py-4">デッキ</th>
                            <th scope="col" className="px-2 py-4">設備</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              4
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">乗下船口 2箇所ある。X線/金属探知機、本人確認を行う。</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              5
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">レストラン/インフォメーション/演奏</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              6
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">プロムナード(ショッピング)/ロンドンシアター</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              7
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">レストラン/カジノ/カルーセルラウンジ</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              8-14
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">客室</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              15
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">ビュッフェ/プール/バー</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              16
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">フットサル・バスケコート/ゲーム/ジム</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              18
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">ヨットクラブ客室/専用レストラン</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              19
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">プール/スカイラウンジ</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></>
  );
}