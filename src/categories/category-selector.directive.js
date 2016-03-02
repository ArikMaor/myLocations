import './category-selector.scss'
import template from './category-selector.html'

export default function CategorySelector() {
  'ngInject';

  return  {
    restrict: 'E',
    controller: 'CategorySelectorController',
    controllerAs: 'categorySelector',
    scope: {
      categories: '=',
      selectedCategories: '='
    },
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
