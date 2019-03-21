function changeVocals (str) {
//code di sini
    var vocal = 'aiueoAIUEO'
    var konsonan = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var hurufBaru = ''
    for (var i = 0; i < str.length; i++) {
        var check = false
        for (var j = 0; j < vocal.length; j++) {
            if(str[i] === vocal[j]) {
                // hurufBaru += konsonan[j + 1]
                for (var k = 0; k < konsonan.length; k++) {
                    if (str[i] === konsonan[k]) {
                        hurufBaru += konsonan[k+1]
                        check = true
                    }
                }
            }
        } 
        if (check === false) {
            hurufBaru += str[i]
        }
    }
    return hurufBaru
}

function reverseWord (str) {
//code di sini
    var strNew = changeVocals(str)
    var balik = ''
    for (var i = strNew.length - 1; i >= 0; i--) {
        balik += strNew[i]
    }
    return balik
}

function setLowerUpperCase (str) {
//code di sini
    var strNew2 = reverseWord (str)
    var lowUp = ''
    for (var i = 0; i < strNew2.length; i++) {
        if (strNew2[i] === strNew2[i].toUpperCase()) {
            lowUp += strNew2[i].toLowerCase()
        }else if (strNew2[i] === strNew2[i].toLowerCase()) {
            lowUp += strNew2[i].toUpperCase()
        }
    }
    return lowUp
}

function removeSpaces (str) {
//code di sini
    var strNew3 = setLowerUpperCase(str)
    var lostspaces = ''
    for (var i = 0; i < strNew3.length; i++) {
        if (strNew3[i] === ' ') {
            lostspaces += ''
        }else{
            lostspaces += strNew3[i]
        }
    }
    return lostspaces
}


function passwordGenerator (name) {
//code di sini
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }else{
        return removeSpaces (name)
    }

}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'