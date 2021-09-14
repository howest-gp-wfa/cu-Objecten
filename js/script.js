"use strict";

window.addEventListener("load", initialize);

// Globale Variabelen
  let divAnalysis;
  let inpSentence;
  let divNumberVoorbeeld;
  let divMathVoorbeeld;
  let divObjectVoorbeeld;

// Functies
function initialize() {

    const btnAnalyseSentence = document.getElementById("analyse-sentence");
    divAnalysis = document.getElementById("analysis");
    inpSentence = document.getElementById("sentence");

    divNumberVoorbeeld = document.getElementById("number-voorbeeld");
    divMathVoorbeeld = document.getElementById("math-voorbeeld");
    divObjectVoorbeeld = document.querySelector("#object-voorbeeld");
    
    // Toevoegen Event-Listeners
    btnAnalyseSentence.addEventListener("click", displayAnalysis);

    // Toevoegen van content
    inpSentence.value = "Jantje zag eens pruimen hangen, als eieren zo groot...";

    // Uitvoeren van functies
    displayAnalysis();
    toonNumberVoorbeeld();
    toonMathVoorbeeld();
}

function ToonObjectVoorbeeld() {
    const berg = {"Naam" : "Tourmalet", "Land" : "Frankrijk", "Hoogte" : 2115, "Opgefietst" : false};
    divObjectVoorbeeld.innerHTML = `dot.notatie => berg.Naam => ${berg.Naam} <br/>`;
    divObjectVoorbeeld.innerHTML += `array-notatie => berg["Opgefietst"] => ${berg["Opgefietst"]} <br/>`;
    // Weergave in de console => Object visualiseren
    console.log(berg);
    // Doorlussen van  het object
    divObjectVoorbeeld.innerHTML += "<h3>Object berg : </h3>";
    for(let bergEigenschap in berg){
      divObjectVoorbeeld.innerHTML += `Key : ${bergEigenschap} => Value = ${berg[bergEigenschap]} <br/>`;
    }
    divObjectVoorbeeld.innerHTML += "<h3> Na toevoegen van Key-Value waarde : </h3>";
    berg.Score = 15;
    for(let bergEigenschap in berg) {
      divObjectVoorbeeld.innerHTML += `Key : ${bergEigenschap} => Value = ${berg[bergEigenschap]} <br/>`;
    }
}

function toonMathVoorbeeld() {
  let getal1 = 8;
  let getal2 = 2;
  let getal3 = -2.89;
  let tekst = "";
  
  tekst =   `getal1: ${getal1}<br />
            getal2: ${getal2}<br />
            getal3: ${getal3}<br />
            Absolute waarde - abs(getal3): ${Math.abs(getal3)}<br />
            Sinus van getal1 - Math.sin(getal1): ${Math.sin(getal1)}<br />  getal1² - Math.pow(getal1,getal2): ${Math.pow(getal1, getal2)}<br />
            Maximum van getal1 en  getal2 - Math.max(getal1,getal2): ${Math.max(getal1, getal2)}<br />
            <hr />`;
  divMathVoorbeeld.innerHTML = tekst;
}

function toonNumberVoorbeeld() {
    let getal = 62; 
    let tekst = `Number.NaN: ${Number.NaN}<br />
                Number.MAX_VALUE: ${Number.MAX_VALUE}<br />    
                Number.MIN_VALUE: ${Number.MIN_VALUE}<br />    Number.POSITIVE_INFINITY: ${Number.POSITIVE_INFINITY}<br />    Number.NEGATIVE_INFINITY: ${Number.NEGATIVE_INFINITY}<br />    <hr />    
                let getal = 62;<br />    
                getal.toString(): ${getal.toString()}<br />    
                getal.toString(2) ==> binair stelsel: ${getal.toString(2)}<br /> 
                getal.toString(8) ==> octaal stelsel: ${getal.toString(8)}<br /> 
                getal.toString(10) ==> decimaal stelsel: ${getal.toString(10)}<br />  
                getal.toString(16) ==> hexadecimaal stelsel: ${getal.toString(16)}<br />`;
    divNumberVoorbeeld.innerHTML = tekst;
}


function displayAnalysis() {

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
