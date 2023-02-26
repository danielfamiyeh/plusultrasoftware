import Head from 'next/head';

import Hero from '@/components/landing/Hero';
import Footer from '@/components/landing/Footer';
import Header from '@/components/landing/Header';
import Skills from '@/components/landing/Skills';
import Divider from '@/components/landing/Divider';
import Projects from '@/components/landing/Projects';
import Experience from '@/components/landing/Experience';

export default function Home() {
  return (
    <>
      <Head>
        <title>Plus Ultra Software</title>
        <meta
          name="description"
          content="Software solutions that go further beyond"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />

        <Hero />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
