import Styled from 'styled-components'

const Section = Styled.section`
    position: relative;
    ${ ({ theme }) => theme.container };
    padding: ${ ({ theme }) => theme.spacing * 3 }px 0;

    @media only screen and (max-width: 769px) {
        padding: ${ ({ theme }) => theme.spacing }px 0;
    }
`

const Label = Styled.div``

const ContainerItemContainer = Styled.ul`
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0;

    @media only screen and (max-width: 769px) {
        margin-top: 0;
    }
`

const ContainerItem = Styled.li`
    flex: 1 0 25%;
    cursor: pointer;
    list-style: none;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0 2px 5px 0 #00000026;
    margin: ${ ({ theme }) => theme.spacing }px;
    transition: ${ ({ theme }) => theme.transition };

    @media only screen and (max-width: 768px) {
        flex: 1 0 50%;
        margin: 0 ${ ({ theme, lastItem }) => `${ theme.spacing }px ${ lastItem ? 0 : theme.spacing }px` };
    }

    @media only screen and (max-width: 600px) {
        flex: 1 0 85%;
    }

    &:hover {
        box-shadow: 0px 20px 80px 0px #122b5033;

        img {
            opacity: 0.8;
            box-shadow: none;
        }
    }
`

const ContainerItemGallery = Styled.img`
    width: 100%;
    display: block;
    box-shadow: 0 4px 8px 0 #00000033;
`

const ContainerItemContent = Styled.div`
    padding: 0 ${ ({ theme }) => theme.spacing }px;
`

const ItemContentHeading = Styled.h3`
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 0;
`

const ItemContentTimeStamp = Styled.p`
    font-size: 90%;
    color: #6e6e6e;
`

export {
    Section,
    Label,
    ContainerItemContainer,
    ContainerItem,
    ContainerItemGallery,
    ContainerItemContent,
    ItemContentHeading,
    ItemContentTimeStamp
}