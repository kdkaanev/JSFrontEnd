function listOfNames(arrNames){
    arrNames.sort()
    arrNames.forEach((element, index) => {
        console.log(`${index + 1}.${element}`)
    });
}
