import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const modal = props => {
	return (
		<React.Fragment>
			<Backdrop show={props.show} clicked={props.modalClosed} />
			<Card>
				<CardContent>
					<div
						className={classes.Modal}
						style={{
							opacity: props.show ? '1' : '0',
						}}
					>
						{props.children}
					</div>
				</CardContent>
			</Card>
		</React.Fragment>
	);
};

export default React.memo(
	modal,
	(prevProps, nextProps) =>
		nextProps.show === prevProps.show && nextProps.children === prevProps.children,
);
