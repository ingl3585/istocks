import './App.css';
import Home from '../Home/Home';
import Stocks from '../Stocks/Stocks';
import About from '../About/About';
import StockInfo from '../StockInfo/StockInfo';
import stockData from '../../stock-data';
import { Link, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
	let stocks = stockData;
	const [stock, setStock] = useState('');
	return (
		<div className='App'>
			<div className='container'>
				<nav>
					<Link to='/'>
						<div className='nav-item'>iStocks</div>
					</Link>
					<Link to='/stocks'>
						<div className='nav-item'>Stocks</div>
					</Link>
					<Link to='/about'>
						<div className='nav-item'>About</div>
					</Link>
				</nav>
				<main>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route
							path='/stocks'
							exact
							render={() => <Stocks stock={stock} setStock={setStock} />}
						/>
						<Route path='/about' exact component={About} />
						<Route
							path='/stocks/:symbol/:id'
							exact
							render={(stockProps) => (
								<StockInfo {...stockProps} stocks={stocks} />
							)}
						/>
					</Switch>
				</main>
			</div>
		</div>
	);
};

export default App;
