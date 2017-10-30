import * as Surplus from 'surplus'
import S from 's-js'

import microapps from '../microapps.json'
import NameService from '../services/name'

const nameService = NameService(localStorage)

const MicroappSelector = (props, children) => {
  return <dl>
    <dt>Choose Microapp:</dt>
    <dd><a href="..">Root</a></dd>
    {Object.keys(microapps).map((slug) => {
      const name = microapps[slug]
      return slug === 'surplus-0'
        ? <dd><strong>{name}</strong></dd>
        : <dd><a href={`../${slug}`}>{name}</a></dd>
    })}
  </dl>
}

const Name = (props) => {
  const {name, onchange} = props
  return <input type="text" value={name()} onkeyup={onchange} />
}

const name = S.data(nameService.get() || '')

function changeName(e) {
  const {target: {value}} = e
  console.log(e)
  nameService.save(value)
  name(value)
}

const root = S.root(() => <div>
  <MicroappSelector />
  <p>This is a <a href="https://github.com/adamhaile/surplus">Surplus</a> 0 Microapp.</p>
  <p>Tell me your name and I'll remember it between Microapps: <Name name={name} onchange={changeName} /></p>
</div>)
document.getElementById('surplus-entry').appendChild(root)
