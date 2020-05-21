import Styled from 'styled-components'

const Container = Styled.section`
    ${ ({ theme }) => theme.container };
    margin-top: ${ ({ theme }) => theme.spacing * 3 }px;
`

const ContainerItemContainer = Styled.ul`
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`

const ContainerItem = Styled.li`
    flex: 1 0 25%;
    cursor: pointer;
    list-style: none;
    overflow: hidden;
    border-radius: 5px;
    margin: ${ ({ theme }) => theme.spacing }px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.15);

    &:hover {
        box-shadow: 0px 20px 80px 0px rgba(18, 43, 80, 0.2);

        img {
            opacity: 0.8;
        }
    }
`

const ContainerItemGallery = Styled.img`
    width: 100%;
    display: block;
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

export { Container, ContainerItemContainer, ContainerItem, ContainerItemGallery, ContainerItemContent, ItemContentHeading, ItemContentTimeStamp }