const names = ["IlorEz", "NajdaOui"]
const togglerNames = names.map((e) => e.split("").map((l) => /[a-z]/.test(l) ? l.toUpperCase() : l.toLowerCase()).join("")
);
console.log(togglerNames)