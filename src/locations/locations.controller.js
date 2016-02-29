export default class LocationsController {
  constructor(categoryStore) {
    'ngInject';

    Object.assign(this, {
      _selectedCategories: categoryStore.selected
    })
  }

  isVisible(location) {
    return location.categories.find(categoryId =>
      this._selectedCategories.includes(categoryId));
  }
}
