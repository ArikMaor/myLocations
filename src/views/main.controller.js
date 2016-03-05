export default class MainController {

  groupLocations = false
  selectedLocationCoords = {}

  constructor(DEFAULT_COORDINATES) {
    'ngInject';

    console.log('yo!');

    this.selectedLocationCoords = DEFAULT_COORDINATES;
  }

  onLocationSelected(location) {
    Object.assign(this.selectedLocationCoords, location.coordinates);
  }
}
