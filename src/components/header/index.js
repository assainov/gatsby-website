import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import styles from './header.module.scss'
import SearchIcon from '../../assets/icons/search.svg'

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
            <h2>
                <Link to='/'>{data.site.siteMetadata.title}</Link>
            </h2>
            <nav>
                <div className={styles.searchIcon}>
                    <SearchIcon />
                </div>
            </nav>
        </header>
    )
}
