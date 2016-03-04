export default class MainController {

  groupLocations = false
  selectedLocationCoords = {};

  constructor(DEFAULT_COORDINATES, categoryService, locationService) {
    'ngInject';

    let categories = categoryService.getAll();
    let locations = locationService.getAll();

    Object.assign(this, {
      categories,
      locations,
      categoryFilter: Array.from(categories)
    });

    this.selectedLocationCoords = DEFAULT_COORDINATES;
  }

  onLocationSelected(location) {
    Object.assign(this.selectedLocationCoords, location.coordinates);
  }
}
