/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

export default function ProductCard ({ price, tier, children }: {
  price: number | string,
  tier: number,
  children: React.ReactNode
}) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-2">
        <h1 className="text-gray-900 text-center font-bold text-2xl">
          Tier {tier}
        </h1>
        <p className="text-gray-600 text-sm mt-1">{children}</p>
      </div>
      <div className="bg-gray-900 flex items-center justify-between px-4 py-2">
        <h1 className="text-gray-200 font-bold text-xl">${price}/mo</h1>
        <a
          href={`https://billing.junohosting.net/order/config/index/vps/?group_id=10&pricing_id=${tier}`}
          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-sm text-gray-900 font-semibold rounded"
        >
          Purchase
        </a>
      </div>
    </div>
  )
}
