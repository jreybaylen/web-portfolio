import React from 'react'

import { SVGIcon } from '../../shared/Icons'
import { Container, Content, HeadLine, Description, ModifiedSVGIcon } from './styles'

function Banner () {
    const bannerElement = (
        <Container>
            <Content>
                <HeadLine>Hi, I'm John Rey</HeadLine>
                <Description>Software Engineer, Front End and Mobile App Developer</Description>
            </Content>
            <Content distanceMultiplier={ 3 }>
                <SVGIcon name="profile" width="200" height="200" />
            </Content>
            <ModifiedSVGIcon name="mouse" width="50" height="50" />
        </Container>
    )

    return bannerElement
}

export { Banner }