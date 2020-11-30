import Navbar from './navbar'

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
