import React from "react"
import "./possibility.css"
import possibilityImage from "../../assets/possibility.png"

const Possibility = () => {
  return (
    <div className="gpt4__possibility section__padding" id="possibility">
      <div className="gpt4__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt4__possibility-content">
        <h1 className="gradient__text">The possibilities are endless.</h1>
        <p>
          The possibilities of AI in the future are truly staggering, and the
          thought of what we may be able to achieve with this technology is
          nothing short of thrilling. From improving healthcare and education to
          advancing scientific research and exploration, the potential
          applications of AI are virtually endless. With ongoing advancements in
          machine learning, natural language processing, and computer vision, we
          can expect AI to become even more sophisticated and capable in the
          years to come, enabling us to solve some of the world's most pressing
          challenges and transform the way we live and work.
        </p>
      </div>
    </div>
  )
}

export default Possibility
