import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from '../utils/moviesSlice';

export const useTopRatedMovies = () => {
    // fetch movies data from TMDB and add in store
    const dispatch = useDispatch();

    const topRatedMovies = useSelector((store) => store.movies.TopRatedMovies);
    const getTopRated = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/top_rated',
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addTopRatedMovies(json?.results));
    };
    useEffect(() => {
        !topRatedMovies && getTopRated(); // memoization
    }, []);
};
