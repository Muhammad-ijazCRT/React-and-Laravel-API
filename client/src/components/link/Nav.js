import { Link } from "react-router-dom";
import React from 'react'

const Nav = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> |
                <Link to="/create">User Create</Link> |
            </nav>
        </div>
    )
}

export default Nav

