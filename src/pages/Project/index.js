import React from 'react'

import { ProjectItem } from './ProjectItem'

import { projects } from './content'
import { theme } from '../../utils/theme'
import { Container, ContainerItemContainer } from './styles'

function Project () {
    const projectElement = (
        <Container style={{ marginTop: theme.spacing * 5 }} id="section-project">
            <ContainerItemContainer>
                { projects && projects.map(
                    (project) => <ProjectItem key={ project.key } item={project} />
                ) }
            </ContainerItemContainer>
        </Container>
    )

    return projectElement
}

export { Project }