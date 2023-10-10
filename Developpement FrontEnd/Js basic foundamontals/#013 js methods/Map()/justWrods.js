const tab = [10, "3333Najdaoui", "3a0", "ilorez", "10"]
let strings = tab.map(el => /^\d*$/.test(el) ? undefined : el).filter(el => el != undefined)
// let strings = tab.filter(el => !(/^\d*$/.test(el)))

console.log(strings) 