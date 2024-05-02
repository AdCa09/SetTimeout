const word = "keller"

let i = 0;


function becode (){
    if(i < word.length){
        console.log(word[i])
        i++
    }else{

    }clearInterval();
}

setInterval(becode, 1000);