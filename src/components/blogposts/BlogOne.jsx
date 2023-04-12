import React, { useEffect, useState } from "react"
import Navbar from "../navbar/Navbar"
import "./blogPost.css"
import { blog01 } from "../../containers/blog/imports"

const BlogOne = () => {
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
          <h1 className="gradient__text">GPT-4: What to Expect</h1>
          <p className="blog__date">January 4th, 2023</p>
          <p className="blog__content">
            The GPT-3 language model has been making waves in the world of
            artificial intelligence (AI) since its release in 2020. With its
            ability to generate coherent and realistic text in a variety of
            styles and genres, it's no surprise that GPT-3 has been hailed as a
            major breakthrough in the field of natural language processing
            (NLP). But what comes next? What can we expect from the forthcoming
            GPT-4? <br />
          </p>
          <img
            className="blog__content-img"
            src={blog01}
            alt="Visual representation of binary code"
          />
          <p className="blog__content">
            First and foremost, it's important to note that GPT-4 is still in
            development and has not yet been released to the public. As such,
            any speculation about its features and capabilities is just that -
            speculation. That being said, we can look at trends in AI
            development and the trajectory of the GPT series to make some
            educated guesses about what GPT-4 might bring to the table. <br />
            <br />
            One area where GPT-4 is likely to improve on its predecessor is in
            terms of its training data. GPT-3 was trained on a massive dataset
            of texts, including books, articles, and websites. However, there
            are limitations to this approach - for example, GPT-3 has been
            criticized for perpetuating biases that exist in the underlying
            data. GPT-4 developers may be looking for ways to mitigate these
            biases and improve the quality of the training data. <br />
            <br />
            Another area where GPT-4 may improve is in terms of its ability to
            understand context. While GPT-3 is impressive in its ability to
            generate coherent text, it still struggles with certain types of
            context, such as sarcasm or humor. GPT-4 may be able to better
            understand these nuances and generate more accurate and
            contextually-appropriate responses. In addition to improvements in
            training data and context understanding, GPT-4 may also bring new
            features and capabilities to the table. One potential area of
            development is in the realm of visual language - for example,
            generating descriptions of images or videos. This could be a major
            breakthrough in the field of computer vision and could have
            applications in fields like healthcare or self-driving cars.
            <br />
            <br /> Another potential area of development is in the realm of
            conversational AI. GPT-3 has been used to create chatbots and
            virtual assistants that can carry on conversations with humans, but
            there is still room for improvement in this area. GPT-4 may be able
            to better understand the nuances of human speech and generate more
            human-like responses.
            <br />
            <br /> Of course, with any new technology comes potential drawbacks
            and risks. As language models become more advanced, there is a risk
            that they could be used to generate harmful or misleading content,
            such as deepfakes or propaganda. Developers and users will need to
            be mindful of these risks and work to mitigate them as GPT-4 and
            other advanced AI models become more prevalent. <br />
            <br />
            In conclusion, while we can't say for certain what GPT-4 will bring
            to the table, it's clear that the trajectory of the GPT series
            points to even more impressive language generation capabilities.
            With improvements in training data, context understanding, and
            potentially new features like visual language or conversational AI,
            GPT-4 could be a major step forward for the field of NLP.
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

export default BlogOne
