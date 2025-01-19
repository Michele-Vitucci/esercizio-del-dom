const firstname = document.getElementById("firstName").value
const lastname = document.getElementById("lastName").value
const age = document.getElementById("age").value

const person={firstname,lastname,age};

const form = document.querySelector ("form");


form.setAttribute("dataPerson", JSON.stringify(person))
