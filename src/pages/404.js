import React from 'react'
import { Link } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'

export default () => {

    return (
        <Layout>
            <Head title="404" />
            <h1>Page not found</h1>
            <p><Link to="/">Go to Home page</Link></p>
        </Layout>        
    )
}