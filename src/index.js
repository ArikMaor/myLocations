import './assets/style'

import 'materialize-css'

import angular from 'angular'
import angularMaterialize from 'angular-materialize'
import router from 'angular-ui-router'
import 'angular-simple-logger'
import 'angular-google-maps'
import 'ng-places-autocomplete'

import { DEFAULT_CATEGORIES, DEFAULT_LOCATIONS, DEFAULT_COORDINATES } from './constants'

import categories from './categories/categories.module'
import locations from './locations/locations.module'

import routes from './routes'

export default angular.module('myLocations',
  [router, angularMaterialize, 'ngPlacesAutocomplete', 'uiGmapgoogle-maps', categories, locations])
  .constant('DEFAULT_CATEGORIES', DEFAULT_CATEGORIES)
  .constant('DEFAULT_LOCATIONS', DEFAULT_LOCATIONS)
  .constant('DEFAULT_COORDINATES', DEFAULT_COORDINATES)
  .config(routes)
  .run(setDefaultValues)
  .name;

function setDefaultValues($localStorage) {
  'ngInject';
  $localStorage.$default({
    locations: DEFAULT_LOCATIONS,
    categories: DEFAULT_CATEGORIES
  })
}
