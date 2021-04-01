import React from 'react'

import { Modal } from './Modal'
import { Skills } from './Skills'
import { Activities } from './Activities'
import { Testimonials } from './Testimonials'

import { Section, Container, Information, InformationHeading, InformationContent, BoldContent } from './styles'

function About () {
    const [ imageSrc, setImageSrc ] = React.useState(null)
    const handleShowImage = (url) => url && setImageSrc(url)
    const handleResetImage = () => setImageSrc(null)

    React.useEffect(() => {
        const bodyClassList = document.body.classList
        
        imageSrc ? bodyClassList.add('remove-scroll') : bodyClassList.remove('remove-scroll')
    }, [ imageSrc ])

    const aboutElement = (
        <Section id="section-about" offsetTop={ 5 }>
            <Modal imageSrc={ imageSrc } onReset={ handleResetImage } />
            <Container>
                <Information>
                    <InformationHeading>Hi, I'm John Rey</InformationHeading>
                    <InformationContent textJustify>
                        Lead Software Engineer focused on mobile app development using cross-platform technology such as&nbsp;
                        <BoldContent>React Native</BoldContent>, <BoldContent>Ionic React</BoldContent>, and <BoldContent>Capacitor</BoldContent>.
                    </InformationContent>
                    <InformationContent textJustify>
                        Watching movies, playing games and programming are my hobbies
                    </InformationContent>
                    <InformationContent textJustify noMarginBottom>
                        "Imagination is more important than knowledge.
                        For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution" 
                    </InformationContent>
                    <InformationContent textRight noMarginBottom>- <BoldContent children="Albert Einstein" /></InformationContent>
                </Information>
                <Skills />
                <Testimonials />
                <Activities onShowImage={ handleShowImage } />
            </Container>
        </Section>
    )

    return aboutElement
}

export { About }