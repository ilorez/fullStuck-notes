
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

class EtudiantLicence extends Etudiant {
    constructor(nom, prenom, age, niveau, specialite) {
        super(nom, prenom, age, niveau);
        this.specialite = specialite;
    }
    afficher() {
        return super.afficher() + `Specialite: ${this.specialite}`
    }
}

class EtudiantMaster extends Etudiant {
    constructor(nom, prenom, age, niveau, domaine) {
        super(nom, prenom, age, niveau);
        this.domaine = domaine;
    }
    afficher() {
        return `${super.afficher()}Specialite: ${this.domaine}`
    }
}

//   : insert row into table
const tbody = document.getElementById("tbody");

const insertEtu = (nom, prenom, age, niveau, specialite = "_", domaine = "_") => {
    let row = `<tr>
    <td>${nom}</td>
    <td>${prenom}</td>
    <td>${age}</td>
    <td>${niveau}</td>
    <td>${specialite}</td>
    <td>${domaine}</td>
        `
    tbody.innerHTML += row;
}

//   : get and set data etudiant from localstorage
const data = JSON.parse(localStorage.getItem('dataEtudians')) || { "etudiant": [], "licence": [], "master": [] };
allData = [...data["master"], ...data["licence"], ...data["etudiant"]]
allData.forEach(etu => {

    switch (etu.niveau) {
        case "licence":
            insertEtu(etu.nom, etu.prenom, etu.age, etu.niveau, etu.specialite)
            break;
        case "master":
            insertEtu(etu.nom, etu.prenom, etu.age, etu.niveau, "_", etu.domaine)
            break;
        default:
            insertEtu(etu.nom, etu.prenom, etu.age, etu.niveau)
            break;
    }
});

//   : create obj

const createEtu = (nom, prenom, age, niveau) => {
    return new Etudiant(nom, prenom, age, niveau);
}
const createEtuLicence = (nom, prenom, age, niveau, specialite) => {
    return new EtudiantLicence(nom, prenom, age, niveau, specialite);
}
const createEtuMaster = (nom, prenom, age, niveau, domaine) => {
    return new EtudiantMaster(nom, prenom, age, niveau, domaine);
}

//  : add data to json file
const saveObj = (type, obj) => {
    const data = JSON.parse(localStorage.getItem('dataEtudians')) || { "etudiant": [], "licence": [], "master": [] };
    data[type] = [...data[type], obj]
    localStorage.setItem('dataEtudians', JSON.stringify(data));
    insertEtu(obj.nom, obj.prenom, obj.age, obj.niveau, obj.specialite, obj.domaine)
}
//  :  Get data from form
const masterInp = document.querySelector("#masterInp");
const licenceInp = document.querySelector("#licenceInp");
const selectNiveau = document.querySelector("#niveau");

selectNiveau.addEventListener('change', (inp) => {
    let v = inp.target.value
    if (v == 'licence') {
        licenceInp.classList.remove('hidden')
        masterInp.classList.add('hidden')
    } else if (v == 'master') {
        licenceInp.classList.add('hidden')
        masterInp.classList.remove('hidden')
    } else {
        licenceInp.classList.add('hidden')
        masterInp.classList.add('hidden')
    }
});
const myform = document.querySelector("form").onsubmit = (form) => {
    const nom = form.target.querySelector("#nom").value
    const prenom = form.target.querySelector("#prenom").value
    const age = form.target.querySelector("#age").value
    const niveau = form.target.querySelector("#niveau").value
    switch (niveau) {
        case "licence":
            const specialite = form.target.querySelector("#specialite").value
            saveObj("licence", createEtuLicence(nom, prenom, age, niveau, specialite));
            // console.log(nom, prenom, age, niveau, specialite)
            break;
        case "master":
            const domaine = form.target.querySelector("#domaine").value
            saveObj("master", createEtuMaster(nom, prenom, age, niveau, domaine));
            // console.log(nom, prenom, age, niveau, domaine)
            break;
        default:
            // console.log(nom, prenom, age, niveau)
            saveObj("etudiant", createEtu(nom, prenom, age, niveau));
            break;
    }

}




