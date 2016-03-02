export default class LocationService {
  constructor($localStorage, DEFAULT_LOCATIONS) {
    'ngInject';

    let locations = $localStorage.$default({
      locations: DEFAULT_LOCATIONS
    }).locations;

    Object.assign(this, {
      locations
    })
  }

  getAll() {
    return this.locations;
  }

  add(location) {
    this.locations.push(location);
  }

  remove(location) {
    let locations = this.locations;
    locations.splice(locations.index(location), 1);
  }
}
