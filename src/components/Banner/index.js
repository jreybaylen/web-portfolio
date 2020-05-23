import React from 'react'

import { SVGIcon } from '../../shared/Icons'
import { Container, Content, HeadLine, Description, BannerLink, ModifiedSVGIcon } from './styles'

function Banner () {
    const bannerElement = (
        <Container id="section-banner">
            <Content>
                <HeadLine>Hi, I'm John Rey</HeadLine>
                <Description>Software Engineer, Front End and Mobile App Developer</Description>
            </Content>
            <Content distanceMultiplier={ 5 }>
                <SVGIcon name="profile" width="200" height="200" />
            </Content>
            <BannerLink href="#section-project">
                <ModifiedSVGIcon className="bounce-infinite" name="mouse" width="50" height="50" />
            </BannerLink>
        </Container>
    )

    return bannerElement
}

export { Banner }