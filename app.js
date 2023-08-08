const movies = document.querySelector("#movies");
const btn = document.querySelector("button");

const addNewMovies = async () =>{
    const moviesText = await getmovies();
    const newLi = document.createElement("li");
    newLi.append(moviesText);
    movies.append(newLi);
}
const getMovies = async()=>{
try {
    const config = {headers: {Accept: "application/json"}}
    const res = await axios.get( "https://imdb-api.com/en/API/MostPopularMovies/ ",config)
    return res.data.movies
} 
catch (err){
  return "Sorry no movies available"
}}

btn.addEventListener("click", addNewMovies)
