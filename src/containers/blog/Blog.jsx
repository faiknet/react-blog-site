import React from "react"
import { Article } from "../../components"
import { blog01, blog02, blog03, blog04, blog05 } from "./imports"
import "./blog.css"
import { HashLink } from "react-router-hash-link"

const Blog = () => {
  return (
    <div className="gpt4__blog section__padding" id="blog">
      <div className="gpt4__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, we're blogging about it.
        </h1>
      </div>

      <div className="gpt4__blog-container">
        <div className="gpt4__blog-container_groupA">
          <HashLink to="/what-to-expect">
            <Article
              imgUrl={blog01}
              date="January 4th, 2023"
              title="What to Expect from GPT-4"
            />
          </HashLink>
        </div>
        <div className="gpt4__blog-container_groupB">
          <HashLink to="/ethics-of-ai">
            <Article
              imgUrl={blog02}
              date="March 13th, 2023"
              title="Ethics of AI Language Generation"
            />
          </HashLink>
          <HashLink to="/possibilities-and-limitations">
            <Article
              imgUrl={blog03}
              date="March 30th, 2023"
              title="Exploring the Exciting Possibilities and Limitations of AI Writing"
            />
          </HashLink>
          <HashLink to="/technical-advancements">
            <Article
              imgUrl={blog04}
              date="April 4th, 2023"
              title="Technical Advancements in GPT-4 Explained"
            />
          </HashLink>
          <HashLink to="/challenges-and-opportunities">
            <Article
              imgUrl={blog05}
              date="April 10th, 2023"
              title="Navigating the Challenges and Opportunities of AI in the Job Market"
            />
          </HashLink>
        </div>
      </div>
    </div>
  )
}

export default Blog
