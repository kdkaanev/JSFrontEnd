function gladiatorExpenses(lostFightsCount, helmetPrice,swordPrice, shieldPrice,armorPrice){
    let trashedHelmet =0
    let trashedSword = 0
    let trashedShield = 0
    let trashedArmor = 0
    let expenses = 0
    for (let day = 1; day <= lostFightsCount; day++){
            if(trashedShield % 2 === 0 && trashedShield > 0){
                trashedArmor += 1
                trashedShield = 0
          }  
            if(day % 2 === 0 && day % 3 === 0) {
                trashedHelmet += 1
                trashedShield += 1
                trashedSword += 1
            
          }
            else if(day % 2 === 0){
                trashedHelmet += 1
            }
            else if(day % 3 === 0){
                trashedSword += 1
            }
    }
    expenses = trashedHelmet * helmetPrice + trashedSword * swordPrice + trashedShield * shieldPrice + trashedArmor * armorPrice
    
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}
