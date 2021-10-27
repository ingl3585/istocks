import React from 'react';
// import Stocks from '../Stocks/Stocks';

const StockInfo = (props) => {
	//Got help from Liz and somehow we came up with this crazy way to get the index.
	// console.log(props.match.params.id);
	// props.stocks[0].name = stockArray[0].AppleInc
	return (
		<div>
			<p>Name: {props.stocks[props.match.params.id].name}</p>
			<p>Price: {props.stocks[props.match.params.id].lastPrice}</p>
		</div>
	);
};

export default StockInfo;
