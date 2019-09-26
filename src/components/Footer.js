import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/csdc-logo.svg'
import linkedin from '../img/social/iconmonstr-linkedin-3.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import github from '../img/github-icon.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Craig Sturgis"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/personal">
                        Personal
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/archive">
                        Archive
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/posts">
                        Latest Posts
                      </Link>
                    </li>
                    <li>
                      <a className="navbar-item" href="https://craigsturgis.typeform.com/to/Jv3Dgh">
                        Contact
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="twitter" href="https://twitter.com/craigsturgis">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com/craigsturgis">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="linkedin" href="https://www.linkedin.com/in/craigsturgis/">
                  <img 
                    src={linkedin}
                    alt="Linkedin"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="github" href="https://github.com/craigsturgis">
                  <img 
                    src={github}
                    alt="Github"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <p></p>
                <p>Craig Sturgis Dot Com</p>
                <p>Est. 2012</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
