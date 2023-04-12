import React from "react"

import "./App.css"
import { Route, Routes } from "react-router-dom"
import Main from "./Main"
import BlogOne from "./components/blogposts/BlogOne"
import BlogTwo from "./components/blogposts/BlogTwo"
import BlogThree from "./components/blogposts/BlogThree"
import BlogFour from "./components/blogposts/BlogFour"
import BlogFive from "./components/blogposts/BlogFive"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="what-to-expect" element={<BlogOne />} />
      <Route path="ethics-of-ai" element={<BlogTwo />} />
      <Route path="technical-advancements" element={<BlogThree />} />
      <Route path="possibilities-and-limitations" element={<BlogFour />} />
      <Route path="challenges-and-opportunities" element={<BlogFive />} />
    </Routes>
  )
}

export default App
