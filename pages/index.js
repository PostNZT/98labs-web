import Head from 'next/head'

import { NavBar } from '../components/layouts/NavBar'
import { Hero } from '../components/layouts/Hero'
import { Testimonials } from '../components/layouts/Testimonials'
import { CallToAction } from '../components/layouts/CallToAction'
import { Footer } from '../components/layouts/Footer'

export default function IndexPage() { 
  return (
    <>
      <Head>
        <title>
          98Labs
        </title>
        <meta 
          name='98Labs'
          content='Thinking without boundaries'
        />
      </Head>
      <NavBar />
      <main>
        <Hero />
        <CallToAction />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}



