import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: { eq: "hero2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>i'm abel</h1>
            <h4>JavaScript Engineer(Frontend & Backend)</h4>
            <Link to="/contact" className="btn">
              contact Me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <div className="img-container">
          <Image fluid={fluid} className="person-img" />
        </div>
      </div>
    </header>
  )
}

export default Hero
