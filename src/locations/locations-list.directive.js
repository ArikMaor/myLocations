import './locations-list.scss'
import template from './locations-list.html'

export default function LocationsList() {
  'ngInject';

  return  {
    restrict: 'E',
    controller: 'LocationsListController',
    controllerAs: 'locationsList',
    scope: {
      onLocationSelected: '&'
    },
    template,
    link
  };
}

function link(scope, element, attr, locationsList) {
  locationsList.onSelected(scope.onLocationSelected);
}
