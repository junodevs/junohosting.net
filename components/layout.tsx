/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import Footer from './footer';
import Navbar from './navbar';

export const siteTitle = 'Juno Hosting';
export const siteDescription = 'We\'re a small team dedicated to providing a top-notch experience at an affordable price. With Juno Hosting, you can expect incredible reliability and lightning support.';

export default function Layout({ children }: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
