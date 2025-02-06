import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../../css/style.css";
import axios from "axios";

function AdminMiddleware() {
    let token = localStorage.getItem("token") ?? "";
    let [isLogin, setIsLogin] = React.useState(true);
    let [getToken, setToken] = React.useState("");

    useEffect(() => {
        let data = {
            token: token
        }
        axios.post('http://localhost:8000/login/token-verify', data, {
            headers: {
                Authorization: `authorization ${token}`
            }
        }).then((res) => {
            if (res.data.data) {
                setIsLogin(false);
                setToken(token);
            } else {
                setIsLogin(true);

            }

        }).catch((error) => {
            setIsLogin(error.response.data.message);
        })


    }, []);


    const logout =()=>{
        localStorage.clear();
        window.location.href = "/login";
    }


    if (isLogin) {
        return (<div><h1>is loading.....</h1></div>)
    } else {
        if (getToken) {
            return (
                <div>
                    <>

                        <header id="header" className="header fixed-top d-flex align-items-center">
                            <div className="d-flex align-items-center justify-content-between">
                                <Link to="/admin" className="logo d-flex align-items-center">
                                    <img src="assets/img/logo.png" alt="" />
                                    <span className="d-none d-lg-block">NiceAdmin</span>
                                </Link>
                                <i className="bi bi-list toggle-sidebar-btn" />
                            </div>


                            <nav className="header-nav ms-auto">
                                <ul className="d-flex align-items-center">
                                    <li className="nav-item d-block d-lg-none">
                                        <Link className="nav-link nav-icon search-bar-toggle " to="#">
                                            <i className="bi bi-search" />
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown pe-3">
                                        <a
                                            className="nav-link nav-profile d-flex align-items-center pe-0"
                                            href="#"
                                            data-bs-toggle="dropdown"
                                        >
                                            <img
                                                src="assets/img/profile-img.jpg"
                                                alt="Profile"
                                                className="rounded-circle"
                                            />
                                            <span className="d-none d-md-block dropdown-toggle ps-2">
                                                K. Anderson
                                            </span>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                            <li className="dropdown-header">
                                                <h6>Kevin Anderson</h6>
                                                <span>Web Designer</span>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item d-flex align-items-center"
                                                    href="users-profile.html"
                                                >
                                                    <i className="bi bi-person" />
                                                    <span>My Profile</span>
                                                </a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item d-flex align-items-center"
                                                    href="users-profile.html"
                                                >
                                                    <i className="bi bi-gear" />
                                                    <span>Account Settings</span>
                                                </a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item d-flex align-items-center"
                                                    href="pages-faq.html"
                                                >
                                                    <i className="bi bi-question-circle" />
                                                    <span>Need Help?</span>
                                                </a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <button 
                                                onClick={logout}
                                                className="dropdown-item d-flex align-items-center">
                                                    <i className="bi bi-box-arrow-right" />
                                                    <span>Sign Out</span>
                                                </button>
                                            </li>
                                        </ul>

                                    </li>
                                </ul>
                            </nav>
                        </header>

                        <aside id="sidebar" className="sidebar">
                            <ul className="sidebar-nav" id="sidebar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link " to="/admin">
                                        <i className="bi bi-grid" />
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link collapsed"
                                        data-bs-target="#components-nav"
                                        data-bs-toggle="collapse"
                                        to="/admin/users"
                                    >
                                        <i className="bi bi-menu-button-wide" />
                                        <span>Users</span>
                                        <i className="bi bi-chevron-down ms-auto" />
                                    </Link>
                                    <ul
                                        id="components-nav"
                                        className="nav-content collapse "
                                        data-bs-parent="#sidebar-nav"
                                    >
                                        <li>
                                            <Link to="/admin/users">
                                                <i className="bi bi-circle" />
                                                <span>Show Users</span>
                                            </Link>
                                        </li>
                                       
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link collapsed"
                                        data-bs-target="#components-news"
                                        data-bs-toggle="collapse"
                                        to="/admin/users"
                                    >
                                        <i className="bi bi-menu-button-wide" />
                                        <span>News</span>
                                        <i className="bi bi-chevron-down ms-auto" />
                                    </Link>
                                    <ul
                                        id="components-news"
                                        className="nav-content collapse "
                                        data-bs-parent="#sidebar-nav"
                                    >
                                        <li>
                                            <Link to="/admin/manage-category">
                                                <i className="bi bi-circle" />
                                                <span>Manage Category</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/admin/add-news">
                                                <i className="bi bi-circle" />
                                                <span>Add News</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/admin/show-news">
                                                <i className="bi bi-circle" />
                                                <span>Show News</span>
                                            </Link>
                                        </li>
                                       
                                    </ul>
                                </li>


                            </ul>
                        </aside>
                        <main id="main" className="main">
                            <section className="section dashboard">
                                <Outlet />
                            </section>
                        </main>
                        <footer id="footer" className="footer">
                            <div className="copyright">
                                © Copyright{" "}
                                <strong>
                                    <span>NiceAdmin</span>
                                </strong>
                                . All Rights Reserved
                            </div>
                            <div className="credits">

                                Designed by <Link to="">MernNews</Link>
                            </div>
                        </footer>
                    </>
                </div>
            )
        } else {
            window.location.href = "/login";
        }
    }
}

export default AdminMiddleware
