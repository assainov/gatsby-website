import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import styles from './header.module.scss'

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
        <header className={styles.header}>
            <h1>
                <Link to='/'>{data.site.siteMetadata.title}</Link>
            </h1>
            <nav>
                <ul>
                    <li><Link to="/" activeClassName={styles.activeNavItem}>Home</Link></li>
                    <li><Link to="/about" activeClassName={styles.activeNavItem}>About</Link></li>
                    <li><Link to="/blog" activeClassName={styles.activeNavItem}>Blog</Link></li>
                    <li><Link to="/contact" activeClassName={styles.activeNavItem}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
