import React from 'react'

import { ExperienceItem } from './ExperienceItem'

import { experiences } from './content'
import { Section, ExperienceWrapper } from './styles'

function Experiences () {
    const hanleOpenURL = (url) => window.open(url)
    const experiencesElement = (
        <Section id="section-experience">
            <ExperienceWrapper>
                { experiences && experiences.map(
                    (experience, i) => (
                        <ExperienceItem 
                            item={ experience }
                            key={ experience.key }
                            onClick={ hanleOpenURL }
                            position={ i % 2 === 0 ? 'left' : 'right' }
                        />
                    )
                ) }
            </ExperienceWrapper>
        </Section>
    )

    return experiencesElement
}

export { Experiences }