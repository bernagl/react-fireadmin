import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
// Components
import { Form, Table } from '../components'

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Route path="/data/:id" component={Table} />
        <Route path="/form/:id" component={Form} />
      </div>
    )
  }
}
