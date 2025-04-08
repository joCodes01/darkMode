
//Programmer: Joanna Wand
//Date: 7th April 2025
//Purpose of program is to set the display to lightor 
// dark mode based on user preferences which is stored in the cookie data.



//ADD FUNCTIONALITY TO allow a user to adjust the colour of form text fields, store 
// that information in a browser cookie, and recall the colour when the user re-visits 
// the page.



//STYLE set the display functions and variables

//set variables for dark mode colours
let darkBG = "282, 44%, 25%";
let darkText = "281, 100%, 10%";
let darkButton = "281, 69%,45%";
let darkLightest ="281, 34%, 83%";
let darkBoxShadow = "10px 10px 5px black";


//set a function to the default display styles
function setDefaultDisplay() {
    document.querySelector("body").style.backgroundColor = "lightgray";
    document.querySelector(".mode-container").style.backgroundColor = "white";
    document.querySelector("h1").style.color = "Black";
    document.querySelector("h2").style.color = "Black";
    document.querySelectorAll("button").forEach(button => {button.style.backgroundColor = "lightgray"; });
    document.querySelectorAll("button").forEach(button=> {button.style.color ="black"});
}


//Set the display mode based on the cookie mode value

function setDisplayMode() {
  
    //if the chosen mode is dark then display the dark settings
    if(getCookie('mode') == "dark") {
        document.querySelector("body").style.backgroundColor = `hsl(${darkBG})`;
        document.querySelector(".mode-container").style.backgroundColor = `hsl(${darkLightest})`;
        document.querySelector(".mode-container").style.boxShadow = `${darkBoxShadow}`;
        document.querySelector("h1").style.color = `hsl(${darkText})`;
        document.querySelector("h2").style.color = `hsl(${darkText})`;
        document.querySelectorAll("button").forEach(button => {button.style.backgroundColor = `hsl(${darkButton})`; });
        document.querySelectorAll("button").forEach(button=> {button.style.color =`hsl(${darkLightest})`})
    
    //otherwise display the light settings
    }else {
        setDefaultDisplay();
    }
}



//SET INITIAL DISPLAY based on cookie mode value

setDisplayMode();



//LOGIC

//set a variable to contain mode chosen
let modeChosen;

//set a variable for the expiry date in correct format.
let expires;

function getExpiryDate(){
let expirationDate = new Date();
expirationDate.setDate(expirationDate.getDate() + 7);
expires = expirationDate.toUTCString();
}




//SET COOKIES

//when lightMode button is clicked set the document.cookie mode value to light
function setLightMode() {
    getExpiryDate()

    document.cookie = `mode=light; expires=${expires}; path="/"`;
    modeChosen = getCookie('mode');
    console.log(modeChosen);
    setDisplayMode();
}
//when darktMode button is clicked set the document.cookie mode value to dark
function setDarkMode() {
    getExpiryDate()

    document.cookie = `mode=dark; expires=${expires}; path="/"`;
    modeChosen = getCookie('mode');
    console.log(modeChosen);
    setDisplayMode();
}


// set a function to retrieve the name value and return it as a clean string.
function getCookie(name) {
    let cookieArr = document.cookie.split(';');

    for( let i = 0; i < cookieArr.length; i++ ) {
        let cookie = cookieArr[i].trim();
        if(cookie.startsWith( name + '=' )) {
            return cookie.substring(name.length +1);
        }
    }
    return null;
}








