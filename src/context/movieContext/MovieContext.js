import {createContext, useReducer} from "react";
import MovieReducer from './MovieReducer';

const INITIAL_STATE = {
    movies: [],
    isFetching: false,
    error: false,
};

export const MovieContext = createContext(INITIAL_STATE);

export const MovieContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);

    return (
        <MovieContext.Provider
            // useContext를 통해 user, isFetching, error, dispatch 를 어디서든 사용할 수 있다
            value={{
                movies: state.movies,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </MovieContext.Provider>
    )
}