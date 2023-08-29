'use client'

import { useInView } from 'react-intersection-observer';
import ApplicationTop from './app-top';
import ApplicationGallery from './app-gallery';
import ApplicationComment from './app-comment';

export default function MscForMe() {

  const { ref, inView } = useInView({
    // ref要素が現れてから50px過ぎたら
    // rootMargin: "-100px",
    threshold: 0.6,
    // 最初の一度だけ実行
    // triggerOnce: true,
  });

  return (
    <>
      <ApplicationTop />
      <ApplicationGallery />
      <ApplicationComment />
    </>
  )
}