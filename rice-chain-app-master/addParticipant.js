
function addParticipant(){
    let participant= {
        "$class": "org.example.mynetwork.Trader",
        "traderId": localStorage.getItem("aadharId"),
        "firstName":  document.getElementById("fname").value ,
        "lastName": document.getElementById("lname").value,
        "participantType": document.getElementById("participanttype").value,
        "participantAddress": {
          "$class": "org.example.mynetwork.AddressOfParticipant",
          "country": document.getElementById("country").value,
          "state": document.getElementById("state").value,
          "city": document.getElementById("city").value,
          "street": document.getElementById("street").value,
          "pincode": document.getElementById("pincode").value
        }
    }
    console.log(participant);

    makeApiCallParticipant(participant);
}

function makeApiCallParticipant(participant){
  const url = "http://localhost:3000/api/Trader";
  axios.post(url,participant)
  .then((response) => {
    console.log(response);
    window.alert("Successfully added details")
  }, (error) => {
    console.log(error);
    window.alert("You can add details only once")
  });
}