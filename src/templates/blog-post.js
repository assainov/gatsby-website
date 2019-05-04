import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Head from '../components/head'
import Layout from '../components/layout'

export const query = graphql`
    query ( $slug: String! ) {
        contentfulBlogPost ( slug: { eq: $slug } ) {
            title
            publishedDate (formatString: "MMMM Do, YYYY")
            postImage {
                title
                file {
                    url
                }
            }
            body {
                json
            }
        }
    }
`

export default props => {
    const options = {
        renderNode: {
            "embedded-asset-block": node => {
                const url = node.data.target.fields.file["en-US"].url;
                const alt = node.data.target.fields.title["en-US"];
                return <img src={url} alt={alt} />
            }
        }
    }

    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title} />
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            <img 
                src={props.data.contentfulBlogPost.postImage.file.url} 
                alt={props.data.contentfulBlogPost.postImage.title}
                width="100%"
            />
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        </Layout>
    )
}