import React, { useEffect, useState } from "react"
import Navbar from "../navbar/Navbar"
import "./blogPost.css"
import { blog03, blog04 } from "../../containers/blog/imports"

const BlogFour = () => {
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
            Exploring the Exciting Possibilities and Limitations of AI Writing
          </h1>
          <p className="blog__date">March 30th, 2023</p>
          <p className="blog__content">
            As AI writing technology continues to develop, it is opening up new
            possibilities for content creation and communication. From chatbots
            and automated news articles to personalized marketing copy and
            creative writing, the potential applications of AI writing are vast.
            However, while these technologies are certainly exciting, they also
            have their limitations. In this article, we will explore some of the
            possibilities and limitations of AI writing, and discuss what the
            future may hold for this rapidly evolving field. <br />
          </p>
          <img
            className="blog__content-img"
            src={blog03}
            alt="Visual representation of binary code in the shape of a paperclip"
          />
          <p className="blog__content">
            One of the most exciting possibilities of AI writing is the ability
            to generate highly personalized content. AI language models like
            GPT-3 can be trained on vast amounts of data, allowing them to learn
            the nuances of individual writing styles and preferences. This could
            be used to create more effective marketing copy, more engaging
            chatbots, and even more personalized creative writing. For example,
            an AI writing system could analyze a person's past writing and
            social media activity to create a highly customized novel that
            perfectly matches their interests and preferences. <br />
            <br />
            Another possibility of AI writing is the ability to automate a wide
            range of content creation tasks. From writing news articles to
            drafting legal documents, AI writing systems can perform a variety
            of text-based tasks with speed and accuracy. This could lead to
            greater efficiency and productivity in a wide range of industries,
            from journalism and publishing to law and finance. For example, an
            AI writing system could quickly generate dozens of news articles on
            a breaking story, freeing up human journalists to focus on more
            complex reporting and analysis. <br />
            <br />
            However, while the possibilities of AI writing are certainly
            exciting, these technologies also have their limitations. One major
            limitation is the lack of creativity and originality in AI-generated
            content. While AI language models can certainly generate highly
            convincing and persuasive text, they are still limited by their
            training data and the algorithms used to generate that text. This
            means that AI-generated content can often feel formulaic and
            predictable, lacking the unique voice and perspective that only
            human writers can bring.
            <br />
            <br /> Another limitation of AI writing is the potential for bias
            and discrimination. As AI language models are trained on large
            datasets, they can easily perpetuate existing biases and
            stereotypes. For example, an AI writing system that is trained on a
            dataset of past news articles could be more likely to generate
            content that perpetuates stereotypes about certain groups of people.
            To address this limitation, it is important to ensure that AI
            writing systems are trained on diverse and representative datasets,
            and that they are regularly audited for bias.
            <br />
            <br /> In conclusion, AI writing is a rapidly evolving field with
            exciting possibilities and limitations. From personalized content
            and automated content creation to creative writing and more, the
            potential applications of AI writing are vast. However, as with any
            technology, it is important to carefully consider the limitations
            and ethical implications of AI writing, and to work towards
            developing systems that are transparent, accountable, and fair. By
            doing so, we can help to ensure that the future of AI writing is one
            that benefits all of society.
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

export default BlogFour
