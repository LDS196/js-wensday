let prices1 = [7,1,5,3,6,4]
let prices2 = [7,5,5,2,1,1]

const maxProfit = function (prices){
    // let counter = 0
    // for (let i = 0; i < prices.length ; i++) {
    //     if(prices[i]< prices[i+1]){
    //         counter= counter + (prices[i+1]-prices[i])
    //     }
    // }
    // return counter
    let profit = 0
    prices.forEach((price,i,arr)=>{
        if(price>arr[i-1]) profit=profit + price-arr[i-1]
    })
    return profit
}
console.log(maxProfit(prices2))