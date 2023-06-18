const category = require("../../model/category/category.model.js")

module.exports = { addCategory };

async function addCategory(categoryDetails) {
  try {
    const newCategory = new category(categoryDetails)
    await newCategory.save()
    return newCategory
  } catch (error) {
    throw error;
  }
}
