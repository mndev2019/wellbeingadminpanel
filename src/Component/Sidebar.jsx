import { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import user from "../assets/image/profile.png"

// import { ToastContainer } from "react-toastify";
import "../assets/css/sidebar.css"
import logo from "../assets/image/logo.png"

import shortlogo from "../assets/image/logo.png";
import { menuData } from "../Data/MenuData";




// eslint-disable-next-line react/prop-types
const Sidebar = ({ content }) => {
    const location = useLocation()

    const { id } = useParams()

    // const [notifydrop, setnotifydrop] = useState(false)

    // const handlenotify = (e) => {
    //     e.preventDefault()
    //     setnotifydrop(!notifydrop)
    // }


    const userinfo = location.pathname == `/user/stores/${id}`


    const [isCollapsed, setIsCollapsed] = useState(
        localStorage.getItem("isCollapsed") === "true"
    );

    const navigate = useNavigate();

    const handleToggleSidebar = (e) => {
        e.preventDefault();
        setIsCollapsed(!isCollapsed);
        localStorage.setItem("isCollapsed", isCollapsed ? "false" : "true");
    };

    // let token = localStorage.getItem("token")

    useEffect(() => {
        checkCollapse();
    }, []);





    const checkCollapse = () => {
        if (localStorage.getItem("isCollapsed") === "true") {
            setIsCollapsed(true);
        }
    };

    const handleLogout = () => {
        localStorage.clear();
    };


    const [openDropdown, setOpenDropdown] = useState('');

    const toggleDropdown = (e, itemName) => {
        e.preventDefault();
        setOpenDropdown(openDropdown === itemName ? "" : itemName);
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        scrollToTop()
    }, [])

    return (
        <div className="flex w-full">


            {/* <ToastContainer /> */}
            <div className={`sidebarContainer ${isCollapsed ? "collapsed" : ""}`}>
                <div className="w-full h-full relative">
                    <div className="sidebar-header flex justify-center">
                        <Link
                            className="btn text-dark bg-white"
                            id="closeSidebar"
                            onClick={(e) => handleToggleSidebar(e)}
                        >
                            {isCollapsed ? (
                                <i className="fa-solid fa-xmark"></i>
                            ) : (
                                <i className="fa-solid fa-bars"></i>
                            )}
                        </Link>
                        <Link className="hidden md:block">
                            {isCollapsed ? (
                                <img
                                    src={shortlogo}
                                    alt=""
                                    className="img-fluid mt-1"
                                    style={{ width: "130px" }}
                                />
                            ) : (
                                <img src={logo} style={{ width: "85px" }} alt="" className="img-fluid beat_logo mt-1" />
                            )}
                        </Link>
                    </div>
                    <div className="sidebar-content" id="Sidebar_nav">

                        <ul className="list-none pl-[10px]">
                            {/* {menuData.map((item, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={item.link}
                                        className={`flex items-center gap-2 Sidebar_link  `}
                                        onClick={(e) => item.isLogout && handleLogout(e)}
                                    >
                                        <button className={`icon flex justify-center items-center ${item.isLogout ? "bg-dark text-white" : ""}`}>{item.icon}</button>
                                        <p className={`tool-tip ${!isCollapsed ? "" : "nonetooltip"}`} >
                                            {item.name}
                                        </p>
                                    </NavLink>
                                </li>
                            ))} */}

                            {menuData.map((item) => {
                                return (

                                    <>
                                        {
                                            item.subMenu ? (
                                                <div className={`${item.type}`}>
                                                    <NavLink
                                                        to={item.link}

                                                        className={`flex items-center justify-between gap-3 Sidebar_link   `}
                                                        onClick={(e) => toggleDropdown(e, item.name)}
                                                    >
                                                        <div className="flex items-center">
                                                            <button className={`icon flex justify-center items-center ${item.isLogout ? "bg-dark text-white" : ""}`}>{item.icon}</button>
                                                            <p className={`tool-tip ${!isCollapsed ? "" : "nonetooltip"}`}>
                                                                {item.name}

                                                            </p>
                                                        </div>
                                                        <button className={`${openDropdown === item.name ? "sideicon" : "sideicontag"}`}>
                                                            {item.sideicon}
                                                        </button>

                                                    </NavLink>
                                                    {openDropdown === item.name && (
                                                        <ul className="list-none" style={{ paddingLeft: "20px" }}> {/* Adjust padding as needed */}
                                                            {item.subMenu.map((subItem, subIndex) => (
                                                                <li key={subIndex} className={`${item.type}`}>
                                                                    <NavLink
                                                                        to={subItem.link}
                                                                        className="flex items-center gap-2 "
                                                                        onClick={(e) => item.isLogout && handleLogout(e)}
                                                                    >
                                                                        <span className="text-dark py-2 px-2">&#x2022;</span>                                                                        <p className={`tool-tip ${!isCollapsed ? "" : "nonetooltip"}`}>
                                                                            {subItem.name}
                                                                        </p>
                                                                    </NavLink>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            ) : (
                                                <NavLink
                                                    to={item.link}
                                                    className={`flex items-center gap-2 Sidebar_link  ${item.type == "fill" ? "filltype" : ""} `}
                                                    onClick={(e) => item.isLogout && handleLogout(e)}
                                                >
                                                    <button className={`icon flex justify-center items-center ${item.isLogout ? "bg-dark text-white" : ""}`}>{item.icon}</button>
                                                    <p className={`tool-tip ${!isCollapsed ? "" : "nonetooltip"}`} >
                                                        {item.name}

                                                    </p>
                                                </NavLink>
                                            )
                                        }
                                    </>

                                )
                            })}




                        </ul>
                    </div>

                </div>
            </div>
            <div className={`mainContainer bg-[#F1F5F9] ${isCollapsed ? "collapsed" : ""}`}>
                <div className="w-full h-full e">
                    <div className="w-full sticky top-0 ">
                        <nav className="w-full topbarNav bg-nav   py-3 z-20 relative">
                            <div className="container mx-auto">
                                <div className="flex w-full navcontent  justify-between items-center">
                                    <div className="px-5">

                                        <div className="">
                                            <p className="text-[#A6A6A6] text-[10px]">Good Morning</p>
                                            <h4 className="text-[16px] font-[600]">Welcome Back!</h4>

                                        </div>
                                        <div className="mobilelogo">
                                            <Link className="block md:hidden">
                                                <img
                                                    src={logo}
                                                    className="img-fluid mobile_fullname_logo"
                                                    alt=""
                                                />
                                            </Link>
                                            <Link className="hidden md:block">
                                                <img
                                                    src={logo}
                                                    alt=""
                                                    className="img-fluid beat_logo"
                                                />
                                                <img
                                                    src={logo}
                                                    className="img-fluid fullname_logo"
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex bg-white shadow px-2 py-2 rounded-md w-[61%]">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#ADA7A7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M22 22L20 20" stroke="#ADA7A7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                        <input type="search" className="focus:outline-none ps-4" placeholder="Search" />
                                    </div>

                                    <div className="flex  items-center">


                                        <div className="h-[30px] w-[30px] rounded-full bg-shadeprimary flex items-center justify-center">
                                            <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.5 11.1548C10.0245 11.1548 11.655 10.7026 11.8125 8.88782C11.8125 7.07425 10.6757 7.19087 10.6757 4.96569C10.6757 3.22759 9.02827 1.25 6.5 1.25C3.97173 1.25 2.32428 3.22759 2.32428 4.96569C2.32428 7.19087 1.1875 7.07425 1.1875 8.88782C1.3456 10.7095 2.97611 11.1548 6.5 11.1548Z" stroke="#292929" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M7.99255 13.2976C7.13997 14.2443 5.80996 14.2555 4.94922 13.2976" stroke="#292929" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="px-5">
                                            <div className="bg-white shadow p-1 rounded-full" onClick={() => navigate('/profile')}>

                                                <img src={user} style={{ height: "50px", width: "50px" }} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </nav>
                        <div className={`container mx-auto ${userinfo ? "p-0" : "p-3"}`}>
                            <div className={`grid gap-3 ${userinfo ? "mt-0" : "mt-3"}`}>{content}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Sidebar;

