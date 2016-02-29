import template from './locations-list.html'

export default function LocationsList() {
  'ngInject';

  return  {
    restrict: 'E',
    controller: 'LocationsListController',
    controllerAs: 'locationsList',
    template
  };
}
