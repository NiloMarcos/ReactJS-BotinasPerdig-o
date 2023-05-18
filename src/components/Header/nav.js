import React, { useRef } from 'react';

import { FaBars, FaTimes } from "react-icons/fa";

import Logo from '../../assets/logo-footer.png';

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
			<img src={Logo} alt="Logo do Header" className='header-logo' />

			<nav ref={navRef}>
				<a href="/#">Início</a>
				<a href="/#">Sobre nós</a>
				<a href="/#">Catálogo</a>
				<a href="/#">Contato</a>
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
		</header>
	);
}
