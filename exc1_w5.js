function sorting(arrNumber) {
    // code di sini
    var sortArr = arrNumber
    for (var i = 0; i < arrNumber.length; i++) {
        for (var j = i + 1; j < arrNumber.length; j++) {
            if (arrNumber[i] < arrNumber[j]) {
                var sort = arrNumber[i]
                arrNumber[i] = arrNumber[j]
                arrNumber[j] = sort
            }
        }
    }
    // console.log(arrNumber)
    return sortArr
  }
  
  function getTotal(arrNumber) {
    // code di sini
    var sudahSort = sorting(arrNumber)
    var biggest = sudahSort[0]
    var counter = 0
    if (sudahSort.length === 0) {
        return ''
    }else{
        for (var k = 0; k < arrNumber.length; k++) {
            if (biggest === arrNumber[k]) {
                counter++
            }
        }
        return 'angka paling besar adalah '+ biggest +' dan jumlah kemunculan sebanyak ' + counter + ' kali'
    }
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''