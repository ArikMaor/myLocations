export default class LocationController {

  name = ''
  address = ''

  constructor(DEFAULT_COORDINATES, $stateParams) {
    'ngInject';

    Object.assign(this, {
      coordinates: DEFAULT_COORDINATES
    });
  }

}
