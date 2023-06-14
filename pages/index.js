import { AboutSection, Button, HeroSection, SkemaSection } from '@/components'
import Head from 'next/head'

export default function Home() {
  return (
    <main>
      <Head>
        <title>IITC</title>
      </Head>
      <HeroSection />
      <AboutSection />
      <SkemaSection />
    </main>
  )
}
