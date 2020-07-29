import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-light navbar-expand-md bg-light justify-content-center">
					<a href="/" className="navbar-brand mr-0">
						Hector's Resources
					</a>
					<button className="navbar-toggler ml-1" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="navbar-collapse collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
						<ul className="navbar-nav mx-auto text-center">
							<li className="nav-item active">
								<Link className="nav-link" to="/">Home</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/resources">Resources</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">About</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Share this Site</a>
							</li>
						</ul>
						<ul className="nav navbar-nav flex-row justify-content-center flex-nowrap">
							<li className="nav-item">
								<a className="nav-link" href="https://twitter.com/hectarek">
									<i className="fab fa-twitter fa-lg mr-1"></i>
								</a>{" "}
							</li>
							<li className="nav-item">
								<a className="nav-link" href="https://github.com/hectarek">
									<i className="fab fa-github fa-lg"></i>
								</a>{" "}
							</li>
						</ul>
					</div>
				</nav>
    ) 
}

export default Nav;