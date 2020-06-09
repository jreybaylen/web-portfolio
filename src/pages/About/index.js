import React from 'react'

import { Skills } from './Skills'
import { Activities } from './Activities'
import { Testimonials } from './Testimonials'

import { Section, Container, Information, InformationHeading, InformationContent, BoldContent } from './styles'

function About () {
    const aboutElement = (
        <Section id="section-about" offsetTop={ 5 }>
            <Container>
                <Information>
                    <InformationHeading>Hi, I'm John Rey</InformationHeading>
                    <InformationContent>
                        Currently working as a Software Engineer focus on mobile app development.
                        I have more than 5 years of experience in web development specially in Front-End stuff.
                        I had an experienced in <BoldContent children="Front-End" />, <BoldContent children="Back-End" /> and <BoldContent children="Dev Ops" /> development.
                        When I have a free time, I read books and articles about programming, watch movies, play computer games and get involve to other stuff related to techonology.
                    </InformationContent>
                    <InformationContent noMarginBottom>
                        "Imagination is more important than knowledge. 
                        For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution" 
                    </InformationContent>
                    <InformationContent textRight noMarginBottom>- <BoldContent children="Albert Einstein" /></InformationContent>
                </Information>
                <Skills />
                <Testimonials />
                <Activities />
            </Container>
        </Section>
    )

    return aboutElement
}

export { About }