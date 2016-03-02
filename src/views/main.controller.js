export default class MainController {

  groupLocations = false
  selectedLocationCoords = {};

  constructor(categoryService, locationService) {
    'ngInject';

    let categories = categoryService.getAll();
    let locations = locationService.getAll();

    Object.assign(this, {
      categories,
      locations,
      categoryFilter: Array.from(categories)
    });

    this.onLocationSelected(locations[0]);
  }

  onLocationSelected(location) {
    Object.assign(this.selectedLocationCoords, location.coordinates);
  }
}
