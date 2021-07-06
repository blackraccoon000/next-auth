import { Fragment, ReactNode } from 'react'

import MainNavigation from './main-navigation'

const Layout = ({ children }: { children: ReactNode }) => (
  <Fragment>
    <MainNavigation />
    <main>{children}</main>
  </Fragment>
)

export default Layout
