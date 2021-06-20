/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import Link from 'next/link';

const entries: {
  href: string;
  label: string;
  local: boolean;
}[] = [
  { href: '/', label: 'Home', local: true },
  { href: 'https://gamma.junohosting.net', label: 'Control Panel', local: false },
  { href: 'https://billing.junohosting.net', label: 'Billing Area', local: false },
];

export default function Navbar(): JSX.Element {
  return (
    <nav className="flex justify-between bg-black py-4 px-6">
      <div>
        <span
          id="title"
          className="inline-block font-bold text-white"
        >
          Juno Hosting
        </span>
      </div>
      <div>
        <ul className="flex gap-8">
          {entries.map(({ href, label, local }) => (
            <li
              className="inline-block font-semibold"
              key={label}
            >
              {local
                ? (
                  <Link href={href} passHref>
                    <a
                      className="text-rose-500 hover:underline"
                      href="replace"
                    >
                      {label}
                    </a>
                  </Link>
                )
                : (
                  <a
                    className="text-rose-500 hover:underline"
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {label}
                  </a>
                )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
