export default class CategoriesController {

  constructor($localStorage) {
    'ngInject';

    let storage = $localStorage.$default({
        categories: [ 'Pubs', 'Clubs', 'Parks', 'Countries' ]
      });

    let categories = storage.categories.map(category => Object.create({
      name: category,
      selected: true
    }));

    Object.assign(this, {
      list: categories
    });
  }

  toggle(category) {
    category.selected = !category.selected;
  }
}
