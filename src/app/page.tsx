'use client'
import NextImage from 'next/image'
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

export default function Home() {

  const { ref, inView } = useInView({
    // ref要素が現れてから50px過ぎたら
    // rootMargin: "-100px",
    threshold: 0.6,
    // 最初の一度だけ実行
    // triggerOnce: true,
  });

  return (

    <>
      {/* Top */}
      <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center">
        <img src="/top/top-msc-bellissima.jpg" loading="lazy" alt="Photo by Kaung Htet" className="h-full w-full object-cover object-center" />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 text-4xl font-semibold">MSC Bellissima</h2>
              <h4 className="mb-6 text-xl font-semibold">旅行記</h4>
            </div>
          </div>
        </div>
      </div>

      {/* 船の情報 */}
      <div className={"h-24 w-full flex justify-center items-center animate-tracking-in-expand"} >
        <h1 className="text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">Spec</h1>
      </div>
      <div className="mb-20 md:pt-8">
        <div className="flex flex-col">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <table className="min-w-full text-center text-xl font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4"></th>
                  <th scope="col" className="px-6 py-4">MSC Bellissima</th>
                  <th scope="col" className="px-6 py-4">飛鳥Ⅱ(日本最大客船)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    総トン数
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">171,598t</td>
                  <td className="whitespace-nowrap px-6 py-4">50,444t</td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    全長
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">315m</td>
                  <td className="whitespace-nowrap px-6 py-4">241m</td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    就航年
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">2019年3月</td>
                  <td className="whitespace-nowrap px-6 py-4">2006年2月</td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    乗客定員
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">5686名</td>
                  <td className="whitespace-nowrap px-6 py-4">872名</td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    客室数
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">2217室</td>
                  <td className="whitespace-nowrap px-6 py-4">436室 (ルートイン屋島は173部屋)</td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    デッキ数
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">19</td>
                  <td className="whitespace-nowrap px-6 py-4">9</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* ツアー工程の紹介 */}
      <div className={inView ? "h-48 w-full flex justify-center items-center animate-tracking-in-expand" : "h-48 w-full invisible"} ref={ref}>
        <h1 className="text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">Tour Schedule</h1>
      </div>
      {/* 台風の影響 */}
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/4 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-4xl md:mb-8 md:text-5xl">台風6号の影響</h1>
          <p className="mx-auto max-w-screen-md text-gray-900 md:text-4xl text-center">
            航路が変更に！</p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-3/4">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <NextImage src="/top/top-msc-bellissima-4.jpg" width={600} height={500} loading="lazy" alt="Photo by Kaung Htet" className="h-full w-full object-cover object-center" />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <NextImage src="/top/top-msc-bellissima-3.jpg" width={600} height={500} loading="lazy" alt="Photo by Manny Moreno" className="h-full w-full object-cover object-center" />
          </div>
        </div>
      </div>

      <ol className="border-l-2 border-blue-700 dark:border-primary-500">
        <li>
          <div className="flex-start flex items-center">
            <div
              className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 dark:bg-primary-500"></div>
            <h4 className="-mt-2 text-4xl font-semibold">横浜</h4>
          </div>
          <div className="mb-6 ml-6 pb-6">
            <div className="text-2xl text-blue-600 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >2 August, 2023
            </div>
            <p className="mb-4 mt-2 text-xl text-gray-900">
              船が大きくて横浜ベイブリッジ下を通れず大黒ふ頭から出航。本人確認や決済に使うクルーズカードを受け取る。<br />
              船内での買い物や乗下船時の本人確認はクルーズカードのバーコード読み取りで実施。
            </p>
          </div>
        </li>

        <li>
          <div className="flex-start flex items-center">
            <div
              className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 dark:bg-primary-500"></div>
            <h4 className="-mt-2 text-4xl font-semibold">石巻</h4>
          </div>
          <div className="mb-6 ml-6 pb-6">
            <div className="text-2xl text-blue-600 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >3 August, 2023
            </div>
            <p className="mb-4 mt-2 text-xl text-gray-900">
              オプショナルツアーは申し込まず事前にレンタカーを予約して観光。<br />
              結局岩手県の[中尊寺金色堂]を見に行ったため、宮城県の観光は一切しておらず道の駅で海鮮丼を食べた程度。
            </p>
          </div>
        </li>

        <li>
          <div className="flex-start flex items-center">
            <div
              className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 dark:bg-primary-500"></div>
            <h4 className="-mt-2 text-4xl font-semibold">宮古</h4>
          </div>
          <div className="mb-6 ml-6 pb-6">
            <div className="text-2xl text-blue-600 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >4 August, 2023
            </div>
            <p className="mb-4 mt-2 text-xl text-gray-900">
              オプショナルツアーで観光。日本三大鍾乳洞の１つである[龍泉洞]、[浄土ヶ浜]、津波遺構である[たろう観光ホテル]の見学など。
              <br />龍泉洞は涼しかったが、他の場所は暑くて非常に疲れた。バス酔いで気持ち悪さもUP!
            </p>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center">
            <div
              className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 dark:bg-primary-500"></div>
            <h4 className="-mt-2 text-4xl font-semibold">青森</h4>
          </div>
          <div className="mb-6 ml-6 pb-6">
            <div className="text-2xl text-blue-600 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >5 August, 2023
            </div>
            <p className="mb-4 mt-2 text-xl text-gray-900">
              13時頃に到着し、レンタカーで[八甲田山]に行きロープウェイを使って山頂を散策。涼しい。夕方から夜にかけてねぶた祭を見学。
            </p>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center">
            <div
              className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 dark:bg-primary-500"></div>
            <h4 className="-mt-2 text-4xl font-semibold">終日航海</h4>
          </div>
          <div className="mb-6 ml-6 pb-6">
            <div className="text-2xl text-blue-600 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >6 August, 2023
            </div>
            <p className="mb-4 mt-2 text-xl text-gray-900">
              青森から韓国の釜山に向かうため終日航海。有料や無料のショーを見たり、XDシネマという3Dの銃撃戦ゲームで遊んだり。
              ここまでで普段の生活とは違ってかなりアクティブに動いていたので休める日があって良かった。
              台風6号の影響で航路が変更になるアナウンスがあった。(鹿児島のツアー代返金＋50$のデポジット)
            </p>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center">
            <div
              className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 dark:bg-primary-500"></div>
            <h4 className="-mt-2 text-4xl font-semibold">釜山</h4>
          </div>
          <div className="mb-6 ml-6 pb-6">
            <div className="text-2xl text-blue-600 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >7 August, 2023
            </div>
            <p className="mb-4 mt-2 text-xl text-gray-900">
              オプショナルツアーで釜山タワー、竜宮海寺を観光。といいつつ13時頃に到着して18時出航だったのでほぼ立ち止まることなく通り過ぎる感じで観光。
              MSCベリッシマは外国船籍のため、船舶法の制約によって一度は日本国外に寄港しないといけないらしい。
            </p>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center">
            <div
              className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 dark:bg-primary-500"></div>
            <h4 className="-mt-2 text-4xl font-semibold text-orange-500"><span className='text-black text-2xl'>鹿児島 ⇒ </span>終日航海</h4>
          </div>
          <div className="mb-6 ml-6 pb-6">
            <div className="text-2xl text-blue-600 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >8 August, 2023
            </div>
            <p className="mb-4 mt-2 text-xl text-gray-900">
              韓国から鹿児島に行く予定であったが、台風6号の影響で室蘭(北海道)に行先が変更。臨時のツアーとして、室蘭から札幌までの送迎バスと、登別観光が用意された。
              札幌の送迎バスを利用することにした。
            </p>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center">
            <div
              className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 dark:bg-primary-500"></div>
            <h4 className="-mt-2 text-4xl font-semibold text-orange-500"><span className='text-black text-2xl'>高知 ⇒ </span>室蘭</h4>
          </div>
          <div className="mb-6 ml-6 pb-6">
            <div className="text-2xl text-blue-600 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >9 August, 2023
            </div>
            <p className="mb-4 mt-2 text-xl text-gray-900">
              バスで札幌まで移動。室蘭から札幌までは2時間くらい。札幌駅のJRタワー展望室、大通公園、さっぽろテレビ塔などを散策。
            </p>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center">
            <div
              className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 dark:bg-primary-500"></div>
            <h4 className="-mt-2 text-4xl font-semibold">終日航海</h4>
          </div>
          <div className="mb-6 ml-6 pb-6">
            <div className="text-2xl text-blue-600 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >10 August, 2023
            </div>
            <p className="mb-4 mt-2 text-xl text-gray-900">
              ビュッフェで色々つまみ食いしたり、ショーを見たり有料レストランに行ったり。<br />
              そして現実に戻る準備をする。。。
            </p>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center">
            <div
              className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 dark:bg-primary-500"></div>
            <h4 className="-mt-2 text-4xl font-semibold">横浜</h4>
          </div>
          <div className="mb-6 ml-6 pb-6">
            <div className="text-2xl text-blue-600 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >11 August, 2023
            </div>
            <p className="mb-4 mt-2 text-xl text-gray-900">
              11時頃に下船。お盆時期ということもあり駅周辺はまぁまぁ混んでいた印象。
            </p>
          </div>
        </li>
      </ol>

      <p className="w-full text-gray-800 xl:text-xl">
        各寄港地ごとに観光地を巡るオプショナルツアーは乗船するまでに旅行代理店経由で購入することができる。寄港地ごとに大体1人1万円程度。<br />
        ツアーに申し込んでいる人は優先的に下船することができるが、事前の案内では乗下船に2時間程度かかる可能性があると案内があった。<br /><br />
        今回参加したクルーズは人が少なかったのかツアーに申し込んでいなくても30分以内に下船することができた。<br />
        韓国ではほとんどの人がツアーを利用してたようなので、乗船・下船ともに1時間くらいかかった。<br /><br />
        各寄港地では半日程度の滞在時間であるため、各地の観光をゆっくり行うことはできない。<br />
        あまり東北を満喫したという実感はなく、行ったという事実を作った感じに。。。<br /><br />
        それでも<Link className="text-2lg font-semibold text-blue-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700" href='/facility'>船内の設備</Link>が充実しているので、各寄港地は船旅のオマケ程度というイメージで良いかも。

      </p>
    </>


  )
}
