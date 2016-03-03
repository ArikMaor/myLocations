import pageNotFoundTemplate from './assets/404.html'

import './views/main.scss'
import mainTemplate from './views/main.html'
import mainController from './views/main.controller.js'

export default function($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('main', {
      url: "/",
      template: mainTemplate,
      controller: mainController,
      controllerAs: 'main'
    })
    // .state('categories', {
    //   url: "/categories",
    //   template: categoriesTemplate
    // })
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
