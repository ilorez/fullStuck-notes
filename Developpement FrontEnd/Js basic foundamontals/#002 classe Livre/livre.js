class Livre {
    constructor(titre, author, pages) {
        this.titre = titre
        this.author = author
        this.pages = pages
    }
    isLong() {
        return this.pages > 300 ? true : false;
        // if (this.pages > 300) return true
    }
}
// const livre1 = new Livre("Rich Dad Poor Dad", "Reberto T.Kyosaki", 405);
// const livre2 = new Livre("Guys", "Samoil", 105);
// const livre3 = new Livre("Clean Code", "uncle Bob", 600);
// console.log(livre1.isLong())
// console.log(livre2.isLong())
// console.log(livre3.isLong())
const _ = Array(90).fill(0).map(e => new Livre("titre", "name", Math.random() * 1000))
_.forEach(e => console.log(e.isLong()))