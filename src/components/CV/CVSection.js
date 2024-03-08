import React from 'react';
import Grid from '@mui/material/Grid';
import classes from './CVSection.module.css';
import Card from '@mui/material/Card';

const CV = props => {
	return (
		<React.Fragment>
			<Grid item xs={12} sm={6} lg={4} spacing={4} className={classes.cvSection}>
				<Card className={classes.Segment}>
					{props.CVIcon}
					{props.CVRole ? <h3 className='mt-2'> {props.CVRole} </h3> : null}
					{props.CVLocation ? (
						<h4 className='mt-4'> {props.CVLocation} </h4>
					) : null}
					{props.CVDate ? <h4 className='mt-2'> {props.CVDate} </h4> : null}
					{props.CVDesc ? (
						<p className={(classes.CVDesc, 'mt-4')}> {props.CVDesc} </p>
					) : null}

					{/* TODO: Make this an array instead */}
					{props.CVSkills ? (
						<div className='mt-5'>
							<h4>{props.CVSkills}</h4>
							{props.CVSkillLevel}{' '}
						</div>
					) : null}

					{props.CVSkills2 ? (
						<div className='mt-3'>
							<h4>{props.CVSkills2}</h4> {props.CVSkillLevel2}
						</div>
					) : null}

					{props.CVSkills3 ? (
						<div className='mt-3'>
							<h4>{props.CVSkills3}</h4> {props.CVSkillLevel3}
						</div>
					) : null}

					{props.CVSkills4 ? (
						<div className='mt-3'>
							<h4>{props.CVSkills4}</h4> {props.CVSkillLevel4}
						</div>
					) : null}
				</Card>
			</Grid>
		</React.Fragment>
	);
};

export default CV;
