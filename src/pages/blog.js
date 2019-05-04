import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'
import styles from './blog.module.scss'

export default () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (sort: { fields: publishedDate, order: DESC }) {
                edges {
                    node {
                        title
                        slug
                        publishedDate (formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <Head title="Blog" />
            <ol className={styles.posts}>
                {data.allContentfulBlogPost.edges.map(edge => (
                    <li>
                        <h2>
                            <Link to={`/blog/${edge.node.slug}`}>
                                {edge.node.title}
                            </Link>
                        </h2>
                        <p className={styles.date}>{
                            edge.node.publishedDate
                        }</p>
                        {/*<p>{edge.node.excerpt}</p>*/}
                    </li>
                ))}
            </ol>
        </Layout>
    )
}
