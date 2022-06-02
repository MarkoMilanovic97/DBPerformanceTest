import React from "react";
import { Link, useHistory } from 'react-router-dom';

function Navbar() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Database controller</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    MSSQL
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to="/mssql-add" className="nav-link">Add data</Link></li>
                                    <li><Link to="/mssql-read" className="nav-link">Read data</Link></li>
                                    <li><Link to="/mssql-update" className="nav-link">Update data</Link></li>
                                    <li><Link to="/mssql-delete" className="nav-link">Delete data</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    MongoDB
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to="/mongo-add" className="nav-link">Add data</Link></li>
                                    <li><Link to="/mongo-read" className="nav-link">Read data</Link></li>
                                    <li><Link to="/mongo-update" className="nav-link">Update data</Link></li>
                                    <li><Link to="/mongo-delete" className="nav-link">Delete data</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="compare-results-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Compare results
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to="/add-results" className="nav-link" id="add-results-page">Add results</Link></li>
                                    <li><Link to="/read-results" className="nav-link" id="read-results-page">Read results</Link></li>
                                    <li><Link to="/update-results" className="nav-link" id="update-results-page">Update results</Link></li>
                                    <li><Link to="/delete-results" className="nav-link" id="delete-results-page">Delete results</Link></li>
                                </ul>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;