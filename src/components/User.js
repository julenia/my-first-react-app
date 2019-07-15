import React, { Component } from 'react'

export default class User extends Component {
    state = { active: true }

    toggle = () => {
      this.setState({
        active: !this.state.active
      })
    }

    render() {
      return (<div>
        <p>
        User: 
          <b>{ this.props.content }</b>
          <p>{this.props.content} is <b>{ this.state.active ? '' : 'not' }</b> present</p>
          <button onClick={this.toggle}>Toggle</button>
        </p>
      </div>)
    }
}