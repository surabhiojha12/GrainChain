function consumerCommodityDetail(){
    let commodityId = document.getElementById("commodityid").value;
    console.log(commodityId)
    let url = "http://localhost:3000/api/Commodity/" + commodityId;
    axios.get(url)
    .then((response) => {
    console.log(response.data);
    commodityDetailConsumer(response.data);
  });
}

function commodityDetailConsumer(data){
let htmlData = "<div class=" + '"'+ "w3-row-padding w3-margin-bottom" + '"'+ ">" + "<br>";
let htmlCommodity;


   htmlCommodity = "<div class=" + '"'+ "w3-col s6 " + '"'+ ">"+"<div class=" + '"'+ " w3-card w3-padding w3-margin " + '"'+ ">" +
   "<h2><strong>Commodity Id </strong>" + data.tradingSymbol +"</h2>" +
   "<label><strong>Rice Stage </strong>" + data.riceStage +"</label><br>" + 
   "<label><strong>Rice Type </strong>" + data.riceType +"</label><br>" + 
   "</div>" + "</div>";
   htmlData = htmlData + htmlCommodity;

htmlData = htmlData + "</div>"
console.log(data)
document.getElementById("display-commodity").innerHTML = htmlData;
}