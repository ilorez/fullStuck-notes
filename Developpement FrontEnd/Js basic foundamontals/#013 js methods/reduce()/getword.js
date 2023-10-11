const caracters = ["W", "#", "o", "r", "5", "d", ""]

const getWord = (tab) => {
    word = tab.reduce((word, c) => /[a-zA-Z]/.test(c) ? word + c : word, "")
    return word === "" ? "le tableu ne contient aucun mot valide" : word
}
console.log(getWord(caracters))

