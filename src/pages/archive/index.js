import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/ArchiveBlogRoll'

export default class ArchiveBlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/montreaux-cropped.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Writing Archive
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <p>Here lies writing I've done that doesn't fit the main thrust of what I'm trying to do on this website now, but is worth keeping around.</p>
            </div>
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
