import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'

const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About</h1>
            <h2>Grounded and solution-oriented Computer Scientist with a wide variety of experience. Adept at motivating self and others. Passionate about web development and technology.</h2>
            <p><Link to='/contact'>Contact</Link></p>
            <Footer />
        </div>
    )
}

export default AboutPage