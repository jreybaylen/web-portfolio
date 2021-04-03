import React from 'react'

import {
    ExperienceItemContainer,
    ItemContainerGalleryContainer,
    ItemContainerGallery,
    DescriptionCompany,
    ItemContainerDescriptionContainer,
    ItemContainerDescriptionInnerContainer,
    DescriptionDuration,
    DescriptionJobTitle,
    DescriptionJob,
    DescriptionJobItem
} from './styles'

function ExperienceItem(props) {
    const { item, position, onClick } = props
    const hanleOpenURL = () => onClick(item.url)
    const jobInformationLength = item.jobInformation.length - 1
    const experienceItemElement = (
        <ExperienceItemContainer position={ position } onClick={ hanleOpenURL }>
            <ItemContainerGalleryContainer>
                <ItemContainerGallery src={ item.gallery } />
                <DescriptionCompany>{ item.title }</DescriptionCompany>
            </ItemContainerGalleryContainer>
            <ItemContainerDescriptionContainer>
                { item.jobInformation.map(
                    ({ key, title, description, ...rest }, index) => {
                        const isLastItem = jobInformationLength !== index
                        const parentKey = `${ item.key }-${ index }-${ key }`

                        return (
                            <ItemContainerDescriptionInnerContainer lastItem={ isLastItem } key={ parentKey }>
                                <DescriptionJobTitle>{ title }</DescriptionJobTitle>
                                <DescriptionDuration>{ rest.time }</DescriptionDuration>
                                <DescriptionJob lastItem={ !isLastItem }>
                                    <DescriptionJobItem>Job Description</DescriptionJobItem>
                                    { description && description.map(
                                        (jobDescription) => (
                                            <DescriptionJobItem key={ `jd-${ jobDescription }` }>
                                                { jobDescription }
                                            </DescriptionJobItem>
                                        )
                                    ) }
                                </DescriptionJob>
                            </ItemContainerDescriptionInnerContainer>
                        )
                    }
                ) }
            </ItemContainerDescriptionContainer>
        </ExperienceItemContainer>
    )

    return experienceItemElement
}

export { ExperienceItem }