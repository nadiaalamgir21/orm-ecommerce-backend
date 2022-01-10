const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'white',
  },
  {
    tag_name: 'pink',
  },
  {
    tag_name: 'grey',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'fun',
  },
  {
    tag_name: 'guidance',
  },
  {
    tag_name: 'self enhancement',
  },
  {
    tag_name: 'clear',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
