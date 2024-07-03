
let raffledNumbers = []
const limitNumber = 10;
const inputField = document.querySelector('input');
const btnKick = document.getElementById('chutar');
const btnNewGame = document.getElementById('reiniciar');
 
 let secretNumber = 0;
 let attempts = 1;

 newGame();

function generateRandomNumber(){

    if(raffledNumbers.length == limitNumber){
        raffledNumbers = [];
    }
    const randomNumber = Math.random() * limitNumber+ 1;
    if(raffledNumbers.includes(randomNumber)){
        generateRandomNumber();
        raffledNumbers.push(randomNumber);
    }else{
        return parseInt(randomNumber);
    }
 }

function setTextTag(tag, text){    
    let tagSelect = document.querySelector(tag);
    tagSelect.innerHTML = text;
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2});
}

function checkKick(){
    const attemptsMessage = attempts ==1?'tentativa':'tentativas'
    const messageSuccess = `Voce acertou o número secreto com ${attempts} ${attemptsMessage}`

    const kickInputValue = inputField.value;

    if(kickInputValue == secretNumber){
        setTextTag('h1', "PARABENS!!! ")
        setTextTag('p', messageSuccess);
        removeDisableAttribute(btnNewGame);
        addDisableAttribute(btnKick);
        clearKickField(inputField);
        addDisableAttribute(inputField);

    }else{
        if(kickInputValue > secretNumber){
            setTextTag('p', "Número Secreto é menor");
            clearKickField(inputField);
        }else{
            setTextTag('p', "Número Secreto é maior");
            clearKickField(inputField);
        }
    }

    attempts++;
}

function clearKickField(input){
     input.value = '';
}

function removeDisableAttribute(element){
     element.removeAttribute('disabled',false);     
}

function addDisableAttribute(element){
     element.setAttribute('disabled',true); 
}



function newGame(){
    secretNumber = generateRandomNumber();
    attempts = 1; 
    removeDisableAttribute(btnKick);    
    removeDisableAttribute(inputField);
    addDisableAttribute(btnNewGame);
   
    setTextTag('h1', 'Jogo do Número Secreto');
    setTextTag('p','Escolha um número entre 1 e 10');
}



 


 

