
import 'antd/dist/antd.css'; 
import './layout.scss'

import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import hashHistory from '../history'

const { Header, Sider, Content, Footer } = Layout;


// 注意，这里的类名 layout 不能是大写，不然和上面定义的 Layout 变量冲突了，会报错
export default class layout extends Component {
	constructor(props, context){
		super(props)
		this._handleClick = this._handleClick.bind(this)
	}

	_handleClick = (path) => {
		hashHistory.push(path)
	}

	state = {
		collapsed: false,
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	}

	render() {
		const { location, children } = this.props
		
		return (
			<Layout>
				<Sider
					trigger={null}
					collapsible
					collapsed={this.state.collapsed}
				>
					<div className="logo" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
						<Menu.Item key="1" onClick={() => this._handleClick('/first')}>
							<Icon type="user" />
							<span>首页</span>
						</Menu.Item>

						<Menu.Item key="2" onClick={() => this._handleClick('/second')}>
							<Icon type="video-camera" />
							<span>第二页</span>
						</Menu.Item>

						<Menu.Item key="3" onClick={() => this._handleClick('/third')}>
							<Icon type="upload" />
							<span>最后一页</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: '#fff', padding: 0 }}>
						<Icon
							className="trigger"
							type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={this.toggle}
						/>
					</Header>
					<Content style={{ background: '#fff', minHeight: 280 }}>
						{children}
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						React Project ©2018 Created by JL-Tour front-end team
					</Footer>
				</Layout>
			</Layout>
		);
	}
}
