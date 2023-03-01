function listOfNames(arrNames){
    return[...arrNames]
    .sort((aName, bName) => aName.localeCompare(bName))
    .map((name, index) => `${index + 1}.${name}`)
    .join('\n');
}
