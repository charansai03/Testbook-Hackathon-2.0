var numberofDrumButtons=document.querySelectorAll(".drum").length;


for(var i=0;i<numberofDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHtml=this.innerHtml;

        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })
}


document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makesound(key){

    switch(key){
        
        case "w":
        var tom1=new Audio("AF SHAKER 3.wav");
        tom1.play();
        break;



        case "a":
        var tom2=new Audio("AFRO DUDN10.WAV");
        tom2.play();
        break;


        case "s":
        var tom3=new Audio("AFROFEET 4-LR.wav");
        tom3.play();
        break;

        case "d":
        var tom4=new Audio("HAND DRM 1D.wav");
        tom4.play();
        break;

        case "j":
        var tom5=new Audio("HAND DRM 1H.wav");
        tom5.play();
        break;

        case "k":
        var tom6=new Audio("HAND DRM 3A.wav");
        tom6.play();
        break;

        case "l":
        var tom7=new Audio("WATERCASTNT1.wav");
        tom7.play();
        break;
    }
}

function buttonanimation(currentkey){

    var activebutton=document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");

    setTimeout(function(){
        activebutton.classList.remove("pressed");

    },100);
}