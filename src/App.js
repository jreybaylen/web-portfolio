import React from 'react'

import { Header, Banner } from './components'

function Portfolio () {
	const porfolioElement = (
		<React.Fragment>
			<Header />
			<Banner />
		</React.Fragment>
	)

	return porfolioElement
}

export { Portfolio }