import React from 'react'

import { SVGIcon } from '../../shared/Icons'

import { skills } from './content'
import { Information, InformationHeading, SkillsList, SkillsListItem, InformationContent } from './styles'

function Skills () {
    const skillsElement = (
        <Information>
            <InformationHeading>Skills</InformationHeading>
            { skills && skills.map(
                ({ key, name, framework }) => (
                    <SkillsList key={ key }>
                        <SkillsListItem>{ name }</SkillsListItem>
                        { framework && framework.map(
                            ({ key: childKey, name, ...rest }) => (
                                <SkillsListItem flexItem key={ childKey }>
                                    <SVGIcon name={ rest.icon } width="50" height="50" />
                                    <InformationContent>{ name }</InformationContent>
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