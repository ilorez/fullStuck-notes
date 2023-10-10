const mots = ["ilroez", "najdaoui", "i'm the long word", "small"]
const plusLong = mots.reduce((long, mot) => long.length < mot.length ? mot : long, "")
console.log(plusLong)