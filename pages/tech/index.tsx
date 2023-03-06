import Article from 'components/article'
import { getContentList } from '@/api'
import Head from 'next/head'

export default function index({ list }: { list: any }) {
  return (
    <>
      <Head>
        <title>技术-i21y</title>
        <meta
          name="description"
          content="技术类文章，我的技术知识分享"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/i21y.ico"
        />
      </Head>
      <main>
        {list.map((item: any) => (
          <Article data={item}></Article>
        ))}
      </main>
    </>
  )
}

export async function getStaticProps() {
  const list = getContentList('tech')
  return {
    props: { list: list.map(({ tags, ...rest }) => rest) },
    revalidate: 14400
  }
}
