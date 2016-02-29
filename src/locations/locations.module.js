import './locations.scss'

import angular from 'angular'
import 'ngstorage'

import LocationStore from './location.store'
import LocationsListController from './locations-list.controller'
import LocationsList from './locations-list.directive'

export default angular.module('myLocations.locations', [ 'ngStorage' ])
  .service('locationStore', LocationStore)
  .controller('LocationsListController', LocationsListController)
  .directive('locationsList', LocationsList)
  .name;
