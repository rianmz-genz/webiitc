import { AboutSection, Button, HeroSection } from '@/components'
import Head from 'next/head'

export default function Home() {
  return (
    <main>
      <Head>
        <title>IITC</title>
      </Head>
      <HeroSection />
      <AboutSection />
    </main>
  )
}
