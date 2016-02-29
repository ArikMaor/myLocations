import angular from 'angular'

import CategoriesController from './categories.controller'
import routes from './categories.routes'

export default angular.module('myLocations.categories', [])
  .controller('CategoriesController', CategoriesController)
  .config(routes)
  .name;
