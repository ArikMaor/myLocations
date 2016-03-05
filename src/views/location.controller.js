export default class LocationController {

  obj = {
    name: '',
    address: '',
    categories: [],
    coordinates: {}
  }

  autocompleteOptions = { preventSubmit: true }

  originalLocationName = null;

  place = {}

  constructor(DEFAULT_COORDINATES, $state, $stateParams, categoryService, locationService) {
    'ngInject';

    if ($stateParams.name) {
      let originalLocation = locationService.getOne($stateParams.name);
      if (originalLocation) {
        this.originalLocationName = originalLocation.name;
        Object.assign(this.obj, originalLocation);
      } else {
        Object.assign(this.obj, {
          name: $stateParams.name,
          coordinates: Object.assign({}, DEFAULT_COORDINATES)
        });
      }
    }

    Object.assign(this, {
      mapCenter: Object.assign({}, DEFAULT_COORDINATES),

      onPlaceSelected: this.onPlaceSelected,

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
    if (this.originalLocationName) {
      this._locationService.update(this.obj);
    } else {
      this._locationService.add(this.obj);
    }
    this.$state.go('main');
  }

  onPlaceSelected(error, location_details) {
    if (error) {
      console.log(`error: ${error}`);
    } else {
      let location_coords = location_details.geometry.location;
      this.obj.coordinates = {
        latitude: location_coords.lat(),
        longitude: location_coords.lng()
      };
      Object.assign(this.mapCenter, this.obj.coordinates)
    }
  }
}
