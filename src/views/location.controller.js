export default class LocationController {

  obj = {
    name: '',
    address: '',
    categories: []
  }

  constructor(DEFAULT_COORDINATES, $stateParams, categoryService) {
    'ngInject';

    Object.assign(this, {
      coordinates: DEFAULT_COORDINATES,
      allCategories: categoryService.getAll(),

      _categoryService: categoryService
    });
  }

}
