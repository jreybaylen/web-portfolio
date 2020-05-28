import React from 'react'

import { Navbar, NavList, NavListItem, NavLink } from './styles'

function Header () {
    const headerElement = (
        <Navbar>
            <NavList>
                <NavListItem>
                    <NavLink href="#section-about">About</NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink href="#section-project">Project</NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink href="#section-experience">Experience</NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink href="#section-contacts">Contacts</NavLink>
                </NavListItem>
            </NavList>
        </Navbar>
    )

    return headerElement
}

export { Header }