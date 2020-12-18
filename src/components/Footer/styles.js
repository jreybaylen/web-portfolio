import Styled from 'styled-components'

const Container = Styled.footer`
    background-color: #2d3237;
    padding: ${ ({ theme }) => theme.spacing }px 0;
`

const Content = Styled.div`
    display: flex;
    color: #a3a3a3;
    justify-content: center;
    ${ ({ theme }) => theme.container };
    flex-direction: ${ ({ column }) => column ? 'column' : 'row' };

    @media only screen and (max-width: 500px) {
        flex-direction: column;
    }
`

const CopyRight = Styled.span`
    top: 1px;
    position: relative;
`

const AuthorName = Styled.p`
    margin-bottom: 0;
    text-align: center;
`

const FooterText = Styled.p`
    margin-left: 5px;
    font-size: 90%;
    text-align: center;
    
    @media only screen and (max-width: 500px) {
        margin-top: 8px;
        text-align: center;
    }
`

const FooterImage = Styled.img`
    heght: 70px;
    width: 70px;
`

const FooterSupport = Styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-bottom: ${ ({ theme }) => theme.spacing }px;
    margin-top: ${ ({ theme }) => theme.spacing / 2 }px;

    & > img {
        margin-left: ${ ({ theme }) => theme.spacing }px;
    }

    @media only screen and (max-width: 414px) {
        ${ ({ column }) => column && `
            flex-direction: column;
            
            & > p:first-of-type {
                margin-bottom: 0;
            }
        ` };
    }
`

const Link = Styled.a`
    color: #a3a3a3;
    font-weight: 600;
    text-decoration: none;

    &:hover {
        color: #e2e0e0;
    }
`

export { Container, Content, CopyRight, AuthorName, FooterText, FooterImage, FooterSupport, Link }