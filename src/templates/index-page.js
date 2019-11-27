import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import FeaturedRoll from '../components/FeaturedRoll'
import HeadshotImage from '../components/HeadshotImage'

export const IndexPageTemplate = ({
  image,
  headshot,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100%`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns is-vcentered">
            <div className="column is-one-quarter-tablet">

            </div>
            <div className="column is-one-quarter-tablet">
                <div className="content">
                  <figure className="image">
                    <img className="is-rounded" src="/img/Craig-Sturgis-headshot-2019.jpg" />
                  </figure>
                </div>
            </div>
            <div className="column has-text-centered-touch is-one-quarter-tablet">
              <p className="title is-4"><a href="#experience">Experience</a></p>
              <p className="title is-4"><a href="#writing">Writing</a></p>
              <p className="title is-4"><Link to="/personal">Personal</Link></p>
            </div>
            <div className="column is-one-quarter-tablet">

            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description2}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
          <div className="column is-12 has-text-centered">
              <Link className="btn" to="/contact">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <h3 id="experience" className="has-text-weight-semibold is-size-2">
                      Experience
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                {/* <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <h3 id="writing" className="has-text-weight-semibold is-size-2">
                      Writing
                    </h3>
                    <p>A few of the things I've written that I'm most proud of:</p>
                  </div>
                </div>
                
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Featured Posts
                  </h3>
                  <FeaturedRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/posts">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  headshot: PropTypes.object,
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        headshot={frontmatter.headshot}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        headshot {
          image {
            childImageSharp {
              fluid(maxWidth: 256, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        heading
        subheading
        mainpitch {
          title
          description
          description2
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
            duration
            text
          }
          heading
          description
        }
      }
    }
  }
`
