import React, { Component, PropTypes } from 'react';
import '../css/left.scss';

export default class Left extends Component {
	render() {
		return (
			<div className="main-left">
				<div className="article module">
					<div className="module-title theme-title">热门文章>></div>
					<div className="article-list">
						<div className="article-item">
							<div className="article-item-left">
								<p className="article-item-title">从零打造在线版H5页面生成器</p>
								<p className="article-item-desc">想必你一定使用过易企秀或其它微场景生成工具制作过炫酷的h5页面，除了感叹其神奇之处有没有想过其实现方式呢？从设计者的角度来看待问题，会有不一样的收获，本文将从零开始，使用no...</p>
							</div>
							<div className="article-item-right">
								<img src={require("../images/banner.jpg")} />
							</div>
						</div>
						<div className="article-item">
							<div className="article-item-left">
								<p className="article-item-title">从零打造在线版H5页面生成器</p>
								<p className="article-item-desc">想必你一定使用过易企秀或其它微场景生成工具制作过炫酷的h5页面，除了感叹其神奇之处有没有想过其实现方式呢？从设计者的角度来看待问题，会有不一样的收获，本文将从零开始，使用no...</p>
							</div>
							<div className="article-item-right">
								<img src={require("../images/banner.jpg")} />
							</div>
						</div>
						<div className="article-item">
							<div className="article-item-left">
								<p className="article-item-title">从零打造在线版H5页面生成器</p>
								<p className="article-item-desc">想必你一定使用过易企秀或其它微场景生成工具制作过炫酷的h5页面，除了感叹其神奇之处有没有想过其实现方式呢？从设计者的角度来看待问题，会有不一样的收获，本文将从零开始，使用no...</p>
							</div>
							<div className="article-item-right">
								<img src={require("../images/banner.jpg")} />
							</div>
						</div>
					</div>
					<div className="module">
						<div className="module-title theme-title">案例展示>></div>
						<div className="simples">
							<div className="simple-item">
								<div className="simple-item-title">
									菲麦前端
								</div>
								<div className="mark-wrap">
									<div className="mark">
	                    				<img src="http://qr.liantu.com/api.php?text=https://www.baidu.com" alt="" className="mark-img" />
	                				</div>
								</div>
							</div>
							<div className="simple-item">
								<div className="simple-item-title">
									菲麦前端
								</div>
								<div className="mark-wrap">
									<div className="mark">
	                    				<img src="http://qr.liantu.com/api.php?" alt="" className="mark-img" />
	                				</div>
								</div>
							</div>
							<div className="simple-item">
								<div className="simple-item-title">
									菲麦前端
								</div>
								<div className="mark-wrap">
									<div className="mark">
	                    				<img src="http://qr.liantu.com/api.php?" alt="" className="mark-img" />
	                				</div>
								</div>
							</div>
						</div>
					</div>

					<div className="module">
						<div className="module-title theme-title">工具平台</div>
						<div className="tools">
							<div className="tool-item">h5在线生成工具</div>
							<div className="tool-item">...</div>
							<div className="tool-item">...</div>
						</div>
					</div>

				</div>
			</div>
		)
	}
}