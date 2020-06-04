import React from 'react'

import { Ian } from './Ian'
import { Bjon } from './Bjon'
import { Mouse } from './Mouse'
import { Wesley } from './Wesley'
import { Michael } from './Michael'

function SVGIcon ({ name, ...rest }) {
    if (name === 'mouse') {
        return <Mouse { ...rest } />
    }

    if (name === 'bjon') {
        return <Bjon { ...rest } />
    }

    if (name === 'ian') {
        return <Ian { ...rest } />
    }

    if (name === 'michael') {
        return <Michael { ...rest } />
    }

    if (name === 'wesley') {
        return <Wesley { ...rest } />
    }
}

export { SVGIcon }