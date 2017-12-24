
function palindrome(str) {
  //used the 'or' pipe to include underscores in the regex class
  var re = /\W+|\_/g;
  var nustr = str.replace(re, "").split('');
  if(nustr.join('').toLowerCase() === nustr.reverse().join('').toLowerCase()){
   return true; 
  }else{
  return false;
  }
}

