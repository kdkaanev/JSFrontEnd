function meetings(stringArr){
    let meet = {}
    for (const line of stringArr) {
        info = line.split(' ')
        let day = info[0]
        let name = info[1]
        if(day in meet){
            console.log(`Conflict on ${day}!`)
        }
        else{
            console.log(`Scheduled for ${day}`)
            meet[day] = name
        }
    }for (const key in meet) {
        console.log(`${key} -> ${meet[key]}`)
            
        }
    }

