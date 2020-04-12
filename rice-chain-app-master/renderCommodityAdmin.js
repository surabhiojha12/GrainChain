function renderCommodityAdmin(){
    let url = "http://localhost:3000/api/queries/selectCommodities"
    axios.get(url)
    .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
    renderHtmlAdmin(response.data);
  });

}

function renderHtmlAdmin(commodity){

    let commodityHtml = "<div class=" + '"'+"w3-section" + '"' + ">"+
    "<label>Select Commodity</label>" +
    "<select required class=" + '"'+ "w3-input w3-border w3-hover-border-black"+ '"'+ "style=" + '"' + "width:25%;" + '"' +
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
    
    document.getElementById("renderDropdownsAdmin").innerHTML = commodityHtml;
}