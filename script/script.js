const API_KEY = "e0b04ff59adaecdf17841706f387eba8";
let paginaActual = 1;

//INFO DE LAS CATEGORÍAS

const updateCategoryPopular = () =>{
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
    })
}

const updateCategoryTopRated = () =>{
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
    })
}

const updateCategoryUpcoming = () =>{
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
    })
}

const updateCategoryNowPlaying = () =>{
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
    })
}


//INFO PELICULAS DE CADA CATEGORÍA

const moviesPopular = () =>{
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${paginaActual}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
    })
}

const moviesTopRated = () =>{
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${paginaActual}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
    })
}

const moviesUpcoming = () =>{
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=${paginaActual}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
    })
}

const moviesNowPlaying = () =>{
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${paginaActual}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
    })
}

//INFO PELICULA BUSCADA POR PALABRA CLAVE

const moviesKeyWord = textoBusqueda => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${textoBusqueda}&page=${paginaActual}`)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
    })
}

//MODAL

const showModal = peliculaId => {
    fetch(`https://api.themoviedb.org/3/movie/${peliculaId}?api_key=${API_KEY}`
    )
    .then(response => response.json())
    .then(data =>{
        console.log(data);
    })
}