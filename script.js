window.addEventListener("load",function(){

    // value variables
    const pilotInput = document.querySelector("input[name=pilotName");
    const copilotInput = document.querySelector("input[name=copilotName");
    const fuelInput = document.querySelector("input[name=fuelLevel");
    const cargoInput = document.querySelector("input[name=cargoMass");

    //status variables
    const faultyItems = document.getElementById("faultyItems");
    const launchStatus = document.getElementById("launchStatus");

    //form validation
    let form = document.querySelector("form");
    form.addEventListener("submit",function(event){
        if(pilotInput.value.trim() === "" || copilotInput.value.trim() === "" || fuelInput.value.trim() === "" || cargoInput.value.trim() === ""){
            alert("All fields are required!");
            event.preventDefault();
        } else if(validateInput(pilotInput.value) !== "Not a Number" || validateInput(copilotInput.value) !== "Not a Number"){
            alert ("Make sure to enter valid information for each field")
            event.preventDefault();
        }else if(validateInput(fuelInput.value) !== "Is a Number" || validateInput(cargoInput.value) !== "Is a Number"){
            alert("Make sure to enter valid information for each field");
            event.preventDefault();
        }

        //form submission/ status checks
        formSubmission(launchStatus,faultyItems,pilotInput.value,copilotInput.value,fuelInput.value,cargoInput.value);
        event.preventDefault();
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});