const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Books',
  },
  {
    category_name: 'Watches',
  },
  {
    category_name: 'Beauty',
  },
  {
    category_name: 'Mobile',
  },
  {
    category_name: 'Gaming',
  },
];


const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
