import React from 'react'

import { ProjectItem } from './ProjectItem'

import { projects } from './content'
import { theme } from '../../utils/theme'
import { Section, ContainerItemContainer } from './styles'

function Projects () {
    const hanleOpenURL = (url) => window.open(url)
    const projectElement = (
        <Section offsetTop={ theme.spacing * 5 } id="section-project">
            <ContainerItemContainer>
                { projects && projects.map(
                    (project) => (
                        <ProjectItem
                            item={ project }
                            key={ project.key }
                            onClick={ hanleOpenURL }
                        />
                    )
                ) }
            </ContainerItemContainer>
        </Section>
    )

    return projectElement
}

export { Projects }