import './locations.scss'

import angular from 'angular'
import 'ngstorage'

import LocationStore from './location.store'
import LocationsController from './locations.controller'
import LocationsViewer from './locations-viewer.directive'

export default angular.module('myLocations.locations', [ 'ngStorage' ])
  .service('locationStore', LocationStore)
  .controller('LocationsController', LocationsController)
  .directive('locationsViewer', LocationsViewer)
  .name;
