import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from '../utils/moviesSlice';

export const useUpcomingMovies = () => {
    // fetch movies data from TMDB and add in store
    const dispatch = useDispatch();

    const upcomingMovies = useSelector((store) => store.movies.UpcomingMovies);

    const getUpcoming = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/upcoming',
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addUpcomingMovies(json?.results));
    };
    useEffect(() => {
        !upcomingMovies && getUpcoming(); // memoization
    }, []);
};
