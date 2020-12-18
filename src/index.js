import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { Portfolio } from './App'
import { theme } from './utils/theme'
import * as serviceWorker from './serviceWorker'

import './assets/styles/add-on.css'
import './assets/styles/normalize.css'

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={ theme }>
			<Portfolio />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

serviceWorker.register()
