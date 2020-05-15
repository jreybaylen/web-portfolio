import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { Portfolio } from './App'
import { theme } from './utils/theme'
import * as serviceWorker from './serviceWorker'

import './assets/styles/normalize.css'

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={ theme }>
			<Portfolio />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
