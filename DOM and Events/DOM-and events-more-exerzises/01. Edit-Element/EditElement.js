function editElement(...params) {
    let [element, match, replacer] = params;
    console.log(element);
    console.log(match);
    console.log(replacer);
    while (element.textContent.includes(match)) {
        element.textContent = element.textContent.replace(match, replacer);
    
   
    
}
}
