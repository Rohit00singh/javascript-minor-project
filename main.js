const screen = document.getElementById("screen");
const button = document.querySelectorAll("button");

let string ="";


button.forEach(number=>{

number.addEventListener('click', (event)=>{

let btntext = event.target.innerText;
screen.value += btntext;

if (btntext == "AC") {
    string = "";
    screen.value = string;

}
else if(btntext == "sqrt"){
    string = Math.sqrt(string);
    screen.value = string;
}
else if (btntext == "="){
    string = eval(string);
    screen.value = string;
}
else if(btntext == "c"){
    string = string.toString().slice(0,-1);
    screen.value = string;
}
else{
    string += btntext;
    screen.value = string;
}



})

})