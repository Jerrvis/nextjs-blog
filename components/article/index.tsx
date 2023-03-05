import styles from "./index.module.css";

interface Props {
  data: any;
}
export default function index({ data }: Props) {
  return (
    <article className={styles.article}>
      <header className={styles.post_header}>
        <h3>
          <a href={`/${data.type}/${data.slug}`}>{data.title}</a>
        </h3>
        <h6>{data.date}</h6>
      </header>
      <div className={styles.post_content}>{data.description}</div>
      <div></div>
    </article>
  );
}
