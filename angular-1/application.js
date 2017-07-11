import angular from 'angular';
import NameService from '../services/name'

angular

  .module('application', [])

  .factory('nameService', () => {
    return NameService(localStorage)
  })

  .component('root', {
    template: `
      <microapp-selector></microapp-selector>
      <p>This is a <a href="https://angularjs.org">Angular</a> 1 Microapp.</p>
      <p>Tell me your name and I'll remember it between Microapps: <input type="text" ng-model="$ctrl.name" ng-change="$ctrl.changeName()" /></p>
    `,
    controller(nameService) {
      'ngInject'

      this.name = nameService.get()

      this.changeName = () => {
        nameService.save(this.name)
      }
    }
  })

  .component('microappSelector', {
    template: `
      <dl>
        <dt>Choose Microapp:</dt>
        <dd><a href="..">Root</a></dd>
        <dd><strong>Angular 1</strong></dd>
        <dd><a href="../hyperapp-0">Hyperapp 0</a></dd>
        <dd><a href="../react-15">React 15</a></dd>
        <dd><a href="../vue-2">Vue 2</a></dd>
      </dl>
    `
  })
