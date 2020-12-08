export default function ProductCard ({ price, tier, children }: {
  price: number | string,
  tier: number | string,
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
        <button
          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-sm text-gray-900 font-semibold rounded"
        >
          Purchase
        </button>
      </div>
    </div>
  )
}
