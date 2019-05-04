import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'

export default () => (
    <Layout>
        <h1>About Me</h1>
        <p>My bio</p>
        <p>Liked my story? <Link to="/contact">Get to know me better.</Link></p>
    </Layout>
)
