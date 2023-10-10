let Request = new XMLHttpRequest();
console.log(Request);

Request.open("GET", "contacts.json")
Request.send()
// console.log(Request)
console.log(Request.readyState)
Request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        const jsonData = JSON.parse(this.response)
        const Contacts = jsonData.contacts
        console.log(Contacts)
    }
}
