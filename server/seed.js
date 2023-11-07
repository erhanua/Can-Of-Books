const mongoose = require("mongoose");
require("dotenv").config();
const Book = require("./models/book");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await Book.create([
    {
      title: "Atomic Habits",
      description:
        "An easy and proven way to build good habits and break bad ones, 'Atomic Habits' offers a framework for improving every day by James Clear.",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/513Y5o-DYtL.jpg",
      author: "James Clear",
      status: true,
    },

    {
      title: "The Lean Startup",
      description:
        "Eric Ries defines a startup as an organization dedicated to creating something new under conditions of extreme uncertainty. 'The Lean Startup' is a new approach to business that's being adopted around the world.",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg",
      author: "Eric Ries",
      status: true,
    },

    {
      title: "Thinking, Fast and Slow",
      description:
        "In this international bestseller, Daniel Kahneman, the renowned psychologist and winner of the Nobel Prize in Economics, takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think.",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41SN9FK5C3L.jpg",
      author: "Daniel Kahneman",
      status: true,
    },
  ]);

  console.log("Book created");
  mongoose.disconnect();
}

seed();
