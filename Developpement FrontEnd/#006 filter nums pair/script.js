const nums = [1, 5, 3, 58, 6, 8, 4, 5, 6];

const filterFun = (tab) => {
    // #1

    // return tab.filter(num => num % 2 == 0)
    // #2

    const pairs = new Array();
    for (let i = 0; i < tab.length; i++) {
        tab[i] % 2 == 0 ? pairs.push(tab[i]) : false
    }

    return pairs
}
const pairs = filterFun(nums)
console.log(pairs)