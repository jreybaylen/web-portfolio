import Styled from 'styled-components'

const Container = Styled.footer`
    background-color: #2d3237;
    padding: ${ ({ theme }) => theme.spacing }px 0;
`

const Content = Styled.div`
    display: flex;
    color: #a3a3a3;
    flex-direction: row;
    justify-content: center;
    ${ ({ theme }) => theme.container };

    @media only screen and (max-width: 500px) {
        flex-direction: column;
    }
`

const CopyRight = Styled.span`
    top: 1px;
    position: relative;
`

const AuthorName = Styled.p`
    margin-right: 5px;

    @media only screen and (max-width: 500px) {
        margin-bottom: 0;
        text-align: center;
    }
`

const AllRightsReserved = Styled.p`
    @media only screen and (max-width: 500px) {
        margin-top: 8px;
        text-align: center;
    }
`

export { Container, Content, CopyRight, AuthorName, AllRightsReserved }