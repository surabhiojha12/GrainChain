function seeAllCommodity(){
    let url = "http://localhost:3000/api/queries/selectCommodities"

    axios.get(url)
    .then((response) => {
    displayAllCommodity(response.data);
  });


}

function displayAllCommodity(data){
let commodity;
let htmlData = "<div class=" + '"'+ "w3-row-padding w3-margin-bottom" + '"'+ ">" + "<br>";
let htmlCommodity;
for(commodity in data){
   field = data[commodity];
   htmlCommodity = "<div class=" + '"'+ "w3-col s6 " + '"'+ ">"+"<div class=" + '"'+ " w3-card w3-padding w3-margin " + '"'+ ">" +
   "<h2><strong>Commodity Id </strong>" + field.tradingSymbol +"</h2>" +
   "<label><strong>Description </strong>" + field.description +"</label><br>" +
   "<label><strong>Rice Stage </strong>" + field.riceStage +"</label><br>" + 
   "<label><strong>Rice Type </strong>" + field.riceType +"</label><br>" + 
   "<label><strong>Quantity </strong>" + field.quantity +"</label><br>" + 
   "<label><strong>Total Amount </strong>" + field.totalAmount +"</label><br>" + 
   "<label><strong>Time of Exchange </strong>" + field.timeOfMakingCommodityOrMakingTransaction +"</label><br>"+
   "<label><strong>Owner Id </strong>" + field.owner.split('#')[1] +"</label><br>"+
   "</div>" + "</div>";
   htmlData = htmlData + htmlCommodity;
}
htmlData = htmlData + "</div>"
//console.log(htmlData)
document.getElementById("display-all-commodity").innerHTML = htmlData;
}