import angular from 'angular'
import 'ngstorage'

import CategoriesController from './categories.controller'
import routes from './categories.routes'

export default angular.module('myLocations.categories', [ 'ngStorage' ])
  .controller('CategoriesController', CategoriesController)
  .config(routes)
  .name;
