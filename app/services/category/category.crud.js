const category = require("../../model/category/category.model.js");

module.exports = { addCategory, getCategories };

async function addCategory(categoryDetails) {
  try {
    const newCategory = new category(categoryDetails);
    await newCategory.save();
    return newCategory;
  } catch (error) {
    throw error;
  }
}
async function getCategories(){
  try {
    const allCategories = await category.find()
    return {allCategories}
  } catch (error) {
    throw error
  }
}
