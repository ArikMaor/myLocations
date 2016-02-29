export default class MainController {

  constructor(categoryStore, locationStore) {
    'ngInject';

    Object.assign(this, {
      categories: categoryStore.all,
      locations: locationStore.all
    });
  }
}
