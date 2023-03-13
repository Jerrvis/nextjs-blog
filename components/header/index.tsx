import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './index.module.less'
import IconPlane from '../icon/plane.svg'
import IconHome from '../icon/home.svg'
import IconWrench from '../icon/wrench.svg'

export default function Header() {
  const [prevScrollPosition, setPrevScrollPosition] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset
      setVisible(
        currentScrollPosition <= prevScrollPosition ||
          currentScrollPosition < 80
      )
      setPrevScrollPosition(currentScrollPosition)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPosition])
  return (
    <header
      className={
        styles.header +
        ' ' +
        styles.h_fixed +
        ' ' +
        (visible ? styles.header_visible : styles.header_hidden)
      }
    >
      <nav className={styles.mw_container + ' mg-mid'}>
        <ul>
          <li>
            <Link href="/">
              <IconHome className="icon-style" />
              首页
            </Link>
          </li>
          <li>
            <Link href="/node">
              <IconPlane className="icon-style" />
              机场
            </Link>
          </li>
          <li>
            <Link href="/tech">
              <IconWrench className="icon-style" />
              技术
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
