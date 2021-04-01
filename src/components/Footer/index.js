import React from 'react'

import { SVGIcon } from '../../shared/Icons'

import styledComponentsGallery from '../../assets/images/footer/styled-components-logo.png'
import { Container, Content, CopyRight, AuthorName, FooterText, FooterImage, FooterSupport, Link } from './styles'

function Footer () {
    const currentDate = new Date()
    const footerElement = (
        <Container>
            <Content column>
                <FooterText>Libraries</FooterText>
                <FooterSupport>
                    <SVGIcon name="react" width="70" height="70" />
                    <FooterImage src={ styledComponentsGallery } />
                </FooterSupport>
            </Content>
            <Content column>
                <AuthorName><CopyRight>&copy; </CopyRight>{ currentDate.getFullYear() } John Rey M. Baylen</AuthorName>
                <FooterSupport column>
                    <FooterText>Developed and Designed by</FooterText>
                    <FooterText>
                        <Link href="https://github.com/jreybaylen" target="_blank">DevTools</Link>
                    </FooterText>
                </FooterSupport>
            </Content>
        </Container>
    )

    return footerElement
}

export { Footer }