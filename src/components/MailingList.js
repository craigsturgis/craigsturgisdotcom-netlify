import React from 'react'
import { Link } from 'gatsby'

const MailingList = () => {
  return (
    <div>
      <section className="section">
        <div className="columns">
          <div className="column is-4"></div>
          <div className="column is-4 box has-text-centered">
            <h2 className="has-text-centered has-text-weight-semibold">
              Join My Mailing List
            </h2>
            <p className="has-text-centered">
              <Link className="btn" to="https://craigsturgis.typeform.com/to/FWPtSS">
                Sign up here
              </Link>
            </p>
            <ul>
              <li>New Posts in your inbox.</li>
              <li>Interesting things I want to share.</li>
              <li>Not too frequent.</li>
            </ul>
          </div>
          <div className="column is-4"></div>
        </div>
      </section>
    </div>
  )
}

export default MailingList
