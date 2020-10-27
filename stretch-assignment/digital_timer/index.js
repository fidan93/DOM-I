let tens = 0;
let ones = 0;
let hundreds = 0;
let mstens = 0;

//  let a = setInterval(stop,10000);

// let b = setInterval(stop,1000);

// let c = setInterval(stop,100);

let d = setInterval(stop,10);

function stop(){
if(mstens > 9 ){
     document.querySelector("#msHundreds").innerHTML = hundreds++;
     document.querySelector("#msTens").innerHTML = 0;
     mstens = 0;
    if(hundreds > 9){
        document.querySelector("#secondOnes").innerHTML = ones++;
        // 
        hundreds = 0;

        if(ones>10){
            document.querySelector("#secondTens").innerHTML = " ";
                clearInterval(d);
                document.querySelector("#msHundreds").innerHTML = 0;
        }
    }
    
 } else{
        document.querySelector("#msTens").innerHTML = mstens++; 
    
    }
}
