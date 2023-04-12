import React, { useEffect, useState } from "react"
import Navbar from "../navbar/Navbar"
import "./blogPost.css"
import { blog04 } from "../../containers/blog/imports"

const BlogThree = () => {
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
            Technical Advancements in GPT-4 Explained
          </h1>
          <p className="blog__date">April 4th, 2023</p>
          <p className="blog__content">
            The field of artificial intelligence (AI) language generation has
            seen rapid advancements in recent years, with models like GPT-3
            demonstrating impressive capabilities for generating high-quality
            text. But what does the future hold for AI language generation? In
            this article, we will explore some of the key developments and
            trends that are shaping the future of this exciting field. <br />
          </p>
          <img
            className="blog__content-img"
            src={blog04}
            alt="Visual representation of binary code"
          />
          <p className="blog__content">
            One major area of development in AI language generation is the use
            of deep learning techniques. Deep learning involves training models
            on massive amounts of data, allowing them to learn complex patterns
            and make highly accurate predictions. As deep learning technology
            continues to advance, we can expect to see AI language models become
            even more sophisticated, with the ability to generate highly nuanced
            and context-specific text. <br />
            <br />
            Another trend in the future of AI language generation is the
            incorporation of multimodal inputs. Traditionally, AI language
            models have been trained solely on text data, but as more and more
            data becomes available in the form of images, audio, and video,
            there is a growing interest in incorporating these modalities into
            AI language models. This could allow for more diverse and creative
            forms of text generation, such as generating text based on an image
            or video input. <br />
            <br />
            In addition, there is a growing interest in developing AI language
            models that are more interactive and conversational. This could
            involve developing models that can carry out natural language
            conversations with humans, or even models that can generate text in
            response to audio or video inputs. These types of models have the
            potential to revolutionize the way we interact with text-based
            content, allowing for more natural and intuitive communication with
            machines.
            <br />
            <br /> One potential application of AI language generation in the
            future is in the field of content creation. As AI language models
            become more sophisticated, they may be able to generate highly
            engaging and compelling content, such as news articles, blog posts,
            or social media content. This could have significant implications
            for the media industry, allowing for the creation of high-quality
            content at scale.
            <br />
            <br /> Finally, there is a growing interest in developing AI
            language models that are capable of understanding and generating
            multiple languages. As globalization continues to accelerate, there
            is a growing demand for multilingual communication and content
            creation. Developing AI language models that can understand and
            generate text in multiple languages could help to bridge language
            barriers and facilitate more effective communication between people
            from different linguistic backgrounds. <br />
            <br />
            In conclusion, the future of AI language generation looks bright,
            with a range of exciting developments and trends on the horizon.
            From deep learning and multimodal inputs to interactive and
            conversational models, the potential applications of AI language
            generation are vast and varied. As this field continues to evolve,
            we can expect to see new and innovative uses of AI language models
            that will revolutionize the way we interact with text-based content.
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

export default BlogThree
