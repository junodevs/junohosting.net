/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import Head from 'next/head';
import {
  CashIcon, ChipIcon, SparklesIcon, SupportIcon,
} from '@heroicons/react/outline';
import type { SVGProps } from 'react';
import CallToAction from '../components/cta';
import Hero from '../components/hero';
import Layout, { siteDescription, siteTitle } from '../components/layout';
import ProductCard from '../components/productCard';

const features: {
  title: string;
  blurb: JSX.Element;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}[] = [
  {
    title: 'We don\'t nickel and dime',
    blurb: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisl
        magna, convallis auctor felis sit amet, venenatis tincidunt leo. Duis
        imperdiet vitae leo sed facilisis.
      </p>
    ),
    icon: CashIcon,
  },
  {
    title: 'Modern hardware',
    blurb: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisl
        magna, convallis auctor felis sit amet, venenatis tincidunt leo. Duis
        imperdiet vitae leo sed facilisis.
      </p>
    ),
    icon: ChipIcon,
  },
  {
    title: 'Ethical Infrastructure',
    blurb: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisl
        magna, convallis auctor felis sit amet, venenatis tincidunt leo. Duis
        imperdiet vitae leo sed facilisis.
      </p>
    ),
    icon: SparklesIcon,
  },
  {
    title: 'Rapid Support',
    blurb: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisl
        magna, convallis auctor felis sit amet, venenatis tincidunt leo. Duis
        imperdiet vitae leo sed facilisis.
      </p>
    ),
    icon: SupportIcon,
  },
];

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
    goodFor: 'chat bots',
  },
  {
    cores: 1,
    bandwidth: 150,
    price: 5,
    memory: '2 GB',
    storage: 45,
    tier: 2,
    goodFor: 'web servers',
  },
  {
    cores: 2,
    bandwidth: 150,
    memory: '4 GB',
    price: 10,
    storage: 80,
    tier: 3,
    goodFor: 'game servers',
  },
  {
    cores: 4,
    bandwidth: 150,
    memory: '8 GB',
    price: 15,
    storage: 120,
    tier: 4,
    goodFor: 'Docker',
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={siteDescription} />

        <link rel="icon" href="/favicon.ico" />

        <title>{siteTitle}</title>
      </Head>
      <Hero />
      <CallToAction to="#plans" />
      <section id="features" className="m-6">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Why Juno Hosting?
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum
                cupiditate veritatis in accusamus quisquam.
              </p>
            </div>
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {features.map((feature) => (
                  <div key={feature.title} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-rose-500 text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{feature.blurb}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
      <section id="plans">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Plans
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at pulvinar tellus.
            Duis et massa velit. Proin vitae mollis nunc.
          </p>
        </div>
        <div className="bg-black my-8 border-t-8 border-b-8 border-rose-500">
          <div className="grid mx-auto justify-center gap-10 p-16 grid-cols-1 md:grid-cols-4">
            {plans.map((_, i) => (
              <div key={i.toString()}>
                <ProductCard tier={i} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
