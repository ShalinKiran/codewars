function descendingOrder(n){
  let numSplit=n.toString().split('')
  let rearrangeArray=numSplit.sort((a, b) => b - a)
  let numJoin=rearrangeArray.join('')
  return Number(numJoin)
  //...
}