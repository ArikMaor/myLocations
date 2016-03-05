import pageNotFoundTemplate from './assets/404.html'

import './views/main.scss'
import './views/location.scss'
import mainTemplate from './views/main.html'
import mainTopbarTemplate from './views/main.topbar.html'
import mainController from './views/main.controller.js'
import locationTemplate from './views/location.html'
import locationController from './views/location.controller.js'

export default function($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('main', {
      url: "/",
      views: {
        main: {
          template: mainTemplate,
          controller: mainController,
          controllerAs: 'main'
        },
        topbar: {
          template: mainTopbarTemplate
        }
      }
    })
    .state('location', {
      url: "/location/:locationId",
      views: {
        main: {
          template: locationTemplate,
          controller: locationController,
          controllerAs: 'location'
        }
      }
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
