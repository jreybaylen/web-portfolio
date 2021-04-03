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

const ItemContainerList = Styled.ul`
    display: flex;
    padding-left: 0;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${ ({ theme }) => theme.spacing * 4 }px;

    @media only screen and (max-width: 768px) {
        margin-top: 0;
        flex-direction: column;
    }
`

const ItemContainerListItem = Styled.li`
    flex: 1 0 20%;
    cursor: pointer;
    list-style: none;
    border-radius: 5px;
    transition: ${ ({ theme }) => theme.transition };
    padding: ${ ({ theme }) => theme.spacing * 2 }px 0;

    @media only screen and (max-width: 768px) {
        width: 50%;
        margin: ${ ({ theme }) => theme.spacing }px auto;
        box-shadow: 0px 20px 80px 0px #122b5033;
    }

    @media only screen and (max-width: 500px) {
        width: 80%;
    }

    &:hover {
        box-shadow: 0px 20px 80px 0px #122b5033;
    }
`

const ItemGalleryContainer = Styled.div`
    width: 100%;
    margin: auto;
    max-width: 100px;
`

const ItemGallery = Styled.img`
    width: 100%;
    display: block;
    min-width: 100px;
`

const ItemDescription = Styled.h3`
    margin-bottom: 0;
    font-weight: 500;
    text-align: center;
`

export {
    Section,
    Label,
    ItemContainerList,
    ItemContainerListItem,
    ItemGalleryContainer,
    ItemGallery,
    ItemDescription
}