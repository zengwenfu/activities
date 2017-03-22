import React, { Component, PropTypes } from 'react';
import '../css/banner.scss';

export default class Banner extends Component {
	render() {
		return (
			<div className="banner">
				<div className="banner-wrap">
					<div className='banner-title'>
						<img src={require('../images/title.gif')} />
					</div>
					<div className='banner-qrcode'>
						<img src={require('../images/qrcode.jpg')} />
					</div>
				</div>
			</div>
		);
	}
}