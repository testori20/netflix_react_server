import './userList.css'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import { rows } from '../../dummyData'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function UserList() {
    const [data, setData] = useState(rows);

    const handleDelete = (id) => {
        console.log(id);
        setData(data.filter(item => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'username',
            headerName: '사용자',
            width: 200,
            renderCell: params => {
                return (
                    <div className="userListUser">
                        <img
                            src={params.row.avatar}
                            alt=""
                            className="userListImg"
                        />
                        {params.row.username}
                    </div>
                )
            },
        },
        {
            field: 'email',
            headerName: '이메일',
            width: 200,
        },
        {
            field: 'status',
            headerName: '상태',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: '전송량',
            description: 'This column has a value getter and is not sortable.',
            width: 160,
        },
        {
            field: 'action',
            headerName: '행동',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/user/' + params.row.id}>
                            <button className="userListEdit">수정</button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)}/>
                    </>
                )
            },
        },
    ]

    return (
        <div className="userList">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={9}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
