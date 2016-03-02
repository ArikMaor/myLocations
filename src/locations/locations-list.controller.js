export default class LocationsListController {

  categoryFilter = undefined
  locations = []

  isVisible(location) {
    let filter = this.categoryFilter;

    return !filter || location.categories.find(category =>
      filter.includes(category));
  }
}
