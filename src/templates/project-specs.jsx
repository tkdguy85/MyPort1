import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as styles from '../styles/details.module.css'


export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, detailedImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <GatsbyImage image={getImage(data.markdownRemark.frontmatter.detailedImg.childImageSharp.gatsbyImageData)} alt='Project image' />
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}


// Project Image Exports
export const query = graphql`
  query ProjectSpecs($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        detailedImg {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: AUTO, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`