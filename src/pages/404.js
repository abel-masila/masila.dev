import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <div className="error-page">
        <div className="error-container">
          <h1>oops it's a dead end!</h1>
          <Link to="/" className="btn">
            home
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Error
