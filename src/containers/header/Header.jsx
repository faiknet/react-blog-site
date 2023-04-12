import React, { useRef, useState } from "react"
import "./header.css"
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"

const Header = () => {
  const [subscribed, setSubscribed] = useState(false)
  const emailInputRef = useRef(null)

  function handleSubscribeClick() {
    const emailInput = emailInputRef.current
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailInput && emailInput.value && emailRegex.test(emailInput.value)) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 2000) // Set subscribed to false after 2 seconds
    } else {
      alert("Please provide a valid e-mail address.")
    }
  }

  return (
    <div className="gpt4__header section__padding" id="home">
      <div className="gpt4__header-content">
        <h1 className="gradient__text">
          Let's do something amazing with OpenAI and GPT-4
        </h1>
        <p>
          GPT-4 is a cutting-edge language model that promises to be even more
          powerful than its predecessor. If you're interested in staying
          up-to-date on the latest developments in AI, be sure to sign up for
          our newsletter today!
        </p>
        <div className="gpt4__header-content__input">
          <input
            type="email"
            placeholder="Your e-mail address..."
            ref={emailInputRef}
          />
          <button type="button" onClick={handleSubscribeClick}>
            Get started
          </button>
        </div>
        {subscribed && <p>Successfully subscribed!</p>}

        <div className="gpt4__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access in the past 24 hours</p>
        </div>
      </div>
      <div className="gpt4__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header
