import template from './locations-list.html'

export default function LocationsList() {
  'ngInject';

  return  {
    restrict: 'E',
    controller: 'LocationsListController',
    controllerAs: 'locationsList',
    scope: {
      locations: '=',
      categoryFilter: '=?'
    },
    template,
    link
  };
}

function link(scope, element, attr, locationsList) {
  Object.assign(locationsList, {
    locations: scope.locations,
    categoryFilter: scope.categoryFilter
  });
}
