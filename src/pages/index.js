import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'

const indexPage = () => {
  return (
    <div>
      <h1>Hello.</h1>
      <h2>I am Jonesh, a web developer living in Nepal.</h2>
      <p>Need Developer? <Link to='/contact'>Contact</Link></p>
      < Footer />
    </div>
  )
}

export default indexPage