import Styled from 'styled-components'

const Section = Styled.section`
    ${ ({ theme }) => theme.container };
    padding: ${ ({ theme }) => theme.spacing * 3 }px 0;
`

const ItemContainerList = Styled.ul`
    display: flex;
    padding-left: 0;
    flex-direction: row;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
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
        box-shadow: 0px 20px 80px 0px rgba(18, 43, 80, 0.2);
    }

    &:hover {
        box-shadow: 0px 20px 80px 0px rgba(18, 43, 80, 0.2);
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
    font-weight: bold;
    text-align: center;
`

export {
    Section,
    ItemContainerList,
    ItemContainerListItem,
    ItemGalleryContainer,
    ItemGallery,
    ItemDescription
}