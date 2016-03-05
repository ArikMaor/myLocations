export default class LocationController {

  obj = {
    id: undefined,
    name: '',
    address: '',
    categories: [],
    coordinates: {}
  }

  autocompleteOptions = { preventSubmit: true }

  constructor(DEFAULT_COORDINATES, $state, $stateParams, categoryService, locationService) {
    'ngInject';

    let location = $stateParams.locationId ?
      locationService.getOne(parseInt($stateParams.locationId)) :
      undefined;

    Object.assign(this.obj, location ? location : {
      coordinates: Object.assign({}, DEFAULT_COORDINATES)
    });

    Object.assign(this, {
      mapCenter: Object.assign({}, this.obj.coordinates),

      onPlaceSelected: this.onPlaceSelected.bind(this),

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
    let location = this.obj;
    if (location.id) {
      this._locationService.update(location);
    } else {
      this._locationService.add(location);
    }
    this.$state.go('main');
  }

  onPlaceSelected(error, location_details) {
    if (error) {
      console.log(`error: ${error}`);
    } else {
      console.info(window.x = location_details);
      let location_coords = location_details.geometry.location;
      this.obj.coordinates = {
        latitude: location_coords.lat(),
        longitude: location_coords.lng()
      };
      Object.assign(this.mapCenter, this.obj.coordinates)
    }
  }
}
