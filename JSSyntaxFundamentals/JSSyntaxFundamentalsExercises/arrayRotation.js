function arrayRotation(List, number){
    let element
    for (let i = 0; i < number; i++) {
        element = List.shift()
        List.push(element)
        
    }
    console.log(List.join(" "))
}
