import template from './category-selector.html'

export default function CategorySelector() {
  'ngInject';

  return  {
    restrict: 'E',
    scope: {
      categories: "="
    },
    controller: 'CategorySelectorController',
    controllerAs: 'categorySelector',
    template,
  };
}
