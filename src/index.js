import './assets/style'

import angular from 'angular'
import 'angular-ui-router'

import routes from './routes'

angular.module('myLocations', ['ui.router'])
  .config(routes);
