import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Name" className="form-control" />
              <input
                type="email"
                placeholder="Email"
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
