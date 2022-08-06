import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './institution.css'

const Institution = (props) => {
  return (
    <div className="institution-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="institution-institution">
        <div className="institution-frame61">
          <Link to="/" className="institution-text">
            Home
          </Link>
          <Link to="/about" className="institution-text01">
            About
          </Link>
          <Link to="/student" className="institution-text02">
            Student
          </Link>
          <Link to="/business" className="institution-text03">
            Business
          </Link>
          <span className="institution-text04">Institution</span>
          <Link to="/f-a-q" className="institution-text05">
            FAQ
          </Link>
        </div>
        <div className="institution-bicheckcirclefill"></div>
        <div className="institution-frame75">
          <img
            alt="Group31861063"
            src="/playground_assets/1e43cd04-3d10-4bb5-b87f-61262ebc6586-ac-500h.png"
            className="institution-group31"
          />
        </div>
        <div className="institution-frame72">
          <a
            href="mailto:educertified22@gmail.com?subject="
            className="institution-text06"
          >
            educertified22@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/mwlite/company/educertified"
            target="_blank"
            rel="noreferrer noopener"
            className="institution-link"
          >
            <img
              alt="akariconslinkedinboxfill12141"
              src="/playground_assets/11d8cea6-e457-4a22-a88b-c51b56b465f3-b9xc.svg"
              className="institution-akariconslinkedinboxfill"
            />
          </a>
          <a
            href="https://www.instagram.com/educertified/"
            target="_blank"
            rel="noreferrer noopener"
            className="institution-link1"
          >
            <img
              alt="akariconsinstagramfill12143"
              src="/playground_assets/3734c720-c99b-4250-9c43-5eacb497aaee-fere.svg"
              className="institution-akariconsinstagramfill"
            />
          </a>
        </div>
        <div className="institution-selectingteamcuate">
          <img
            alt="character2123173"
            src="/playground_assets/ac53bc3e-1b8e-4893-a0fb-0259821c4d84-rl4f.svg"
            className="institution-character2"
          />
          <img
            alt="Table123171"
            src="/playground_assets/962f94fa-9492-442c-95ad-c39d993e97ee-0wkc.svg"
            className="institution-table"
          />
        </div>
        <span className="institution-text07">
          <span className="institution-text08">Cert</span>
          <span className="institution-text09">itude</span>
        </span>
        <img
          alt="Rectangle129169264"
          src="/playground_assets/2b9506c0-9e4f-4185-9083-5f1e65821c97-ob3.svg"
          className="institution-rectangle129"
        />
      </div>
    </div>
  )
}

export default Institution
