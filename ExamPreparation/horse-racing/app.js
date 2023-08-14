function solve(input) {
    let horses = input.shift()
        .split('|')
    let command = null

    while (command !== 'Finish') {
        input.forEach(element => {
            let arr = element.split(' ')
            command = arr[0]
            if (command === 'Retake') {
                let overtakingHorse = arr[1]
                let overtakenHorse = arr[2]
                let indx1 = horses.indexOf(overtakingHorse)
                let indx2 = horses.indexOf(overtakenHorse)
                if (indx1 < indx2) {
                    let temp = horses[indx1]
                    horses[indx1] = horses[indx2]
                    horses[indx2] = temp
                    console.log(`${overtakingHorse} retakes ${overtakenHorse}.`)
                }
            }else if(command === 'Trouble'){
                let horseName = arr[1]
                let indx = horses.indexOf(horseName)
                if (indx > 0) {
                    let temp =horses.splice(indx,1)
                    horses.splice(indx-1, 0 ,temp.join(''))
                    console.log(`Trouble for ${horseName} - drops one position.`)
                

                }
            }else if(command === 'Rage'){
                let horseName = arr[1]
                let indx = horses.indexOf(horseName)
                let temp =horses.splice(indx,1)
                horses.splice(indx+2, 0, temp.join(''))
                console.log(`${horseName} rages 2 positions ahead.`)

            }else if(command === 'Miracle'){
                let hors = horses.shift()
                horses.push(hors)
                console.log(`What a miracle - ${hors} becomes first.`)
            }



        });
    }
    console.log(horses.join('->'))
    console.log(`The winner is: ${horses.pop()}`)

}

