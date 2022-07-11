



// this is the application of anonymous function.it also works though.

// var rep=document.querySelector("button").addEventListener("click",function (){
//     alert("I got clicked!");
    
//     });

calc=document.querySelectorAll(".drum").length;


for(var i=0;i<=calc;i++){
   
var rep=document.querySelectorAll("button")[i];
var range=rep.addEventListener("click",function ()
{
    var buttonInnerHtml=this.innerHTML;

    // alert("I got clicked!!");
   
    switch (buttonInnerHtml) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            var bass = new Audio('sounds/kick-bass.mp3');
            bass.play();    
            break;
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var tom1 = new Audio('sounds/tom1.mp3');
            tom1.play();
            break;
        case" j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();

        break;
        default:console.log(buttonInnerHtml);
            // break; 
    }

}

    );

}


document.addEventListener("keypress", function(event) {
    console.log(event);});