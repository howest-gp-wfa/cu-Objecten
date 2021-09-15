"use strict";

window.addEventListener("load", initialize);

// Globale Variabelen
  let divAnalysis;
  let inpSentence;
  let divNumberObject;
  let divMathObject;
  let divDateObject;
  let divObject;

// Functies
function initialize() {

    const btnAnalyseSentence = document.getElementById("analyse-sentence");
    divAnalysis = document.getElementById("analysis");
    inpSentence = document.getElementById("sentence");

    divNumberObject = document.getElementById("number-object");
    divMathObject = document.getElementById("math-object");
    divDateObject = document.getElementById("date-object");
    divObject = document.querySelector("#object-example");
    
    // Toevoegen Event-Listeners
    btnAnalyseSentence.addEventListener("click", displayStringAnalysis);
    divDateObject.addEventListener("click", displayDateExample);

    // Toevoegen van content
    inpSentence.value = "Jantje zag eens pruimen hangen, als eieren zo groot...";

    // Uitvoeren van functies
    displayStringAnalysis();
    displayNumberExample();
    displayMathExample();
    displayDateExample();
    displayObjectExample();
}

function displayObjectExample() {
  
  const mountain = {
    name: "Tourmalet", 
    country: "Frankrijk", 
    height: 2115, 
    visited: false
  };

  divObject.innerHTML = `dot.notatie => mountain.name => ${mountain.name} <br/>`;
  divObject.innerHTML += `array-notatie => mountain["visited"] => ${mountain["visited"]} <br/>`;

  // Weergave in de console => Object visualiseren
  console.log(mountain);

  divObject.innerHTML += "<h3>Object mountain: </h3>";
  
  // Doorlussen van  het object
  for (let mountainProperty in mountain) {
    divObject.innerHTML += `Key: ${mountainProperty} => Value = ${mountain[mountainProperty]} <br/>`;
  }

  divObject.innerHTML += "<h3> Na toevoegen van Key-Value waarde: </h3>";

  mountain.difficulty = 15;

  for (let mountainProperty in mountain) {
    divObject.innerHTML += `Key: ${mountainProperty} => Value = ${mountain[mountainProperty]} <br/>`;
  }
}

function displayDateExample() {

  const date = new Date();

  let message = `Huidige systeemtijd = ${date} <br /> 
    Milliseconden sinds 1 jan 1970 - getTime: ${date.getTime()}<br />
    Seconden uit datum - getSeconds: ${date.getSeconds()}<br />
    Minuten uit datum - getMinutes: ${date.getMinutes()}<br />
    Uren uit datum - getHours: ${date.getHours()}<br />
    Weekdag uit datum - getDay: ${date.getDay()}<br />
    Dag van de maand uit datum - getDate: ${date.getDate()}<br />
    Maand uit datum - getMonth: ${date.getMonth()}<br />
    Jaar uit datum - getFullYear: ${date.getFullYear()}<br />`;

   // Instellen van datumggegevens
   date.setDate(4);
   date.setMonth(3);
   date.setFullYear(1972);

   const fallOfBerlinWall = new Date(1989, 11, 9, 9, 30, 0);
  
   message +=  `<h3> Datumgegevens instellen / Wijzigen </h3>
               Datum na datum.setDate(4) en datum.setMonth(3) en datum.setFullYear(1972) => ${date} <br />
               Datum bij aanmaak variabele fallOfBerlinWall => ${fallOfBerlinWall}`;
  
    divDateObject.innerHTML = message;
  
}

function displayMathExample() {
  const firstNumber = 8;
  const secondNumber = 2;
  const thirdNumber = -2.89;
  
  const message =   `firstNumber: ${firstNumber}<br />
            secondNumber: ${secondNumber}<br />
            thirdNumber: ${thirdNumber}<br />
            Absolute waarde - abs(thirdNumber): ${Math.abs(thirdNumber)}<br />
            Sinus van firstNumber - Math.sin(firstNumber): ${Math.sin(firstNumber)}<br />  firstNumber² - Math.pow(firstNumber, secondNumber): ${Math.pow(firstNumber, secondNumber)}<br />
            Maximum van firstNumber en  secondNumber - Math.max(firstNumber, secondNumber): ${Math.max(firstNumber, secondNumber)}<br />
            <hr />`;

  divMathObject.innerHTML = message;

}

function displayNumberExample() {
  const hundred = 100; 
  let message = `Number.NaN: ${Number.NaN}<br />
              Number.MAX_VALUE: ${Number.MAX_VALUE}<br />    
              Number.MIN_VALUE: ${Number.MIN_VALUE}<br />    Number.POSITIVE_INFINITY: ${Number.POSITIVE_INFINITY}<br />    Number.NEGATIVE_INFINITY: ${Number.NEGATIVE_INFINITY}<br />    <hr />    
              let hundred = 62;<br />    
              hundred.toString(): ${hundred.toString()}<br />    
              hundred.toString(2) ==> binair stelsel: ${hundred.toString(2)}<br /> 
              hundred.toString(8) ==> octaal stelsel: ${hundred.toString(8)}<br /> 
              hundred.toString(10) ==> decimaal stelsel: ${hundred.toString(10)}<br />  
              hundred.toString(16) ==> hexadecimaal stelsel: ${hundred.toString(16)}<br />`;

    divNumberObject.innerHTML = message;

}


function displayStringAnalysis() {

  const sentence = inpSentence.value;
  let words = [];

  let analyse = `De zin: ${sentence}<br /> 
            type: <b>  ${typeof (sentence)}  </b><br /> 
            lengte: <b> ${sentence.length} </b><br />
            hoofdletters: <b>  ${sentence.toUpperCase()} </b><br />
            kleine letters: <b> ${sentence.toLowerCase()} </b><br />
            substring(11,15): <b>  ${sentence.substring(11, 15)} </b><br />
            substr(11,4): <b>  ${sentence.substr(11, 4)} </b><br />
            concat: <b> ${sentence.concat(", met nog een stukje erbij.")} </b><br />
            indexOf(t): <b> ${sentence.indexOf("t")} </b><br />
            lastIndexOf(t): <b> ${sentence.lastIndexOf("t")} </b><br />
            charAt(7): <b> ${sentence.charAt(7)} </b><br />
            replace("t", "T"): <b> ${sentence.replace("t", "T")} </b><br />`;
            
  words = sentence.split(" ");

  analyse += `<h3>split:</h3>
              Eerste woord: <b> ${words[0]} </b><br />
              Tweede woord: <b> ${words[1]} </b><br />`;

  divAnalysis.innerHTML = `Analyse van de ingegeven zin<br />${analyse}`;
}
