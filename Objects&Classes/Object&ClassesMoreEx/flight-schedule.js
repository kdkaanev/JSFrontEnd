function flightShedule(input) {
    let flyes = {}
    let destination = input[0];
    let depart = input[1];
    let arrive = input[2];

    for (const line of destination) {
        let [number, city] = line.split(' ');
        flyes[number] = city
    }
    console.log(flyes)


    
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
 'SK430 Cancelled'],
 ['Cancelled']
]
)