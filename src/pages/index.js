import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'

export default () => (
    <Layout>
        <h1>Hello, I am Ilyas</h1>
        <p>A full stack developer based in Dubai</p>
        <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
    </Layout>
)
