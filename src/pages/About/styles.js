import Styled from 'styled-components'

import aboutGallery from '../../assets/images/about/about.jpg'

const Section = Styled.section`
    margin-top: ${ ({ theme, offsetTop }) => theme.spacing * offsetTop }px;
    background-image: url(${ aboutGallery });
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: 100% 35%;
`

const Container = Styled.div`
    ${ ({ theme }) => theme.container };
    width: 95%;
    padding: ${ ({ theme }) => theme.spacing * 3 }px 0;
`

const Information = Styled.div`
    width: 60%;
    overflow: hidden;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 #00000033;
    padding: ${ ({ theme }) => theme.spacing }px;
    margin-bottom: ${ ({ theme }) => theme.spacing }px;

    @media only screen and (max-width: 768px) {
        width: unset;
    }
`

const InformationHeading = Styled.h2`
    font-weight: 500;
`

const InformationHeadingActivities = Styled.h3`
    font-weight: 500;
`

const InformationContent = Styled.p`
    line-height: 1.5;
    word-break: break-word;
    ${ ({ bold }) => bold && 'font-weight: 500;' };
    ${ ({ textRight }) => textRight && 'text-align: right;' };
    ${ ({ textCenter }) => textCenter && 'text-align: center;' };
    ${ ({ textJustify }) => textJustify && 'text-align: justify;' };
    ${ ({ noMarginBottom }) => noMarginBottom && 'margin-bottom: 0;' };
`

const TestimonialCardContainer = Styled.ul`
    display: flex;
    padding-left: 0;
    position: relative;
    flex-direction: row;
    transition: ${ ({ theme }) => theme.transition };
    left: ${ ({ offsetLeft, offsetMultiplier }) => `-${ offsetLeft * offsetMultiplier }px` };
`

const TestimonialCard = Styled.li`
    display: flex;
    flex: 1 0 100%;
    list-style: none;
    border-radius: 5px;
    flex-direction: row;
    box-shadow: 0 4px 8px 0 #00000033;
    padding: ${ ({ theme }) => theme.spacing }px;
    margin-right: ${ ({ theme }) => theme.spacing }px;
    margin-bottom: ${ ({ theme }) => (theme.spacing / 2) - 5 }px;

    @media only screen and (max-width: 414px) {
        flex-direction: column;
    }
`

const TestimonialCardLeft = Styled.div`
    width: 25%;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media only screen and (max-width: 414px) {
        width: 100%;
    }
`

const TestimonialCardRight = Styled.div`
    margin-left: ${ ({ theme }) => theme.spacing }px;

    & > p:first-of-type {
        margin-top: 0;
    }

    @media only screen and (max-width: 414px) {
        margin-left: 0;

        & > p:first-of-type {
            text-align: center;
        }
    }
`

const SliderControls = Styled.ul`
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
    align-items: center;
    justify-content: center;
`

const SliderControlsItem = Styled.li`
    width: 15px;
    height:15px;
    margin: 3px;
    cursor: pointer;
    list-style: none;
    border-radius: 100%;
    background-color: #42434d;
    transition: ${ ({ theme }) => theme.transition };
    opacity: ${ ({ active }) => active ? '1' : '0.6' };

    &:hover {
        opacity: 1;
    }
`

const BoldContent = Styled.span`
    font-weight: 500;
`

const ActivityGalleryList = Styled.ul`
    display: flex;
    padding-left: 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

const ActivityGalleryListItem = Styled.li`
    padding: 5px;
    cursor: pointer;
    list-style: none;
    border-radius: 5px;
    transition: ${ ({ theme }) => theme.transition };

    &:last-of-type {
        margin-right: 0;
    }

    &:hover {
        box-shadow: 0 4px 8px 0 #000000a1;
    }
`

const ActivityGallery = Styled.img`
    width: 100%;
    display: block;
    border-radius: 5px;
`

const SkillsList = Styled.ul`
    padding-left: 0;
    margin-bottom: 0;
`

const SkillsListItem = Styled.li`
    list-style: none;
    padding-left: ${ ({ theme }) => theme.spacing / 2 }px;
    margin-bottom: ${ ({ theme }) => theme.spacing / 3 }px;
    ${ ({ flexItem }) => flexItem && `
        display: flex;
        flex-direction: row;
        align-items: center;
    ` };

    &:first-of-type {
        padding-left: 0;
        font-weight: 500;
        margin-bottom: ${ ({ theme }) => theme.spacing / 2 }px;
    }

    @media only screen and (max-width: 700px) {
        padding-left: 0;
        flex-direction: column;
        align-items: flex-start;
    }
`

const ListItemContainer = Styled.div`
    display: flex;
    align-items: center;
    width: ${ ({ position }) => position === 'left' ? '30%' : '70%' };
    
    & > svg {
        margin-right: ${ ({ theme }) => theme.spacing / 2 }px;
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`

const ProgressBar = Styled.p`
    color: #fff;
    font-size: 80%;
    line-height: 1.5;
    font-weight: 500;
    text-align: right;
    border-radius: 15px;
    letter-spacing: 1.5px;
    background-color: #f83030ab;
    width: ${ ({ percent }) => percent }%;
    padding-right: ${ ({ theme }) => theme.spacing / 2 }px;
`

const ImageViewer = Styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    position: fixed;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: ${ ({ theme }) => theme.spacing * 2 }px;
`

const ImageViewerContent = Styled.div`
    margin: auto;
    height: 100%;
    display: flex;
    position: relative;
    border-radius: 5px;
    width: max-content;
    position: relative;
    align-items: center;
    background-color: #fff;
    justify-content: center;
    box-shadow: 0 4px 8px 0 #000000a1;
    padding: ${ ({ theme }) => theme.spacing }px;

    @media only screen and (max-width: 768px) {
        width: 100%;
        height: auto;
    }
`

const ImageLarge = Styled.img`
    display: block;
    max-width:100%;
    max-height:100%;
    border-radius: 5px;
`

const ImageControl = Styled.button`
    top: -15px;
    outline: 0;
    right: -15px;
    border: none;
    color: #898989;
    font-size: 200%;
    cursor: pointer;
    line-height: 0.5;
    font-weight: 400;
    position: absolute;
    border-radius: 100%;
    background-color: #fff;
    padding ${ ({ theme }) => theme.spacing / 2 }px;
    transition: ${ ({ theme }) => theme.transition };

    &:hover {
        color: #303030;
    }
`

export {
    Section,
    Container,
    Information,
    InformationHeading,
    InformationHeadingActivities,
    InformationContent,
    TestimonialCardContainer,
    TestimonialCard,
    TestimonialCardLeft,
    TestimonialCardRight,
    SliderControls,
    SliderControlsItem,
    BoldContent,
    ActivityGalleryList,
    ActivityGalleryListItem,
    ActivityGallery,
    SkillsList,
    SkillsListItem,
    ListItemContainer,
    ProgressBar,
    ImageViewer,
    ImageViewerContent,
    ImageLarge,
    ImageControl
}