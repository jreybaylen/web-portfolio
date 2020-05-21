import React from 'react'

import { ContainerItem, ContainerItemGallery, ContainerItemContent, ItemContentHeading, ItemContentTimeStamp } from './styles'

function ProjectItem (props) {
    const { item } = props
    const hanleOpenURL = () => window.open(item.url)
    const projectItemElement = (
        <ContainerItem onClick={ hanleOpenURL }>
            <ContainerItemGallery src={ item.gallery } />
            <ContainerItemContent>
                <ItemContentHeading>{ item.title }</ItemContentHeading>
                <ItemContentTimeStamp>{ item.time }</ItemContentTimeStamp>
            </ContainerItemContent>
        </ContainerItem>
    )

    return projectItemElement
}

export { ProjectItem }