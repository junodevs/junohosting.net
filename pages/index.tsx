import Head from 'next/head'
import CallToAction from '../components/cta'
import Hero from '../components/hero'
import Layout, { siteTitle } from '../components/layout'
import ProductCard from '../components/productCard'

const lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae dignissim ligula. Vivamus sagittis, mi sed condimentum accumsan, lectus massa.'
const features: {
  title: string;
  blurb: string
}[] = [
  {
    title: 'Easily scalable',
    blurb: lipsum
  },
  {
    title: 'Start for $2.50/mo',
    blurb: lipsum
  },
  {
    title: 'Modern hardware',
    blurb: lipsum
  },
  {
    title: 'Rapid support',
    blurb: lipsum
  },
  {
    title: 'Ethical infrastructure',
    blurb: lipsum
  },
  {
    title: 'Plenty of options',
    blurb: lipsum
  },
  {
    title: 'Backed by Open Source',
    blurb: lipsum
  },
  {
    title: 'Best-in-class Pricing',
    blurb: lipsum
  }
]
const plans: {
  cores: number;
  tier: number;
  bandwidth: number;
  memory: string;
  price: number | string;
  storage: number;
}[] = [
  {
    cores: 1,
    bandwidth: 50,
    price: '2.50',
    memory: '512 MB',
    storage: 15,
    tier: 1
  },
  {
    cores: 1,
    bandwidth: 150,
    price: 5,
    memory: '2 GB',
    storage: 45,
    tier: 2
  },
  {
    cores: 2,
    bandwidth: 150,
    memory: '4 GB',
    price: 10,
    storage: 80,
    tier: 3
  },
  {
    cores: 4,
    bandwidth: 150,
    memory: '8 GB',
    price: 15,
    storage: 120,
    tier: 4
  }
]

export default function Home () {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="We're a small team dedicated to providing a top-notch experience at an affordable price. With Juno Hosting, you can expect incredible reliability and lightning support."
        />

        <link rel="icon" href="/favicon.ico" />

        <title>{siteTitle}</title>
      </Head>
      <Hero />
      <section id="features">
        <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-2 grid-cols-1 grid-rows-8 sm:grid-cols-2 sm:grid-rows-4 md:grid-cols-4 md:grid-rows-2">
          {features.map(({ title, blurb }) => {
            return (
              <div className="mb-8" key={title}>
                <h2 className="mt-1 text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                  {title}
                </h2>
                <p className="text-gray-900 mt-2">
                  {blurb}
                </p>
              </div>
            )
          })}
        </div>
      </section>
      <CallToAction to="#plans" />
      <section
        id="about-us"
        className="bg-gradient-to-r from-indigo-500 to-indigo-600 mb-8"
      >
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="mt-2 text-4xl font-bold font-display text-white">
              About Juno Hosting
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              varius neque enim, non sodales massa pretium eu. Nunc lacinia
              metus quis gravida vestibulum. Vivamus fringilla condimentum
              neque, eu malesuada massa rhoncus eget. Cras malesuada tincidunt
              risus sed sodales. Vestibulum aliquam vel orci ut pellentesque.
              Mauris rhoncus eleifend libero, id scelerisque orci aliquet ut.
              Curabitur bibendum vulputate turpis, id blandit massa ultricies a.
              Nulla et tristique arcu. Quisque eu mauris consectetur, efficitur
              mauris id, dignissim massa. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </div>
      </section>
      <section id="plans">
        <div className="text-center">
          <h1
            className="my-1 text-4xl font-extrabold tracking-tight text-gray-900"
          >
            Plans
          </h1>
          <p className="max-w-xl mx-auto">
            Juno Hosting offers four distinct tiers of VPS&apos; plans each
            designed to suit your best interests. All systems have a soft data
            transfer limit of 500GB.
          </p>
        </div>
        <div className="mt-8 mb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 grid-rows-2 gap-4">
          {plans.map(vps => {
            return (
              <div key="tier">
                <ProductCard tier={vps.tier} price={vps.price}>
                  <ul className="list">
                    <li>{vps.cores} vCPU{vps.cores === 1 ? 's' : ''}</li>
                    <li>{vps.memory} of RAM</li>
                    <li>{vps.bandwidth} MB/s</li>
                    <li>{vps.storage} GB of Storage</li>
                  </ul>
                </ProductCard>
              </div>
            )
          })}
          <div className="col-span-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-4 py-2">
                <h1 className="text-gray-900 font-bold text-2xl">
                  Need a custom solution?
                </h1>
                <p className="text-gray-600 text-sm mt-1 mb-5">
                  Juno Hosting&apos;s primary goal is to provide the best
                  possible experience to you &mdash; the customer &mdash;
                  therefore we offer any custom VPS tier you request.
                </p>
              </div>
              <div className="flex bg-gray-900 justify-end px-4 py-2">
                <button
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-sm text-gray-900 font-semibold rounded"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
