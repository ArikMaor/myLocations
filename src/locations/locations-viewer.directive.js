import template from './locations-viewer.html'

export default function LocationsViewer() {
  'ngInject';

  return  {
    restrict: 'E',
    controller: 'LocationsController',
    controllerAs: 'locations',
    template
  };
}
