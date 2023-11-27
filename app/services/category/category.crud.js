const category = require("../../model/category/category.model.js");
module.exports = { addCategory, getCategories, getByServiceRef };

async function addCategory(categoryDetails) {
  try {
    const newCategory = new category(categoryDetails);
    newCategory.save();
    return newCategory;
  } catch (error) {
    throw error;
  }
}
async function getCategories() {
  try {
    const allCategories = await category.find();
    return { allCategories };
  } catch (error) {
    throw error;
  }
}
async function getByServiceRef(params) {
  try {
    const { serviceRef } = params.query;
    const categoryByServiceRef = await category.find({
      serviceRef: { $in: [serviceRef] },
    });
    return {categoryByServiceRef};
  } catch (error) {
    throw error;
  }
}
