import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import styles from './hero.module.scss'

export default () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    return (
        <div className={styles.hero}>
            <div className={styles.textBlock}>
                <h1>
                    Narative brands, builds and markets products on behalf of growth-minded companies.
                </h1>
                <h2>
                    We're a team with senior startup experience here to help your business take the next step.
                </h2>
                <Link to="#">Browse latest articles</Link>
            </div>
            <div className={styles.scrollIndicator}></div>
        </div>
    )
}
