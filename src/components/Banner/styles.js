import Styled from 'styled-components'

import { SVGIcon } from '../../shared/Icons'

const Container = Styled.div`
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    ${ ({ theme }) => theme.container };
    margin-top: 10%;
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
    bottom: 0;
    display: flex;
    position: absolute;
    justify-content: center;
`

export { Container, ProfilePhotoContainer, ProfilePhoto, Content, HeadLine, Description, ModifiedSVGIcon, BannerLink }