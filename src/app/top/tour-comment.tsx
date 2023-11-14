'use client'
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';


export default function TourComment() {

  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  return (
    <>
      <p className={inView ? "md: w-full text-gray-800 xl:text-2xl" : "md:invisible"} ref={ref}>
        各寄港地ごとに観光地を巡るオプショナルツアーは旅行代理店経由で購入することができる。寄港地ごとに大体1人1万円程度。<br />
        ツアーに申し込んでいない場合、事前の案内では各寄港地で乗下船に2時間程度かかる可能性があると案内があった。<br /><br />
        今回参加したクルーズは人が少なかったのかツアーに申し込んでいなくても30分以内に下船することができた。<br />
        韓国ではほとんどの人がツアーを利用してたようなので、乗船・下船ともに1時間くらいかかった。<br /><br />
        各寄港地では半日程度の滞在時間であるため、各地の観光をゆっくり行うことはできない。<br />
        あまり東北を満喫したという実感はない。<br /><br />
        それでも<Link className="text-2lg font-semibold text-blue-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700" href='/facility'>船内の設備</Link>が充実しているので、各寄港地は船旅のオマケ程度というイメージで良いかも。

      </p>
    </>
  )
}