/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import Link from 'next/link'

const entries: {
  href: string;
  label: string;
  local: boolean;
}[] = [
  { href: '/', label: 'Home', local: true },
  { href: 'https://billing.junohosting.net', label: 'Client Area', local: false },
  { href: 'https://discord.gg/asfmaXr', label: 'Contact Us', local: false }
]

export default function Navbar () {
  return (
    <nav className="grid grid-cols-5 gap-2 mb-1 p-3">
      <div className="col-span-1">
        <span
          id="title"
          className="mr-3 inline-block font-bold py-1 text-gray-900 px-3"
        >
          Juno Hosting
        </span>
      </div>
      <div className="col-span-4">
        <ul className="flex float-right">
          {entries.map(({ href, label, local }) => {
            return (
              <li
                className="mr-3 inline-block font-semibold py-1 px-3"
                key={label}
              >
                {local
                  ? (
                      <Link href={href}>
                        <a className="text-indigo-600 hover:underline">
                          {label}
                        </a>
                      </Link>
                    )
                  : (
                      <a className="text-indigo-600 hover:underline" href={href}>
                        {label}
                      </a>
                    )}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
