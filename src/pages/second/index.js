
import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(
    state => ({})
)
export default class Second extends Component {
  render() {
    return (
      <div>第二页</div>
    )
  }
}