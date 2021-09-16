import "./productList.css"
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { MovieContext } from '../../context/movieContext/MovieContext'
import { deleteMovies, getMovies } from '../../context/movieContext/apiCalls'

export default function ProductList() {
    const {movies, dispatch} = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatch);
    },[dispatch]);

    const handleDelete = (id) => {
        deleteMovies(id,dispatch)
    }

    const columns = [
        { field: '_id', headerName: '아이디', width: 120 },
        {
            field: 'movie',
            headerName: '영화',
            width: 200,
            renderCell: params => {
                return (
                    <div className="productListItem">
                        <img
                            src={params.row.img}
                            alt=""
                            className="productListImg"
                        />
                        {params.row.title}
                    </div>
                )
            },
        },
        {
            field: 'genre',
            headerName: '장르',
            width: 120,
        },
        {
            field: 'year',
            headerName: '년도',
            width: 120,
        },
        {
            field: 'limit',
            headerName: '상영시간',
            width: 120,
        },
        {
            field: 'isSeries',
            headerName: '시리즈',
            width: 120,
        },
        {
            field: 'action',
            headerName: '행동',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={{pathname:'/product/' + params.row._id, movie: params.row}}>
                            <button className="productListEdit">수정</button>
                        </Link>
                        <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row._id)}/>
                    </>
                )
            },
        },
    ]
    return (
        <div className="productList">
            <DataGrid
                rows={movies}
                columns={columns}
                pageSize={8}
                checkboxSelection
                disableSelectionOnClick
                getRowId={(row) => row._id}
            />
        </div>
    )
}
