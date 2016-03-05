export default class CategoryService {
  constructor($localStorage, DEFAULT_CATEGORIES) {
    'ngInject';

    let storage = $localStorage.$default({
      categories: DEFAULT_CATEGORIES
    });

    Object.assign(this, {
      _storage: storage
    });
  }

  getAll() {
    return Array.from(this._storage.categories);
  }

  add(category) {
    if (category && !this._storage.categories.includes(category)) {
      this._storage.categories.push(category);
    }
  }

  remove(category) {
    let categories = this._storage.categories;
    categories.splice(categories.indexOf(category), 1);
  }
}
