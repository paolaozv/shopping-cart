const faker = require('faker');

function generateProducts () {

  const products = [];

  for (let id = 0; id < 100; id++) {

    const productName = faker.commerce.productName();
    const productColor = faker.commerce.color();
    const productPrice = faker.commerce.price();
    const productCategory = faker.commerce.department();
    const productImage = faker.image.image();

    products.push({
      "id": id,
      "product_name": productName,
      "product_color": productColor,
      "product_price": productPrice,
      "product_category": productCategory,
      "product_image": productImage
    })
  }

  return { "products": products };
}

module.exports = generateProducts;