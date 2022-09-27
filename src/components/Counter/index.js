import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0, name: 'zero'}
  OnIncrement = () => {
    this.setState(prevState => {
      console.log(`previous count ${prevState.count}`)
      return {count: prevState.count + 1, name: `${prevState.count} + 1`}
    })
  }
  OnDecrement = () => {
    this.setState(prevState => {
      console.log(`previous count ${prevState.count}`)
      return {count: prevState.count - 1, name: 'Decrease by 1'}
    })
  }
  render() {
    const {count, name} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter {name}</h1>
        <p className="count">{count}</p>
        <div>
          <button onClick={this.OnIncrement} className="button">
            Increase
          </button>
          <button onClick={this.OnDecrement} className="button">
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
