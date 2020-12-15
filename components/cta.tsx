export default function CallToAction ({ to }: {
  to: string
}) {
  return (
    <section id="cta">
      <div className="max-w-6xl mx-auto p-4 sm:px-6 lg:pb-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block text-gray-900">Interested?</span>
          <span className="block text-indigo-600">Purchase a machine today.</span>
        </h2>
        <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href={to}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              See the Plans
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="https://discord.gg/asfmaXr"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Join our Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
