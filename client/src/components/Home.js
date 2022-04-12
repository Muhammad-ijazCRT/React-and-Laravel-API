import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
    // useParams
    const [getdata, setGetdata] = useState([])
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: ''
    })

    // define getdata function
    useEffect(() => {
        fetch_all_user()
    }, [])

    // get data from api
    const fetch_all_user = () => {
        axios.get('http://127.0.0.1:8000/api').then(res => {
            console.log(res.data)
            setGetdata(res.data)
        })
    }


    // get input data
    const handleChange = (e) => {
        const { name, value } = e.target;

        setData((val) => {
            return {
                ...val,
                [name]: value,
            }
        })
    }


    // get data when click button
    const handleClick = (e) => {
        e.preventDefault()

        // POST request
        axios.post('http://127.0.0.1:8000/api/', data)
            .then((res) => {
                console.log(res.data);
                fetch_all_user()

                setData({
                    name: '',
                    email: '',
                    phone: ''
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // delete data with api
    const Delete_user = (id) => {
        axios.get('http://127.0.0.1:8000/api/delete/' + id).then(res => {
            fetch_all_user()
        })
    }


    return (
        <>
            <h2 className={'alert alert-danger text-center'}>CRUD in React</h2>
            <hr />

            <div>
                <div className="row">
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

                    {/* tabel */}
                    < div className="col-md-7" >
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {getdata.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <th scope="row">{++index}</th>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>
                                                <Link to={{ pathname: "/edit/" + item.id }} className={"btn btn-primary"} onClick={() => { }}>edit</Link>
                                                <button className={"btn btn-danger"} onClick={() => { Delete_user(item.id) }}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}


                            </tbody>
                        </table>

                    </div >
                </div >
            </div >
        </>
    )
}

export default Home
