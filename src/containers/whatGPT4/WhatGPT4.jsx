import React from "react"
import Feature from "../../components/feature/Feature"
import "./whatGPT4.css"

const Whatgpt4 = () => (
  <div className="gpt4__whatgpt4 section__margin" id="wgpt4">
    <div className="gpt4__whatgpt4-feature">
      <Feature title="What is GPT-4?" />
    </div>
    <div className="gpt4__whatgpt4-heading">
      <h1 className="gradient__text">Explore a world of possibilities.</h1>
    </div>
    <div className="gpt4__whatgpt4-container">
      <Feature
        title="Chatbots"
        text="GPT-4's improved language processing capabilities could lead to the development of more sophisticated chat bots that can better understand and respond to natural language inputs."
      />
      <Feature
        title="Knowledgebase"
        text="Our knowledgebase is designed to provide users with a comprehensive collection of information and resources, making it easier for them to learn more about a wide range of topics."
      />
      <Feature
        title="Education"
        text="There are numerous upcoming education opportunities in AI, ranging from online courses to university programs, designed to equip students with the skills and knowledge necessary to excel in this field."
      />
    </div>
  </div>
)

export default Whatgpt4
