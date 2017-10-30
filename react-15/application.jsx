import React from 'react'
import {Component} from 'react'
import createClass from 'create-react-class'
import ReactDOM from 'react-dom'

import microapps from '../microapps.json'
import NameService from '../services/name'

const nameService = NameService(localStorage)

const MicroappSelector = (props, children) => {
  return <dl>
    <dt>Choose Microapp:</dt>
    <dd><a href="..">Root</a></dd>
    {Object.keys(microapps).map((slug) => {
      const name = microapps[slug]
      return slug === 'react-15'
        ? <dd><strong>{name}</strong></dd>
        : <dd><a href={`../${slug}`}>{name}</a></dd>
    })}
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
