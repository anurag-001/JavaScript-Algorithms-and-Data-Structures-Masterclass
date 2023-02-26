function sameFrequency(num1, num2){
    
    let str1 = num1.toString()
    let str2 = num2.toString()
    
    if(str1.length !== str2.length) return false
    
    let freqCounter1 = {}
    let freqCounter2 = {}
    
    for(let i = 0; i < str1.length; i++){
        freqCounter1[str1[i]] = (freqCounter1[str1[i]] || 0) + 1
    }
    
    for(let j = 0; j < str1.length; j++){
        freqCounter2[str2[j]] = (freqCounter2[str2[j]] || 0) + 1
    }
    
    for(let key in freqCounter1){
        if(freqCounter1[key] !== freqCounter2[key]) return false
    }
    return true
}

console.log(sameFrequency(1821,2811));