require("dotenv").config();

const mongoose = require("mongoose");
const Product = require("./models/Product");

const products = [
  {
    name: "iPhone 12",
    price: 999,
    description: "Latest Apple iPhone with A14 Bionic chip.",
    image: "./assets/iphone12.jpg",
    inStock: 30,
  },
  {
    name: "iPhone 12 Pro",
    description:
      "Apple iPhone 12 Pro with A14 Bionic chip and triple-camera system.",
    price: 1199,
    image: "https://example.com/iphone12pro.jpg",
    inStock: 8,
  },
  {
    name: "iPhone 13",
    description: "Apple iPhone 13 with A15 Bionic chip.",
    price: 1099,
    image: "https://example.com/iphone13.jpg",
    inStock: 15,
  },
  {
    name: "MacBook Air",
    description: "Apple MacBook Air with M1 chip.",
    price: 999,
    image: "https://example.com/macbookair.jpg",
    inStock: 5,
  },
  {
    name: "MacBook Pro",
    description: "Apple MacBook Pro with M1 chip.",
    price: 1299,
    image: "https://example.com/macbookpro.jpg",
    inStock: 7,
  },
  {
    name: "iPad Pro",
    description: "Apple iPad Pro with M1 chip.",
    price: 799,
    image: "https://example.com/ipadpro.jpg",
    inStock: 12,
  },
  {
    name: "iPad Air",
    description: "Apple iPad Air with A14 Bionic chip.",
    price: 599,
    image: "https://example.com/ipadair.jpg",
    inStock: 9,
  },
  {
    name: "AirPods Pro",
    description: "Apple AirPods Pro with active noise cancellation.",
    price: 249,
    image: "https://example.com/airpodspro.jpg",
    inStock: 20,
  },
  {
    name: "AirPods Max",
    description: "Apple AirPods Max with high-fidelity audio.",
    price: 549,
    image: "https://example.com/airpodsmax.jpg",
    inStock: 6,
  },

  // Add more products as needed
];

const seedProducts = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  await Product.deleteMany({});
  await Product.insertMany(products);

  console.log("Database seeded!");
  mongoose.connection.close();
};

seedProducts().catch((err) => {
  console.error(err);
  mongoose.connection.close();
});
