import './category-selector.scss'
import 'ng-cache!./new-category-modal.html'
import controller from './category-selector.controller'
import template from './category-selector.html'

export default function CategorySelector() {
  'ngInject';

  return  {
    restrict: 'E',
    controllerAs: 'categorySelector',
    scope: {
      categories: '=',
      selectedCategories: '='
    },
    controller,
    template,
    link
  };
}

function link(scope, element, attr, categorySelector) {
  Object.assign(categorySelector, {
    categories: scope.categories,
    selectedCategories: scope.selectedCategories
  });
}
