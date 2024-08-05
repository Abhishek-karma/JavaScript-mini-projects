console.log("programm started");
const randomColor = function(){
    const hex = "123456789ABCDEF"
    let color = '#'
    for(let i = 0; i < 6; i++){
       color += hex[Math.floor(Math.random() * 16)]; 
    }
    return color;
}


let intervalID;
const startColorChanging = function(){
    if(!intervalID){
         intervalID = setInterval(chabgeBgColor,1000);
    }
    function chabgeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}

const stopColorChanging  = function(){
    clearInterval(intervalID);
     intervalID = null;
}
document.getElementById('start').addEventListener('click',startColorChanging);
document.querySelector('#stop').addEventListener('click',stopColorChanging);
