const caracters = ["w", "#", "o", "r", "5", "d"]

const getWord = (tab) => tab.reduce((word, c) => /[a-zA-Z]/.test(c) ? word + c : word, "")
console.log(getWord(caracters))

