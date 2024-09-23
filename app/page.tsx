
import Head from 'next/head';
import '@/globals.css';  

export default function Welcome() {
  return (
    <div className='bg-customBackground min-h-screen'>
      {/* <Head>
        <title>Welcome Page</title>
        <meta name="description" content="Welcome to our site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

  

      <footer className='p-4 bg-gray-800 text-white text-center'>
        <p>© 2024 My Next.js App</p>
      </footer> */}
          <main className='p-8'>
        <h1 className='text-red-600 text-3xl font-bold'>Welcome to Our Website</h1>
        <p className='text-gray-800'>We are glad to have you here!</p>
      </main>
    </div>
  );
}
