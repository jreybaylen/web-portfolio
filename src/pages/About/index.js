import React from 'react'

import { Testimonials } from './Testimonials'

import { Section, Container, Information, InformationHeading, InformationContent } from './styles'

function About () {
    const aboutElement = (
        <Section id="section-about" offsetTop={ 5 }>
            <Container>
                <Information>
                    <InformationHeading>Hi, I'm John Rey</InformationHeading>
                    <InformationContent>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Odit alias necessitatibus asperiores enim vel explicabo consequuntur quis nemo cupiditate fuga?
                        Voluptas incidunt minus odio sint molestiae delectus quos eum quis.
                    </InformationContent>
                </Information>
                <Information>
                    <InformationHeading>Activities</InformationHeading>
                    <InformationContent>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Odit alias necessitatibus asperiores enim vel explicabo consequuntur quis nemo cupiditate fuga?
                        Voluptas incidunt minus odio sint molestiae delectus quos eum quis.
                    </InformationContent>
                </Information>
                <Information>
                    <InformationHeading>Skills</InformationHeading>
                    <InformationContent>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Odit alias necessitatibus asperiores enim vel explicabo consequuntur quis nemo cupiditate fuga?
                        Voluptas incidunt minus odio sint molestiae delectus quos eum quis.
                    </InformationContent>
                </Information>
                <Testimonials />
            </Container>
        </Section>
    )

    return aboutElement
}

export { About }