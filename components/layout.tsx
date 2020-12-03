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
    </div>
  )
}
