import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CV from '../../components/CV/CV';
import Bio from '../../components/Bio/Bio';
import classes from './About.module.css';

const About = props => {
	const [currentPage, setCurrentPage] = useState('cv');

	let bio = <Bio />;
	let cv = <CV />;

	return (
		<React.Fragment>
			<div className={classes.switchButton}>
				<Button
					className={currentPage === 'cv' ? classes.isActive : null}
					onClick={() => setCurrentPage('cv')}
				>
					CV
				</Button>
				<Button
					className={currentPage === 'bio' ? classes.isActive : null}
					onClick={() => setCurrentPage('bio')}
				>
					ABOUT
				</Button>
			</div>
			{currentPage === 'bio' ? bio : cv}
		</React.Fragment>
	);
};

export default About;
