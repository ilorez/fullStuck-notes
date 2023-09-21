const nums = [1, 5, 3, 58, 6, 8, 4, 5, 6];

const sommmer = (tab) => {
    let some = 0;
    // tab.forEach(num => {
    //     some += num;
    // });

    for (const num of tab) {
        some += num
    }
    return some;
}

console.log(sommmer(nums))



