import React from 'react'

import { SVGIcon } from '../../shared/Icons'

import { Container, ProfilePhotoContainer, Content, HeadLine, Description, BannerLink, ModifiedSVGIcon } from './styles'

function Banner () {
    const bannerElement = (
        <Container id="section-banner">
            <ProfilePhotoContainer>
                <SVGIcon name="programmer" width="200" height="200" />
            </ProfilePhotoContainer>
            <Content distanceMultiplier={ 7 }>
                <HeadLine>Hi, I'm John Rey</HeadLine>
                <Description>Software Engineer, Mobile App and Front End Developer</Description>
            </Content>
            <BannerLink href="#section-about">
                <ModifiedSVGIcon className="bounce-infinite" name="mouse" width="50" height="50" />
            </BannerLink>
        </Container>
    )

    return bannerElement
}

export { Banner }