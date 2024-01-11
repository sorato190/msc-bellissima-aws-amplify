'use client'
import { useInView } from 'react-intersection-observer';


export default function TourTimeline() {

  const { ref, inView } = useInView({
    threshold: 0.1,
    // triggerOnce: true
  });

  return (
    <>
      <ol className={inView ? "md:animate-slide-in-right border-l-2 border-blue-700 dark:border-primary-500" : "md:invisible"} ref={ref}>
        <li>
          <div className="flex-start flex items-center">
            <div
              className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 dark:bg-primary-500"></div>
            <h4 className="-mt-2 text-2xl lg:text-4xl font-semibold">横浜</h4>
          </div>
          <div className="mb-6 ml-6 pb-6">
            <div className="text-xl lg:text-2xl text-blue-600 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >2 August, 2023
            </div>
            <p className="mb-4 mt-2 text-base lg:text-xl text-gray-900">
              船が大きくて横浜ベイブリッジの下を通れず大黒ふ頭から出航。本人確認や決済に使うクルーズカードを受け取る。<br />
              船内での買い物や乗下船時の本人確認はクルーズカードのバーコード読み取りで実施。
            </p>
          </div>
        </li>

        <li>
          <div className="flex-start flex items-center">
            <div
              className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 dark:bg-primary-500"></div>
            <h4 className="-mt-2 text-2xl lg:text-2xl lg:text-4xl font-semibold">石巻</h4>
          </div>
          <div className="mb-6 ml-6 pb-6">
            <div className="text-xl lg:text-2xl text-blue-600 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >3 August, 2023
            </div>
            <p className="mb-4 mt-2 text-base lg:text-xl text-gray-900">
              オプショナルツアーは申し込まず事前にレンタカーを予約して観光。<br />
              結局岩手県の[中尊寺金色堂]を見に行ったため、宮城県の観光は一切しておらず道の駅で海鮮丼を食べた程度。
            </p>
          </div>
        </li>

        <li>
          <div className="flex-start flex items-center">
            <div
              className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 dark:bg-primary-500"></div>
            <h4 className="-mt-2 text-2xl lg:text-4xl font-semibold">宮古</h4>
          </div>
          <div className="mb-6 ml-6 pb-6">
            <div className="text-xl lg:text-2xl text-blue-600 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >4 August, 2023
            </div>
            <p className="mb-4 mt-2 text-base lg:text-xl text-gray-900">
              オプショナルツアーで観光。日本三大鍾乳洞の１つである[龍泉洞]、[浄土ヶ浜]、津波遺構である[たろう観光ホテル]の見学など。
            </p>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center">
            <div
              className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 dark:bg-primary-500"></div>
            <h4 className="-mt-2 text-2xl lg:text-4xl font-semibold">青森</h4>
          </div>
          <div className="mb-6 ml-6 pb-6">
            <div className="text-xl lg:text-2xl text-blue-600 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >5 August, 2023
            </div>
            <p className="mb-4 mt-2 text-base lg:text-xl text-gray-900">
              13時頃に到着し、レンタカーで[八甲田山]に行きロープウェイを使って山頂を散策。涼しい。夕方から夜にかけてねぶた祭を見学。
            </p>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center">
            <div
              className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 dark:bg-primary-500"></div>
            <h4 className="-mt-2 text-2xl lg:text-4xl font-semibold">終日航海</h4>
          </div>
          <div className="mb-6 ml-6 pb-6">
            <div className="text-xl lg:text-2xl text-blue-600 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >6 August, 2023
            </div>
            <p className="mb-4 mt-2 text-base lg:text-xl text-gray-900">
              青森から韓国の釜山に向かうため終日航海。有料や無料のショーを見たり、XDシネマという3Dの銃撃戦ゲームで遊んだり。<br />
              ここまでで普段の生活とは違ってかなりアクティブに動いていたので休める日があって良かった。<br />
              台風6号の影響で航路が変更になるアナウンスがあった。(鹿児島のツアー代返金＋50$のデポジット)
            </p>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center">
            <div
              className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 dark:bg-primary-500"></div>
            <h4 className="-mt-2 text-2xl lg:text-4xl font-semibold">釜山</h4>
          </div>
          <div className="mb-6 ml-6 pb-6">
            <div className="text-xl lg:text-2xl text-blue-600 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >7 August, 2023
            </div>
            <p className="mb-4 mt-2 text-base lg:text-xl text-gray-900">
              オプショナルツアーで釜山タワー、竜宮海寺を観光。といいつつ13時頃に到着して18時出航だったのでほぼ立ち止まることなく通り過ぎる感じで観光。<br />
              MSCベリッシマは外国船籍のため、船舶法の制約によって一度は日本国外に寄港しないといけないらしい。
            </p>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center">
            <div
              className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 dark:bg-primary-500"></div>
            <h4 className="-mt-2 text-2xl lg:text-4xl font-semibold text-orange-500"><span className='text-black text-2xl'>鹿児島 ⇒ </span>終日航海</h4>
          </div>
          <div className="mb-6 ml-6 pb-6">
            <div className="text-xl lg:text-2xl text-blue-600 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >8 August, 2023
            </div>
            <p className="mb-4 mt-2 text-base lg:text-xl text-gray-900">
              韓国から鹿児島に行く予定であったが、台風6号の影響で室蘭(北海道)に行先が変更。<br />
              臨時のツアーとして、室蘭から札幌までの送迎バスと、登別観光が用意された。札幌の送迎バスを利用することにした。
            </p>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center">
            <div
              className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 dark:bg-primary-500"></div>
            <h4 className="-mt-2 text-2xl lg:text-4xl font-semibold text-orange-500"><span className='text-black text-2xl'>高知 ⇒ </span>室蘭</h4>
          </div>
          <div className="mb-6 ml-6 pb-6">
            <div className="text-xl lg:text-2xl text-blue-600 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >9 August, 2023
            </div>
            <p className="mb-4 mt-2 text-base lg:text-xl text-gray-900">
              バスで札幌まで移動。室蘭から札幌までは2時間くらい。札幌駅のJRタワー展望室、大通公園、さっぽろテレビ塔などを散策。
            </p>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center">
            <div
              className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 dark:bg-primary-500"></div>
            <h4 className="-mt-2 text-2xl lg:text-4xl font-semibold">終日航海</h4>
          </div>
          <div className="mb-6 ml-6 pb-6">
            <div className="text-xl lg:text-2xl text-blue-600 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >10 August, 2023
            </div>
            <p className="mb-4 mt-2 text-base lg:text-xl text-gray-900">
              ビュッフェで色々つまみ食いしたり、ショーを見たり有料レストランに行ったり。<br />
              そして現実に戻る準備をする。。。
            </p>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center">
            <div
              className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 dark:bg-primary-500"></div>
            <h4 className="-mt-2 text-2xl lg:text-4xl font-semibold">横浜</h4>
          </div>
          <div className="mb-6 ml-6 pb-6">
            <div className="text-xl lg:text-2xl text-blue-600 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >11 August, 2023
            </div>
            <p className="mb-4 mt-2 text-base lg:text-xl text-gray-900">
              11時頃に下船。お盆時期ということもあり駅周辺はまぁまぁ混んでいた印象。
            </p>
          </div>
        </li>
      </ol>
    </>
  )
}