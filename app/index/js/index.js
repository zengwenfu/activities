import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header.js';
import Banner from './Banner.js';
import Main from './MainContent.js';
import MainLeft from './MainLeft.js';
import MainRight from './MainRight.js';
import Footer from './Footer.js';

class Index extends Component {
	render() {
		return (
			<div>
				<Header></Header>
				<Banner></Banner>
				<Main>
					<MainLeft />
					<MainRight />
				</Main>
				<Footer/>
			</div>
		)
	}
}

render(<Index/>, document.getElementById('app'));