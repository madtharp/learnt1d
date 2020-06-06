import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Bot from '../components/bot';

export default function nextpage() {
  return (
    <>
    <div>
    <Layout home>
      <Head>
        <title>Learn T1D | About</title>
      </Head>
      <h2>About</h2>
      <p>We're committed to spreading awareness about type 1 diabetes. You can find more updates on our Instagram page</p>
      <div className="defintion">

      </div>
    </Layout>
  </div>
  <div className="bot">
  <Bot />
  </div>
</>
  )
}
