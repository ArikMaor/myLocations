export default class CategoriesController {

  constructor($localStorage) {
    'ngInject';

    let storage = $localStorage.$default({
        categories: [ 'Pubs', 'Clubs', 'Parks', 'Countries' ]
      });

    Object.assign(this, {
      list: storage.categories
    });
  }
}
