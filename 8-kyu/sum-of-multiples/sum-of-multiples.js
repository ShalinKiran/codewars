function sumMul(n,m){
//Make sure n and m are positive integer
  
  if((n <= 0) || (m <= 0)){
    return 'INVALID'
  }
  
//Find multiples of n till m.
  
  let sum=0;
  for(let i = n; i < m; i+=n){
    sum+=i;
  }
  return sum
}