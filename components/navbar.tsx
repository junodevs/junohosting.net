import Link from 'next/link'

const entries: {
  href: string;
  label: string;
  local: boolean;
}[] = [
  { href: '/', label: 'Home', local: true },
  { href: '/about', label: 'About', local: true },
  { href: '/panel', label: 'Web Panel', local: true },
  { href: 'https://discord.gg/asfmaXr', label: 'Discord', local: false }
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
                className="mr-3 inline-block font-semibold text-indigo-600 hover:text-indigo-700 py-1 px-3"
                key={label}
              >
                {local
                  ? (
                      <Link href={href}>
                        <a>{label}</a>
                      </Link>
                    )
                  : (
                      <a href={href}>{label}</a>
                    )}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
