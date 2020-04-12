function addCommodity(){
    let date = new Date();
    let owner = "resource:org.example.mynetwork.Trader#" + localStorage.getItem("aadharId");
    let commodity = {
        "$class": "org.example.mynetwork.Commodity",
        "tradingSymbol": document.getElementById("cid").value,
        "description": document.getElementById("desc").value,
        "riceStage": document.getElementById("stage").value,
        "riceType": document.getElementById("type").value,
        "quantity": parseInt(document.getElementById("quantity").value),
        "totalAmount": 0,
        "timeOfMakingCommodityOrMakingTransaction": "" + date + "",
        "owner": owner
      }
    console.log(commodity);
    makeApiCallCommodity(commodity)
}

function makeApiCallCommodity(commodity){
const url = "http://localhost:3000/api/Commodity";
  axios.post(url,commodity)
  .then((response) => {
    console.log(response);
    window.alert("Successfully created commodity")
  }, (error) => {
    console.log(error);
    window.alert("Commodity Id taken already")
  });
}