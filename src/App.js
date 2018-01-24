import React, { Component } from 'react'

// Redux
import { Provider } from 'react-redux'
import store from './store'
// Router
import { BrowserRouter } from 'react-router-dom'
import Navigation from './router'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navigation>
            <div>Hola</div>
          </Navigation>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
