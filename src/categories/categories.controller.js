export default class CategoriesController {

  constructor($localStorage) {
    'ngInject';

    const defaultCategories = [{
        id: 1,
        name: 'Pubs',
        selected: true
      }, {
        id: 2,
        name: 'Clubs',
        selected: true
      }, {
        id: 3,
        name: 'Parks',
        selected: true
      }, {
        id: 4,
        name: 'Countries',
        selected: true
    }];

    let storage = $localStorage.$default({
      categories: defaultCategories
    });

    Object.assign(this, {
      list: storage.categories
    });
  }

  toggle(category) {
    category.selected = !category.selected;
  }
}
