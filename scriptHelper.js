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

    console.log(validateInput(pilot))
    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        alert("all fields are required")
    } else if(validateInput(pilotInput.value) !== "Not a Number" || validateInput(copilotInput.value) !== "Not a Number"){
        alert ("Make sure to enter valid information for each field")
    }else if(validateInput(fuelInput.value) !== "Is a Number" || validateInput(cargoInput.value) !== "Is a Number"){
        alert("Make sure to enter valid information for each field");
    }else{

    
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
    copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`

    if(fuelLevel < 10000){
        fuelStatus.innerHTML = `Fuel level is too low for launch`;
        list.style.visibility = "visible";
        launchStatus.style.color = "red";
        launchStatus.innerHTML = `Shuttle Not Ready For Launch`;
    }
    if(fuelLevel >= 10000){
        fuelStatus.innerHTML = `Fuel level is high enough for launch`;
    }
    if (cargoLevel > 10000){
        cargoStatus.innerHTML = `Cargo mass is too high for launch`;
        list.style.visibility = "visible";
        launchStatus.style.color = "#C7254E";
        launchStatus.innerHTML = `Shuttle Not Ready For Launch`;
    } 
    if(cargoLevel <= 10000){
        cargoStatus.innerHTML = `Cargo mass is low enough for launch`;
    }
    if (fuelLevel >= 10000 && cargoLevel <= 10000){
        launchStatus.style.color = "#419F6A";
        launchStatus.innerHTML = `Shuttle Is Ready For Launch`;
        fuelStatus.innerHTML = `Fuel level is high enough for launch`;
        cargoStatus.innerHTML = `Cargo mass is low enough for launch`;
    }  
}
}


async function myFetch() {

    let planetsReturned;
    url = 'https://handlers.education.launchcode.org/static/planets.json'

    planetsReturned = await fetch(url);
    let data = await planetsReturned.json()
                
    return data
}

function pickPlanet(planets) {
    let planetSelector;
    planetSelector = Math.floor(Math.random() * 6);
    return planets[planetSelector]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
