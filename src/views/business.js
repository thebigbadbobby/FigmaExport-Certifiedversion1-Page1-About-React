import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './business.css'

const Business = (props) => {
  return (
    <div className="business-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="business-business">
        <div className="business-frame61">
          <Link to="/" className="business-text">
            Home
          </Link>
          <Link to="/about" className="business-text01">
            About
          </Link>
          <Link to="/student" className="business-text02">
            Student
          </Link>
          <span className="business-text03">Business</span>
          <Link to="/institution" className="business-text04">
            Institution
          </Link>
          <Link to="/f-a-q" className="business-text05">
            FAQ
          </Link>
        </div>
        <div className="business-bicheckcirclefill"></div>
        <div className="business-frame75">
          <img
            alt="Group23114647"
            src="/playground_assets/fd214b7b-e398-4597-b4bb-f9dcc86a24e7-j18-400h.png"
            className="business-group231"
          />
        </div>
        <div className="business-frame72">
          <a
            href="https://educertified22@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            className="business-text06"
          >
            educertified22@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/mwlite/company/educertified"
            target="_blank"
            rel="noreferrer noopener"
            className="business-link"
          >
            <img
              alt="akariconslinkedinboxfill12129"
              src="/playground_assets/eb9db340-f1d9-4768-aa88-02339b40db52-ypi.svg"
              className="business-akariconslinkedinboxfill"
            />
          </a>
          <a
            href="https://www.instagram.com/educertified/"
            target="_blank"
            rel="noreferrer noopener"
            className="business-link1"
          >
            <img
              alt="akariconsinstagramfill12131"
              src="/playground_assets/c743816f-16c9-4449-bbb5-0c8871097abd-34q.svg"
              className="business-akariconsinstagramfill"
            />
          </a>
        </div>
        <span className="business-text07">
          <span className="business-text08">Cert</span>
          <span className="business-text09">itude</span>
        </span>
        <div className="business-selectingteamcuate">
          <img
            alt="character2123118"
            src="/playground_assets/5b3a6fc2-ac3d-4784-9691-65c56de46d29-9aqm.svg"
            className="business-character2"
          />
          <img
            alt="Table123116"
            src="/playground_assets/e32bca11-ab2b-4b74-b912-e68b95419b2c-p1m4.svg"
            className="business-table"
          />
        </div>
        <img
          alt="Rectangle129169262"
          src="/playground_assets/d65f02b7-b27d-4638-a4ae-92b8923449ee-hk6g.svg"
          className="business-rectangle129"
        />
      </div>
    </div>
  )
}

export default Business
