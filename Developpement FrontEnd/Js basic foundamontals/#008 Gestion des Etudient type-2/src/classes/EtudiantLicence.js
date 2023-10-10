import Etudiant from "./Etudiant.js";
class EtudiantLicence extends Etudiant {
    constructor(nom, prenom, age, niveau, specialite) {
        super(nom, prenom, age, niveau);
        this.specialite = specialite;
    }
    afficher() {
        return super.afficher() + `Specialite: ${this.specialite}`
    }
}
export default EtudiantLicence