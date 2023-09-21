class Animal {
    constructor(nom) {
        this.nom = nom
    }
    parler() {
        return "L'animal parle"
    }
}
class Chien extends Animal {
    constructor(nom) {
        super(nom)
    }
    parler() {
        return "Le chien aboie";
    }
}

  