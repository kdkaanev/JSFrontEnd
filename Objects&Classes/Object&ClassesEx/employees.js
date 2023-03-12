function employees(names){
    let employees = {}
    for (const line of names) {
        let name = line.split(', ')
        nameLength = name[0].length
        employees[name] = nameLength
    } 
    for (const name in employees) {
        console.log(`Name: ${name} -- Personal Number: ${employees[name]}`)      
            
        }
    }
