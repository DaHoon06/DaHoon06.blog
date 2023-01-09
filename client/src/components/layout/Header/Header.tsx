import { NavBar } from '@components/layout/Header/NavBar'
import { Logo } from '@components/layout/Header/Logo'
import styles from '@styles/layout/header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <Logo />
        <NavBar />
      </div>
    </header>
  )
}
