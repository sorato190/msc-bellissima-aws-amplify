'use client'
import { useInView } from 'react-intersection-observer';


export default function Top() {

  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true
  });

  return (
    <>
      {/* Top */}
      <div className={inView ? "animate-swing-in-top-fwd relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center" : "h-5/6 invisible"} ref={ref}>
        <img src="/top/top-msc-bellissima.jpg" loading="lazy" alt="Photo by Kaung Htet" className="h-5/6 w-full object-cover object-center" />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 text-5xl font-semibold">MSC Bellissima</h2>
              <h4 className="mb-6 text-2xl font-semibold">クルーズ体験記</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}