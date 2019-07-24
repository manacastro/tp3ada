const API_KEY = "e0b04ff59adaecdf17841706f387eba8";
let paginaActual = 1;
const popular = document.getElementById('show-movies-popular');
let peliculasPopularTodas = popular.children[0];
const topRated = document.getElementById('show-movies-top-rated');
let peliculasTopRated = topRated.children[0];
const upcoming = document.getElementById(`show-movies-upcoming`);
let peliculasUpcoming = upcoming.children[0];
const nowPlaying = document.getElementById(`show-movies-now-playing`);
const peliculasNowPlaying = nowPlaying.children[0];
//INFO DE LAS CATEGORÍAS
const updateCategoryPopular = () =>{
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)    
    .then(response => response.json())
    .then(data => {
          
        popular.innerHTML='';
        const seleccionadas = data.results.slice(0, 5);
        
        for(sel of seleccionadas){
            let nuevaPelicula = peliculasPopularTodas.cloneNode(true);
            nuevaPelicula.children[0].src = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${sel.poster_path}`;
            nuevaPelicula.children[1].innerHTML = sel.title;
            popular.appendChild(nuevaPelicula);
        }          
    });
}
updateCategoryPopular()
const updateCategoryTopRated = () =>{
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        topRated.innerHTML = "";
        const seleccionadas = data.results.slice(0, 5);
        for(sel of seleccionadas){
            let nuevaPeliculaTp = peliculasTopRated.cloneNode(true);
            nuevaPeliculaTp.children[0].src = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${sel.poster_path}`;
            nuevaPeliculaTp.children[1].innerHTML = sel.title;
            topRated.appendChild(nuevaPeliculaTp);
        }   
    })
}
updateCategoryTopRated();
const updateCategoryUpcoming = () =>{
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        upcoming.innerHTML='';
        const seleccionadas = data.results.slice(0, 5);
        
        for(sel of seleccionadas){
            let nuevaPeliculaUp = peliculasUpcoming.cloneNode(true);
            nuevaPeliculaUp.children[0].src = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${sel.poster_path}`;
            nuevaPeliculaUp.children[1].innerHTML = sel.title;
            upcoming.appendChild(nuevaPeliculaUp);
        }          
    });
}
updateCategoryUpcoming();
const updateCategoryNowPlaying = () =>{
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        nowPlaying.innerHTML='';
        const seleccionadas = data.results.slice(0, 5);
        
        for(sel of seleccionadas){
            let nuevaPeliculaN = peliculasNowPlaying.cloneNode(true);
            nuevaPeliculaN.children[0].src = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${sel.poster_path}`;
            nuevaPeliculaN.children[1].innerHTML = sel.title;
            nowPlaying.appendChild(nuevaPeliculaN);
        }         
        
    })
}
updateCategoryNowPlaying();
//INFO PELICULAS DE CADA CATEGORÍA
const moviesPopular = () =>{
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${paginaActual}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // let showMoviesPopular = document.getElementById;(`show-movies-popular`);
        // let peliculasPopularTodas = document.getElementsByClassName(`movies-item`)[0];      
        
        // for(let i = 0; i < data.results.length; i++){
        
        //     let nuevaPelicula = peliculasPopularTodas.cloneNode(true);
        //     nuevaPelicula.children[0].getElementsByClassName(`movies-item-title`)[0].innerText = data.results[i].title;
        //     nuevaPelicula.children[0].getElementsByClassName(`movies-item-img`)[0].src = "https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + data.results[i].poster_path;
        //     document.getElementById(`show-movies-popular`).appendChild(nuevaPelicula);
        // }
    });
}
moviesPopular();
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
//PELICULAS BODY