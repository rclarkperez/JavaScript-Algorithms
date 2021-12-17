function checkCashRegister(price, cash, cid) {
  let cidSum = 0
  for (let k=8; k >=0; k--){
    cidSum = cid[k][1] + cidSum;
  }

  let change =[["PENNY", 0.00], ["NICKEL", 0.00], ["DIME", 0.00], ["QUARTER", 0.00], ["ONE", 0.00], ["FIVE", 0.00], ["TEN", 0.00], ["TWENTY", 0.00], ["ONE HUNDRED", 0.00]];
  let changeReturned = cash - price;
  let cidReference = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.10], ["QUARTER", 0.25], ["ONE", 1.00], ["FIVE", 5.00], ["TEN", 10.00], ["TWENTY", 20.00], ["ONE HUNDRED", 100.00]]

if (cidSum === changeReturned) {
      change = cid;
      return {status: "CLOSED", change};
    }

for (let i=8; i >=0; i--) {
  let j =8;
  while (j >=0){
  if(cidReference[i][1]<= changeReturned && cid[i][1] >0) {
    change[i][1] = change[i][1]+cidReference[i][1];
    cid[i][1] = cid[i][1]-cidReference[i][1];
    console.log(changeReturned= Math.round((changeReturned- cidReference[i][1])*1000)/1000)
      }
      j--
      }
      if (change[i][1] === 0) {change.splice(i, 1);}
      if (i === 0 && changeReturned> 0.00) {
      return {status: "INSUFFICIENT_FUNDS", change: []};}}
 change = change.reverse()
 let open = {status: "OPEN", change};
 return open;
 }
