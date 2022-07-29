import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './student.css'

const Student = (props) => {
  return (
    <div className="student-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="student-student">
        <div className="student-frame61">
          <Link to="/" className="student-text">
            Home
          </Link>
          <Link to="/about" className="student-text01">
            About
          </Link>
          <span className="student-text02">Student</span>
          <Link to="/business" className="student-text03">
            Business
          </Link>
          <Link to="/institution" className="student-text04">
            Institution
          </Link>
          <Link to="/f-a-q" className="student-text05">
            FAQ
          </Link>
        </div>
        <div className="student-selectingteamcuate">
          <img
            alt="Table84147"
            src="/playground_assets/c15e0893-db46-4d14-b832-ba3726c654e6-j78.svg"
            className="student-table"
          />
          <img
            alt="character284263"
            src="/playground_assets/9d2c540a-e953-4fc9-b5f0-bfc613f08474-m8vl.svg"
            className="student-character2"
          />
        </div>
        <div className="student-bicheckcirclefill"></div>
        <div className="student-frame72">
          <span className="student-text06">educertified22@gmail.com</span>
          <img
            alt="akariconslinkedinboxfill12123"
            src="/playground_assets/429fe15d-dffb-4cef-a660-f0f083cc1e23-qzx.svg"
            className="student-akariconslinkedinboxfill"
          />
          <img
            alt="akariconsinstagramfill12125"
            src="/playground_assets/d7a52df2-5232-468d-b2c1-2a7873095021-l6px.svg"
            className="student-akariconsinstagramfill"
          />
        </div>
        <span className="student-text07">
          <span className="student-text08">Cert</span>
          <span className="student-text09">itude</span>
        </span>
        <div className="student-frame75">
          <img
            alt="Group22285389"
            src="/playground_assets/d7bc8cad-9c8a-4bc1-9ab4-94418187fc89-huyl-600w.png"
            className="student-group222"
          />
        </div>
        <img
          alt="Rectangle129169261"
          src="/playground_assets/6c4bec7d-3ef2-462d-900d-5c8a0b43da3b-qasi.svg"
          className="student-rectangle129"
        />
      </div>
    </div>
  )
}

export default Student
