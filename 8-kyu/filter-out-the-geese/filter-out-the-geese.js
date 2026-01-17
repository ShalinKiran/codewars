function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  // return an array containing all of the strings in the input array except those that match strings in geese
  
  //loop thru geese
  
  //loop thru birds. see if theres any geese items and dont add them to the third array.
  let thirdArr= birds.filter((x)=>{
    return !geese.includes(x)
  })
  //return third array
  return thirdArr
};