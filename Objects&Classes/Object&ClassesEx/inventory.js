function inventory(input){
    heroes = []
    for (const line of input) {
        let info = line.split(' / ')
        let [name, level, items] = [info[0], Number(info[1]), info[2] ]
        heroes.push({name , level, items})

        
    }
    let sortedHeroes = heroes
        .sort((a, b) => {
            return a.level - b.level
        })
        
    for (const {name, level, items} of sortedHeroes) {
        console.log(`Hero: ${name}`)
        console.log(`level => ${level}`)
        console.log(`items => ${items}`)
    }
}


