const generateCharacteres = (charTypes) => {
    let allCharacteres = ""
    let start
    let end

    switch(charTypes){
        case "small":
            start = 97
            end = 123
            for(let i = start; i < end; i++){
                allCharacteres += String.fromCharCode(i)
            }
            break
        case "big":
            start = 65
            end = 91
            for(let i = start; i < end; i++){
                allCharacteres += String.fromCharCode(i)
            }
            break
        case "numbers":
            start = 48
            end = 58
            for(let i = start; i < end; i++){
                allCharacteres += String.fromCharCode(i)
            }
            break
        case "symbols":
            allCharacteres = "!@#$%&()+-*/=?[]"
            break 
        default:
            console.log("Not expected")
            break           
    }
    return allCharacteres


}

const createPassword = (security, size) => {
    let allCharacteresCombined = ""
    let finalPassword = ""
    const small = generateCharacteres("small")
    const big = generateCharacteres("big")
    const numbers = generateCharacteres("numbers")
    const symbols = generateCharacteres("symbols")

    switch(security){
        case "weak":
            allCharacteresCombined = small
            break
        case "medium":
            allCharacteresCombined = small + numbers
            break 
        case "strong":            
            allCharacteresCombined = small + big + numbers + symbols
            break 
        default:
            console.log("Not expected")
            break            
    }
    for(let i = 0; i < size; i++){
        const ramdomNumberAllCharacteres = Math.floor(Math.random() * allCharacteresCombined.length)
        finalPassword += allCharacteresCombined[ramdomNumberAllCharacteres]
    }
    return finalPassword
}

module.exports = createPassword