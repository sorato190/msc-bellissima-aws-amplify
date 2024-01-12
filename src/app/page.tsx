'use client'

import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import Top from './top/landing';
import ShipSpec from './top/ship-spec';
import TourSchedule from './top/tour-schedule';
import TourTimeline from './top/tour-timeline';
import TourComment from './top/tour-comment';

export default function Home() {

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
