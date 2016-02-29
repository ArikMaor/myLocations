export default class LocationsController {

  constructor($localStorage) {
    'ngInject';

    const defaultLocations = [{
      name: 'Home',
      address: 'Rama 26',
      coordinates: [ 1, 2 ],
      categories: [ 1, 3]
    }];

    let storage = $localStorage.$default({
      locations: defaultLocations
    });

    Object.assign(this, {
      list: storage.locations
    });
  }
}
