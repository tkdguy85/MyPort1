import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


export default function Projects({ data }) {
  const projects = data.allMarkdownRemark.nodes
  
  return (
    <div>
      <Layout>
        <div className={styles.portfolio}>
          <h2>Portfolio</h2>
          <h3>Projects and websites I've created</h3>
          <div className={styles.projects}>
            {projects.map(project => (
              <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                <div>
                  <GatsbyImage image={getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt='Project Thumbnail' />
                  <h3>{ project.frontmatter.title }</h3>
                  <p>{ project.frontmatter.stack }</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  )
}

// Project query exports
export const query = graphql`
  query ProjectPages {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: AUTO, layout: FULL_WIDTH)
            }
          }
        }
        id
      }
    }
  }
`