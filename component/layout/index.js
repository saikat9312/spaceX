import Head from 'next/head'
import styles from '../../styles/Index.module.css'
export default function Layout(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>SpaceX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <div className={styles.title}>
          SpaceX Launch Programs
        </div>
        {props.children}
      </main>

      <footer >
        Developed by{' '} Saikat Bhattacharya
      </footer>
    </div>
  )
}
