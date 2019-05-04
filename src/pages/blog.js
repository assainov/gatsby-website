import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

export default () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        excerpt(pruneLength: 80)
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <h1>Blog page</h1>
            <ol>
                {data.allMarkdownRemark.edges.map(edge => (
                        <li>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                            <p>{edge.node.excerpt}</p>
                        </li>
                ))}
            </ol>
        </Layout>
    )
}
