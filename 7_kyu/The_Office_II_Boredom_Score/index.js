function boredom(staff) {
  const departaments = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25,
  };

  let sentiment = Object.values(staff).reduce(
    (acc, elemt) => acc + departaments[elemt],
    0
  );

  console.log(sentiment);

  if (sentiment <= 80) {
    return "kill me now";
  } else if (sentiment < 100) {
    return "i can handle this";
  } else {
    return "party time!!";
  }
}
// test
let data;
data = {
  tim: "change",
  jim: "accounts",
  randy: "canteen",
  sandy: "change",
  andy: "change",
  katie: "IS",
  laura: "change",
  saajid: "IS",
  alex: "trading",
  john: "accounts",
  mr: "finance",
};
console.log(boredom(data));
data = {
  tim: "IS",
  jim: "finance",
  randy: "pissing about",
  sandy: "cleaning",
  andy: "cleaning",
  katie: "cleaning",
  laura: "pissing about",
  saajid: "regulation",
  alex: "regulation",
  john: "accounts",
  mr: "canteen",
};
console.log(boredom(data));
data = {
  tim: "accounts",
  jim: "accounts",
  randy: "pissing about",
  sandy: "finance",
  andy: "change",
  katie: "IS",
  laura: "IS",
  saajid: "canteen",
  alex: "pissing about",
  john: "retail",
  mr: "pissing about",
};
console.log(boredom(data));
