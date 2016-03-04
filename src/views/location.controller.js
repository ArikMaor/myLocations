export default class LocationController {

  obj = {
    name: '',
    address: '',
    categories: []
  }

  constructor(DEFAULT_COORDINATES, $state, $stateParams, categoryService, locationService) {
    'ngInject';

    Object.assign(this, {
      coordinates: DEFAULT_COORDINATES,

      _allCategories: categoryService.getAll(),
      _categoryService: categoryService,
      _locationService: locationService,
      $state
    });
  }

  availableCategories() {
    return this._allCategories.filter(category =>
      !this.obj.categories.includes(category));
  }

  addCategory(category) {
    this.obj.categories.push(category);
  }

  removeCategory(category) {
    let categories = this.obj.categories;
    categories.splice(categories.indexOf(category), 1);
  }

  save() {
    this._locationService.add(this.obj);
    this.$state.go('main');
  }
}
