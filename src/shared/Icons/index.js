import React from 'react'

import { Mouse } from './Mouse'
import { Profile } from './Profile'

function SVGIcon ({ name, ...rest }) {
    if (name === 'profile') {
        return <Profile { ...rest } />
    }

    if (name === 'mouse') {
        return <Mouse { ...rest } />
    }
}

export { SVGIcon }