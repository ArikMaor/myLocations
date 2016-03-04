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
    return Array.from(this.locations);
  }

  add(location) {
    this.locations.push(location);
  }

  remove(location) {
    let locations = this.locations;
    locations.splice(locations.indexOf(location), 1);
  }
}
