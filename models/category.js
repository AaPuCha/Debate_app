const mongoose = require('mongoose');
const config = require('../config/database');

// Category Schema
const CategorySchema = mongoose.Schema ({
    c_id: {
      type: Number,
      required: true
    },
    c_name: {
      type: String,
      required: true
    }
  });
  

  
const Category = module.exports = mongoose.model('Category', CategorySchema);

module.exports.getCategoryById = function(c_id, callback) {
  Category.findById(c_id, callback);
}

module.exports.getCategoryByCategoryId = function(c_id, callback) {
    const query = {c_id: c_id}
    Category.findOne(query, callback);
}

module.exports.getCategoryByCategoryname = function(c_name, callback) {
  const query = {c_name: c_name}
  Category.findOne(query, callback);
}

module.exports.getAllCategory = function(Category,callback){
    Category.toArray();
}