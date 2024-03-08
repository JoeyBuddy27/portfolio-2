import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../../assets/JOBLogo.png';
import { NavLink } from 'react-router-dom';

const toolbar = props => (
	<header className={classes.Toolbar}>
		<div className={classes.ToolbarInner}>
			<NavLink to='/'>
				<img src={Logo} alt='logo' className={classes.Logo} />
			</NavLink>
			<nav className={classes.DesktopOnly}>
				<NavigationItems />
			</nav>
		</div>
	</header>
);

export default toolbar;
