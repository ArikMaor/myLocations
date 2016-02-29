export default class LocationsController {
  constructor($scope) {
    'ngInject';

    Object.assign(this, {
      _categories: $scope.categories
    })
  }

  isVisible(location) {
    return location.categories.find(categoryId =>
      this._categories.find(category =>
        category.id == categoryId && category.selected));
  }
}
