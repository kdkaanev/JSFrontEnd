function moviesApp(input){
    let movies = []
    for (const line of input) {
        let command = line.split(' ')
        if(line.includes('addMovie')){
            let movieName = command.slice(1).join(' ')
            addMovie(movieName)
        }
        else if(line.includes('directedBy')){
            let info = line.split(' directedBy ')
            let movieName = info[0]
            let directorName = info[1]
            directedBy(movieName, directorName)
        }
        else if(line.includes('onDate')){
            let info = line.split(' onDate ')
            let movieName = info[0]
            let date = info[1]
            onDate(movieName, date)
        }
        
    }

    function addMovie(name){
        movies.push({name})
    }
    function directedBy(name, director){
        let movie = movies.find((m) => m.name === name)
        if(movie){
            movie.director = director
        }
    }
    function onDate(name, date){
        let movie = movies.find((m) => m.name === name)
        if(movie){
            movie.date = date
        }
    }
    let filteredMovie = movies.filter((movie) => movie.hasOwnProperty('name') && movie.hasOwnProperty('director') && movie.hasOwnProperty('date'))
    for (const movie of filteredMovie) {
        console.log(JSON.stringify(movie))
    } 
}
