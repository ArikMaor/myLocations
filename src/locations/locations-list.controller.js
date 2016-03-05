export default class LocationsListController {

  categoryFilter = undefined
  locations = []

  constructor(locationService) {
    'ngInject';

    Object.assign(this, {
      _locationService: locationService
    });

    this.locations = locationService.getAll();
  }

  isVisible(location) {
    let filter = this.categoryFilter;

    return !filter || location.categories.find(category =>
      filter.includes(category));
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

      this._locationService.remove(location);
      locations.splice(locations.indexOf(location), 1);
    }
  }
}
