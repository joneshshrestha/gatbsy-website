import React from 'react'
import { Link } from 'gatsby'

const indexPage = () => {
  return (
    <div>
      <h1>Hello.</h1>
      <h2>I am Jonesh, a web developer living in Nepal.</h2>
      <p>Need Developer? <Link to='/contact'>Contact</Link></p>
    </div>
  )
}

export default indexPage