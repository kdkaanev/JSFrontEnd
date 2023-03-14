function solve(arr){
    let towns = {}
    for (const line of arr) {
        let townInfo = line.split(' | ')
        let town = townInfo[0]
        let latitude = Number(townInfo[1]).toFixed(2)
        let longitude = Number(townInfo[2]).toFixed(2)
        towns.town = town
        towns.latitude = latitude
        towns.longitude = longitude
        console.log(towns)
    }
    
}
function solve2(arr){
    for (const line of arr) {
       let [town, latitude, longitude] = line.split(' | ')
       let townObj = {town, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2)}

    }
}