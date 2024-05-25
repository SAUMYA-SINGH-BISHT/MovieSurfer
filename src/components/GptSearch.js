import React from 'react';
import { BG_URL } from '../utils/constants';
import GptMovieSuggestions from './GptMovieSuggestions';
import GptSearchBar from './GptSearchBar';

const GptSearch = () => {
    return (
        <div>
            <div className="absolute -z-10">
                <img src={BG_URL} alt="bg_pic"></img>
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch;