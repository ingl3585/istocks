import React from 'react';
import stockData from '../../stock-data';
import { Link } from 'react-router-dom';

// Additional help from Liz here with using index.

const Stocks = (props) => {
	let stockList = stockData.map((item, idx) => {
		return (
			<div className='stocks' key={idx}>
				<ul>
					<Link to={'stocks/' + item.symbol + '/' + idx}>
						<li>{item.name}</li>
					</Link>
				</ul>
			</div>
		);
	});
	return <div>{stockList}</div>;
};

export default Stocks;
