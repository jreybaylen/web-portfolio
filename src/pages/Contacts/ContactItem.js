import React from 'react'

import { ItemContainerListItem, ItemGalleryContainer, ItemGallery, ItemDescription } from './styles'

function ContactItem (props) {
    const { item, onClick } = props
    const handleOpenURL = () => onClick(item.url)
    const contactItemElement = (
        <ItemContainerListItem onClick={ handleOpenURL }>
            <ItemGalleryContainer>
                <ItemGallery src={item.gallery} />
            </ItemGalleryContainer>
            <ItemDescription>{ item.title }</ItemDescription>
        </ItemContainerListItem>
    )

    return contactItemElement
}

export { ContactItem }