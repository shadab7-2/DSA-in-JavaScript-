/*"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"*/
function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (prev, c) => c.toUpperCase());
}

function toCamelCase(str) {
  let arr = str.split("");
  for (i = 0; i < arr.length; i++) {
    let letter = arr[i];
    if (letter == "_" || letter == "-") {
      arr[i + 1] = arr[i + 1].toUpperCase();
      arr[i] = "";
    }
  }
  return arr.join("");
}
