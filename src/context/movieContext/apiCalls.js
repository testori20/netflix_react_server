import { deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMovieFailure, getMovieStart, getMovieSuccess } from './MovieAction'
import axios from "axios";

export const getMovies = async (dispatch) => {
    dispatch(getMovieStart());
    try {
        const res = await axios.get("/movies", {headers: {
            token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
        }});
        console.log(res);
        dispatch(getMovieSuccess(res.data));
    }catch(err) {
        dispatch(getMovieFailure());
        console.log(err);
    }
}

// 영화 삭제
export const deleteMovies = async (id,dispatch) => {
    dispatch(deleteMovieStart());
    try {
        const res = await axios.delete("/movies/"+id, {headers: {
            token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
        }});
        console.log(res);
        dispatch(deleteMovieSuccess(id));
    }catch(err) {
        dispatch(deleteMovieFailure());
        console.log(err);
    }
}