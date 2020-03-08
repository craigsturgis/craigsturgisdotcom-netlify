import React from 'react'
import Layout from '../../components/Layout'

// function encode(data) {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
//     .join('&')
// }

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
            <p>Hi, you want <a href="https://craigsturgis.typeform.com/to/FWPtSS">this link</a> to sign up for the mailing list</p>
        </section>
      </Layout>
    )
  }
}
