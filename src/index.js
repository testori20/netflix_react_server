import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { MovieContextProvider } from './context/movieContext/MovieContext';

ReactDOM.render(
    <React.StrictMode>
        {/* 모든 component에서 접근할 수 있는 값이 생겼다 */}
        <AuthContextProvider>
            <MovieContextProvider>
                <App />
            </MovieContextProvider>
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
