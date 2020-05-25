import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/xaypeezw" method="POST">
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                className="form-control"
                placeholder="Message"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              Submit
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
