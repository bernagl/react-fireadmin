import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
// Components
import { Form, Table } from '../components'

export default class AdminNavigation extends Component {
  render() {
    return (
      <div>
        <Route path="/data/:id" component={Table} />
        <Route path="/form/:schema/:id?" component={Form} />
      </div>
    )
  }
}
