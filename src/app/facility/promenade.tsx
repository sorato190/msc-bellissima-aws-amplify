'use client'
import { useInView } from 'react-intersection-observer';


export default function Promenade() {

  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  return (
    <>
      {/* デッキ6/7の紹介 */}
      <section className="text-gray-900 body-font">
        <div className={inView ? "md:animate-tracking-in-expand mb-10 md:mb-16" : "invisible"} ref={ref}>
          <h2 className="mb-4 text-center  text-2xl font-bold text-black sm:text-3xl md:text-4xl md:mt-5 md:mb-5">Deck6 Promenade / Shopping</h2>

          <p className="mx-auto max-w-screen-lg text-gray-900 text-base md:text-xl">
            デッキ6/7で吹き抜けになっているプロムナードは天井がLEDで様々な模様に変化する。<br />化粧品、時計、服、宝石などなどショッピングエリアになっている。
          </p>
        </div>

        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img src="/facility/facility-promenade-1.jpg" width={500} height={300} alt="gallery" className="w-full object-cover h-full object-center block" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img src="/facility/facility-promenade-2.jpg" width={500} height={300} alt="gallery" className="w-full object-cover h-full object-center block" />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img src="/facility/facility-promenade-3.jpg" width={600} height={400} alt="gallery" className="w-full object-cover h-full object-center block" />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img src="/facility/facility-chocolate-1.jpg" alt="gallery" className="w-full object-cover h-full object-center block" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img src="/facility/facility-chocolate-2.jpg" alt="gallery" className="w-full object-cover h-full object-center block" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img src="/facility/facility-shopping-1.jpg" alt="gallery" className="w-full object-cover h-full object-center block" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}