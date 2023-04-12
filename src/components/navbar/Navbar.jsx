import React, { useState } from "react"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import "./navbar.css"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

const Menu = () => (
  <>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <HashLink to="/#wgpt4">What is GPT-4?</HashLink>
    </p>
    <p>
      <HashLink to="/#possibility">Explore</HashLink>
    </p>
    <p>
      <HashLink to="/#features">Features</HashLink>
    </p>
    <p>
      <HashLink to="/#blog">Blog</HashLink>
    </p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="gpt4__navbar">
      <div className="gpt4__navbar-links">
        <div className="gpt4__navbar-links_logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="gpt4__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt4__navbar-sign">
        <button type="button">Sign up</button>
      </div>
      <div className="gpt4__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt4__navbar-menu_container scale-up-center">
            <div className="gpt4__navbar-menu_container-links">
              <Menu />
              <div className="gpt4__navbar-menu_container-links-sign">
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
