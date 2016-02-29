import './category-selector.scss'
import template from './category-selector.html'

export default function CategorySelector() {
  'ngInject';

  return  {
    restrict: 'E',
    controller: 'CategorySelectorController',
    controllerAs: 'categorySelector',
    template,
  };
}
