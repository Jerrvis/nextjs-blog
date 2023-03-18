import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './index.module.less'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoffOutlined'
import BuildIcon from '@mui/icons-material/BuildOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage'

export default function Header() {
  let prevScrollPosition = 0
  const [visible, setVisible] = useState(false)

  const [isDarkMode, setIsDarkMode] = useState(false)

  const setDarkMode = () => {
    if (getLocalStorage('darkMode') !== 'true') {
      document.documentElement.classList.toggle('dark-mode')
      setLocalStorage('darkMode', 'true')
      setIsDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark-mode')
      setLocalStorage('darkMode', 'false')
      setIsDarkMode(false)
    }
  }

  useEffect(() => {
    if (!isDarkMode && getLocalStorage('darkMode') === 'true') {
      document.documentElement.classList.toggle('dark-mode', true)
      setIsDarkMode(true)
    }
    const handleScroll = (event: Event) => {
      const currentScrollPosition = window.pageYOffset
      setVisible(
        currentScrollPosition <= prevScrollPosition ||
          currentScrollPosition < 80
      )
      prevScrollPosition = currentScrollPosition
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const ModeIcon = isDarkMode ? WbSunnyOutlinedIcon : DarkModeOutlinedIcon

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
              <HomeOutlinedIcon />
              首页
            </Link>
          </li>
          <li>
            <Link href="/node">
              <FlightTakeoffIcon />
              机场
            </Link>
          </li>
          <li>
            <Link href="/tech">
              <BuildIcon />
              技术
            </Link>
          </li>
        </ul>
        <div className={styles.light_dark}>
          <span>
            <ModeIcon
              onClick={() => {
                setDarkMode()
              }}
            />
          </span>
        </div>
      </nav>
    </header>
  )
}
