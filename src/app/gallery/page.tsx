'use client'

import { useInView } from 'react-intersection-observer';
import Ishinomaki from './1-shinomaki';
import Miyako from './2-miyako';
import Aomori from './3-aomori';
import Korea from './4-korea';
import Sapporo from './5-sapporo';

export default function Gallery() {

  const { ref, inView } = useInView({
    // ref要素が現れてから50px過ぎたら
    // rootMargin: "-100px",
    threshold: 0.6,
    // 最初の一度だけ実行
    // triggerOnce: true,
  });

  return (
    <>
      <Ishinomaki />
      <Miyako />
      <Aomori />
      <Korea />
      <Sapporo />
    </>
  )
}