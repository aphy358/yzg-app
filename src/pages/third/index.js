
import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(
    state => ({})
)
export default class Third extends Component {
  render() {
    return (
      <div>最后一页</div>
    )
  }
}