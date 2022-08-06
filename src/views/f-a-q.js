import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './f-a-q.css'

const FAQ = (props) => {
  return (
    <div className="f-a-q-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="f-a-q-f-a-q">
        <div className="f-a-q-frame61">
          <Link to="/" className="f-a-q-text">
            Home
          </Link>
          <Link to="/about" className="f-a-q-text01">
            About
          </Link>
          <Link to="/student" className="f-a-q-text02">
            Student
          </Link>
          <Link to="/business" className="f-a-q-text03">
            Business
          </Link>
          <Link to="/institution" className="f-a-q-text04">
            Institution
          </Link>
          <span className="f-a-q-text05">FAQ</span>
        </div>
        <div className="f-a-q-bicheckcirclefill"></div>
        <div className="f-a-q-frame75">
          <span className="f-a-q-text06">
            <span>
              Does Certitude show a degree I’m currently working on, or just
            </span>
            <br></br>
            <span>
              completed degrees?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className="f-a-q-text10">Both.</span>
          <span className="f-a-q-text11">
            How does an emloyer know that my credentials are valid?
          </span>
          <span className="f-a-q-text12">
            <span>
              Employers view your degree info on a secure link under a Certitude
              url, which we only make if we know that you have a valid degree.
              We’re able to determine this through secure
            </span>
            <br></br>
            <span>communication with your university.</span>
          </span>
          <span className="f-a-q-text16">
            Who gets to see my educational credentials?
          </span>
          <span className="f-a-q-text17">
            Certifitude can see your credentials, as can any employer who you
            send them to. Employers can only view your credentials if they have
            an account with us.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <div className="f-a-q-selectingteamcuate">
            <img
              alt="backgroundcomplete14749"
              src="/playground_assets/a62ad542-3e4e-44a3-94ec-56946fe4cf6e-xnr.svg"
              className="f-a-q-backgroundcomplete"
            />
            <img
              alt="backgroundsimple147131"
              src
              className="f-a-q-backgroundsimple"
            />
            <img
              alt="Table147133"
              src="/playground_assets/f63b09c3-3e0c-4d0e-902e-cc6e5a5f37ae-qx4f.svg"
              className="f-a-q-table"
            />
            <img
              alt="Plant147135"
              src="/playground_assets/a2cbeb17-3b92-4a5a-9a68-562f8110c6b9-nc1.svg"
              className="f-a-q-plant"
            />
            <img
              alt="character4147168"
              src="/playground_assets/41cff566-8216-4142-849e-c38af8b4afad-hwd.svg"
              className="f-a-q-character4"
            />
            <img
              alt="character3147216"
              src="/playground_assets/00bd34e3-3ab5-47c4-bffd-4a7b7232d512-zm4b.svg"
              className="f-a-q-character3"
            />
            <img
              alt="character1147301"
              src="/playground_assets/4af6c3db-337c-4176-81c1-c4f391a0fa49-d21n.svg"
              className="f-a-q-character1"
            />
            <img
              alt="speechbubble147348"
              src="/playground_assets/0f61430c-0ef4-4517-a995-cd728261c86b-5ta.svg"
              className="f-a-q-speechbubble"
            />
          </div>
        </div>
        <div className="f-a-q-frame72">
          <a
            href="https://educertified22@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            className="f-a-q-text18"
          >
            educertified22@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/mwlite/company/educertified"
            target="_blank"
            rel="noreferrer noopener"
            className="f-a-q-link"
          >
            <img
              alt="akariconslinkedinboxfill12153"
              src="/playground_assets/80f5ab9c-8988-41b9-8233-861cc7a4219e-9hc.svg"
              className="f-a-q-akariconslinkedinboxfill"
            />
          </a>
          <a
            href="https://www.instagram.com/educertified/"
            target="_blank"
            rel="noreferrer noopener"
            className="f-a-q-link1"
          >
            <img
              alt="akariconsinstagramfill12155"
              src="/playground_assets/23da6709-6316-4062-89f7-b7964dbed182-pzn9.svg"
              className="f-a-q-akariconsinstagramfill"
            />
          </a>
        </div>
        <span className="f-a-q-text19">
          <span className="f-a-q-text20">Cert</span>
          <span className="f-a-q-text21">itude</span>
        </span>
        <img
          alt="Rectangle129169265"
          src="/playground_assets/e0486d61-a083-4a45-9388-ec30c53dfd79-05yk.svg"
          className="f-a-q-rectangle129"
        />
      </div>
    </div>
  )
}

export default FAQ
