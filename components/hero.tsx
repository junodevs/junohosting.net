export default function Hero () {
  return (
    <section id="hero" className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <h2 className="mt-2 text-4xl font-semibold font-display text-white">
              Shared server hosting for <span className="text-indigo-500">all</span>.
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl">
              We&apos;re a small team dedicated to providing a top-notch experience at an affordable price. With Juno Hosting, you can expect incredible reliability and lightning support.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 font-mono">
            <div className="max-w-lg lg:ml-auto lg:max-w-xl">
              <span className="mt-3 flex items-start rounded-lg border border-gray-700 px-5 py-3 text-base font-medium text-white transition ease-in-out duration-150">
              <svg className="mt-0.5 mr-4 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>

                Ethical infrastructure
              </span>
            </div>
            <div className="max-w-lg lg:ml-auto lg:max-w-xl">
              <span className="mt-3 flex items-start rounded-lg border border-gray-700 px-5 py-3 text-base font-medium text-white transition ease-in-out duration-150">
                <svg className="mt-0.5 mr-4 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>

                Best-in-class pricing
              </span>
            </div>
            <div className="max-w-lg lg:ml-auto lg:max-w-xl">
              <span className="mt-3 flex items-start rounded-lg border border-gray-700 px-5 py-3 text-base font-medium text-white transition ease-in-out duration-150">
                <svg className="mt-0.5 mr-4 h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>

                Rapid support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
