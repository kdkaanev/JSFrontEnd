function orders(product, quantity){
    console.log((price(product) * quantity).toFixed(2))
    function price(product){
        switch (product) {
            case 'coffee':
                return 1.5
            case 'water':
                return 1
            case 'coke':
                return 1.4
            case 'snacks':
                return 2
        
        }
    }
}
