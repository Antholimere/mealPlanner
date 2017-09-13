import React, { Component } from 'react'
import { addRecipe } from '../actions'

class App extends Component {
  state = {
    calendar: null
  }
  componentDidMount () {
    const { store } = this.props

    // listen to store changes
    store.subscribe(() => {

      // update state on each store update
      this.setState(() => ({
        calendar: store.getState()
      }))
    })
  }

  // dispatch to addRecipe action
  submitFood = () => {
    this.props.store.dispatch(addRecipe({
      day: 'monday',
      meal: 'breakfast',
      recipe: {
        label: this.input.value
      },
    }))

    // reset input value after dispatch
    this.input.value = ''
  }
  render() {
    return (
      <div>
        <input
          type='text'
          ref={(input) => this.input = input}
          placeholder="Monday's Breakfast"
        />
        <button onClick={this.submitFood}>Submit</button>

        <pre>
          Mondays Breakfast: {this.state.calendar && this.state.calendar.monday.breakfast}
        </pre>
      </div>
    )
  }
}
export default App
