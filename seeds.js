const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose
  .connect('mongodb://localhost:27017/farmStand')
  .then(() => {
    console.log('MONGO CONNECTION OPEN!!!!');
  })
  .catch((err) => {
    console.log('OH NO MONGO CONNECTION ERROR!!!!');
    console.log(err);
  });

// const p = new Product({
//   name: 'Ruby GrapeFruit',
//   price: 1.99,
//   category: 'fruit'
// });

// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const seedProducts = [
  {
    name: 'Fairy eggplant',
    price: 1.0,
    category: 'vegetable'
  },
  {
    name: 'Organic godess melon',
    price: 4.99,
    category: 'fruit'
  },
  {
    name: 'Organic mini seedless watermelon',
    price: 3.99,
    category: 'fruit'
  },
  {
    name: 'Organic celery',
    price: 1.5,
    category: 'vegetable'
  },
  {
    name: 'Chocolate whole milk',
    price: 2.69,
    category: 'dairy'
  }
];

Product.insertMany(seedProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
