import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {feedback: false}

  onClick = () => {
    this.setState(prevState => ({feedback: !prevState.feedback}))
  }

  render() {
    const {resources} = this.props
    const {emojis} = resources
    const {feedback} = this.state
    let fedButton
    if (feedback === 'true') {
      fedButton = (
        <div>
          <img
            src="https://www.seekpng.com/png/detail/16-163566_9-red-heart-emoji-png.png"
            alt="heart"
            className="e-icon"
          />
          <h1>ThankYou</h1>
          <p>
            we will use your feedback to improve our customer service
            performance
          </p>
        </div>
      )
    } else {
      fedButton = ''
    }

    return (
      <div className="bg">
        <div className="text-container">
          <p>How satisfied are you with our customer Service Performance</p>
          <div className="emoji">
            <ul className="emojis">
              {emojis.mpa(eachItem => (
                <li className="icon" key={eachItem.id}>
                  <img
                    src={eachItem.imageUrl}
                    alt={eachItem.name}
                    className="e-icon"
                    onClick={this.onClick}
                  />
                  <p>{eachItem.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {fedButton}
      </div>
    )
  }
}

export default Feedback
