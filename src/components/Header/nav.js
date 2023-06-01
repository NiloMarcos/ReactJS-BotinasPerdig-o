import React, { useRef } from 'react';

import { FaBars, FaTimes } from "react-icons/fa";

import Logo from '../../assets/logo-footer.png';

import { Link } from 'react-router-dom';

import "./styles.scss";

export function Header() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<section className="content-header">
				<a href="/">
					<img src={Logo} alt="Logo do Header" className='header-logo' />
				</a>

				<nav ref={navRef}>
					<Link to={'/'}>Início</Link>
					<Link to={'/sobre-nos'}>Sobre nós</Link>
					<Link to={''}>Catálogo</Link>
					<Link to={''}>Contato</Link>
					<button
						className="nav-btn nav-close-btn"
						onClick={showNavbar}>
						<FaTimes />
					</button>
				</nav>
				
				<button
					className="nav-btn"
					onClick={showNavbar}>
					<FaBars />
				</button>
			</section>
		</header>
	);
}
