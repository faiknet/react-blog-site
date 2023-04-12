import React from "react"
import {
  Footer,
  Blog,
  Possibility,
  Features,
  Whatgpt4,
  Header,
} from "./containers"
import { CTA, Brand, Navbar } from "./components"
import "./App.css"

function Main() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt4 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default Main
