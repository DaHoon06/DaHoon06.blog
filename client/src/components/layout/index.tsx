import React from 'react'
import MetaConfig, {
  MetaConfigProps,
} from '@/components/layout/Header/MetaConfig'
import { Header } from '@/components/layout/Header'

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
      <main>{children}</main>
    </div>
  )
}

export default Layout
