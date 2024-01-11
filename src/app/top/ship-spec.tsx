'use client'
import { useInView } from 'react-intersection-observer';


export default function ShipSpec() {

  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  return (
    <>
      {/* 船の情報 */}
      <div className={inView ? "md:animate-tracking-in-contract-bck" : "invisible"} ref={ref}>
        <div className="h-24 w-full flex justify-center items-center animate-tracking-in-expand">
          <h1 className="text-2xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">Spec</h1>
        </div>
        <div className="mb-20 md:pt-8">
          <div className="flex flex-col">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <table className="min-w-full text-center text-lg sm:text-2xl font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-3 py-2"></th>
                    <th scope="col" className="px-3 py-2">MSC Bellissima</th>
                    <th scope="col" className="px-3 py-2">飛鳥Ⅱ(日本最大客船)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-2 md:px-4 py-2 font-medium">
                      総トン数
                    </td>
                    <td className="whitespace-nowrap px-2 md:px-4 py-2">171,598t</td>
                    <td className="whitespace-nowrap px-2 md:px-4 py-2">50,444t</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-2 md:px-4 py-2 font-medium">
                      全長
                    </td>
                    <td className="whitespace-nowrap px-2 md:px-4 py-2">315m</td>
                    <td className="whitespace-nowrap px-2 md:px-4 py-2">241m</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-2 md:px-4 py-2 font-medium">
                      就航年
                    </td>
                    <td className="whitespace-nowrap px-2 md:px-4 py-2">2019年3月</td>
                    <td className="whitespace-nowrap px-2 md:px-4 py-2">2006年2月</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-2 md:px-4 py-2 font-medium">
                      乗客定員
                    </td>
                    <td className="whitespace-nowrap px-2 md:px-4 py-2">5686名</td>
                    <td className="whitespace-nowrap px-2 md:px-4 py-2">872名</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-2 md:px-4 py-2 font-medium">
                      客室数
                    </td>
                    <td className="whitespace-nowrap px-2 md:px-4 py-2">2217室</td>
                    <td className="whitespace-nowrap px-2 md:px-4 py-2">436室</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-2 md:px-4 py-2 font-medium">
                      デッキ数
                    </td>
                    <td className="whitespace-nowrap px-2 md:px-4 py-2">19</td>
                    <td className="whitespace-nowrap px-2 md:px-4 py-2">9</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}