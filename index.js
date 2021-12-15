// Code your solution here
function findMatching(drivers, string){
    let list =[]
    for(let i=0; i < drivers.length; i++){
        if(drivers[i]=== string || drivers[i]===string.toLowerCase()){
            list.push(drivers[i])
        }
    }
    return list
    

}

// function findMatching(drivers, string){
//     let answer = drivers.filter(element => element === string || element === string.toLowerCase())
//     return answer
// }


function fuzzyMatch(drivers, string){
    let firstLetter = drivers.filter(driver => driver.slice(0, string.length)=== string)
    return firstLetter
}


function matchName(drivers, string){
    let name = drivers.filter(driver => driver.name === string)
    return name

}