export default class CategoriesController {

  constructor($localStorage) {
    'ngInject';

    const defaultCategories = [ 'Pubs', 'Clubs', 'Parks', 'Countries' ];

    let storage = $localStorage.$default({
      categories: defaultCategories.map(category => Object.assign({}, {
        name: category,
        selected: true
      }))
    });

    Object.assign(this, {
      list: storage.categories
    });
  }

  toggle(category) {
    category.selected = !category.selected;
  }
}
