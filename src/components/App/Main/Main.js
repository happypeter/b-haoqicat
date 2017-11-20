import React, { Component } from 'react';
import WebIcon from './WebIcon.js'
import WeChat from './WeChat.js'
import Works from './Works.js'
import './Main.css'

class Main extends Component {
  render () {
    return (
      <div className='main'>
        <div className="banner-wrap">
          <div className="banner">
            <h3>我们做美丽而有用的东西</h3>
            <p>好奇猫用 Html5 的技术，让您在全平台<br />最高效的连接您的客户</p>
          </div>
        </div>
        <div className="web" >
          <WebIcon />
          <div className="info">
            <h5>网站开发</h5>
            <p>我们喜欢做网站，喜欢 Web 的开放和自由。一款强大的 Web App ，可以让您跟客户在电脑浏览器前、手机浏览器或者微信浏览器内自由连接。时至今日，URL 依然是最为强大的传播手段</p>
          </div>
        </div>
        <div className="app-wrap" >
          <div className="app">
            <div className="info app-info" >
              <h5>APP 开发</h5>
              <p>很多用户还是喜欢把自己最喜欢的应用，直接安装到手机上。好奇猫使用 React Native 技术，志愿做您的私人开发团队。</p>
            </div>
            <div className="icon">APP</div>
          </div>
        </div>
        <div className="wechat" >
          <WeChat />
          <div className="info wechat-info" >
            <h5>微信开发</h5>
            <p>我们做微信公众号开发，也做微信小程序开发。不管用户是安卓手机还是苹果，其实都不重要，因为大部分时间他们都待在微信里。好奇猫帮您的企业跟客户在微信中实现内容订阅，登录认证，商品支付等各种方式亲密接触。</p>
          </div>
        </div>
        <div className="line"></div>
        <Works />
      </div>
    )
  }
}

export default Main;
