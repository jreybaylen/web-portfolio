import React from 'react'

import profileGallery from '../../assets/images/banner/profile.jpg'
import { Container, ProfilePhotoContainer, ProfilePhoto, Content, HeadLine, Description, BannerLink, ModifiedSVGIcon } from './styles'

function Banner () {
    const bannerElement = (
        <Container id="section-banner">
            <ProfilePhotoContainer>
                <ProfilePhoto src={ profileGallery } />
            </ProfilePhotoContainer>
            <Content distanceMultiplier={ 7 }>
                <HeadLine>Hi, I'm John Rey</HeadLine>
                <Description>Software Engineer, Front End and Mobile App Developer</Description>
            </Content>
            <BannerLink href="#section-about">
                <ModifiedSVGIcon className="bounce-infinite" name="mouse" width="50" height="50" />
            </BannerLink>
        </Container>
    )

    return bannerElement
}

export { Banner }