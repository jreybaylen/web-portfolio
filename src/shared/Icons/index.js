import React from 'react'

import { Mouse } from './Mouse'

function SVGIcon ({ name, ...rest }) {
    if (name === 'mouse') {
        return <Mouse { ...rest } />
    }
}

export { SVGIcon }