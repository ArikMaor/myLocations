import template from './category-selector.html'

export default function CategorySelector() {
  'ngInject';

  return  {
    restrict: 'E',
    scope: {
      categories: "="
    },
    controller: 'CategoriesController',
    controllerAs: 'categoriesController',
    template,
  };
}
