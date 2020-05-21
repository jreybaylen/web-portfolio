import React from 'react'

import { ProjectItem } from './ProjectItem'

import { projects } from './content'
import { Container, ContainerItemContainer } from './styles'

function Project () {
    const projectElement = (
        <Container id="section-project">
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