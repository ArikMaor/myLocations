import pageNotFoundTemplate from './assets/404.html'
import mainTemplate from './views/main.html'
import categoriesTemplate from './views/categories.html'

export default function($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('main', {
      url: "/",
      template: mainTemplate
    })
    .state('categories', {
      url: "/categories",
      template: categoriesTemplate
    })
    .state('404', {
      url: "/404",
      template: pageNotFoundTemplate
    });

  $urlRouterProvider.otherwise(($injector) => {
    'ngInject';
    var $state = $injector.get('$state');
    $state.go('main');
  });
}
