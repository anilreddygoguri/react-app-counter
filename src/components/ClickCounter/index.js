import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="counter-bg-container">
        <h1 className="count-description">
          The Button has been clicked <span className="count"> {count} </span>
          times
        </h1>
        <p className="increase-description">
          Click the button to increase the count!
        </p>
        <button type="submit" className="button" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
