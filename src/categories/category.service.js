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
    return this._storage.categories;
  }

  add(category) {
    if (category && !this._storage.categories.includes(category)) {
      this._storage.categories.push(category);
    }
  }

  remove(category) {
    let categories = this.categories;
    categories.splice(categories.index(category), 1);
  }
}
