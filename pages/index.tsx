import CallToAction from '../components/cta'
import Hero from '../components/hero'
import Layout from '../components/layout'

const lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae dignissim ligula. Vivamus sagittis, mi sed condimentum accumsan, lectus massa.'
const features: {
  title: string;
  blurb: string
}[] = [
  {
    title: 'Easily scalable',
    blurb: lipsum
  },
  {
    title: 'Start for $2.50/mo',
    blurb: lipsum
  },
  {
    title: 'Modern hardware',
    blurb: lipsum
  },
  {
    title: 'Rapid support',
    blurb: lipsum
  },
  {
    title: 'Ethical infrastructure',
    blurb: lipsum
  },
  {
    title: 'Plenty of options',
    blurb: lipsum
  },
  {
    title: 'Backed by Open Source',
    blurb: lipsum
  },
  {
    title: 'Best-in-class Pricing',
    blurb: lipsum
  }
]

export default function Home () {
  return (
    <Layout>
      <Hero />
      <section id="features">
        <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-2 grid-cols-1 grid-rows-8 sm:grid-cols-2 sm:grid-rows-4 md:grid-cols-4 md:grid-rows-2">
          {features.map(({ title, blurb }) => {
            return (
              <div className="mb-8" key={title}>
                <h2 className="mt-1 text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                  {title}
                </h2>
                <p className="text-gray-900 mt-2">
                  {blurb}
                </p>
              </div>
            )
          })}
        </div>
      </section>
      <CallToAction />
    </Layout>
  )
}
