import { NavBar } from '@components/layout/header/NavBar'
import { Logo } from '@components/layout/header/Logo'
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
