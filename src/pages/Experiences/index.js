import React from 'react'

import { ExperienceItem } from './ExperienceItem'

import { experiences } from './content'
import { Section, Label, ExperienceWrapper } from './styles'

function Experiences () {
    const hanleOpenURL = (url) => window.open(url)
    const experiencesElement = (
        <Section id="section-experience">
            <Label className="bg-text text-right">Experiences</Label>
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