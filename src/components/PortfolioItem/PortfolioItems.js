import React, { useState, useEffect } from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem.js';
// import AllData from '../../JSON/allData.json';
import Grid from '@mui/material/Grid';
import classes from './PortfolioItems.module.css';
import Button from '@mui/material/Button';
import Grow from '@mui/material/Grow';
import CircularProgress from '@mui/material/CircularProgress';

const PortfolioItems = props => {
	const [myData, setMyData] = useState([]);
	const [allData, setAllData] = useState([]);
	const [allActive, setAllActive] = useState('isActive');
	const [webActive, setWebActive] = useState(' ');
	const [visualActive, setVisualActive] = useState(' ');
	const [checked, setChecked] = useState(true);
	const [imgNum, setImgNum] = useState(0);
	const [currNum, setCurrNum] = useState(0);

	const apiKey = '$2a$10$.i6OSz1qYvSb5dL/lQcQq.GbRKV/Wsw7gxMtxCLnH8GZ7JxChtmHS';

	const apiUrl = `https://api.jsonbin.io/v3/b/${process.env.REACT_APP_BIN_ID}`;
	//api.jsonbin.io/v3/b/65eb4a2c1f5677401f3a62df

	console.log('process.env', process.env.REACT_APP_BIN_API_KEY);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// fetch(
		// 	'https://gist.githubusercontent.com/JoeyBuddy27/e51011f79549928819694e1fca0a9b24/raw/0cde0f8ff5f4ce76af83657426fd1add87bd4792/portfolio-data.json',
		// )
		// 	.then(response => response.json())
		// 	.then(data => {
		// 		console.log('data', data);
		// 		setAllData(data);
		// 		setMyData(data);
		// 	})
		// 	.catch(err => console.error(err));

		fetch(apiUrl, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'X-Access-Key': apiKey,
				'Access-Control-Allow-Origin': '*',
			},
		})
			.then(response => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				return response.json();
			})
			.then(data => {
				setAllData(data?.record);
				setMyData(data?.record);
				setLoading(false);

				// Handle the data as needed
			})
			.catch(error => {
				console.error('Error fetching data:', error);
				setLoading(false);
			});
	}, []);

	useEffect(() => {}, [webActive, visualActive, allActive]);

	const fadeHandler = () => {
		setChecked(false);
		setTimeout(() => {
			setChecked(true);
		}, 600);
	};

	const updateData = (newData, all, web, visual) => {
		fadeHandler();
		if (newData === 'all') {
			setMyData(allData);
		} else {
			console.log(allData);
			setMyData(() => allData.filter(data => data.tag.includes(newData)));
		}
		setAllActive(all);
		setWebActive(web);
		setVisualActive(visual);

		setCurrNum(0);
		setImgNum(0);
	};

	let portfolioGrid = (
		<Grow in={checked} timeout={500}>
			<Grid container spacing={3}>
				{loading && (
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							alignSelf: 'center',
							flex: 1,
						}}
					>
						<CircularProgress />
						<h3 style={{ marginTop: '16px' }}> Fetching Data</h3>
					</div>
				)}
				{myData
					?.filter(item => !item.hide)
					?.map((postData, index) => (
						<>
							<PortfolioItem
								key={postData?.title}
								number={index}
								title={postData.title}
								short={postData.short}
								full={postData.full}
								image={postData.image}
								tag={postData.tag.join(' ')}
								type={postData.type}
								weblink={postData.link}
								github={postData.github}
								project={postData.project}
								alt={postData.alt}
								clicked={() => {
									setCurrNum(index);
									setImgNum(0);
									window.scrollTo({
										top: 0,
										left: 0,
										behavior: 'smooth',
									});
								}}
							/>
						</>
					))}
			</Grid>
		</Grow>
	);

	const nextPostHandler = id => {
		if (id >= myData.length - 1) {
			setCurrNum(0);
		} else {
			setCurrNum(id + 1);
			setImgNum(0);
		}
	};

	const prevPostHandler = id => {
		setCurrNum(id - 1);
		setImgNum(0);
	};

	const changeImg = id => {
		setImgNum(id);
	};

	// TODO: Replace this with a modal (TBC)
	const fullPost = id => {
		let currPortfolioNum;
		currPortfolioNum = id;

		// return (
		// 	<div>
		// 		<FullPortfolio
		// 			id={myData[id]?.no}
		// 			currNum={currNum}
		// 			title={myData[currPortfolioNum].title}
		// 			short={myData[currPortfolioNum].short}
		// 			image={myData[currPortfolioNum].image[imgNum]}
		// 			imageLength={myData[currPortfolioNum].image.length}
		// 			type={myData[currPortfolioNum].type}
		// 			project={myData[currPortfolioNum].project}
		// 			full={myData[currPortfolioNum].full}
		// 			nextPost={() => nextPostHandler(currNum)}
		// 			prevPost={() => prevPostHandler(currNum)}
		// 			nextImg={() => changeImg(imgNum + 1)}
		// 			prevImg={() => changeImg(imgNum - 1)}
		// 			imgNum={imgNum}
		// 			alt={myData[currPortfolioNum].alt}
		// 			length={myData.length}
		// 			weblink={myData[currPortfolioNum].link}
		// 			github={myData[currPortfolioNum].github}
		// 		/>
		// 	</div>
		// );
	};

	return (
		<React.Fragment>
			<div style={{ marginLeft: 8, marginRight: 8 }}>
				<div className={classes.PortfolioCategories}>
					<Button
						className={classes[allActive]}
						onClick={() => updateData('all', 'isActive')}
					>
						All
					</Button>
					<Button
						className={classes[webActive]}
						onClick={() => updateData('web', '', 'isActive')}
					>
						Web
					</Button>
					<Button
						className={classes[visualActive]}
						onClick={() => updateData('visual', '', '', 'isActive')}
					>
						Visual
					</Button>
				</div>
				<Grid container className='mt-5'>
					{/* <Grid item sm={12} md={5} className={classes.Center}>
					{fullPost(currNum)}
				</Grid> */}

					{/* <Grid item sm={12}> */}
					{portfolioGrid}
					{/* </Grid> */}
				</Grid>
			</div>
		</React.Fragment>
	);
};

export default PortfolioItems;
