import Link from 'next/link'

import classes from 'styles/components/layout/main-navigation.module.css'

const MainNavigation = (): JSX.Element => {
  // noinspection HtmlUnknownTarget
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <div className={classes.logo}>Next Auth</div>
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/auth">
              <a>Login</a>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
