class Etudiant {
    constructor(nom, prenom, age, niveau) {
        this.nom = nom
        this.prenom = prenom
        this.age = age
        this.niveau = niveau
    }
    afficher() {
        return `Nom: ${this.nom}\n
        Prenom: ${this.prenom}\n
        Age: ${this.age}\n
        Niveau: ${this.niveau}\n`
    }
}
export default Etudiant