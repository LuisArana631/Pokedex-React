import React from 'react';
import './Navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <span className="navbar-brand">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png" alt="" width="30" height="30"/>
                    </span>
                    <a className="navbar-brand title-page" href="/">Pokedex</a>
                    <form className="d-flex">
                        <input className="ml-1 form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="ml-1 btn btn-danger" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}