import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return <b>{this.props.content}</b>;
  }
}