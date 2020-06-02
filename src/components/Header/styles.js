import Styled from 'styled-components'

const Navbar = Styled.nav`
    ${ ({ theme }) => theme.container };
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media only screen and (max-width: 414px) {
        display: none;
    }
`

const NavList = Styled.ul`
    display: flex;
    padding-left: 0;
`

const NavListItem = Styled.li`
    list-style: none;
    margin: 0 ${ ({ theme }) => theme.spacing / 2 }px;
`

const NavLink = Styled.a`
    color: #222;
    font-weight: 500;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

export { Navbar, NavList, NavListItem, NavLink }