import React from 'react';
import classes from './PortfolioItem.module.css';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const PortfolioItem = props => {
	let modalElement = null;
	let weblink = null;
	let github = null;

	if (props.weblink) {
		weblink = (
			<Button
				variant='outlined'
				size='small'
				className={classes.weblink}
				href={props.weblink}
				target='blank'
			>
				LIVE
			</Button>
		);
	}

	if (props.github) {
		github = (
			<Button
				variant='outlined'
				size='small'
				className={classes.weblink}
				href={props.github}
				target='blank'
			>
				GITHUB
			</Button>
		);
	}

	return (
		<Grid item xs={12} md={4} lg={4}>
			<Card className={classes.root}>
				<CardActionArea onClick={props.clicked}>
					<CardMedia
						className={classes.media}
						image={props.image[0]}
						alt={props.alt[0]}
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='h2'>
							{props.title}
						</Typography>
						<Typography
							variant='body2'
							className={classes.desc}
							color='textSecondary'
							component='p'
						>
							{props.short}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions style={{ marginTop: 'auto' }}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							width: '100%',
						}}
					>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							<Avatar
								variant='rounded'
								className={classes.Type}
								style={{ marginRight: 8 }}
							>
								{props.type}
							</Avatar>
							<Avatar variant='rounded' className={classes[props.project]}>
								{props.project}
							</Avatar>
						</div>
						<div
							style={{
								marginTop: 'auto',
							}}
						>
							{weblink}
							{github}
							{modalElement}
						</div>
					</div>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default PortfolioItem;
