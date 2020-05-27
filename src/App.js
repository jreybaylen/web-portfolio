import React from 'react'

import { Header, Banner } from './components'
import { Projects, Experiences } from './pages'

function Portfolio () {
	const porfolioElement = (
		<React.Fragment>
			<Header />
			<Banner />
			<Projects />
			<Experiences />
		</React.Fragment>
	)

	return porfolioElement
}

export { Portfolio }