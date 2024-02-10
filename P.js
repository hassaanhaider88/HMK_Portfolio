function changeColor(clickedItem){

    var items= document.querySelectorAll('.HoverEffect');
    items.forEach(items=>{
        items.style.borderBottom='';
    });
    clickedItem.style.borderBottom='2px solid #FBB506';
    items.style.transiton='2s';
}
function MyNavbarItems(){
    var IconHandler=document.getElementById('BurIcon');
var Navbar2=document.getElementById('NavbarItemsTwo');

 var displayNavbar=window.getComputedStyle(Navbar2).getPropertyValue("display");

 
    if(displayNavbar==="none"){
        Navbar2.style.display="block";
        IconHandler.innerHTML="&#10006";

     }else if(displayNavbar==="block"){
        Navbar2.style.display="none";
        IconHandler.innerHTML="&#9776";

    }else{
        Navbar2.style.display="none";
        IconHandler.innerHTML="&#9776";
    }
}



document.addEventListener('DOMContentLoaded', function(){
    const text = "I'M A FRONT-END DEVELOPER";
    let i = 0;

    function type() {
        if (i < text.length) {
            document.querySelector('.typeWriter h1').innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 100); // Adjust the typing speed (milliseconds)
        } else {
            // Reset the counter and start again
            i = 0;
            document.querySelector('.typeWriter h1').innerHTML = '';
            setTimeout(type, 2000); // Adjust the delay before restarting (milliseconds)
        }
    }

    type();
});

var FirstImage=document.getElementById("FirstImage");
var DisplayFirstImage=window.getComputedStyle(FirstImage).getPropertyValue("display");

var SecondImage=document.getElementById("SecondImage");
var DisplaySecondImage=window.getComputedStyle(SecondImage).getPropertyValue("display");

var TherdImage=document.getElementById("TherdImage");
var DisplayTherdImage=window.getComputedStyle(TherdImage).getPropertyValue("display");

var FourthImage=document.getElementById("FourthImage");
var DisplayFourthImage=window.getComputedStyle(FourthImage).getPropertyValue("display");

var FifthImage=document.getElementById("FifthImage");
var DisplayFifthImage=window.getComputedStyle(FifthImage).getPropertyValue("display");

var SixthImage=document.getElementById("SixthImage");
var DisplaySixthImage=window.getComputedStyle(SixthImage).getPropertyValue("display");

 function Provide2ndImage(event){
    FirstImage.style.display="none";
}
function BackTo1stImage(event){
    FirstImage.style.display="block";
   
}
function Provide3rdImage(){
    FirstImage.style.display="none";
    SecondImage.style.display="none";
}
function BackTo2ndImage(event){
    SecondImage.style.display="block";
   
}

function Provide4thImage(){
    FirstImage.style.display="none";
    SecondImage.style.display="none";
    TherdImage.style.display="none";
}

function BackTo3rdImage(event){
    TherdImage.style.display="block";
   
}
function Provide5thImage(){
    FirstImage.style.display="none";
    SecondImage.style.display="none";
    TherdImage.style.display="none";
    FourthImage.style.display="none";
    
}
function BackTo4thImage(event){
    FourthImage.style.display="block";
   
}
function Provide6thImage(){
    FirstImage.style.display="none";
    SecondImage.style.display="none";
    TherdImage.style.display="none";
    FourthImage.style.display="none";
    FifthImage.style.display="none";
}
function BackTo5thImage(event){
    FifthImage.style.display="block";
   
}


function ClearFormDate(){
    let Name=document.getElementById("Name").value="";
let Email=document.getElementById("Email").value="";
let Phone=document.getElementById("Number").value="";
let Mesg=document.getElementById("Message").value="";
}