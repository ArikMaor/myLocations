import './locations.scss'

import angular from 'angular'
import 'ngstorage'

import LocationsController from './locations.controller'
import LocationsViewer from './locations-viewer.directive'

export default angular.module('myLocations.locations', [ 'ngStorage' ])
  .controller('LocationsController', LocationsController)
  .directive('locationsViewer', LocationsViewer)
  .name;
