import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Bot from '../components/bot';

export default function Home() {
  return (
    <>
    <div className="bot">
    <Bot />
    </div>
    <Layout home>
      <Head>
        <title>Learn T1D</title>
      </Head>
      <p>
      <Link href="/nextpage">
        <a>Learn more</a>
      </Link>
      </p>
      <p>
      <Link href="/glossary">
        <a>Glossary</a>
      </Link>
      </p>
    </Layout>
</>
  )
}
