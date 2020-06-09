import React from 'react'

import { ProjectItem } from './ProjectItem'

import { projects } from './content'
import { Section, Label, ContainerItemContainer } from './styles'

function Projects () {
    const hanleOpenURL = (url) => window.open(url)
    const projectElement = (
        <Section id="section-project">
            <Label className="bg-text text-left">Projects</Label>
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