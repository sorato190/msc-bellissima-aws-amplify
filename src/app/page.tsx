'use client'

import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import Top from './top/landing';
import ShipSpec from './top/ship-spec';
import TourSchedule from './top/tour-schedule';
import TourTimeline from './top/tour-timeline';
import TourComment from './top/tour-comment';

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
      <Top />
      <ShipSpec />
      <TourSchedule />
      <TourTimeline />
      <TourComment />
    </>


  )
}
