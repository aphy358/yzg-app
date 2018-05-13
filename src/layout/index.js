
import React, { Component } from 'react'
import { connect } from 'react-redux'

import LeftNav from './leftNav'


@connect(
    (state, props) => ({})
)
export default class Layout extends Component{

    constructor(props, context){
        super(props)
    }

    componentDidMount(){

    }


    componentWillUnmount(){

    }


    render(){
        const { location, children } = this.props
        console.log('layout')
        return (
            <div>
                <LeftNav location={location} />
                <div>
                    {children}
                </div>
            </div>
        )
    }
}