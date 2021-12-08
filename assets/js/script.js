function record(){
    localStorage.setItem(titleInput.value, linkInput.value)
}

function display(){

    let ul = document.createElement("ul")
    for (let i = 0;i < localStorage.length;i++) {
        let li = document.createElement("li")
        li.innerText = "Titre : " + localStorage.key(i) + " Lien : " + localStorage.getItem(localStorage.key(i))
        let button = document.createElement("button")
        button.innerText = "Supprimez"
        button.setAttribute("id", localStorage.key(i))
        button.setAttribute("input", "button")
        button.setAttribute("onclick", "suppress(this)")
        li.append(button)
        ul.append(li)
    }
    document.body.append(ul)
}

function suppress(x) {
    let myId = x.id
    localStorage.removeItem(myId)
}