import Head from 'next/head'
import Link from 'next/link'

export default function SamplePost() {
  return (
    <>
      <Head>
        <title>Sample Post</title>
      </Head>
      <h1>Sample Post</h1>
      <h2>This is a sample post. Click here to gom
        <Link href="/">
          <a>Back to home</a>
        </Link>
       <Link href="/posts/sample-post/">
          <a>Sample post</a>
      </Link>
      </h2>
    </>
  )
}