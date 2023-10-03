let myRequest = new XMLHttpRequest();
myRequest.open("GET", "contacts.json");
console.log(myRequest.readyState)
console.log(myRequest)
myRequest.send();
myRequest.onreadystatechange = function () {
    console.log(this.readyState)
    if (this.readyState === 4 && this.status === 200) {
        // console.log(this.responseText);
        let jsData = JSON.parse(this.responseText);
        // console.log(jsData);
        let Contacts = jsData.contacts
        const main = document.querySelector("main")
        let strHtml = "<ul>";
        Contacts.forEach(contact => {
            p = contact.phone ? contact.phone : "Numero teltphone indisponible"
            strHtml += "<li>" + contact.Name + ": " + p + "</li>"
        })
        main.innerHTML = strHtml + "</ul>"

    }
};