export default class LocationsListController {
  constructor(categoryStore, locationStore) {
    'ngInject';

    Object.assign(this, {
      locations: locationStore.all,
      _selectedCategories: categoryStore.selected
    })
  }

  isVisible(location) {
    return location.categories.find(categoryId =>
      this._selectedCategories.includes(categoryId));
  }
}
