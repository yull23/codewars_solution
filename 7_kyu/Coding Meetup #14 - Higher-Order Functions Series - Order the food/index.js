function orderFood(list) {
  // thank you for checking out the Coding Meetup kata :)
  let result = {};
  list.forEach((element) => {
    let meal = element["meal"];
    if (Object.keys(result).includes(meal)) {
      result[meal] += 1;
    } else {
      result[meal] = 1;
    }
  });
  return result;
}
// test

var list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
    meal: "vegetarian",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
    meal: "standard",
  },
  {
    firstName: "Ramona",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
    meal: "vegan",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
    meal: "vegetarian",
  },
];

console.log(orderFood(list1));
