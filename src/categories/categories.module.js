import angular from 'angular'
import 'ngstorage'

import CategoryService from './category.service'
import CategorySelector from './category-selector.directive'
import CategoryListEditor from './category-list-editor.directive'

export default angular.module('myLocations.categories', [ 'ngStorage' ])
  .service("categoryService", CategoryService)
  .directive('categorySelector', CategorySelector)
  .directive('categoryListEditor', CategoryListEditor)
  .name;
