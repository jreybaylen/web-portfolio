import React from 'react'

import { Header, Banner } from './components'
import { Project } from './pages'

function Portfolio () {
	const porfolioElement = (
		<React.Fragment>
			<Header />
			<Banner />
			<Project />
		</React.Fragment>
	)

	return porfolioElement
}

export { Portfolio }