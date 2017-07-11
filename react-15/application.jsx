import React from 'react'
import {Component} from 'react'
import createClass from 'create-react-class'
import ReactDOM from 'react-dom'

import NameService from '../services/name'

const nameService = NameService(localStorage)

const MicroappSelector = (props) => {
  return <dl>
    <dt>Choose Microapp:</dt>
    <dd><a href="..">Root</a></dd>
    <dd><a href="../angular-1">Angular 1</a></dd>
    <dd><a href="../hyperapp-0">Hyperapp 0</a></dd>
    <dd><strong>React 15</strong></dd>
    <dd><a href="../vue-2">Vue 2</a></dd>
  </dl>
}

const Name = ({name, onChange}) => {
  return <input type="text" value={name} onChange={onChange} />
}

const Root = createClass({
  getInitialState() {
    return {
      name: nameService.get() || ''
    }
  },

  changeName({target: {value: name}}) {
    this.setState({
      name
    })
    nameService.save(name)
  },

  render() {
    return <div>
      <MicroappSelector />
      <p>This is a <a href="https://facebook.github.io/react/">React</a> 15 Microapp.</p>
      <p>Tell me your name and I'll remember it between Microapps: <Name name={this.state.name} onChange={this.changeName} /></p>
    </div>
  }
})

ReactDOM.render(<Root />, document.getElementById('react-entry'))
