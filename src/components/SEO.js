import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import favicon from "../images/favicon.ico"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const {
    siteDesc,
    image,
    siteUrl,
    siteTitle,
    twitterUsername,
  } = site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <link rel="icon" href={favicon} />
      <meta name="description" content={description || siteDesc}></meta>
      <meta name="image" content={image}></meta>
      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}

export default SEO
