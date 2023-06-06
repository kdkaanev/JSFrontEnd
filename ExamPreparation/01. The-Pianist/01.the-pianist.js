function thePianist(input) {
    let piecesThemselves = {}
    let listInput = [...input]
    let numberOfPieces = Number(listInput.shift())
    for (let i = 1; i < numberOfPieces + 1; i++) {
        let pieces = listInput
            .shift()
            .split('|');
        piecesThemselves[pieces[0]] = [pieces[1], pieces[2]]


    }

    for (const data of listInput) {
        let order = data.split('|')
        let command = order.shift()
        if (command === 'Stop') {
            for (const piece in piecesThemselves) {
                console.log(`${piece} -> Composer: ${piecesThemselves[piece][0]}, Key: ${piecesThemselves[piece][1]}`)


            }
            break
        } else if (command === 'Add') {
            let [piece, composer, key] = order
            if (piece in piecesThemselves) {
                console.log(`${piece} is already in the collection!`)
            } else {
                piecesThemselves[piece] = [composer, key]
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            }
        } else if (command === 'Remove') {
            let piece = order
            if (piece in piecesThemselves) {
                delete piecesThemselves[piece]
                console.log(`Successfully removed ${piece}!`)
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }

        } else if (command === 'ChangeKey') {
            let [piece, newKey] = order
            if(piece in piecesThemselves){
                piecesThemselves[piece][1] = newKey
                console.log(`Changed the key of ${piece} to ${newKey}!`)
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }
    }
}




thePianist(
    [
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
    ]

)