import pageNotFoundTemplate from './assets/404.html'
import mainTemplate from './main.html'

export default function($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('main', {
      url: "/",
      template: mainTemplate
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
