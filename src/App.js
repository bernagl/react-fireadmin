import React, { Component } from 'react'
import './App.css'
// Redux
import { Provider } from 'react-redux'
import store from './store'
// Router
import { BrowserRouter } from 'react-router-dom'
import Navigation from './router'
// Views
import { Admin } from './views'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Admin />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
