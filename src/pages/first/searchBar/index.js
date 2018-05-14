
import React, { Component } from 'react'

import './searchBar.scss'
import { Cascader } from 'antd'
import { options } from './region'

import DateRange from '../../../components/DateRange'

export default class SearchBar extends Component {
  componentDidMount(){
  }

  render() {
    return (
        <div className="search-bar-wrap">
            <Cascader options={options} placeholder="请选择地区" />
            <DateRange />
        </div>
    )
  }
}
