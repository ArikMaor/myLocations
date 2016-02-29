export default class CategorySelectorController {

  _selectedCategories = [];

  constructor(categoryStore) {
    'ngInject';

    Object.assign(this, {
      categories: categoryStore.all,
      _selectedCategories: categoryStore.selected
    });
  }

  toggle(category) {
    let selectedCategories = this._selectedCategories;
    let categoryId = category.id;

    let index = selectedCategories.indexOf(categoryId);
    if (index < 0) {
      selectedCategories.push(categoryId)
    } else {
      selectedCategories.splice(index, 1)
    }
  }

  isSelected(category) {
    return this._selectedCategories.includes(category.id);
  }
}
