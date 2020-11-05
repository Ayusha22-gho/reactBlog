import React, {useState} from 'react'
import'./style.css';
import {NavLink} from 'react-router-dom';

const NavBar = () => {

    const [search , setSearch] = useState(false);

    const submitSearch = (e) =>{
        e.preventDefault();
        alert('Search working');
    }

    const openSearch = () =>{
        setSearch(true);
    }

    const searchClass = search ? 'searchInput active' : 'searchInput';



    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to = "/">Home</NavLink></li>
                <li><NavLink to = "/about-us">About</NavLink></li>
                <li><NavLink to = "/post">Post</NavLink></li>
                <li><NavLink to = "/contactus">Contact</NavLink></li>
            </ul>
            <div className="search">
                <form onSubmit= {submitSearch}>
                    <input type = "text" className={searchClass} placeholder="Search"/>
                    <img onClick = {openSearch} className= "searchIcon" src = {require('../../assets/icons/search.png')} alt = "Search" />
                </form>
                
            </div>
        </div>
    )
}

export default NavBar;
