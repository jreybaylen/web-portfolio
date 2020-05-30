import React from 'react'

import { Container, Content, CopyRight, AuthorName, AllRightsReserved } from './styles'

function Footer () {
    const currentDate = new Date()
    const footerElement = (
        <Container>
            <Content>
                <AuthorName><CopyRight>&copy; </CopyRight>{ currentDate.getFullYear() } John Rey M. Baylen.</AuthorName>
                <AllRightsReserved>All rights reserved.</AllRightsReserved>
            </Content>
        </Container>
    )

    return footerElement
}

export { Footer }