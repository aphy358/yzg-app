
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increaseAction } from '../../actions/first'


// React component
@connect(
    state => ({value: state.counter.count}),
    dispatch => ({onIncreaseClick: () => dispatch(increaseAction())})
)
export default class First extends Component {
  componentDidMount(){
  }

  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>增加</button>
      </div>
    )
  }
}