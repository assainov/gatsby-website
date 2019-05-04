import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import styles from './footer.module.scss'

export default () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (
    <footer className={styles.footer}>
        <p>Created by {data.site.siteMetadata.author} © {new Date().getFullYear()}</p>
    </footer>
    )
}
