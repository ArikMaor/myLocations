import './locations-list.scss'
import template from './locations-list.html'

export default function LocationsList() {
  'ngInject';

  return  {
    restrict: 'E',
    controller: 'LocationsListController',
    controllerAs: 'locationsList',
    scope: {
      categoryFilter: '=?',
      onLocationSelected: '&'
    },
    template,
    link
  };
}

function link(scope, element, attr, locationsList) {
  Object.assign(locationsList, {
    categoryFilter: scope.categoryFilter
  });

  locationsList.onSelected(scope.onLocationSelected);
}
