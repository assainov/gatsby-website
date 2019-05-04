import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import { format } from 'date-fns'

import Layout from '../components/layout'
import styles from './blog.module.scss'

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
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <ol className={styles.posts}>
                {data.allMarkdownRemark.edges.map(edge => (
                    <li>
                        <h2>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                {edge.node.frontmatter.title}
                            </Link>
                        </h2>
                        <p className={styles.date}>{
                            format(new Date(edge.node.frontmatter.date), 'MMMM Do, YYYY')
                        }</p>
                        <p>{edge.node.excerpt}</p>
                    </li>
                ))}
            </ol>
        </Layout>
    )
}
