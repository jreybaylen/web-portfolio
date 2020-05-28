import Styled from 'styled-components'

const Section = Styled.section`
    background: #efefef;
    padding: ${ ({ theme }) => theme.spacing * 3 }px 0;
`

const ExperienceWrapper = Styled.div`
    ${ ({ theme }) => theme.container };
`

const ExperienceItemContainer = Styled.div`
    width: 65%;
    display: flex;
    cursor: pointer;
    background: #fff;
    border-radius: 10px;
    flex-direction: row;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.15);
    padding: ${ ({ theme }) => theme.spacing }px;
    transition: ${ ({ theme }) => theme.transition };
    margin-bottom: ${ ({ theme }) => theme.spacing }px;
    ${ ({ position }) => position === 'right' && 'margin-left: auto' };

    @media only screen and (max-width: 768px) {
        width: 100%;
    }

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
    
    &:hover {
        box-shadow: 0px 20px 80px 0px rgba(18, 43, 80, 0.2);
    }
`

const ItemContainerGalleryContainer = Styled.div`
    width: 100%;
    padding: 3px;
    display: flex;
    max-width: 200px;
    align-items: center;
    flex-direction: column;
    margin-right: ${ ({ theme }) => theme.spacing }px;

    @media only screen and (max-width: 600px) {
        max-width: none;
    }
`

const ItemContainerGallery = Styled.img`
    width: 100px;
`

const DescriptionCompany = Styled.h3`
    font-weight: 600;
    line-height: 1.5;
    text-align: center;
`

const ItemContainerDescriptionContainer = Styled.div``

const DescriptionJobTitle = Styled.p`
    margin-top: 0;  
    font-size: 115%;
    font-weight: 500;
`

const DescriptionDuration = Styled.p``

const DescriptionJob = Styled.ul`
    padding-left: 0.9em;
`

const DescriptionJobItem = Styled.li`
    line-height: 1.5;

    &:first-of-type {
        font-size: 115%;
        list-style: none;
        font-weight: 500;
        margin-bottom: 0.5em;
        margin-left: -1em;
    }
`

export { 
    Section,
    ExperienceWrapper,
    ExperienceItemContainer,
    ItemContainerGalleryContainer,
    ItemContainerGallery,
    DescriptionCompany,
    ItemContainerDescriptionContainer,
    DescriptionDuration,
    DescriptionJobTitle,
    DescriptionJob,
    DescriptionJobItem
}