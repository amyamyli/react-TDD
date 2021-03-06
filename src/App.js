import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './App.css'
import Cart from './components/Cart'
import logo from './logo.svg'

class App extends Component {
  static propTypes = {
    name: PropTypes.string,
  }

  static defaultProps = {
    name: 'Test Driven Development',
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.name}</h1>
        </header>
        <Cart />
      </div>
    )
  }
}

export default App
