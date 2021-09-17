import { useContext, useEffect, useState } from 'react'
import './newList.css'
import storage from '../../firebase'
import { createMovie, getMovies } from '../../context/movieContext/apiCalls'
import { MovieContext } from '../../context/movieContext/MovieContext'
import { ListContext } from '../../context/listContext/ListContext'
import { createList } from '../../context/listContext/apiCalls'
import { useHistory } from 'react-router-dom'

export default function NewList() {
    const [list, setList] = useState(null)
    const history = useHistory()

    const { dispatch } = useContext(ListContext)
    const { movies, dispatch: dispatchMovie } = useContext(MovieContext)

    useEffect(() => {
        getMovies(dispatchMovie)
    }, [dispatchMovie])

    const handleChange = e => {
        const value = e.target.value
        setList({ ...list, [e.target.name]: value })
    }

    const handleSelect = e => {
        let value = Array.from(e.target.selectedOptions, option => option.value)
        setList({ ...list, [e.target.name]: value })
    }

    console.log(list);

    const handleSubmit = e => {
        e.preventDefault()
        createList(list, dispatch)
        history.push('/lists')
    }

    return (
        <div className="newProduct">
            <h1 className="addProductTitle">새 리스트</h1>
            <form className="addProductForm">
                <div className="formLeft">
                    <div className="addProductItem">
                        <label>제목</label>
                        <input
                            type="text"
                            placeholder="유명한 영화들"
                            name="title"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="addProductItem">
                        <label>장르</label>
                        <input
                            type="text"
                            placeholder="액션"
                            name="genre"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="addProductItem">
                        <label>타입</label>
                        <select name="type" onChange={handleChange}>
                            <option>타입</option>
                            <option value="영회">영화</option>
                            <option value="시리즈">시리즈</option>
                        </select>
                    </div>
                </div>
                <div className="formRight">
                    <div className="addProductItem">
                        <label>Content</label>
                        <select
                            multiple
                            name="content"
                            onChange={handleSelect}
                            style={{ height: '280px' }}
                        >
                            {movies.map(movie => (
                                <option key={movie._id} value={movie._id}>
                                    {movie.title}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button className="addProductButton" onClick={handleSubmit}>
                    Create
                </button>
            </form>
        </div>
    )
}
