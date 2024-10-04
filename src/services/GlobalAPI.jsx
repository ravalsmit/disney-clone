import axios from "axios";

const movieBaseUrl = 'https://api.themoviedb.org/3';
const api_key = '8476a7ab80ad76f0936744df0430e67c';

const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=8476a7ab80ad76f0936744df0430e67c';

const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);
const getMovieByGenreId = (id) => axios.get(movieByGenreBaseURL + "&with_genres=" + id)

export default {
     getTrendingVideos,
     getMovieByGenreId
}