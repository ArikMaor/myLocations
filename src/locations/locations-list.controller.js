export default class LocationsListController {

  categoryFilter = undefined
  locations = []

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
}
