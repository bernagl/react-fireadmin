import React, { Component } from 'react'

class Form extends Component {
  render() {
    return <div>Form {this.props.match.params.id}</div>
  }
}

export default Form
