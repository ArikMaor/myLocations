export default class MainController {

  constructor(categoryService, locationService, $scope) {
    'ngInject';

    let categories = categoryService.getAll();
    let locations = locationService.getAll();

    Object.assign(this, {
      categories,
      locations,
      categoryFilter: Array.from(categories),
      groupLocations: false
    });

    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  }
}
