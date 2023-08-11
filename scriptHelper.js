// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(name, diameter, star, distance, moons, imageUrl) {

   let missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML = `

                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
   
}

function validateInput(testInput) {

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
    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json');
    let data = await planetsReturned.json();

    return data;
}

function pickPlanet(planets) {
    let planetSelector;
    planetSelector = Math.floor(math.random() * 6);
    return planets[planetSelector]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
