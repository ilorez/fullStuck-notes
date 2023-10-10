

const Contacts = [
    {
        Name: "ilroez",
        phone: "+212 65331474",
    },
    {
        Name: "najdaoui",
        phone: "+212 586454544",
    },
    {
        Name: "abdo",
        phone: "+212 656",
    },
    {
        Name: "Mr Bro",
        phone: null,
    },
    {
        Name: "My Sis",
        phone: "+212 54545",
    },

]

const main = document.querySelector("main")
let strHtml = "<ul>";
Contacts.forEach(contact => {
    p = contact.phone ? contact.phone : "Numero teltphone indisponible"
    strHtml += "<li>" + contact.Name + ": " + p + "</li>"
})
main.innerHTML = strHtml + "</ul>"