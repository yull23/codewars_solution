function generateHashtag(str) {
  var hashtag = str.split(" ").reduce(function (tag, word) {
    return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, "#");

  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}

// test

console.log(generateHashtag(""));
console.log(generateHashtag("Do We have A Hashtag"));
console.log(generateHashtag(" ".repeat(200)));
console.log(generateHashtag("Codewars"));
console.log(generateHashtag("Codewars Is Nice"));
console.log(generateHashtag("Codewars is nice"));
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
console.log(
  generateHashtag(
    "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
  )
);
console.log(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138));
console.log(generateHashtag("a".repeat(140)));
