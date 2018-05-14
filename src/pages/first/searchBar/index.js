
import React, { Component } from 'react'

import './searchBar.scss'
import { Cascader, DatePicker } from 'antd'
import { options } from './region'
import moment from 'moment';

const RangePicker = DatePicker.RangePicker;

export default class SearchBar extends Component {
  componentDidMount(){
  }

  render() {
    return (
        <div className="search-bar-wrap">
            <Cascader options={options} placeholder="请选择地区" />
            <RangePicker
              ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
            />
        </div>
    )
  }
}
