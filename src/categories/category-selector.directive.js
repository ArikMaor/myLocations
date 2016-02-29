import template from './category-selector.html'

export default function CategorySelector() {
  'ngInject';

  return  {
    restrict: 'E',
    controller: 'CategoriesController',
    controllerAs: 'categories',
    template
  };
}
