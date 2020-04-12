function seeProducers(){
    let url = "http://localhost:3000/api/queries/selectProducersParticipant"
    axios.get(url)
    .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
    displayProducers(response.data);
  });
}

function displayProducers(data){
    let producer;
    let htmlData = "<div class=" + '"'+ "w3-row-padding w3-margin-bottom" + '"'+ ">" + "<br>";
    let htmlCommodity;
    for(producer in data){
        field = data[producer];
        htmlCommodity = "<div class=" + '"'+ "w3-col s6 " + '"'+ ">"+"<div class=" + '"'+ " w3-card w3-padding w3-margin " + '"'+ ">" +
        "<h2><strong>Producer Id </strong>" + field.traderId +"</h2>" +
        "<label><strong>First Name </strong>" + field.firstName +"</label><br>" +
        "<label><strong>Last Name </strong>" + field.lastName +"</label><br>" + 
        "<label><strong>Particpant Type </strong>" + field.participantType +"</label><br>" +
        "<label><strong>Country </strong>" + field.participantAddress.country +"</label><br>" + 
        "<label><strong>State </strong>" + field.participantAddress.state  +"</label><br>" + 
        "<label><strong>City </strong>" + field.participantAddress.city  +"</label><br>" + 
        "</div>" + "</div>";
        htmlData = htmlData + htmlCommodity;
    }
htmlData = htmlData + "</div>"
//console.log(htmlData)
id = localStorage.getItem("aadharId")
if(id == -1){
document.getElementById("display-producers").innerHTML = htmlData;
}
else{
document.getElementById("display-participant").innerHTML = htmlData;
}

}