import './categories.scss'

import angular from 'angular'
import 'ngstorage'

import CategoriesController from './categories.controller'
import CategorySelector from './category-selector.directive'

export default angular.module('myLocations.categories', [ 'ngStorage' ])
  .controller('CategoriesController', CategoriesController)
  .directive('categorySelector', CategorySelector)
  .name;
