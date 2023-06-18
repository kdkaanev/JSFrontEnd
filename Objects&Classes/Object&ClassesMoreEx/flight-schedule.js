function flightShedule(input) {
    let flyes = {}
    let destination = input[0];
    let status = input[1];
    let command = input[2][0];
    let cancelledFlyes = [];

    for (const line of destination) {
        let [number, ...city] = line.split(' ');
            flyes[number] = city;
       
    }
    for (const line of status) {
      let [num, _state] = line.split(" ");
      const cancelledNum = Object.keys(flyes).filter(
        (key) => key === num
      );
        
      cancelledFlyes.unshift(...cancelledNum);
    }
    if (command === "Cancelled") {
      for (const num of cancelledFlyes) {
        console.log(`{ Destination: '${flyes[num]}', Status: 'Cancelled' }`);
      }
    } else if (command === "Ready to fly") {
      for (const num of Object.keys(flyes)) {
        if (!cancelledFlyes.includes(num)) {
          console.log(`{ Destination:'${flyes[num]}', Status: 'Ready to fly' }`);
        }
      }
    }
  }
    
   

              
        
        
          

    

flightShedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
'WN612 Cancelled',
'WN1173 Cancelled',
'SK330 Cancelled'],
['Ready to fly']
]


)
