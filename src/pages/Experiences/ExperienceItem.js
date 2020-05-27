import React from 'react'

import {
    ExperienceItemContainer,
    ItemContainerGalleryContainer,
    ItemContainerGallery,
    DescriptionCompany,
    ItemContainerDescriptionContainer,
    DescriptionDuration,
    DescriptionJobTitle,
    DescriptionJob,
    DescriptionJobItem
} from './styles'

function ExperienceItem(props) {
    const { item, position, onClick } = props
    const hanleOpenURL = () => onClick(item.url)
    const experienceItemElement = (
        <ExperienceItemContainer position={ position } onClick={ hanleOpenURL }>
            <ItemContainerGalleryContainer>
                <ItemContainerGallery src={ item.gallery } />
                <DescriptionCompany>{ item.title }</DescriptionCompany>
            </ItemContainerGalleryContainer>
            <ItemContainerDescriptionContainer>
                <DescriptionJobTitle>{ item.jobTitle }</DescriptionJobTitle>
                <DescriptionDuration>{ item.time }</DescriptionDuration>
                <DescriptionJob>
                    <DescriptionJobItem>Job Description</DescriptionJobItem>
                    { item.jobDescription && item.jobDescription.map(
                        (jobDescription) => <DescriptionJobItem key={ `jd-${ jobDescription }` }>{ jobDescription }</DescriptionJobItem>
                    ) }
                </DescriptionJob>
            </ItemContainerDescriptionContainer>
        </ExperienceItemContainer>
    )

    return experienceItemElement
}

export { ExperienceItem }