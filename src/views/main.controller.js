export default class MainController {

  constructor($localStorage) {
    'ngInject';

    Object.assign(this, $localStorage);
  }
}
