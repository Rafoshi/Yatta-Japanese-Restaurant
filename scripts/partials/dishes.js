//Main dishes
const sectionDishes = document.querySelector("section.menu");
const card = document.querySelector("article.card");

const dishes = [
  {
    image: "./assets/card1.jpg",
    title: "Yakisoba",
    units: "3",
    describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta ligula magna, at consequat arcu dignissim vitae. Vivamus tempor malesuada purus. Praesent non lobortis nibh."
  },
  {
    image: "./assets/card1.jpg",
    title: "Temaki",
    units: "13",
    describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta ligula magna, at consequat arcu dignissim vitae. Vivamus tempor malesuada purus. Praesent non lobortis nibh."
  },
  {
    image: "./assets/card1.jpg",
    title: "Sashimi",
    units: "5",
    describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta ligula magna, at consequat arcu dignissim vitae. Vivamus tempor malesuada purus. Praesent non lobortis nibh."
  }
];

dishes.map(dish => {
  const dishClone = card.cloneNode(true);
  dishClone.querySelector("img").src = dish.image;
  dishClone.querySelector(".bigTitle").innerHTML = dish.title;
  dishClone.querySelector(".unit").innerHTML = dish.units;
  dishClone.querySelector(".describe").innerHTML = dish.describe;
  sectionDishes.appendChild(dishClone);
});

card.remove();