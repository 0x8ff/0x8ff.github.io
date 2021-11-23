import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Shulkk.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Under Construction
        </h1>

        <p className="mt-3 text-2xl">
          ETA Sometime in December 2021
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://discord.gg/T8xp4Ruckz"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Discord Server &rarr;</h3>
            <p className="mt-4 text-xl">
              Join now!
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}