const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- Database in sync now -----\n');
  await seedCategories();
  console.log('\n----- All categories added -----\n');

  await seedProducts();
  console.log('\n----- All prodcuts added -----\n');

  await seedTags();
  console.log('\n----- All TAGS added -----\n');

  await seedProductTags();
  console.log('\n----- All product tags added -----\n');

  process.exit(0);
};

seedAll();
