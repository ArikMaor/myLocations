import angular from 'angular'
import 'ngstorage'

import LocationService from './location.service'
import LocationsListController from './locations-list.controller'
import LocationsList from './locations-list.directive'

export default angular.module('myLocations.locations', [ 'ngStorage' ])
  .service('locationService', LocationService)
  .controller('LocationsListController', LocationsListController)
  .directive('locationsList', LocationsList)
  .name;
