import React, { Component } from 'react'
import './clock.css'

export default class clock extends Component {
    state = { time: new Date()}

    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000);
    }
    
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    
    tick() {
      this.setState({
        time: new Date()
      });
    }


    render() {
      return (
        <div>
        
          <h2><span id='hours'>{this.state.time.getHours()}</span> : <span id = 'minutes'>{this.state.time.getMinutes()}</span> : <span id = 'seconds'>{this.state.time.getSeconds()}</span></h2>
        </div>
      )
    }
}