import angular from 'angular'
import 'ngstorage'

import CategoryService from './category.service'
import CategorySelector from './category-selector.directive'
import SelectedCategoriesService from './selected-categories.service.js'

export default angular.module('myLocations.categories', [ 'ngStorage' ])
  .service("categoryService", CategoryService)
  .service("selectedCategoriesService", SelectedCategoriesService)
  .directive('categorySelector', CategorySelector)
  .name;
