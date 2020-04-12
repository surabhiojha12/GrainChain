function seeCommodity(){
    let url = "http://localhost:3000/api/queries/selectCommoditiesByOwner?owner=resource%3Aorg.example.mynetwork.Trader%23" + localStorage.getItem("aadharId");

    axios.get(url)
    .then((response) => {
    displayCommodity(response.data);
  });


}

function displayCommodity(data){
let commodity;
let htmlData = "<div class=" + '"'+ "w3-row-padding w3-margin-bottom" + '"'+ ">" + "<br>";
let htmlCommodity;
for(commodity in data){
   field = data[commodity];
   htmlCommodity = "<div class=" + '"'+ "w3-col s6 " + '"'+ ">"+"<div class=" + '"'+ " w3-card w3-padding w3-margin " + '"'+ ">" +
   "<label><strong>Commodity Id </strong>" + field.tradingSymbol +"</label><br>" +
   "<label><strong>Description </strong>" + field.description +"</label><br>" +
   "<label><strong>Rice Stage </strong>" + field.riceStage +"</label><br>" + 
   "<label><strong>Rice Type </strong>" + field.riceType +"</label><br>" + 
   "<label><strong>Quantity </strong>" + field.quantity +"</label><br>" + 
   "<label><strong>Total Amount </strong>" + field.totalAmount +"</label><br>" + 
   "<label><strong>Time of Exchange </strong>" + field.timeOfMakingCommodityOrMakingTransaction +"</label><br>"+
   "</div>" + "</div>";
   htmlData = htmlData + htmlCommodity;
}
htmlData = htmlData + "</div>"
//console.log(htmlData)
document.getElementById("display-commodity").innerHTML = htmlData;
}