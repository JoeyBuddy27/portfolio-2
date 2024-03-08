import React from 'react';
import Grid from '@mui/material/Grid';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import CVSection from './CVSection.js';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import BuildIcon from '@mui/icons-material/Build';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import classes from './CV.module.css';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const CV = props => {
	const cvArray = [
		{
			skill: '',
			role: 'joegitalmedia@gmail.com',
			location: 'Bristol, UK',
			icon: 'contact',
			date: 'UK: 07828716124',
			date2: 'IRE: 00353867211919',
		},
		{
			skill: [
				'HTML 5',
				100,
				'React & Typescript',
				90,
				'Vue JS',
				80,
				'React Native',
				80,
				'CSS/SASS',
				70,
				'Node JS',
				60,
			],
			icon: 'skills',
		},
		{
			skill: '',
			location: 'Golfbreaks',
			role: 'Front End Developer',
			icon: 'professional',
			header: 'PROFESSIONAL EXPERIENCE',
			date: 'Aug 2021 - Present',
			desc: 'Developing customer portal app using Typescript and React JS. Maintaining main company website with VUE JS. Developing mobile app with React Native & Node JS',
		},
		{
			skill: '',
			location: 'Microstrategies',
			role: 'Junior Front End Developer',
			icon: 'professional',
			header: 'PROFESSIONAL EXPERIENCE',
			date: 'Oct 2020 - July 2021',
			desc: 'Developing websites for clients, including WooCommerce platforms with payment gateways. \n\n Working on in-house websites and applications.',
		},
		{
			skill: '',
			location: 'ODEON CINEMAS',
			role: 'Film Booker',
			icon: 'professional',
			header: 'PROFESSIONAL EXPERIENCE',
			date: 'Aug 2019 - July 2020',
			desc: 'Devising bespoke lineups for 11 cinemas in UK/Ireland to maximise revenue. \n\n Negotiating with film distributors and cinema management. \n\n Data analysis on box office performance. ',
		},
		{
			skill: '',
			location: 'University of Limerick',
			role: 'Masters in Interactive Media',
			icon: 'school',
			date: 'Sept 2014 - Sept 2015',
			desc: 'Awarded 1.1 honours \n\n Dissertation: Interactive Data Visualization of Irish Road Deaths',
		},
		{
			skill: '',
			location: 'ODEON CINEMAS',
			role: 'Guest Experience Supervisor',
			icon: 'professional',
			date: 'Mar 2017 - Aug 2019',
			desc: 'Running operations on shift. \n\n Dealing with guest complaints, managing large team. \n\n Admin duties, including digital projection, stock ordering, rostering',
		},
		{
			skill: '',
			location: 'University of Limerick',
			role: 'Bsc Digital Media Design',
			icon: 'school',
			date: 'Dec 2015 - Present',
			desc: 'Awarded 1.1 honours',
		},
		{
			skill: '',
			location: 'FREELANCE',
			role: 'Web Designer',
			icon: 'professional',
			date: 'May 2012 - Present',
			desc: 'Developed a number of websites for clients on Wordpress. \n\n Including Limerick Jazz Festival, which is updated on a yearly basis',
		},
	];

	const iconChange = icon => {
		switch (icon) {
			case 'professional':
				return <BusinessCenterIcon />;
			case 'school':
				return <SchoolIcon />;
			case 'contact':
				return <ContactMailIcon />;
			default:
			case 'skills':
				return <BuildIcon />;
		}
	};

	const skillLevelChange = skillValue => {
		return (
			// TODO: Change color (MUI theme level??)
			<LinearProgress variant='determinate' value={skillValue} />
		);
	};

	return (
		<React.Fragment>
			<center>
				{/* TODO: MAke this an icon instead */}
				<Button
					variant='outlined'
					className={classes.cvButton}
					size='small'
					startIcon={<PictureAsPdfIcon />}
					href='https://docs.google.com/document/d/1skaowjZZQQ2svchpLudzD5CqP5oeHo6c3t13Rb0zJxo/edit'
					target='blank'
				>
					Download
				</Button>
			</center>
			<br />
			<Grid container spacing={2}>
				{cvArray.map(CVData => (
					<CVSection
						key={CVData.role}
						CVSkills={CVData.skill[0]}
						CVSkillLevel={skillLevelChange(CVData.skill[1])}
						CVSkills2={CVData.skill[2]}
						CVSkillLevel2={skillLevelChange(CVData.skill[3])}
						CVSkills3={CVData.skill[4]}
						CVSkillLevel3={skillLevelChange(CVData.skill[5])}
						CVSkills4={CVData.skill[6]}
						CVSkillLevel4={skillLevelChange(CVData.skill[7])}
						CVIcon={iconChange(CVData.icon)}
						CVLocation={CVData.location}
						CVDate={CVData.date}
						CVDate2={CVData.date2}
						CVDesc={CVData.desc}
						CVHeader={CVData.header}
						CVRole={CVData.role}
					/>
				))}{' '}
			</Grid>
		</React.Fragment>
	);
};

export default CV;
