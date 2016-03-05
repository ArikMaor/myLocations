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

  getOne(locationName) {
    return this.locations.find(location =>
      location.name.toLowerCase() == locationName.toLowerCase());
  }

  add(location) {
    this.locations.push(location);
  }

  remove(location) {
    let locations = this.locations;
    locations.splice(locations.indexOf(location), 1);
  }

  update(location) {
    let existing_location = this.getOne(location.name);
    Object.assign(existing_location, location);
  }
}
