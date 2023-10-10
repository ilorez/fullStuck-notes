const fs = require('fs');
// import f from ""
function getEtudiants() {
    fs.readFile('../data/etudiants.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        try {
            const jsonObj = JSON.parse(data);
            return JSON.parse(data);
            // console.log(jsonObj)
        } catch (error) {
            console.error("Error parsing Json:", error)
        }
    })
}

function addEtudiants(newEtu) {
    let Etus = getEtudiants();
    console.log(Etus);
    Etus[newEtu["niveau"]] = [...Etus[newEtu["niveau"]], newEtu];
    const jsonString = JSON.stringify(Etus, null, 2);

    // write
    fs.writeFile('../data/etudiants.json', jsonString, 'utf-8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('succes output.json')
    })
}
addEtudiants({
    nom: 'najdoui',
    prenom: 'zobair',
    age: 18,
    niveau: 'licence',
    specialite: 'dev'
})

