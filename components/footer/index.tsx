import styles from './index.module.less'

export default () => {
  return (
    <footer className={styles.footer + ' mg-mid'}>
      <div className={styles.info}>
        <div>Copyright © 2022-2023 Jkun</div>
        <div>Design By Jkun</div>
        {/* <div>jerrvis@outlook.com</div> */}
      </div>
    </footer>
  )
}
