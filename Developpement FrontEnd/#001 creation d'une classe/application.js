class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    distance(obj) {
        const res = Math.sqrt((obj.x - this.x) ** 2 + (obj.y - this.y) ** 2)
        return res
    }
}

const A = new Point(2, 2)
const B = new Point(3, 4)
console.log(B.distance(A))