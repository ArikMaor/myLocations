import _ from 'underscore'

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

  getOne(locationId) {
    return this.locations.find(location => location.id == locationId);
  }

  add(location) {
    if (location.id) {
      console.error(`can't add existing location`);
    } else {
      location.id = this._get_new_id();
      this.locations.push(location);
    }
  }

  remove(location) {
    let locations = this.locations;
    locations.splice(locations.indexOf(location), 1);
  }

  update(location) {
    let existing_location = this.getOne(location.id);
    Object.assign(existing_location, location);
  }

  _get_new_id() {
    let locations = this.locations;
    return locations.length == 0 ? 1 :
      _.max(locations, location => location.id) + 1;
  }
}
