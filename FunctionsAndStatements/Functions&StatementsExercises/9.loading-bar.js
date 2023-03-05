function loadingBar(number){
    if(number == 100){
        console.log('100% Complete!')
    }else{
        let k = number / 10
        let status = ''
        status = stat(k)
        console.log(`${number}% ${status}`)
        console.log('Still loading...')
    }
    function stat(k){
        let bar = '%'.repeat(k) + '.'.repeat(10 - k)
        return `[${bar}]`
    }
}
