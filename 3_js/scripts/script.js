// alert("As esu JS faile");

console.log("As esu konsoleje!");

document.write("As esu dokumente!");

var kintamojoPavadinimas = "Kazkoks tekstas";
console.log(kintamojoPavadinimas);


var masyvas = ["Vardas", 23, true, null];
// masyvas.pop();
// masyvas.push("Nauja reiksme"); 
// masyvas.shift();
masyvas.unshift(50);


console.log(masyvas);
// console.log(masyvas.length);


var profile = {
    firstName: "Vardenis",
    lastName: "Pavardenis",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    changeName: function (newFirstName) {
        this.firstName = newFirstName;
    },
}

profile.changeName("Tadas");
console.log(profile.fullName());




var paragraph = document.createElement("p");
paragraph.innerText = "Tekstas idetas i elementa su JS."

document.body.append(paragraph);




var button1 = document.querySelector("#change-p-color");
button1.addEventListener("click", function() {
    var outro = document.querySelector("div.outro p");

    if (outro.style.color == "red") {
        outro.style.color = "black";
    } else {
        outro.style.color = "red";
    }

});

document.addEventListener("keyup", function (event) {
    console.log(event);
})