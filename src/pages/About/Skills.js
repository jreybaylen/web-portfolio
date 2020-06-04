import React from 'react'

import { skills } from './content'
import { Information, InformationHeading, InformationContent } from './styles'

function Skills () {
    const skillsElement = (
        <Information>
            <InformationHeading>Skills</InformationHeading>
            <InformationContent><code>{ JSON.stringify(skills, 0, 4) }</code></InformationContent>
        </Information>
    )

    return skillsElement
}

export { Skills }