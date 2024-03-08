import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Typography from '@mui/material/Typography';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
	render() {
		return (
			<React.Fragment>
				<Toolbar />
				<div className={classes.Container}>
					<main className={classes.Content}>
						<Typography
							className={classes.pageTitle}
							variant='h3'
							component='h3'
						>
							{' '}
							{this.props.pageTitle}{' '}
						</Typography>
						{this.props.children}
					</main>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}

export default Layout;
