'use strict';
window.addEventListener('load', initialize);

// Globale Variabelen
  let divStringAnalyse;
  let txtIngave;
  let divNumberVoorbeeld;
  let divMathVoorbeeld;
  let divObjectVoorbeeld;

// Functies
function initialize() {
    // Lokale variabelen
    let btnStringAnalyseer;
    
    // Inlezen DOM-elementen
    divStringAnalyse = document.getElementById('string-analyse');
    txtIngave = document.getElementById('ingave');
    btnStringAnalyseer = document.getElementById('string-analyseer');
    divNumberVoorbeeld = document.getElementById('number-voorbeeld');
    divMathVoorbeeld = document.getElementById("math-voorbeeld");
    divObjectVoorbeeld = document.querySelector("#object-voorbeeld");
    
    // Toevoegen Event-Listeners
    btnStringAnalyseer.addEventListener('click', toonAnalyse);

    // Toevoegen van content
    txtIngave.value = 'Jantje zag eens pruimen hangen, als eieren zo groot...';

    // Uivoeren van functies
    toonNumberVoorbeeld();
    toonMathVoorbeeld();
    toonAnalyse();
}

function ToonObjectVoorbeeld() {
    const berg = {"Naam" : "Tourmalet", "Land" : "Frankrijk", "Hoogte" : 2115, "Opgefietst" : false};
    divObjectVoorbeeld.innerHTML = `dot.notatie => berg.Naam => ${berg.Naam} <br/>`;
    divObjectVoorbeeld.innerHTML += `array-notatie => berg['Opgefietst'] => ${berg['Opgefietst']} <br/>`;
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
  let tekst = '';
  
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


function toonAnalyse() {
    // Lokale variabelen
    let tekst = txtIngave.value;
    let reeks = new Array();
    let analyse = `De tekst: ${tekst}<br /> 
              type: <b>  ${typeof (tekst)}  </b><br /> 
              lengte: <b> ${tekst.length} </b><br />
              hoofdletters: <b>  ${tekst.toUpperCase()} </b><br />
              kleine letters: <b> ${tekst.toLowerCase()} </b><br />
              substring(11,15): <b>  ${tekst.substring(11, 15)} </b><br />
              substr(11,4): <b>  ${tekst.substr(11, 4)} </b><br />
              concat: <b> ${tekst.concat(', met nog een stukje erbij.')} </b><br />
              indexOf(t): <b> ${tekst.indexOf('t')} </b><br />
              lastIndexOf(t): <b> ${tekst.lastIndexOf("t")} </b><br />
              charAt(7): <b> ${tekst.charAt(7)} </b><br />
              replace('t', 'T'): <b> ${tekst.replace("t", "T")} </b><br />`
              
              reeks = tekst.split(' ');

              analyse += `<h3>split:</h3>
                          Eerste woord: <b> ${reeks[0]} </b><br />
                          Tweede woord: <b> ${reeks[1]} </b><br />`;
    divStringAnalyse.innerHTML = `Analyse van de ingegeven tekst<br /><br />${analyse} `;
}
