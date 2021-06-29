import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './Components/Nav';

ReactDOM.render(
	<React.StrictMode>
		<Nav/>
    	<App/>
  	</React.StrictMode>,
  	document.getElementById('root')
);
reportWebVitals();