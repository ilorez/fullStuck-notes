// const getSumCHiffres = (num) => num < 10 ? num : num % 10 + getSumCHiffres(Math.floor(num / 10))
const getSumCHiffres = (num) => {
    if (num < 10) {
        return num
    }
    let n = num % 10
    let m = Math.floor(num / 10)
    console.log(n)
    return n + getSumCHiffres(m)
}
console.log(getSumCHiffres(1234))