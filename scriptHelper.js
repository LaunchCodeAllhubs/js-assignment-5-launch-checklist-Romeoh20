// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {

    let launchStatus= document.getElementById("launchStatus");
    launchStatus.style.color = "red";

    if(testInput.trim() === ""){
        return "Empty"
    }
    if(isNaN(testInput)){
        return "Not a Number"
    }
    if(!(isNaN(testInput))){
        return "Is a Number"
    }
}

function formSubmission(launchStatus, list, pilot, copilot, fuelLevel, cargoLevel) {

    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
    copilotStatus.innerHTML = `Pilot ${copilot} is ready for launch`

    if(fuelLevel < 10000){
        fuelStatus.innerHTML = `Fuel level is too low for launch`;
        list.style.visibility = "visible";
        launchStatus.style.color = "red";
        launchStatus.innerHTML = `Shuttle Not Ready For Launch`;
    } else if (cargoLevel > 10000){
        cargoStatus.innerHTML = `Cargo mass is too high for launch`;
        list.style.visibility = "visible";
        launchStatus.style.color = "#C7254E";
        launchStatus.innerHTML = `Shuttle Not Ready For Launch`;
    } else {
        launchStatus.style.color = "#419F6A";
        launchStatus.innerHTML = `Shuttle Is Ready For Launch`
    }  
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
