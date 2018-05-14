import React, { Component } from 'react'
import { DatePicker } from 'antd';

export default class DateRange extends Component{
    constructor(props, context){
		super(props)
        this.state = {
            startValue: null,
            endValue: null,
            endOpen: false
        }

        this.disabledStartDate = this.disabledStartDate.bind(this)
        this.disabledEndDate = this.disabledEndDate.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onStartChange = this.onStartChange.bind(this)
        this.onEndChange = this.onEndChange.bind(this)
        this.handleStartToggle = this.handleStartToggle.bind(this)
        this.handleEndToggle = this.handleEndToggle.bind(this)
	}
  
  disabledStartDate(startValue) {
    if (!startValue || !this.state.endValue) {
      return false;
    }
    return startValue.getTime() >= this.state.endValue.getTime();
  }

  disabledEndDate(endValue) {
    if (!endValue || !this.state.startValue) {
      return false;
    }
    return endValue.getTime() <= this.state.startValue.getTime();
  }

  onChange(field, value) {
    console.log(field, 'change', value);
    this.setState({
      [field]: value,
    });
  }

  onStartChange(value) {
    this.onChange('startValue', value);
  }

  onEndChange(value) {
    this.onChange('endValue', value);
  }

  handleStartToggle({ open }) {
    if (!open) {
      this.setState({ endOpen: true });
    }
  }

  handleEndToggle({ open }) {
    this.setState({ endOpen: open });
  }
  
  render() {
    return (
      <div style={{"float": "left"}}>
        <DatePicker
          disabledDate={this.disabledStartDate}
          value={this.state.startValue}
          placeholder="开始日期"
          onChange={this.onStartChange}
          toggleOpen={this.handleStartToggle}
        />
        <DatePicker
          disabledDate={this.disabledEndDate}
          value={this.state.endValue}
          placeholder="结束日期"
          onChange={this.onEndChange}
          open={this.state.endOpen}
          toggleOpen={this.handleEndToggle}
        />
      </div>
    )
  }
}