const nums = [10, 5, 6, 41, 5]
const bigger = nums.reduce((lastNum, currentNum) => {
    // console.log(lastNum)

    if (currentNum > lastNum) {
        lastNum = currentNum

    }
    console.log("current:  " + currentNum)
    console.log("last number:  " + lastNum)
    console.log("---------------")
    return lastNum
}, 0)
console.log(bigger)