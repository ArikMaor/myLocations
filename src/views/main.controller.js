export default class MainController {

  groupLocations = false
  selectedLocationCoords = {}
  categoryFilter = []

  constructor(DEFAULT_COORDINATES, categoryService, locationService) {
    'ngInject';

    let categories = categoryService.getAll();

    Object.assign(this, {
      categories,
      categoryFilter: Array.from(categories)
    });

    this.selectedLocationCoords = DEFAULT_COORDINATES;
  }

  onLocationSelected(location) {
    Object.assign(this.selectedLocationCoords, location.coordinates);
  }
}
