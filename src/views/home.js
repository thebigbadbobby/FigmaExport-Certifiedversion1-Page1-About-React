import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="home-home">
        <img
          alt="Vector75377"
          src="/playground_assets/a1093e03-cd19-42b1-a8ac-36cf9985c132-qv5l.svg"
          className="home-svg"
        />
        <img
          alt="Rectangle12875713"
          src="/playground_assets/594a57b5-635c-4667-9dcf-21769cef0912-ihyo.svg"
          className="home-rectangle128"
        />
        <div className="home-frame74">
          <div className="home-frame73">
            <div className="home-frame68">
              <div className="home-frame67">
                <div className="home-frame71">
                  <img
                    alt="Frame7075383"
                    src="/playground_assets/28c3cc45-e6f5-4d43-af79-8c0b343ea2e5-zwy6r.svg"
                    className="home-frame70"
                  />
                </div>
                <span className="home-text">One-Click Check</span>
              </div>
              <span className="home-text01">
                Students send credentials instantly through a secure link.
              </span>
            </div>
            <img
              alt="Line375387"
              src="/playground_assets/4ac71d98-af35-421f-924b-bf3a1683690a-svijb.svg"
              className="home-svg1"
            />
            <div className="home-frame69">
              <div className="home-frame66">
                <img
                  alt="Vector75390"
                  src="/playground_assets/88c70a13-a190-4c01-ac49-fa9cabdc80a3-bcp.svg"
                  className="home-svg2"
                />
                <span className="home-text02">Data Belongs to Students</span>
              </div>
              <span className="home-text03">
                Businesses only see what you send from your credential
                dashboard.
              </span>
            </div>
          </div>
        </div>
        <div className="home-frame61">
          <span className="home-text04">Home</span>
          <Link to="/about" className="home-text05">
            About
          </Link>
          <Link to="/student" className="home-text06">
            Student
          </Link>
          <Link to="/business" className="home-text07">
            Business
          </Link>
          <Link to="/institution" className="home-text08">
            Institution
          </Link>
          <Link to="/f-a-q" className="home-text09">
            FAQ
          </Link>
        </div>
        <div className="home-selectingteamcuate">
          <img
            alt="backgroundcomplete75409"
            src="/playground_assets/b88b7b83-3c9a-4336-a35e-f406b1147a59-ct49.svg"
            className="home-backgroundcomplete"
          />
          <img
            alt="backgroundsimple75491"
            src
            className="home-backgroundsimple"
          />
          <img
            alt="Table75493"
            src="/playground_assets/fbe79eae-b968-4872-8f0b-dcd39feb9492-a3jr.svg"
            className="home-table"
          />
          <img
            alt="Plant75495"
            src="/playground_assets/fb501e61-def7-4f5e-82ee-84de1e8a9237-llnd.svg"
            className="home-plant"
          />
          <img
            alt="character475528"
            src="/playground_assets/c89c0549-d5fe-4407-851b-b826bac36272-c83p.svg"
            className="home-character4"
          />
          <img
            alt="character375576"
            src="/playground_assets/7e8f2309-cbcc-49b6-9af8-ecb328aa9dac-ervg.svg"
            className="home-character3"
          />
          <img
            alt="character275609"
            src="/playground_assets/1203b257-2e21-4af3-a496-049b3698ad28-i7ii.svg"
            className="home-character2"
          />
          <img
            alt="character175661"
            src="/playground_assets/d3c704d6-3d7f-41fb-9b0c-5d74d232ec8b-m8n6.svg"
            className="home-character1"
          />
          <img
            alt="speechbubble75708"
            src="/playground_assets/a03b5341-d66d-4ec4-a3a2-341581406768-4qen.svg"
            className="home-speechbubble"
          />
        </div>
        <div className="home-bicheckcirclefill"></div>
        <img
          alt="Rectangle129169189"
          src="/playground_assets/d3de722a-e9a6-4788-a66e-f84411d9a267-5n7m.svg"
          className="home-rectangle129"
        />
        <div className="home-frame60">
          <span className="home-text10">Learn More</span>
          <img
            alt="Vector75716"
            src="/playground_assets/95909b6b-7c4e-4057-970e-93ade8523df5-e5ll.svg"
            className="home-svg3"
          />
        </div>
        <span className="home-text11">Certitude is Seamless</span>
        <span className="home-text12">
          Our revolutionary education verification platform is simple, instant,
          and secure.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <div className="home-frame72">
          <a
            href="https://educertified22"
            target="_blank"
            rel="noreferrer noopener"
            className="home-text13"
          >
            educertified22@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/mwlite/company/educertified"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link"
          >
            <img
              alt="akariconslinkedinboxfill1215"
              src="/playground_assets/dba7d441-05de-48cc-ac0a-22b98828c290-rfb4.svg"
              className="home-akariconslinkedinboxfill"
            />
          </a>
          <a
            href="https://www.instagram.com/educertified/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link1"
          >
            <img
              alt="akariconsinstagramfill1217"
              src="/playground_assets/a9c388bd-b80e-4111-a374-bd495ad22de4-uq4a.svg"
              className="home-akariconsinstagramfill"
            />
          </a>
        </div>
        <span className="home-text14">
          <span className="home-text15">Cert</span>
          <span className="home-text16">itude</span>
        </span>
      </div>
    </div>
  )
}

export default Home
