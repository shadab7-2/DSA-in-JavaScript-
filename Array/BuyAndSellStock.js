//Greedy algorith prices =  [8,2,4,6,3,1,7]
function maxProfit(prices){
  let min_prices = prices[0];
  let maxProfit = 0;
  for(let i = 1; i < prices.length; i++){
    //if price[i] is less than min_prices
    if(prices[i] - min_prices < 0){
      min_prices = prices[i]
    }else{
      // store profit having maximum profit profit
      maxProfit = Math.max(maxProfit, prices[i] - min_prices)
    }
  }
  return maxProfit;
}
let prof = [8,2,4,6,3,1,7]
console.log(maxProfit(prof))