
import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query Dallas {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h1>{ title }</h1>
      <div className="links">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT ME</Link>
        <Link to="/projects">MY WORK</Link>
      </div>
    </nav>
  )
}
