
import React, { Component } from 'react'
import { connect } from 'react-redux'
import hashHistory from '../history'

class MenuItem extends Component{
    constructor(props, context){
        super(props)
        this._handleClick = this._handleClick.bind(this)
    }

    _handleClick = (path) => {
        hashHistory.push(path)
    }

    render(){
        const { path, children } = this.props

        return (
            <p onClick={() => this._handleClick(path)}>{children}</p>
        )
    }
}

@connect(
    (state, props) => ({})
)
export default class LeftNav extends Component{

    constructor(props, context){
        super(props)
    }

    componentDidMount(){
    }

    componentWillUnmount(){
    }

    render(){
        return (
            <div>
                <MenuItem path="/first">首页</MenuItem>
                <MenuItem path="/second">第二页</MenuItem>
                <MenuItem path="/third">最后一页</MenuItem>
            </div>
        )
    }
}