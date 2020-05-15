import React from 'react'

import { Navbar, NavList, NavListItem, NavLink } from './styles'

function Header () {
    const headerElement = (
        <Navbar>
            <NavList>
                <NavListItem>
                    <NavLink href="#">About</NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink href="#">Project</NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink href="#">Experience</NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink href="#">Contact</NavLink>
                </NavListItem>
            </NavList>
        </Navbar>
    )

    return headerElement
}

export { Header }