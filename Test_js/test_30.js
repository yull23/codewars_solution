function nameInStr(str, name) {
  let letters = name.split("");
  let count = -1;
  let countTotal = 0;
  letters.forEach((letter) => {
    for (let i = 0; i < str.length; i++) {
      if (str[i].toUpperCase() == letter.toUpperCase() && i > count) {
        count = i;
        countTotal++;
        break;
      }
    }
  });
  if (countTotal == name.length) return true;
  return false;
}

console.log(
  nameInStr(
    "ebmeaama   ettyaijrjj onmfaenmwneey ijrj ai eexteermiel emtwro j evwabh yvn tis a etnr a uax airslaa zrthmeiertxx b ah  ii",
    "Ashley"
  )
);

console.log("a".toUpperCase === "A".toUpperCase);
console.log("a".toUpperCase());

// [ 'ebmeaama   ettyaijrjj onmfaenmwneey ijrj ai eexteermiel emtwro j evwabh yvn tis a etnr a uax airslaa zrthmeiertxx b ah  ii','Ashley' ]
