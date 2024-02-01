import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {word: ''}

  getWord = event => {
    this.setState({word: event.target.value})
  }

  getCount = () => {
    const {word} = this.state
    if (word !== '') {
      this.setState({count: word.length})
    }
  }

  render() {
    const {word} = this.state
    console.log(word)
    return (
      <div className="container">
        <div className="letters-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="input-heading" htmlFor="letter">
            Enter the phrase
          </label>
          <input
            type="text"
            className="input"
            placeholder="Enter the phrase"
            onChange={this.getWord}
            id="letter"
          />
          <div>
            <button type="button" className="button" onClick={this.getCount}>
              No.of letters: {word.length}
            </button>
          </div>
        </div>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
