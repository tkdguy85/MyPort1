import { graphql, Link } from "gatsby"
import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import { StaticImage } from 'gatsby-plugin-image'


export default function Home() { 
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Front-End Developer</h2>
          <h3>Web Dev and content creator.</h3>
          <p>Come on in!</p>
          <Link className={styles.btn} to='/projects'>My Work Samples</Link>
        </div>
        <StaticImage className={styles.img} src="../images/darktop.jpg" alt='Workspace image' />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query HeroImage {
    file(relativePath: {eq: "darktop.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`