import React,{useEffect} from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../../css/style.css";
import axios from "axios";  

function AdminMiddleware() {
    let token = localStorage.getItem("token") ?? "";
    let [isLogin, setIsLogin] = React.useState(true);
    let [getToken, setToken] = React.useState("");

    useEffect(() => {
        let data={
            token:token
        }
        axios.post('http://localhost:8000/login/token-verify',data,{
            headers:{
                Authorization: `authorization ${token}`
            }
        }).then((res)=>{
            if(res.data.data){
                setIsLogin(false);
                setToken(token);
                console.log("Login Success");
            }else{
                console.log("Login Failed");
                setIsLogin(true);

            }
           
          }).catch((error)=>{
            console.log(error);
            setIsLogin(error.response.data.message);
          })


    },[]);


    if(isLogin){
       return (<div><h1>is loading.....</h1></div>)
    }else{
      if(getToken){
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
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                <i className="bi bi-box-arrow-right" />
                                                <span>Sign Out</span>
                                            </a>
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
                                <a
                                    className="nav-link collapsed"
                                    data-bs-target="#components-nav"
                                    data-bs-toggle="collapse"
                                    href="#"
                                >
                                    <i className="bi bi-menu-button-wide" />
                                    <span>Components</span>
                                    <i className="bi bi-chevron-down ms-auto" />
                                </a>
                                <ul
                                    id="components-nav"
                                    className="nav-content collapse "
                                    data-bs-parent="#sidebar-nav"
                                >
                                    <li>
                                        <a href="components-alerts.html">
                                            <i className="bi bi-circle" />
                                            <span>Alerts</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components-accordion.html">
                                            <i className="bi bi-circle" />
                                            <span>Accordion</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components-badges.html">
                                            <i className="bi bi-circle" />
                                            <span>Badges</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components-breadcrumbs.html">
                                            <i className="bi bi-circle" />
                                            <span>Breadcrumbs</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components-buttons.html">
                                            <i className="bi bi-circle" />
                                            <span>Buttons</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components-cards.html">
                                            <i className="bi bi-circle" />
                                            <span>Cards</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components-carousel.html">
                                            <i className="bi bi-circle" />
                                            <span>Carousel</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components-list-group.html">
                                            <i className="bi bi-circle" />
                                            <span>List group</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components-modal.html">
                                            <i className="bi bi-circle" />
                                            <span>Modal</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components-tabs.html">
                                            <i className="bi bi-circle" />
                                            <span>Tabs</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components-pagination.html">
                                            <i className="bi bi-circle" />
                                            <span>Pagination</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components-progress.html">
                                            <i className="bi bi-circle" />
                                            <span>Progress</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components-spinners.html">
                                            <i className="bi bi-circle" />
                                            <span>Spinners</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components-tooltips.html">
                                            <i className="bi bi-circle" />
                                            <span>Tooltips</span>
                                        </a>
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
    }else{
        window.location.href = "/login";
      }
    }
}

export default AdminMiddleware
