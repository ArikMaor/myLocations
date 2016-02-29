import pageNotFoundTemplate from './assets/404.html'
import mainTemplate from './views/main.html'

export default function($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('main', {
      url: "/",
      template: mainTemplate,
      controller: 'MainController',
      controllerAs: 'main'
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
