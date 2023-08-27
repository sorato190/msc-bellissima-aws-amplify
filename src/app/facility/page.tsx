'use client'

import { useInView } from 'react-intersection-observer';
import DeckMap from './deckmap';
import Cabin from './cabin';
import Promenade from './promenade';
import Theater from './theater';
import Buffet from './buffet';
import Pool from './pool';

export default function Facility() {

  const { ref, inView } = useInView({
    // ref要素が現れてから50px過ぎたら
    // rootMargin: "-100px",
    threshold: 0.6,
    // 最初の一度だけ実行
    // triggerOnce: true,
  });

  return (
    <>
      <DeckMap />
      <Cabin />
      <Promenade />
      <Theater />
      <Buffet />
      <Pool />
    </>
  )
}