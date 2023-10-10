import Etudiant from "./Etudiant.js";
class EtudiantMaster extends Etudiant {
    constructor(nom, prenom, age, niveau, domaine) {
        super(nom, prenom, age, niveau);
        this.domaine = domaine;
    }
    afficher() {
        return `${super.afficher()}Specialite: ${this.domaine}`
    }
}
export default EtudiantMaster;

