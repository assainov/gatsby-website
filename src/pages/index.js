import React from "react"
import { Link } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'

export default () => (
    <Layout>
        <Head title="Home" />
        <h1>Hello, I am Ilyas</h1>
        <p>A full stack developer based in Dubai</p>
        <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
    </Layout>
)
