import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/*new Function() {
	return (
			<h1> Hello World </h1>
		)
}*/

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
