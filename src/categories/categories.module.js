import angular from 'angular'
import 'ngstorage'

import CategoryStore from './category.store'
import CategorySelectorController from './category-selector.controller'
import CategorySelector from './category-selector.directive'

export default angular.module('myLocations.categories', [ 'ngStorage' ])
  .service("categoryStore", CategoryStore)
  .controller('CategorySelectorController', CategorySelectorController)
  .directive('categorySelector', CategorySelector)
  .name;
