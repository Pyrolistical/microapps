import angular from 'angular';

import microapps from '../microapps.json'
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
    controller() {
      this.microapps = microapps
    },
    template: `
      <dl>
        <dt>Choose Microapp:</dt>
        <dd><a href="..">Root</a></dd>
        <dd ng-repeat="(slug, name) in $ctrl.microapps">
          <strong ng-if="slug === 'angular-1'">{{name}}</strong>
          <a ng-if="slug !== 'angular-1'" href="../{{slug}}">{{name}}</a>
        </dd>
      </dl>
    `
  })
