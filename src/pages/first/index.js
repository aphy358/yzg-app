
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increaseAction } from '../../actions/first'

// 引入搜索栏
import SearchBar from './searchBar'


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
        <SearchBar />
        <div>
          <span>{value}</span>
          <button onClick={onIncreaseClick}>增加</button>
        </div>
      </div>
    )
  }
}