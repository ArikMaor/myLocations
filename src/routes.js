import pageNotFoundTemplate from './assets/404.html'

export default function($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('main', {
      url: "/",
      templateUrl: "main.html"
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
