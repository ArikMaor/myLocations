export default class CategoryStore {
  constructor($localStorage, DEFAULT_CATEGORIES) {
    'ngInject';

    let categories = $localStorage.$default({
      categories: DEFAULT_CATEGORIES
    }).categories;

    Object.assign(this, {
      all: categories,
      selected: categories.map(category => category.id)
    });
  }
}
