import Head from 'next/head';
import { Inter } from 'next/font/google';

import Hero from '@/components/landing/Hero';
import Header from '@/components/landing/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />
      </main>
    </>
  );
}
