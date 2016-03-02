export default class MainController {

  constructor(categoryService, locationService) {
    'ngInject';

    let categories = categoryService.getAll();
    let locations = locationService.getAll();

    Object.assign(this, {
      categories,
      locations,
      categoryFilter: Array.from(categories),
      groupLocations: false
    });
  }
}
