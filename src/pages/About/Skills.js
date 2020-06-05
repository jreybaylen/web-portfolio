import React from 'react'

import { SVGIcon } from '../../shared/Icons'

import { skills } from './content'
import { Information, InformationHeading, SkillsList, SkillsListItem, InformationContent, ListItemContainer, ProgressBar } from './styles'

function Skills () {
    const skillsElement = (
        <Information>
            <InformationHeading>Skills</InformationHeading>
            <InformationContent>The skills listed below are not specific. I'll let you know all of my skills</InformationContent>
            { skills && skills.map(
                ({ key, name, framework }) => (
                    <SkillsList key={ key }>
                        <SkillsListItem>{ name }</SkillsListItem>
                        { framework && framework.map(
                            ({ key: childKey, name, ...rest }) => (
                                <SkillsListItem flexItem key={ childKey }>
                                    <ListItemContainer position="left">
                                        <SVGIcon name={ rest.icon } width="50" height="50" />
                                        <InformationContent>{ name }</InformationContent>
                                    </ListItemContainer>
                                    <ListItemContainer position="right">
                                        <ProgressBar percent={ rest.percent }>{ rest.percent }%</ProgressBar>
                                    </ListItemContainer>
                                </SkillsListItem>
                            )
                        ) }
                    </SkillsList>
                )
            ) }
        </Information>
    )

    return skillsElement
}

export { Skills }