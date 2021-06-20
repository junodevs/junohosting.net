/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import Link from 'next/link';

export default function CallToAction({ to }: {
  to: string
}): JSX.Element {
  return (
    <section id="cta" className="bg-rose-500">
      <div className="max-w-6xl mx-auto p-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-2.5xl">
          <span className="block text-white">Interested? Purchase a machine today.</span>
        </h2>
        <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex gap-2 text-base font-medium">
            <Link href={to} passHref>
              <a
                href="replace"
                className="rounded items-center justify-center flex px-5 py-2 transition text-rose-500 bg-gray-100 hover:bg-gray-200"
              >
                See the Plans
              </a>
            </Link>
            <a
              href="https://discord.gg/we3KvqrQhB"
              className="rounded px-5 py-2 transition text-white bg-gray-900 hover:bg-black"
              rel="noreferrer noopener"
              target="_blank"
            >
              Join our Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
