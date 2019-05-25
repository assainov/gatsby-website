import React from "react"

import Header from '../header'
import '../../styles/index.scss'
import styles from './layout.module.scss'

export default ({children}) => (
    <div className={styles.container}>
        <Header />
        {children}
    </div>
)
