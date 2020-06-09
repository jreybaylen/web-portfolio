import React from 'react'

import { activies } from './content'
import {
    Information,
    InformationHeading,
    InformationHeadingActivities,
    InformationContent,
    ActivityGalleryList,
    ActivityGalleryListItem,
    ActivityGallery
} from './styles'

function Activities (props) {
    const { onShowImage } = props
    const activitiesElement = (
        <Information>
            <InformationHeading>Activities</InformationHeading>
            <InformationContent>Bonding with my family, special one and friends during free time</InformationContent>
            { activies && activies.map(
                ({ name, description, key, ...rest }) => (
                    <React.Fragment key={ key }>
                        <InformationHeadingActivities>{ name }</InformationHeadingActivities>
                        <ActivityGalleryList>
                            { rest.gallery && rest.gallery.map(
                                (photo, index) => {
                                    const handleImageClick = () => onShowImage(photo)

                                    return (
                                        <ActivityGalleryListItem key={ `${ index }-${ photo }` }>
                                            <ActivityGallery onClick={ handleImageClick } src={ photo } />
                                        </ActivityGalleryListItem>
                                    )
                                }
                            ) }
                        </ActivityGalleryList>
                    </React.Fragment>
                )
            ) }
        </Information>
    )

    return activitiesElement
}

export { Activities }