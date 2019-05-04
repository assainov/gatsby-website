module.exports = {
    siteMetadata: {
        title: 'Destination Dev ' + String.fromCharCode(10148),
        author: 'Ilyas A.'
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-transformer-remark'
    ]
}