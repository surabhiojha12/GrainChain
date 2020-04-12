function renderSellCommodity(){
    let participant;
    let url;
    participant = localStorage.getItem("participant");
    

    if(participant == 1){
    url = "http://localhost:3000/api/queries/selectProducersParticipant"
    axios.get(url)
    .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
    getCommodity(response.data);
  });
    }

    else if(participant == 2){
        url = "http://localhost:3000/api/queries/selectDistributorsParticipant"
        axios.get(url)
        .then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        getCommodity(response.data);
      });
        }

    else if(participant == 3){
        url = "http://localhost:3000/api/queries/selectRetailersParticipant"
        axios.get(url)
        .then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        getCommodity(response.data);
        });
    }
}

function getCommodity(participant){
    let url = "http://localhost:3000/api/queries/selectCommoditiesByOwner?owner=resource%3Aorg.example.mynetwork.Trader%23" + localStorage.getItem("aadharId");
    axios.get(url)
    .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
    renderHtml(participant,response.data);
  });

}

function renderHtml(participant,commodity){

    let commodityHtml = "<div class=" + '"'+"w3-section" + '"' + ">"+
    "<label>Your Commodity</label>" +
    "<select required class=" + '"'+ "w3-input w3-border w3-hover-border-black"+ '"'+ "style=" + '"' + "width:50%;" + '"' +
    "id = " + '"' + "commodityid" + '"' + " >" +
    "<option value="+ '"'+ "selected=" + '"' + "selected" + '"' + ">Select Commodity Id</option>";

    let values;
    let html = "";
    for(values in commodity){
        field = commodity[values];
        html = "<option value=" + '"'+ field.tradingSymbol+'"' + ">" + field.tradingSymbol + "</option>";
        commodityHtml = commodityHtml + html;
    }
    commodityHtml = commodityHtml + "</select></div>";

    html  = "";

    let participantHtml = "<div class=" + '"'+"w3-section" + '"' + ">"+
    "<label>Your Commodity</label>" +
    "<select required class=" + '"'+ "w3-input w3-border w3-hover-border-black"+ '"'+ "style=" + '"' + "width:50%;" + '"'+
    "id = " + '"' + "newOwner" + '"' + " >" + 
    "<option value="+ '"'+ "selected=" + '"' + "selected" + '"' + ">Select NewOwner Id</option>";
    for(values in participant){
        field = participant[values];
        html = "<option value=" + '"'+ field.traderId+'"' + ">" + field.traderId + " " + field.firstName + " "+field.lastName + "</option>";
        participantHtml = participantHtml + html;
    }
    participantHtml = participantHtml + "</select></div>";
    
    document.getElementById("renderDropdowns").innerHTML = participantHtml + commodityHtml;
    participantHtml = "";
    commodityHtml = "";

}