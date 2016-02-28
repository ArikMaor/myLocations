import angular from 'angular'

import categoriesTemplate from './categories.html'

export default function($stateProvider) {
  'ngInject';

  $stateProvider
    .state('categories', {
      url: '/categories',
      template: categoriesTemplate,
      controller: 'CategoriesController',
      controllerAs: 'categories'
    });
}
