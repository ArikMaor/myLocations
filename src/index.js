import './assets/style'

import angular from 'angular'
import 'angular-ui-router'

import routes from './routes'
import categoriesModule from './categories/categories.module'

export default angular.module('myLocations', ['ui.router', categoriesModule])
  .config(routes)
  .name;
