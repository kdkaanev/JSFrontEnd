function moviesApp(input){
    let movies = []
    for (const line of input) {
        if(line.includes('addMovie')){
            let movieName = line.split(' ').slice(1).join('')
            addMovie(movieName)
        }
        else if(line.includes('directedBy')){
            let info = line.split(' directedBy ')
            let movieName = info[0]
            let directorName = info[1]
            directedBy(movieName, directorName)
        }
        else if(line.includes('onDate')){
            let info = line.split('onDate')
            let movieName = info[0]
            let date = info[1]
            onDate(movieName, date)
        }
    }console.log(JSON.stringify(movies))

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
}
moviesApp([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )