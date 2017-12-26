function findLongestWord(str) {
  var arr = str.split(" ");
  var longest = 0;
  for(x=0;x<arr.length;x++){
    if(arr[x].length>longest){
      longest = arr[x].length;
    }
  }
  return longest;
}

findLongestWord("What if we try a super-long word such as otorhinolaryngology");
