import angular from 'angular'
import 'ngstorage'

import CategoryStore from './category.store'
import CategorySelectorController from './category-selector.controller'
import CategorySelector from './category-selector.directive'
import CategoryListEditorController from './category-list-editor.controller'
import CategoryListEditor from './category-list-editor.directive'

export default angular.module('myLocations.categories', [ 'ngStorage' ])
  .service("categoryStore", CategoryStore)
  .controller('CategorySelectorController', CategorySelectorController)
  .controller('CategoryListEditorController', CategoryListEditorController)
  .directive('categorySelector', CategorySelector)
  .directive('categoryListEditor', CategoryListEditor)
  .name;
