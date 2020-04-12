
function trackCommodityConsumer(){
    let commodityId = document.getElementById("commodityid").value;
    let url = "http://localhost:3000/api/queries/selectTransactionsByCommodity?commodity=resource%3Aorg.example.mynetwork.Commodity%23" + commodityId;
    axios.get(url)
    .then((response) => {
    console.log(response.data);
    commodityTrackOwnerConsumer(response.data,commodityId);
  });
}

function commodityTrackOwnerConsumer(transaction,commodityId){
    let value;
    let commodityOwner = new Set();
    for(value in transaction){
        field = transaction[value];
        commodityOwner.add(field.newOwner.split('#')[1]);
        commodityOwner.add(field.issuer.split('#')[1])
    }
    console.log(commodityOwner);

    getOwnerDataConsumer(transaction,commodityOwner,commodityId);
}

function getOwnerDataConsumer(transaction,commodityOwner,commodityId){
    let url = "http://localhost:3000/api/Trader";
    axios.get(url)
    .then((response) => {
    // console.log(response.data);
    OwnerDataConsumer(transaction,commodityOwner,response.data,commodityId);
  });
}
function OwnerDataConsumer(transaction,commodityOwner,participant,commodityId){
    
    let userObject = new Array(4);
    commodityOwner = Array.from(commodityOwner);
    console.log(participant)
    let userData = new Array(4);
    let value = 0;
    
    for(value in participant){
        field = participant[value];
        for(i=0;i<4;i++){
            if(field.traderId == commodityOwner[i]){
                userData.push(field);
            }
        }
    }
    for(value in userData){
        field = userData[value];
    if(field.participantType == "FARMERS"){
        userObject[0] = field;
    }
    else if(field.participantType == "PRODUCERS"){
        userObject[1] = field;
    }
    else if(field.participantType == "DISTRIBUTORS"){
        userObject[2] = field;
    }
    else if(field.participantType == "RETAILERS"){
        userObject[3] = field;
    } 
}
    mapTimeAndOwnerConsumer(transaction,userObject,commodityId);
}
function mapTimeAndOwnerConsumer(transaction,userObject,commodityId){
    for(value in transaction){
        field = transaction[value];
        if(field.issuer.split('#')[1] == userObject[0].traderId ){
            userObject[0]["commodityTrackTime"] = field.commodityTimeOfMakingCommodityOrMakingTransaction;
            userObject[0]["totalAmount"] = 0;
            userObject[1]["totalAmount"] = field.totalAmount;
            userObject[1]["commodityTrackTime"] = field.timeOfMakingExchange
        }
        else if(field.issuer.split('#')[1] == userObject[1].traderId ){
            userObject[1]["commodityTrackTime"] = field.commodityTimeOfMakingCommodityOrMakingTransaction;
            userObject[2]["totalAmount"] = field.totalAmount;
            userObject[2]["commodityTrackTime"] = field.timeOfMakingExchange
        }
        else if(field.issuer.split('#')[1] == userObject[2].traderId ){
            userObject[2]["commodityTrackTime"] = field.commodityTimeOfMakingCommodityOrMakingTransaction;
            userObject[3]["commodityTrackTime"] = field.timeOfMakingExchange;
            userObject[3]["totalAmount"] = field.totalAmount;
        }

    }
 renderTrackItemConsumer(userObject,commodityId)
}

function renderTrackItemConsumer(userObject,commodityId){

    let htmlData = "<div class=" + '"'+ "w3-row-padding w3-margin-bottom" + '"'+ ">" + "<br>";
    let image = ["farmer.png","producer.jpg","distributor.jpg","retailer.png"]
    let i = 0;
    for(value in userObject){
        field = userObject[value];
        htmlCommodity = "<div class=" + '"'+ "w3-col s3 " + '"'+ ">"+"<div class=" + '"'+ " w3-card w3-padding w3-margin " + '"'+ ">" +
        "<h2><strong>CommodityId " + commodityId+"</strong></h2>" +
        "<h3><strong>Transaction Flow </strong>" + (i+1) +"</h3>" +
   "<img class = " + '"' + "w3-image" + '"' + "style = "+ '"' + "max-height:220px;min-height:220px;width:100%" + '"'+ "src = images/" +  image[i]  + 
    "><br><br>" +
   "<label><strong>Participant Type     </strong>" + field.participantType +"</label><br>" +
   "<label><strong>Time Of Arrival      </strong>" + field.commodityTrackTime+"</label><br>" + 
   "<label><strong>Country      </strong>" + field.participantAddress.country +"</label><br>" + 
   "<label><strong>State    </strong>" + field.participantAddress.state +"</label><br>" + 
   "<label><strong>City     </strong>" + field.participantAddress.city +"</label><br>" + 
   "</div>" + "</div>";
   htmlData = htmlData + htmlCommodity;
   i++;
}
    htmlData = htmlData + "</div>";

    document.getElementById("display-track-commodity").innerHTML = htmlData;
}