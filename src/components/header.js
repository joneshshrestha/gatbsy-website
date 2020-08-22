import React from 'react'
import { Link } from 'gatsby'

import HeaderStyles from './header.module.scss'

const Header = () => {
    return (
        <header>
            <h1>Jonesh Shrestha</h1>
            <nav>
                <ul>
                    <li>
                        <Link className={HeaderStyles.link} to = '/'>Home </Link>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link to = '/about'>About</Link>
                    </li>
                    <li>
                        <Link to = '/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header