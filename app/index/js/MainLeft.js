import React, { Component, PropTypes } from 'react';
import '../css/left.scss';

const articleHome = 'http://www.jianshu.com/u/7233332cb959';
//从零打造
const h5Url = 'http://www.jianshu.com/p/00681bc68caf';
//性能优化3个维度
const performaceUrl= 'http://www.jianshu.com/p/a5d9938ed60f';
//爬虫
const seekUrl = 'http://www.jianshu.com/p/e05436dd8bdc';

//h5在线生成工具
const toolH5Url = 'http://h5.facemagic888.com';

//案例
const feimeiUrl = 'http://h5.facemagic888.com/show-h5.html?src=projects/58a02fbba5e0731851b677a4/view.html';


export default class Left extends Component {

	//页面跳转
	goto(url) {
		location.href = url;
	}

	/**
	* 跳到文章主页
	**/
	toArticleHome() {
		this.goto(articleHome);
	}

	/*
	* 跳到h5在线生成工具
	**/
	toH5Home() {
		this.goto(toolH5Url);
	}

	render() {
		return (
			<div className="main-left">
				<div className="article module">
					<div className="module-title theme-title c-pointer" onClick={::this.toArticleHome}>热门文章>></div>
					<div className="article-list">
						<div className="article-item" onClick={() => { ::this.goto(h5Url) } }>
							<div className="article-item-left">
								<p className="article-item-title">从零打造在线版H5页面生成器</p>
								<p className="article-item-desc">想必你一定使用过易企秀或其它微场景生成工具制作过炫酷的h5页面，除了感叹其神奇之处有没有想过其实现方式呢？从设计者的角度来看待问题，会有不一样的收获，本文将从零开始，使用no...</p>
							</div>
							<div className="article-item-right">
								<img src="http://upload-images.jianshu.io/upload_images/2954145-20c0e692e976d827.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
							</div>
						</div>
						<div className="article-item" onClick={() => { ::this.goto(performaceUrl) } }>
							<div className="article-item-left">
								<p className="article-item-title">前端性能优化的三个维度</p>
								<p className="article-item-desc">前端性能优化可以分为三个level：静态资源优化、接口访问优化、页面渲染速度优化，在操控门槛上依次递增，优化效果上越发没有这么明显，所以很多小团队只会做到了第一个level追...</p>
							</div>
							<div className="article-item-right">
								<img src={require("../images/performace.jpg")} />
							</div>
						</div>
						<div className="article-item" onClick={() => { ::this.goto(seekUrl) }}>
							<div className="article-item-left">
								<p className="article-item-title">node入门场景之——爬虫</p>
								<p className="article-item-desc">边做边学效率更高，爬虫是node的适用场景之一，关于爬虫的另一篇文章node爬虫进阶之——登录为了验证“经验总结、资料归集类技术文章更容易上热榜”的猜想，可以做一个爬虫：爬取...</p>
							</div>
							<div className="article-item-right">
								<img src='http://upload-images.jianshu.io/upload_images/2954145-666f626da2b28613.png?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/240' />
							</div>
						</div>
					</div>
					<div className="module">
						<div className="module-title theme-title c-pointer" onClick={ ::this.toH5Home } >案例展示>></div>
						<div className="simples">
							<div className="simple-item" onClick={()=>{::this.goto(feimeiUrl)}}>
								<div className="simple-item-title">
									菲麦前端
								</div>
								<div className="mark-wrap">
									<div className="mark">
	                    				<img src="http://qr.liantu.com/api.php?text=http://h5.facemagic888.com/projects/58a02fbba5e0731851b677a4/view.html" alt="" className="mark-img" />
	                				</div>
								</div>
							</div>
							<div className="simple-item" onClick={()=>{::this.goto(feimeiUrl)}}>
								<div className="simple-item-title">
									菲麦前端
								</div>
								<div className="mark-wrap">
									<div className="mark">
	                    				<img src="http://qr.liantu.com/api.php?text=http://h5.facemagic888.com/projects/58a02fbba5e0731851b677a4/view.html" alt="" className="mark-img" />
	                				</div>
								</div>
							</div>
							<div className="simple-item" onClick={()=>{::this.goto(feimeiUrl)}}>
								<div className="simple-item-title">
									菲麦前端
								</div>
								<div className="mark-wrap">
									<div className="mark">
	                    				<img src="http://qr.liantu.com/api.php?text=http://h5.facemagic888.com/projects/58a02fbba5e0731851b677a4/view.html" alt="" className="mark-img" />
	                				</div>
								</div>
							</div>
						</div>
					</div>

					<div className="module">
						<div className="module-title theme-title">工具平台</div>
						<div className="tools">
							<div className="tool-item" onClick={::this.toH5Home}>h5在线生成工具</div>
							<div className="tool-item">...</div>
							<div className="tool-item">...</div>
						</div>
					</div>

				</div>
			</div>
		)
	}
}