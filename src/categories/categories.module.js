import angular from 'angular'
import 'ngstorage'

import CategoryService from './category.service'
import CategorySelector from './category-selector.directive'

export default angular.module('myLocations.categories', [ 'ngStorage' ])
  .service("categoryService", CategoryService)
  .directive('categorySelector', CategorySelector)
  .name;
