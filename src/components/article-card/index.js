import React, { useState } from "react"
import { Link } from 'gatsby'
import styles from './article-card.module.scss'

export default () => (
    <article className={styles.article}>
        <div 
            className={styles.image}
            style={{backgroundImage: `url("https://cdn-images-1.medium.com/max/2400/1*h58eRcgYpAFec_QbmJcRpg.jpeg")`}} 
        />
        <div className={styles.textBlock}>
            <h2>
                How to Add a Splash Screen to a React Native App (iOS and Android)
            </h2>
            <p>
                Today we’ll cover splash screens on iOS and Android.
            </p>
            <div>
                <p className={styles.date}>
                    <span>May 19th, 2019</span> - <span>10 minutes to read</span>
                </p>
            </div>
        </div>
    </article>
)
