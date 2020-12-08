import Footer from './footer'
import Navbar from './navbar'

export const siteTitle = 'Juno Hosting'

export default function Layout ({ children }: {
  children: React.ReactNode
}) {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <hr className="my-5 max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto" />
      <Footer />
    </div>
  )
}
