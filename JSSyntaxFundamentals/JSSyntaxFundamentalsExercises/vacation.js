function vacation(groupOfPeople,groupType, day){
    let totalPrice;
    
    if(day === 'Friday'){
        if(groupType === 'Students'){
            totalPrice = groupOfPeople * 8.45;
            if(groupOfPeople >= 30){
                totalPrice *= 0.85;
            }
        }
        else if(groupType === 'Business'){
            totalPrice = groupOfPeople * 10.90;
            if(groupOfPeople >= 100){
                totalPrice = (groupOfPeople - 10) * 10.90;
            }
        }
        else if(groupType === 'Regular'){
            totalPrice = groupOfPeople * 15;
            if(groupOfPeople >=10  && groupOfPeople <= 20){
                totalPrice *= 0.95;
            }
        }

    }
    else if(day === 'Saturday'){
        if(groupType === 'Students'){
            totalPrice = groupOfPeople * 9.80;
            if(groupOfPeople >= 30){
                totalPrice *= 0.85;
            }
        }
        else if(groupType === 'Business'){
            totalPrice = groupOfPeople * 15.60;
            if(groupOfPeople >= 100){
                totalPrice = (groupOfPeople - 10) * 10.90;
            }
        }
        else if(groupType === 'Regular'){
            totalPrice = groupOfPeople * 20;
            if(10 <= groupOfPeople && groupOfPeople <= 20){
                totalPrice *= 0.95
            }
        }

    }
    else if(day === 'Sunday'){
        if(groupType === 'Students'){
            totalPrice = groupOfPeople * 10.46;
            if(groupOfPeople >= 30){
                totalPrice *= 0.85;
            }
        }
        else if(groupType === 'Business'){
            totalPrice = groupOfPeople * 16;
            if(groupOfPeople >= 100){
                totalPrice = (groupOfPeople - 10) * 10.90;
            }
        }
        else if(groupType === 'Regular'){
            totalPrice = groupOfPeople * 22.50;
            if(10 <= groupOfPeople && groupOfPeople <= 20){
                totalPrice *= 0.95
            }
        }

    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}
