class Personne {
    constructor(nom, age) {
        this.nom = nom
        this.age = age
    }
    info() {
        return `Nom: ${this.nom}\nAge: ${this.age}`;
    }
}
class Employe extends Personne {
    constructor(nom, age, poste) {
        super(nom, age)
        this.poste = poste
    }
    info() {
        return super.info() + `\nPoste:${this.poste}`
    }
    tranvailer() {
        return this.poste ? "l'employer Travailler" : "l'employer n'ai pas Travailler"
    }
}

const p1 = new Employe("ahmed", 40, "chef")
console.log(p1.tranvailer())