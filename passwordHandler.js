const generateCharacteres = (charTypes) => {
    let allCharacteres = ""
    let start
    let end

    const setValuesForStartAndEnd = (starting, ending) => {
        start = starting 
        end = ending 
    }

    switch(charTypes){
        case "small":
            setValuesForStartAndEnd(97, 123)        
            break
        case "big":
            setValuesForStartAndEnd(65, 91)
            break
        case "numbers":
            setValuesForStartAndEnd(48, 58)
            break
        case "symbols":
            return "!@#$%&()+-*/=?[]"
        default:
            console.log("Not expected")
            return            
    }

    for(let i = start; i < end; i++){
        allCharacteres += String.fromCharCode(i)
    }

    return allCharacteres
}

const generateRandomNumberForAllCharacters = (allChars) => {
    return Math.floor(Math.random() * allChars.length)
}

const createPassword = (security, size) => {
    let allCharactersCombined = ""
    let finalPassword = ""

    const small = generateCharacteres("small")
    const big = generateCharacteres("big")
    const numbers = generateCharacteres("numbers")
    const symbols = generateCharacteres("symbols")

    if(size > 30){
        size = 30
    }

    switch(security){
        case "weak":
            allCharactersCombined = small
            break
        case "medium":
            allCharactersCombined = small + numbers
            break 
        case "strong":            
            allCharactersCombined = small + big + numbers + symbols
            break 
        default:
            console.log("Not expected")
            return           
    }

    for(let i = 0; i < size; i++){
        const randomNumber = generateRandomNumberForAllCharacters(allCharactersCombined)
        finalPassword += allCharactersCombined[randomNumber]
    }

    return finalPassword
}

module.exports = createPassword
