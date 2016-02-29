import './assets/style'

import 'materialize-css'

import angular from 'angular'
import angularMaterialize from 'angular-materialize'
import router from 'angular-ui-router'

import routes from './routes'
import categories from './categories/categories.module'
import locations from './locations/locations.module'

export default angular.module('myLocations',
  [router, angularMaterialize, categories, locations])
  .config(routes)
  .name;
