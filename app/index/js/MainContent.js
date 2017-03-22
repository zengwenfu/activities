import React, { Component, PropTypes } from 'react';
import '../css/main.scss';

export default class Main extends Component {
	render() {
		const { children } = this.props;
		return (
			<div className="main-content">
				{ children }
			</div>
		);
	}
}