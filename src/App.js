import React, { Component } from 'react'

class App extends Component {
  state = {
    numbers: [],
    newNumber: 0
  }

  handleInputChange = e => {
    this.setState({ newNumber: e.target.value })
  }

  handleAddNewNumber = e => {
    const { numbers, newNumber } = this.state

    this.setState({ numbers: [...numbers, newNumber], newNumber: 0 })
  }

  handleRemoveNumber = e => {
    this.setState({ numbers: this.state.numbers.slice(0, -1) })
  }

  findSecondLargestNumber = e => {
    const { numbers } = this.state
    const secondLargestNumber = [...new Set(numbers)].sort((a, b) => b - a)

    if (numbers.length <= 1 || secondLargestNumber.length === 1) {
      this.setState({ newNumber: -1 })
    } else {
      this.setState({ newNumber: secondLargestNumber[1] })
    }
  }

  render() {
    const { numbers, newNumber } = this.state

    return (
      <div>
        <button onClick={this.handleAddNewNumber}>Add</button>
        <button onClick={this.handleRemoveNumber}>Remove</button>
        {numbers.map((number, i) => (
          <input type="number" value={number} readOnly key={i} />
        ))}
        <input
          type="number"
          onChange={this.handleInputChange}
          value={newNumber}
        />
        <button onClick={this.findSecondLargestNumber}>Find</button>
        <h4>Build Second Largest Number of Array</h4>
        <p>
          Follow the Following Steps:
          <br />
          1. Click website https://elastic-johnson-911bdc.netlify.com/ 
          <br />
          2. You put your Integer(s)
          <br />
          3. For example:
          <br />
            a. write number 3 and click Add
            <br />
            b. write number -2 and click Add
            <br />
            c. For the RESULT click Add one more time
            <br />
          4. Finished
        </p>
      </div>
    )
  }
}

export default App