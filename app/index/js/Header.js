import React, { Component, PropTypes } from 'react';
import '../css/header.scss';

export default class Header extends Component {
	render() {
		return (
			<div className='header'>
				<div className='logo'></div>
				<div className='nav'>
					<div className='nav-item'><a href='/'>主页</a></div>
					<div className='nav-item'><a href='javascript:;'>博客</a></div>
					<div className='nav-item'><a href='javascript:;'>案例</a></div>
					<div className='nav-item'><a href='javascript:;'>关于</a></div>
				</div>
			</div>
		)
	}
}