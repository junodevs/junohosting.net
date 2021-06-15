/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import { CheckIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const tiers = [
  {
    name: 'Scintillam',
    price: '2.50',
    features: {
      cores: 1,
      bandwidth: 50,
      memory: '512 MB',
      storage: 15,
    },
  },
  {
    name: 'Flamma',
    features: {
      cores: 1,
      bandwidth: 150,
      memory: '2 GB',
      storage: 45,
    },
    price: '4.99',
  },
  {
    name: 'Ignis',
    features: {
      cores: 2,
      bandwidth: 150,
      memory: '4 GB',
      storage: 80,
    },
    price: '9.99',
  },
  {
    name: 'Pyram',
    features: {
      cores: 4,
      bandwidth: 150,
      memory: '8 GB',
      storage: 120,
    },
    price: '14.99',
  },
];

export default function ProductCard({ tier }: { tier: number }): JSX.Element {
  const currentTier = tiers[tier];

  return (
    <div className="border border-transparent">
      <h2 className="text-white font-semibold uppercase tracking-wide text-center mb-2">
        {currentTier.name}
      </h2>
      <dl className="text-white flex flex-col items-center mb-auto">
        <div className="mb-6">
          <dt className="sr-only">Price</dt>
          <dd className="text-base font-medium text-gray-400">
            <span className="flex items-end justify-center">
              <span className="text-5xl tracking-tight text-white font-extrabold mx-3">
                $
                {currentTier.price}
              </span>
              <span className="text-white">/mo</span>
            </span>
          </dd>
        </div>
        <div className="space-y-4 mb-4">
          <dt className="sr-only">Features</dt>
          <dd className="flex items-center">
            <CheckIcon className="w-5 h-3 text-gray-400 mr-3" />
            {currentTier.features.memory}
            {' '}
            of RAM
          </dd>
          <dd className="flex items-center">
            <CheckIcon className="w-5 h-3 text-gray-400 mr-3" />
            {currentTier.features.storage}
            {' '}
            GBs of Storage
          </dd>
          <dd className="flex items-center">
            <CheckIcon className="w-5 h-3 text-gray-400 mr-3" />
            {currentTier.features.cores}
            {' '}
            vCPU Core
            {currentTier.features.cores === 1 ? '' : 's'}
          </dd>
          <dd className="flex items-center">
            <CheckIcon className="w-5 h-3 text-gray-400 mr-3" />
            {currentTier.features.bandwidth}
            {' '}
            MB/s Network Bandwidth
          </dd>
        </div>
      </dl>
      <Link href="/" passHref>
        <a
          href="replace"
          className="rounded items-center justify-center flex px-5 py-2 transition text-white bg-rose-500 hover:bg-rose-600"
        >
          Purchase
        </a>
      </Link>
    </div>
  );
}
