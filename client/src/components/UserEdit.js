import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const UserEdit = () => {
    const { id } = useParams()
    const navegate = useNavigate()


    const [data, setData] = useState({
        name: '',
        email: '',
        phone: ''
    })




    useEffect(() => {

        fetch_all_user()
    }, [])


    const fetch_all_user = () => {
        axios.get('http://127.0.0.1:8000/api/edit/' + id).then(res => {
            setData({
                name: res.data.name,
                email: res.data.email,
                phone: res.data.phone
            })
        })
    }



    const handleChange = (e) => {
        const { name, value } = e.target;

        setData((val) => {
            return {
                ...val,
                [name]: value,
            }
        })
    }



    const handleClick = (e) => {
        e.preventDefault()
        console.log(data);

        // POST request
        axios.post('http://127.0.0.1:8000/api/edit/' + id, data)
            .then((res) => {
                navegate('/')
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <>

            <h2>Edit page</h2>
            <hr />
            <div className="col-md-5">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" name="name" onChange={handleChange} value={data.name} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="text" name="email" onChange={handleChange} value={data.email} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="text" name="phone" onChange={handleChange} value={data.phone} className="form-control" />
                    </div >
                    <button type="submit" onClick={handleClick} className="btn btn-primary" > Submit</button >
                </form >
            </div >
        </>
    )
}

export default UserEdit
