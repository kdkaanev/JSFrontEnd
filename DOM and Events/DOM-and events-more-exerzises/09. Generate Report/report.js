function generateReport() {
    const checkBox = Array.from(document.querySelectorAll('input[type=checkbox]'))
    const row = Array.from(document.querySelectorAll('body > main > table > tbody > tr'))
    console.log(row[1].getElementsByTagName('td')[0].textContent)






    // find name and index checked checkbox
    // for (let i = 0; i < checkBox.length; i++) {
    //     if(checkBox[i].checked){
    //         console.log(checkBox[i].name)
    //         console.log(i)
    //     }
       
        
    // }

    // console.log(checkBox)
}
