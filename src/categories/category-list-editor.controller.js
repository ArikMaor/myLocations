export default class CategoryListEditorController {

  constructor(categoryStore) {
    'ngInject';

    Object.assign(this, {
      categories: categoryStore.all
    });
  }

}
