function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var str = String(angka)
    var kali = 1
    for ( var i = 0; i < str.length; i++) {
        kali *= Number(str[i])
    }
    // console.log(kali)
    var strKali = String(kali)
    if (strKali.length === 1) {
        return kali
    }else{
        return  kaliTerusRekursif(kali)
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6
//   console.log(kaliTerusRekursif(50))