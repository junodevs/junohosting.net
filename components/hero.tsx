/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import { CashIcon, SparklesIcon } from '@heroicons/react/outline';
import { LightningBoltIcon } from '@heroicons/react/solid';

export default function Hero(): JSX.Element {
  return (
    <section id="hero" className="bg-black">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <h2 className="mt-2 text-4xl font-semibold font-display text-white">
              Shared server hosting for
              {' '}
              <span className="text-rose-500">all</span>
              .
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl">
              We&apos;re a small team dedicated to providing a top-notch service at an affordable
              price. With Juno Hosting, you can expect incredible reliability and lightning support.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 font-mono">
            <div className="max-w-lg lg:ml-auto lg:max-w-xl">
              <span className="mt-3 flex items-start rounded-lg border-2 border-rose-500 px-5 py-3 text-base font-medium text-white transition ease-in-out duration-150">
                <SparklesIcon className="h-5 w-5 mt-0.5 mr-4 text-gray-500" />
                Ethical infrastructure
              </span>
            </div>
            <div className="max-w-lg lg:ml-auto lg:max-w-xl">
              <span className="mt-3 flex items-start rounded-lg border-2 border-rose-500 px-5 py-3 text-base font-medium text-white transition ease-in-out duration-150">
                <CashIcon className="h-5 w-5 mt-0.5 mr-4 text-gray-500" />
                Best-in-class pricing
              </span>
            </div>
            <div className="max-w-lg lg:ml-auto lg:max-w-xl">
              <span className="mt-3 flex items-start rounded-lg border-2 border-rose-500 px-5 py-3 text-base font-medium text-white transition ease-in-out duration-150">
                <LightningBoltIcon className="h-5 w-5 mt-0.5 mr-4 text-gray-500" />
                Rapid support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
