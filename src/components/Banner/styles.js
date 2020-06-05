import Styled from 'styled-components'

import { SVGIcon } from '../../shared/Icons'

const Container = Styled.div`
    ${ ({ theme }) => theme.container };
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: ${ ({ theme }) => theme.spacing * 5 }px;

    @media only screen and (max-width: 600px) {
        margin-top: ${ ({ theme }) => theme.spacing * 2 }px;
    }
`

const ProfilePhotoContainer = Styled.div`
    margin-bottom: ${ ({ theme }) => theme.spacing }px;
`

const ProfilePhoto = Styled.img`
    width: 100%;
    display: block;
`

const Content = Styled.div`
    margin-bottom: ${ ({ theme, distanceMultiplier }) => theme.spacing * (distanceMultiplier || 1)}px;
`

const HeadLine = Styled.h1`
    font-size: 300%;
    font-weight: 600;
    text-align: center;
`

const Description = Styled.h2`
    line-height: 1.5;
    text-align: center;
`

const ModifiedSVGIcon = Styled(SVGIcon)`
    opacity: 0.7;
    cursor: pointer;
    transition: ${ ({ theme }) => theme.transition };

    &:hover {
        opacity: 1;
    }
`

const BannerLink = Styled.a`
    display: flex;
    justify-content: center;
`

export { Container, ProfilePhotoContainer, ProfilePhoto, Content, HeadLine, Description, ModifiedSVGIcon, BannerLink }