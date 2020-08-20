import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'

const ContactPage = () => {
    return (
        <div>
            <Header />
            <h1>Contact</h1>
            <h2>email: contact@joneshshrestha.com</h2>
            <h2>mobile: +977 9863475245</h2>
            <h2>Kathmandu, Nepal</h2>
            <h2><a href='https://www.twitter.com/shresthajonesh' target='_blank'> twitter </a></h2>
            <Footer />
        </div>
    )
}

export default ContactPage