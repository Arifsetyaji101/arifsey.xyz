import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arif Setyaji Personal Web</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://arifsey.xyz">My Journey</a>
        </h1>

        <p className={styles.description}>
        Beberapa project yang sedang saya kembangkan dan pelajari
        </p>

        <div className={styles.grid}>
          <a href="https://tararevel.herokuapp.com" className={styles.card}>
            <h2>Tararevel</h2>
            <p>Website tour and travel bagi kalian yang ingin menjelajah ke berbagai tempat hanya dengan 1 klik</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
