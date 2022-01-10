const { Product } = require('../models');

const productData = [
  {
    product_name: 'Ikigai',
    price: 5.99,
    stock: 50,
    category_id: 1,
  },
  {
    product_name: 'Play Station 5',
    price: 400.0,
    stock: 20,
    category_id: 5,
  },
  {
    product_name: 'Apple Iphone 13',
    price:700.00,
    stock: 30,
    category_id: 4,
  },
  {
    product_name: 'Revlon Nail Polish',
    price: 10.50,
    stock: 100,
    category_id: 3,
  },
  {
    product_name: 'Casio G Shock',
    price: 129.99,
    stock: 60,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
