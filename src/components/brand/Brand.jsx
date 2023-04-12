import React from "react"
import "./brand.css"
import { google, slack, dropbox } from "./imports"

const Brand = () => {
  return (
    <div className="gpt4__brand section__padding">
      <div>
        <a href="https://google.com" target="_blank" rel="noreferrer">
          <img src={google} alt="google" />
        </a>
      </div>
      <div>
        <a href="https://slack.com" target="_blank" rel="noreferrer">
          <img src={slack} alt="slack" />
        </a>
      </div>
      <div>
        <a href="https://www.dropbox.com/" target="_blank" rel="noreferrer">
          <img src={dropbox} alt="dropbox" />
        </a>
      </div>
    </div>
  )
}

export default Brand
