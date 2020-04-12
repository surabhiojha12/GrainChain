
function seeAllTransaction(owner){
    let url = "http://localhost:3000/api/queries/selectTransactions"
    axios.get(url)
    .then((response) => {
    console.log(response.data);
    displayAllTransaction(response.data);
  });
}

function displayAllTransaction(data){
let transaction;
let htmlData = "<div class=" + '"'+ "w3-row-padding w3-margin-bottom" + '"'+ ">" + "<br>";
let htmlCommodity;
let tno = 1;
for(transaction in data){
   field = data[transaction];
   htmlCommodity = 
   
   "<div class=" + '"'+ "w3-col s6 " + '"'+ ">"+
   "<div class=" + '"'+ " w3-card w3-padding w3-margin " + '"'+ ">" +
   "<h2>Transaction number" + tno + "</h2>" +
   "<label><strong>Commodity Id </strong>" + field.commodity.split('#')[1] +"</label><br>" +
   "<label><strong>New Owner Id</strong>" + field.newOwner.split('#')[1] +"</label><br>" +
   "<label><strong>Issuer Id</strong>" + field.issuer.split('#')[1]  +"</label><br>" + 
   "<label><strong>Total Amount </strong>" + field.totalAmount +"</label><br>" + 
   "<label><strong>New time of Exchange </strong>" + field.timeOfMakingExchange +"</label><br>" + 
   "<label><strong>Old time of Exchange </strong>" + field.commodityTimeOfMakingCommodityOrMakingTransaction +"</label><br>"+
   "<label><strong>Transaction Id </strong>" + field.transactionId +"</label><br>" +
   "<label><strong>TimeStamp </strong>" + field.timestamp +"</label><br>" +
   "</div>" + "</div>";
   htmlData = htmlData + htmlCommodity;
   tno++;
}
htmlData = htmlData + "</div>"
console.log(htmlData)
document.getElementById("display-transaction").innerHTML = htmlData;
}