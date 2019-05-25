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
                    A personal blog by Ilyas Assainov. I am on the mission to become an ultimate web development guru in the shortest amount of time.
                </h1>
                <h2>
                    Join my network and witness real life web development challenges and creative solutions.
                </h2>
                <Link to="#">Browse latest articles</Link>
            </div>
            <div className={styles.scrollIndicator}></div>
        </div>
    )
}
