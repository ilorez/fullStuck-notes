class Personne {
    constructor(nom, age) {
        this.nom = nom
        this.age = age
    }
    card() {
        return `<div><h3>${this.nom}</h3><span>${this.age}</span></div>`
    }
}

const obj1 = new Personne("ilorez", 20);
const obj2 = new Personne("najdaoui", 19);
const main = document.querySelector("main")
main.innerHTML = obj1.card() + obj2.card()
