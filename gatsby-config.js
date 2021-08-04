module.exports = {
    siteMetadata: {
        title: "Get 2 Anywhere",
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `queryImages`,
                path: `${__dirname}/queryImages`,
            }
        }
    ]
}