import React from 'react';
import Grid from '@mui/material/Grid';
import classes from './Bio.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const bio = props => (
	<React.Fragment>
		<Grid container spacing={5} className='pr-3 pl-3'>
			<Grid item sm={12} lg={9}>
				<a
					className={classes.Social}
					href='https://www.linkedin.com/in/joedigitalmedia/'
					rel='noopener noreferrer'
					target='blank'
				>
					<LinkedInIcon fontSize='large' />
				</a>

				<a
					className={classes.Social}
					rel='noopener noreferrer'
					href='mailto:joedigitalmedia@gmail.com'
					target='blank'
				>
					<EmailIcon fontSize='large' />
				</a>
				<p className={classes.paragraph}>
					Hey! I’m Joe - an Irish-born, but now Bristol-based software
					developer. I have a 1st class honours M.Sc. in{' '}
					<a
						href='http://www.csis.ul.ie/currentcourse/LM345/'
						rel='noopener noreferrer'
						target='_blank'
					>
						Interactive Media
					</a>{' '}
					for which I received a scholarship to undertake in 2015.
				</p>
				<p className={classes.paragraph}>
					I also have a 1.1 B.Sc. in 
					<a
						title='DMD'
						href='http://www.csis.ul.ie/course/LM113'
						rel='noopener noreferrer'
						target='_blank'
					>
						Digital Media Design
					</a>
					 from University of Limerick, where I graduated in 2014.
					This programme comprised of a number of interdisciplinary subjects,
					including interaction design, audio/video production, programming,
					research methods and product design.
				</p>
				<p className={classes.paragraph}>
					After my studies I set up my own freelance design team with a
					classmate from UL. We worked on a number of design projects for
					clients.
				</p>
				<p className={classes.paragraph}>
					After going our seperate ways, I continued to work freelance on a
					number of other Wordpress and graphic design projects.{' '}
				</p>
				<p className={classes.paragraph}>
					During lockdown 2020 I took it upon myself to learn REACT JS, as well
					as brushing up on things like SASS and ES6. I have since been working
					on JavaScript and REACT projects, including this very website.{' '}
				</p>

				<p className={classes.paragraph}>
					Between Oct 2020 and July 2021 I worked as a web developer for
					Microstrategies. There I was able to work on real web projects,
					primarily setting up eCommerce websites for clients using Wordpress. I
					was also exposed to various projects, including some mobile app
					development and Javascript games.
				</p>
				<p className={classes.paragraph}>
					I have been a frontend developer at Golfbreaks in Windsor since August
					2021. I am primarily working with React/Typescript and VUE JS on 2
					major web projects. We have also been developing a mobile app with
					React Native since 2023, and I have gotten some experience with Node
					JS as well.
				</p>
				<p className={classes.paragraph}></p>
				<p className={classes.paragraph}>
					In addition to my web development career, I also have 5 years
					experience in the Cinema Industry, starting from cinema host, working
					my way up through Cinema Experience Manager to Film Booker. Although
					not strictly relevant to development, these jobs gave me vital
					experience in leadership roles, and working as part of large teams.
				</p>
				<p className={classes.paragraph}>
					In my free time, my heart primarily lies with film and football. I
					have completed a TV Production, directing and Presenting course at The
					Park Studio in Dublin which provided me with hands on know-how in the
					world of live television.{' '}
				</p>
				<p className={classes.paragraph}>
					I’m also interested in writing (pop culture mostly!) and am a self
					taught guitarist and bassist.{' '}
				</p>
				<p className={classes.paragraph}>
					I am very much open to freelance web work, so don't hesitate to
					<a
						href='mailto:joedigitalmedia@gmail.com'
						rel='noopener noreferrer'
						target='_blank'
					>
						{' '}
						contact me
					</a>
					.
				</p>
			</Grid>
			{/* TODO: Edit the sizes here? */}
			<Grid item sm={12} lg={3}>
				<img
					className={classes.profilePic}
					src='https://i.postimg.cc/hPQhjqMd/me-Profo-1ebe65f9.jpg'
					alt='Profile pic'
				/>
			</Grid>
		</Grid>
	</React.Fragment>
);

export default bio;
