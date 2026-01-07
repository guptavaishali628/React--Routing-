import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <><header>
        <h1>LOGO</h1>
        <nav>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    </header>

    {/* components are render here: */}
    <Outlet></Outlet>

    <footer>
        <h1>This is Footer</h1>
    </footer>
      
    </>
  )
}

export default Layout
