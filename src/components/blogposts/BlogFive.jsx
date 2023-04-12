import React, { useEffect, useState } from "react"
import Navbar from "../navbar/Navbar"
import "./blogPost.css"
import { blog05 } from "../../containers/blog/imports"

const BlogFive = () => {
  const getStoredComments = () => {
    const storedComments = localStorage.getItem("comments")
    return storedComments ? JSON.parse(storedComments) : []
  }

  const [comment, setComment] = useState("")
  const [comments, setComments] = useState(getStoredComments())

  const onClickHandler = () => {
    setComments((comments) => [...comments, comment])
  }

  const onChangeHandler = (e) => {
    setComment(e.target.value)
  }

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments))
  }, [comments])

  return (
    <div className="gradient__bg">
      <Navbar />
      <div className="gpt4__blog section__padding ">
        <div className="">
          <h1 className="gradient__text">
            Navigating the Challenges and Opportunities of AI in the Job Market
          </h1>
          <p className="blog__date">April 10th, 2023</p>
          <p className="blog__content">
            Artificial intelligence (AI) is transforming many aspects of our
            lives, including the job market. While AI has the potential to
            create new jobs and increase efficiency, it also poses significant
            challenges for workers who may face job displacement and skills
            obsolescence. In this article, we will explore the challenges and
            opportunities of AI in the job market, and discuss what workers and
            policymakers can do to navigate this rapidly changing landscape.{" "}
            <br />
          </p>
          <img
            className="blog__content-img"
            src={blog05}
            alt="Visual representation of binary code in the shape of a warning sign"
          />
          <p className="blog__content">
            One of the biggest challenges of AI in the job market is job
            displacement. As AI technology advances, many jobs that were once
            done by humans are being automated, leading to potential
            unemployment and underemployment. For example, AI-powered chatbots
            are increasingly being used to handle customer service inquiries,
            while self-driving vehicles could soon displace millions of truck
            drivers and delivery workers. To address this challenge, workers may
            need to develop new skills and pursue new career paths that are less
            vulnerable to automation. Policymakers can also help by investing in
            education and training programs to help workers acquire the skills
            needed for the jobs of the future. <br />
            <br />
            However, AI also presents opportunities for job creation and
            increased efficiency. For example, AI-powered tools can help workers
            become more productive and make more informed decisions. They can
            also help companies reduce costs, which can lead to new job creation
            in other areas. Additionally, as new industries and applications for
            AI emerge, there may be entirely new job categories that are created
            as a result. <br />
            <br />
            Another opportunity presented by AI in the job market is the
            potential for more fulfilling and meaningful work. As AI takes over
            routine and repetitive tasks, workers can focus on more creative and
            complex tasks that require human judgement and problem-solving
            skills. This can lead to a more fulfilling work experience for many
            workers and create new opportunities for innovation and creativity.
            <br />
            <br /> In conclusion, the impact of AI on the job market is complex
            and multifaceted. While AI presents significant challenges for
            workers who may face job displacement and skills obsolescence, it
            also presents opportunities for job creation, increased efficiency,
            and more fulfilling work. To navigate this rapidly changing
            landscape, workers and policymakers will need to be proactive in
            developing new skills and pursuing new opportunities. By doing so,
            we can help ensure that the future of work is one that benefits
            everyone.
          </p>
        </div>
      </div>
      <div className="blog__comments-container ">
        {comments.map((text) => (
          <div className="blog__comments-display">
            <p className="blog__comments-display_user"> Anonymous</p>
            {text}
          </div>
        ))}

        <div className="blog__comments-content ">
          <h3 className="blog__comments-content-header gradient__text ">
            Leave a comment!
          </h3>
          <textarea
            value={comment}
            onChange={onChangeHandler}
            placeholder="Type your comment here..."
            className="blog__comments-content-input"
          />
          <button
            onClick={onClickHandler}
            className="blog__comments-content-button"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogFive
