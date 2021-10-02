import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	function toggleMenu() {
		document.getElementById("isToggle").classList.toggle("open");
		var isOpen = document.getElementById("navigation");
		if (isOpen.style.display === "block") {
			isOpen.style.display = "none";
		} else {
			isOpen.style.display = "block";
		}
	}

	return (
		<header id="topnav" className="defaultscroll sticky">
			<div className="container">
				{/* Logo container*/}
				<a className="logo" href="/">
					<img
						src="images/.main/yBully-blue.png"
						height="64"
						className="logo-light-mode"
						alt=""
					/>
				</a>
				{/* Logo End */}

				{/* End Logo container*/}
				<div className="menu-extras">
					<div className="menu-item">
						{/* Mobile menu toggle*/}
						<div className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
							<div className="lines">
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
						{/* End mobile menu toggle*/}
					</div>
				</div>

				<div id="navigation">
					{/* Navigation Menu*/}
					<ul className="navigation-menu">
						<li>
                            <Link to="/">
								<div className="sub-menu-item">Home</div>
							</Link>
						</li>
						<li>
							<Link to="/">
								<div className="sub-menu-item">Explore</div>
							</Link>
						</li>
						<li>
							<Link to="/">
								<div className="sub-menu-item">About Us</div>
							</Link>
						</li>
						<li>
							<Link to="/">
								<div className="sub-menu-item">Contact Us</div>
							</Link>
						</li>
						<li>
							<Link to="/login">
								<div className="sub-menu-item">Login</div>
							</Link>
						</li>
						{/* <li>
                            <Link to="/admin">
								<div className="sub-menu-item">Admin</div>
							</Link>
						</li> */}

						{/* <li className="has-submenu parent-parent-menu-item">
                            <a href="/">Pages</a><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li className="has-submenu parent-menu-item"><a href="/"> Company </a><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="/" className="sub-menu-item"> About Us</a></li>
                                        <li><a href="/" className="sub-menu-item">Pricing</a></li>
                                    </ul> 
                                </li>
                                <li><a href="/" className="sub-menu-item">Footer Layouts </a></li>
                            </ul>
                        </li> */}

						{/* <li className="has-submenu parent-menu-item">
                            <a href="/">Docs</a><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="/" className="sub-menu-item">Documentation</a></li>
                                <li><a href="/" className="sub-menu-item">Changelog</a></li>
                                <li><a href="/" className="sub-menu-item">Components</a></li>
                                <li><a href="/" className="sub-menu-item">Widget</a></li>
                            </ul>
                        </li> */}
					</ul>
					{/*end navigation menu*/}
				</div>
				{/*end navigation*/}
			</div>
			{/*end container*/}
		</header>
	);
};

export default Navbar;
