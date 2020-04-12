/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Track the trade of a commodity from one trader to another
 * @param {org.example.mynetwork.Trade} trade - the trade to be processed
 * @transaction
 */
async function tradeCommodity(trade) {
    let newOwner = trade.newOwner
    let riceStage = "BROWNRICE"
    if(newOwner.participantType == "PRODUCERS"){
        riceStage = "BROWNRICE"
    }
    else if(newOwner.participantType == "DISTRIBUTORS"){
        riceStage = "WHITERICE"
    }
    else if(newOwner.participantType == "RETAILERS"){
        riceStage = "PACKEDRICE"
    }
    // set the new rice stage
    trade.commodity.riceStage = riceStage
    // set the commodity new totalAmount
    trade.commodity.totalAmount = trade.totalAmount
    // set the new owner of the commodity
    trade.commodity.owner = trade.newOwner;
    // set the timeOfMakingCommodityOrMakingTransaction
    trade.commodity.timeOfMakingCommodityOrMakingTransaction = trade.timeOfMakingExchange
    let assetRegistry = await getAssetRegistry('org.example.mynetwork.Commodity');
    // emit a notification that a trade has occurred
    let tradeNotification = getFactory().newEvent('org.example.mynetwork', 'TradeNotification');
    tradeNotification.commodity = trade.commodity;
    emit(tradeNotification);
    // persist the state of the commodity
    await assetRegistry.update(trade.commodity);
}
