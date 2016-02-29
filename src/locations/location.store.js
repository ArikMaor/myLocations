export default class LocationStore {
  constructor($localStorage, DEFAULT_LOCATIONS) {
    'ngInject';

    let locations = $localStorage.$default({
      locations: DEFAULT_LOCATIONS
    }).locations;

    Object.assign(this, {
      all: locations
    })
  }
}
