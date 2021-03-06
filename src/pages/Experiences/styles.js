import Styled from 'styled-components'

const Section = Styled.section`
    background: #efefef;
    padding: ${ ({ theme }) => theme.spacing * 3 }px 0;

    @media only screen and (max-width: 769px) {
        padding: ${ ({ theme }) => theme.spacing }px 0;
    }
`

const SectionInner = Styled.div`
    position: relative;
    ${ ({ theme }) => theme.container };
`

const ExperienceWrapper = Styled.div`
    position: relative;

    @media only screen and (min-width: 769px) {
        ${ ({ theme }) => theme.container };
    }
`

const Label = Styled.div``

const ExperienceItemContainer = Styled.div`
    width: 70%;
    display: flex;
    cursor: pointer;
    background: #fff;
    border-radius: 10px;
    flex-direction: row;
    box-shadow: 0 2px 5px 0 #00000026;
    padding: ${ ({ theme }) => theme.spacing }px;
    transition: ${ ({ theme }) => theme.transition };
    ${ ({ position }) => (position === 'right') && 'margin-left: auto' };
    margin-bottom: ${ ({ theme, lastItem }) => lastItem ? 0 : theme.spacing }px;

    @media only screen and (max-width: 768px) {
        width: unset;
    }

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
    
    &:hover {
        box-shadow: 0px 20px 80px 0px #00000026;
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

const ItemContainerDescriptionContainer = Styled.div`
    dispay: flex;
    flex-direction: column;
`

const ItemContainerDescriptionInnerContainer = Styled.div`
    margin-bottom: ${ ({ theme }) => theme.spacing }px;

    ${ ({ lastItem }) => lastItem 
        ? 'border-bottom: 2px solid #e8e8e8;'
        : 'margin-bottom: 0;'
    };
`

const DescriptionJobTitle = Styled.p`
    margin-top: 0;  
    font-size: 115%;
    font-weight: 500;
    
    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`

const DescriptionDuration = Styled.p`
    line-height: 1.5;
    
    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`

const DescriptionJob = Styled.ul`
    padding-left: 0.9em;
    margin-bottom: ${ ({ theme, lastItem }) => lastItem ? 0 : theme.spacing }px;
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
    Label,
    ExperienceWrapper,
    ExperienceItemContainer,
    ItemContainerGalleryContainer,
    ItemContainerGallery,
    DescriptionCompany,
    ItemContainerDescriptionContainer,
    ItemContainerDescriptionInnerContainer,
    DescriptionDuration,
    DescriptionJobTitle,
    DescriptionJob,
    DescriptionJobItem,
    SectionInner
}