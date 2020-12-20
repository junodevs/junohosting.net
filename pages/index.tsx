/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import Head from 'next/head'
import CallToAction from '../components/cta'
import Hero from '../components/hero'
import Layout, { siteTitle } from '../components/layout'
import ProductCard from '../components/productCard'

const features: {
  title: string;
  blurb: string
}[] = [
  {
    title: 'We don\'t nickel and dime',
    blurb: `Get what you pay for, and more. All transfer limits are soft caps.
    IPv6 /64 subnet included with all machines.
    <a class="text-indigo-600 hover:underline" href="mailto:hi@junohosting.net">
      Contact us
    </a> for help setting up your new machine at no extra cost.`
  },
  {
    title: 'Modern hardware',
    blurb: `All nodes are running on modern hardware, utilizing the latest in
    virtualization and redundancy, providing for incredible reliability when it
    matters most.`
  },
  {
    title: 'Ethical Infrastructure',
    blurb: `We take extreme care in sourcing our power and internet resources to
    minimize our carbon footprint. We select our hardware to reduce E-Waste when
    hardware is retired.`
  },
  {
    title: 'Rapid Support',
    blurb: `Extremely fast support from skilled representatives gets any issues
    resolved within hours, not days.`
  },
  {
    title: 'Plenty of options',
    blurb: `Have a different plan in mind? Contact us to craft your own solution
    and get it deployed.`
  },
  {
    title: 'Backed by Open Source',
    blurb: `We support Open Source. 99% of code for our billing platform is
    available, and <a class="text-indigo-600 hover:underline"
    href="https://junodevs.tech">we've been building for the
    open source community for months</a>.`
  }
]

const plans: {
  cores: number;
  tier: number;
  bandwidth: number;
  memory: string;
  price: number | string;
  storage: number;
  goodFor: string;
}[] = [
  {
    cores: 1,
    bandwidth: 50,
    price: '2.50',
    memory: '512 MB',
    storage: 15,
    tier: 1,
    goodFor: 'chat bots'
  },
  {
    cores: 1,
    bandwidth: 150,
    price: 5,
    memory: '2 GB',
    storage: 45,
    tier: 2,
    goodFor: 'web servers'
  },
  {
    cores: 2,
    bandwidth: 150,
    memory: '4 GB',
    price: 10,
    storage: 80,
    tier: 3,
    goodFor: 'game servers'
  },
  {
    cores: 4,
    bandwidth: 150,
    memory: '8 GB',
    price: 15,
    storage: 120,
    tier: 4,
    goodFor: 'Docker'
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
        <div className="mt-8 mb-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-4 grid-cols-1 grid-rows-6 md:grid-cols-3 md:grid-rows-2">
          {features.map(({ title, blurb }) => {
            return (
              <div key={title}>
                <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                  {title}
                </h2>
                <p
                  className="text-gray-900 mt-2"
                  dangerouslySetInnerHTML={{ __html: blurb }}
                />
              </div>
            )
          })}
        </div>
      </section>
      <CallToAction to="#plans" />
      <section id="about-us" className="px-3 lg:px-0">
        <div
          className="max-w-4xl rounded-lg mx-auto border-4 border-indigo-600 shadow-lg mb-7"
        >
          <div className="text-indigo-600 py-4 px-6">
            <h2 className="mt-2 text-4xl font-bold font-display">
              About <span className="hidden sm:inline-block">Juno Hosting</span>
              <span className="inline-block sm:hidden">Us</span>
            </h2>
            <p className="mt-4 text-lg text-gray-900">
              I created Juno Hosting because I saw a lack of quality and care in
              the hosting industry. Juno Hosting was founded on the notion that
              anyone should be able to share their ideas with the world. From
              artists to software developers, everyone should have access to
              performative server options that bring their ideas to life.
              Whether you&apos;re creating a personal website or a gaming
              adventure, making it shouldn&apos;t cost an arm and a leg.
              I&apos;m confident you&apos;ll find your solution in Juno Hosting.
            </p>
          </div>
          <div className="bg-indigo-600 text-white">
            <div className="py-2 sm:ml-4 px-6">
              &mdash; Max Bromberg, founder and CEO of Juno Hosting.
            </div>
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
            We offer four distinct tiers of VPS&apos; designed to meet common
            use cases. All systems have a soft data transfer limit of 500GB.
          </p>
        </div>
        <div className="my-8 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 grid-rows-5 sm:grid-cols-3 sm:grid-rows-2 gap-4">
          {plans.map(vps => {
            return (
              <div key="tier">
                <ProductCard tier={vps.tier} price={vps.price}>
                  <ul className="list">
                    <li>{vps.cores} vCPU{vps.cores === 1 ? 's' : ''}</li>
                    <li>{vps.memory} of RAM</li>
                    <li>{vps.bandwidth} MB/s</li>
                    <li>{vps.storage} GB of Storage</li>
                    <li>Good for {vps.goodFor}</li>
                  </ul>
                </ProductCard>
              </div>
            )
          })}
          <div className="sm:col-span-2 h-full">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-4 py-2">
                <h1 className="text-gray-900 font-bold text-2xl">
                  Need a custom solution?
                </h1>
                <p className="text-gray-600 text-sm mt-1 mb-15">
                  We&apos;ll work with you to create exactly what you need for
                  your circumstances. Contact us to get started.
                </p>
              </div>
              <div className="flex bg-gray-900 justify-end px-4 py-2">
                <a
                  href="mailto:hi@junohosting.net"
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-sm text-gray-900 font-semibold rounded"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
