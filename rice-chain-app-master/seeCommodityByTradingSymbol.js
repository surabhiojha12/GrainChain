function seeCommodityByTradingSymbol(){
    let url = "http://localhost:3000/api/queries/selectCommoditiesByTradingSymbol?tradingSymbol=" + commodityId;
    axios.get(url)
    .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
    //displayProducers(response.data);
    return response.data;
  });
}