export default class CategoryService {
  constructor($localStorage, DEFAULT_CATEGORIES) {
    'ngInject';

    let categories = $localStorage.$default({
      categories: DEFAULT_CATEGORIES
    }).categories;

    Object.assign(this, {
      categories
    });
  }

  getAll() {
    return this.categories;
  }

  add(category) {
    this.categories.push(category);
  }

  remove(category) {
    let categories = this.categories;
    categories.splice(categories.index(category), 1);
  }
}
