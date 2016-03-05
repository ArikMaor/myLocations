export default class LocationsListController {

  constructor(locationService, selectedCategoriesService) {
    'ngInject';

    Object.assign(this, {
      locations: locationService.getAll(),

      locationService,
      selectedCategoriesService
    });
  }

  isVisible(location) {
    return location.categories.find(category =>
      this.selectedCategoriesService.isSelected(category));
  }

  _onSelected = []
  onSelected(callback) {
    this._onSelected.push(callback);
  }

  select(location) {
    this._onSelected.forEach(callback => callback(location));
  }

  delete(location) {
    if (confirm(`Are you sure you want to delete "${location.name}"?`)) {
      let locations = this.locations;

      this.locationService.remove(location);
      locations.splice(locations.indexOf(location), 1);
    }
  }
}
