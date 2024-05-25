import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

export const usePopularMovies = () => {
    // fetch movies data from TMDB and add in store
    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store.movies.PopularMovies);

    const getPopular = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addPopularMovies(json?.results));
    };
    useEffect(() => {
        !popularMovies && getPopular();
    }, []);
};
