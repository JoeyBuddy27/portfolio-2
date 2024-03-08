import React from 'react';
import classes from './Footer.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const footer = props => (
	<div className={classes.Footer}>
		<p style={{ width: '33%' }}>&copy; Copyright Joe O'Brien 2020 </p>
		<p style={{ width: '33%' }}>
			{' '}
			Website build with{' '}
			<a href='https://reactjs.org/' target='blank'>
				{' '}
				REACT JS{' '}
			</a>{' '}
		</p>
		<div>
			<a
				className='mr-1'
				href='https://www.linkedin.com/in/joedigitalmedia/'
				rel='noopener noreferrer'
				target='blank'
			>
				<LinkedInIcon fontSize='medium' />
			</a>
			<a
				className='mr-1'
				href='https://github.com/JoeyBuddy27/'
				rel='noopener noreferrer'
				target='blank'
			>
				<GitHubIcon fontSize='medium' />
			</a>
			<a
				rel='noopener noreferrer'
				href='mailto:joedigitalmedia@gmail.com'
				target='blank'
			>
				<EmailIcon fontSize='medium' />
			</a>
		</div>
	</div>
);

export default footer;
