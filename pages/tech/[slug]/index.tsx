import { getContentBySlug, getTechSlugList } from "@/api";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import { useEffect } from "react";
import styles from "./index.module.css";

interface Props {
  article: any;
}

export default ({ article }: Props) => {
  useEffect(() => {
    const lazyImages = document.querySelectorAll("img[data-src]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 进入可视区域，加载图片
          const img: any = entry.target;
          // if (img.dataset.src) {
          img.src = img.dataset.src;

          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      });
    });
    lazyImages.forEach((img) => observer.observe(img));
  }, []);
  console.log(article);
  return (
    <>
      <Head>
        <title>{article.title}-i21y</title>
        <meta name="description" content={article.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/i21y.ico" />
      </Head>
      <main>
        <article className={styles.article}>
          <div className={styles.head}>
            <h1>{article.title}</h1>
            <h4>{article.date}</h4>
          </div>
          <div className="markdown">
            <MDXRemote
              {...article.content}
              components={{
                img: (props) => (
                  <img data-src={props.src} src="#" alt={props.alt} />
                ),
              }}
            ></MDXRemote>
          </div>
        </article>
      </main>
    </>
  );
};

// 获取node类的文章列表 生成对应路由
export async function getStaticPaths(a: any) {
  const list = getTechSlugList();
  return {
    paths: list.map((item) => ({
      params: { slug: item },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const article = await getContentBySlug("tech", params.slug);
  return {
    props: { article },
    revalidate: 86400,
  };
}
