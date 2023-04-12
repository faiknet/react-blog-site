import React from "react"
import { Feature } from "../../components"
import "./features.css"

const featuresData = [
  {
    title: "Increased size and complexity",
    text: "GPT-4 is expected to be significantly larger and more complex than its predecessor, with the potential to handle even more complex tasks and generate more natural language output.",
  },
  {
    title: "Multimodal capabilities",
    text: "The new model is expected to have the ability to process not just text, but also other forms of data such as images, videos, and audio, making it more versatile in a wide range of applications.",
  },
  {
    title: "Improved training techniques",
    text: "OpenAI is likely to incorporate new training techniques into GPT-4, which could help it learn faster and more efficiently than previous models.",
  },
  {
    title: "Greater customization options",
    text: "     GPT-4 is expected to allow users to customize certain aspects of the model to better suit their specific needs, potentially making it more useful for a wider range of applications.",
  },
]

const Features = () => {
  return (
    <div className="gpt4__features section__padding" id="features">
      <div className="gpt4__features-heading">
        <h1 className="gradient__text">
          Step into the world of the future, today.
        </h1>
      </div>
      <div className="gpt4__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  )
}

export default Features
