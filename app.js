
let userSend = document.getElementsByClassName('use');
let button = document.getElementById('check');
let lastDiv = document.getElementById('para');
let numberTry = 0;
let randomNumber = Math.random() * 101;
randomNumber = Math.trunc(randomNumber);

function buttonOne () {

    let input = document.getElementById('send').value;
    input = parseInt(input);
    numberTry++;

    if (input > randomNumber){
        textSend("Trop haut");
    }
    if (input < randomNumber){
        textSend("Trop bas");
    }
    if (input === randomNumber){
        alert("Bravo, en " + numberTry + " essais.");
    }
    if (isNaN(input)){
        textSend("Ne te décourage pas, tente ta chance !");
    }
    if (numberTry === 10){
        alert("Tu n'a pas réussi a trouver le chiffre, c'était " + randomNumber);
        location.reload();
    }

    for (let i = 0; i < input; i++){
        let numberUsed = document.createElement('li');
        numberUsed.innerHTML = " is used => "  + input  ;
        numberUsed.style.color = 'red';
        userSend.item(i).append(numberUsed);
    }
}

button.addEventListener('click', buttonOne);

function textSend (text){
    let textSend = document.createElement('span');
    textSend.innerHTML = text + " => ";
    lastDiv.append(textSend);
}

