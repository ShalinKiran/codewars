//Exclamation marks series #1: Remove an exclamation mark from the end of string

//Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"


//My Solution

function remove (string) {
  //coding and coding....
  let lastLetter=string[string.length-1];
  let word=''
  if ( lastLetter=='!'){
    word=string.slice(0,-1);
      return word;
  } else{
    return string;
  }
}