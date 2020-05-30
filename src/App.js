import React from 'react'

import { Header, Banner, Footer } from './components'
import { Projects, Experiences, Contacts } from './pages'

function Portfolio () {
	const porfolioElement = (
		<React.Fragment>
			<Header />
			<Banner />
			<Projects />
			<Experiences />
			<Contacts />
			<Footer />
		</React.Fragment>
	)

	return porfolioElement
}

export { Portfolio }