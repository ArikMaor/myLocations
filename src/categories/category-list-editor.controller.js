export default class CategoryListEditorController {

  constructor(categoryStore) {
    'ngInject';

    Object.assign(this, {
      categories: categoryStore.all,
      _selectedCategories: categoryStore.selected,
    });
  }

  delete(category) {
    let categoryId = category.id;
    let index = this.categories.indexOf(category);

    if (index > -1) {
      this.categories.splice(index, 1);

      let selectedCategoryIndex = this._selectedCategories.indexOf(categoryId)
      if (selectedCategoryIndex > -1){
        this._selectedCategories.splice(selectedCategoryIndex, 1);
      }
    }
  }
}
