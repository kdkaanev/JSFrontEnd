function roadRadar(speed, area){
    if(area === 'motorway'){
        deffSpeed = speed - 130
        if(deffSpeed <= 0){
            console.log(`Driving ${speed} km/h in a 130 zone`)
        }
        else{
            let deff = Math.abs(deffSpeed)
            let status
            if(deff <= 20){
                status = 'speeding'
            }
            else if(deff <= 40){
                status = 'excessive speeding'
            }
            else{
                status = 'reckless driving'
            }
            console.log(`The speed is ${deff} km/h faster than the allowed speed of 130 - ${status}`)
        }
    }
    if(area === 'interstate'){
        deffSpeed = speed - 90
        if(deffSpeed <= 0){
            console.log(`Driving ${speed} km/h in a 90 zone`)
        }
        else{
            let deff = Math.abs(deffSpeed)
            let status
            if(deff <= 20){
                status = 'speeding'
            }
            else if(deff <= 40){
                status = 'excessive speeding'
            }
            else{
                status = 'reckless driving'
            }
            console.log(`The speed is ${deff} km/h faster than the allowed speed of 90 - ${status}`)
        }
    }
    if(area === 'city'){
        deffSpeed = speed - 50
        if(deffSpeed <= 0){
            console.log(`Driving ${speed} km/h in a 50 zone`)
        }
        else{
            let deff = Math.abs(deffSpeed)
            let status
            if(deff <= 20){
                status = 'speeding'
            }
            else if(deff <= 40){
                status = 'excessive speeding'
            }
            else{
                status = 'reckless driving'
            }
            console.log(`The speed is ${deff} km/h faster than the allowed speed of 50 - ${status}`)
        }
    }
    if(area === 'residential'){
        deffSpeed = speed - 20
        if(deffSpeed <= 0){
            console.log(`Driving ${speed} km/h in a 20 zone`)
        }
        else{
            let deff = Math.abs(deffSpeed)
            let status
            if(deff <= 20){
                status = 'speeding'
            }
            else if(deff <= 40){
                status = 'excessive speeding'
            }
            else{
                status = 'reckless driving'
            }
            console.log(`The speed is ${deff} km/h faster than the allowed speed of 20 - ${status}`)
        }
    }
}
