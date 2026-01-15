function closeCompare(a, b, margin){
  //if margin not defined, make it 0;
    margin = margin || 0;
  
  let c=Math.abs(a-b)
  
  //function returns either way. If a > b, a < b, a close to b
  //if a close to b return 0 (if margin is more than distance between a and b)
  //if a < b and margin is smaller than c return -1
  //if a > b and margin is bigger than c return 1
​
    if (margin >= c){
      return 0
    } else if((a < b)){
      return -1
    } else if((a > b)){
      return 1
    }
  
}
​