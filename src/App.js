import React from 'react'

import { Header, Banner, Footer } from './components'
import { About, Projects, Experiences, Contacts } from './pages'

function Portfolio () {
	const porfolioElement = (
		<React.Fragment>
			<Header />
			<Banner />
			<About />
			<Projects />
			<Experiences />
			<Contacts />
			<Footer />
		</React.Fragment>
	)

	return porfolioElement
}

export { Portfolio }