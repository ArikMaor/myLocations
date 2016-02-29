import pageNotFoundTemplate from './assets/404.html'

export default function($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('404', {
      url: "/404",
      template: pageNotFoundTemplate
    });

  $urlRouterProvider.otherwise(($injector) => {
    'ngInject';
    var $state = $injector.get('$state');
    $state.go('categories');
  });
}
