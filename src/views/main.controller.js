export default class MainController {

  groupLocations = false
  selectedLocation = undefined;

  constructor(categoryService, locationService) {
    'ngInject';

    let categories = categoryService.getAll();
    let locations = locationService.getAll();

    Object.assign(this, {
      categories,
      locations,
      categoryFilter: Array.from(categories)
    });
  }

  selectLocation(location) {
    this.selectedLocation = location;
  }
}
