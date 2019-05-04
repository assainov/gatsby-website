import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

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
    <footer>
        <p>Created by {data.site.siteMetadata.author} © {new Date().getFullYear()}</p>
    </footer>
    )
}
