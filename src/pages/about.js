import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <div>
            <Layout>
            <h1>About</h1>
            <h2>Grounded and solution-oriented Computer Scientist with a wide variety of experience. Adept at motivating self and others. Passionate about web development and technology.</h2>
            <p><Link to='/contact'>Contact</Link></p>
            </Layout>
        </div>
    )
}

export default AboutPage