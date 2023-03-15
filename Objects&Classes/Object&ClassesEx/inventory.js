function inventory(input){
    heroes = []
    for (const line of input) {
        let info = line.split(' / ')
        let [name, level, items] = [info[0], Number(info[1]), info[2] ]
        heroes.push({name , level, items})
        
    }
    console.log(heroes[0])
    console.log(heroes[1])
    console.log(heroes[2])
    
}


inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])
    