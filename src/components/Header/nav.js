import React, { useRef } from 'react';

import { FaBars, FaTimes } from "react-icons/fa";

import Logo from '../../assets/botinas-perdigao-logo.png';

import { Link } from 'react-router-dom';

import catalogo from '../../assets/hanfer2022.pdf'

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
				<a href="/" className='content-logo'>
					<img src={Logo} alt="Logo do Header" className='header-logo' />
				</a>

				<nav ref={navRef}>
					<Link to={'/'}>Início</Link>
					<Link to={'/sobre-nos'}>Sobre nós</Link>
					<a href={catalogo} download>Catálogo</a>
					<Link to={'/contato'}>Contato</Link>
					<Link to={'http://lojadabotina.com.br/'}>Loja</Link>
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
