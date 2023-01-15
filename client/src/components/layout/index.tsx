import React from 'react'
import MetaConfig, {
  MetaConfigProps,
} from '@components/layout/header/MetaConfig'
import { Header } from '@components/layout/header/Header'
import styled from '@styles/layout/main.module.scss'
import { Footer } from "@components/layout/footer/Footer";

type Props = {
  children: React.ReactNode
  metaConfig: MetaConfigProps
  fullWidth?: boolean
}

const Layout: React.FC<Props> = (props) => {
  const { children, metaConfig, fullWidth = false } = props
  return (
    <div>
      <MetaConfig {...metaConfig} />
      <Header />
      <main className={styled.main__container}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
