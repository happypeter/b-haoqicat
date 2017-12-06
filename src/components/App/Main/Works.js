import React, { PropTypes } from 'react'

class Works extends React.Component {
  constructor() {
    super()
    this.state = {
      show1: false,
      show2: false,
      show3: false,
    }
  }

  handleMouseOver = (i) => {
    if (i === 1) {
      this.setState({
        show1: true
      })
    } if (i === 2) {
      this.setState({
        show2: true
      })
    } else {
      this.setState({
        show3: true
      })
    }
  }

  handleMouseOut = (i) => {
    if (i === 1) {
      this.setState({
        show1: false
      })
    } if (i === 2) {
      this.setState({
        show2: false
      })
    } else {
      this.setState({
        show3: false
      })
    }
  }

  render () {
    let backdropStyle = {
     zIndex: '9997',
     color: '#fff',
    }
    return(
      <div className="we-works">
        <h5>我们的作品</h5>
        <div className="works">
          <div className="card"
            onMouseOver={this.handleMouseOver.bind(this,1)}
            onMouseOut={this.handleMouseOut.bind(this,1)}
            >
            <a href="https://maodou.io/" target="_blank">
              <div className="backdrop"
                style={this.state.show1 ? backdropStyle : null}
                >
                <span>毛豆网</span>
              </div>
              <img src={require('../../images/work-demo2.png')} />
            </a>
          </div>
          <div className="card"
            onMouseOver={this.handleMouseOver.bind(this,2)}
            onMouseOut={this.handleMouseOut.bind(this,2)}
            >
            <a href="https://zhikucool.com/" target="_blank">
              <div className="backdrop"
                style={this.state.show2 ? backdropStyle : null}
                >
                <span>共享教育</span>
              </div>
              <img src={require('../../images/work-demo1.png')} />
            </a>
          </div>
          <div className="card"
            onMouseOver={this.handleMouseOver.bind(this,3)}
            onMouseOut={this.handleMouseOut.bind(this,3)}
            >
            <a href="http://gomeifang.com/" target="_blank">
              <div className="backdrop"
                style={this.state.show3 ? backdropStyle : null}
                >
                <span>环球地产</span>
              </div>
            </a>
            <img src={require('../../images/work-demo.png')} />
          </div>
        </div>
      </div>
    )
  }
}

export default Works;
