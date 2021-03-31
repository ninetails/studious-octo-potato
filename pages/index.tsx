import Head from 'next/head'
import CounterDisplay from '../src/modules/counter/components/CounterDisplay'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <CounterDisplay />
      </main>
    </>
  )
}
