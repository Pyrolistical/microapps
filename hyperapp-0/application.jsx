import {h, app} from 'hyperapp'

import NameService from '../services/name'

const nameService = NameService(localStorage)

const MicroappSelector = (props, children) => {
  return <dl>
    <dt>Choose Microapp:</dt>
    <dd><a href="..">Root</a></dd>
    <dd><a href="../angular-1">Angular 1</a></dd>
    <dd><strong>Hyperapp 0</strong></dd>
    <dd><a href="../react-15">React 15</a></dd>
    <dd><a href="../vue-2">Vue 2</a></dd>
  </dl>
}

const Name = ({name, onChange}, children) => {
  return <input type="text" value={name} onkeyup={onChange} />
}

app({
  state: {
    name: nameService.get() || ''
  },

  actions: {
    changeName(state, actions, {target: {value: name}}) {
      nameService.save(name)
      return {
        name
      }
    }
  },

  view(state, actions) {
    return <div>
      <MicroappSelector />
      <p>This is a <a href="https://github.com/hyperapp/hyperapp">Hyperapp</a> 0 Microapp.</p>
      <p>Tell me your name and I'll remember it between Microapps: <Name name={state.name} onChange={actions.changeName} /></p>
    </div>
  },

  root: document.getElementById('hyperapp-entry')
})
