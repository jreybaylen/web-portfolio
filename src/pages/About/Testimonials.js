import React from 'react'

import { SVGIcon } from '../../shared/Icons'

import { testimonials } from './content'
import {
    Information,
    InformationHeading,
    InformationContent,
    TestimonialCardContainer,
    TestimonialCard,
    TestimonialCardLeft,
    TestimonialCardRight,
    SliderControls,
    SliderControlsItem
} from './styles'

function Testimonials () {
    const [ offsetLeft, setOffsetLeft ] = React.useState(0)
    const testimonialsElement = (
        <Information>
            <InformationHeading>Testimonials</InformationHeading>
            <InformationContent>Their opinion about me is really matter</InformationContent>
            <TestimonialCardContainer offsetLeft={ offsetLeft }>
                { testimonials && testimonials.map(
                    ({ key, icon, name, ...rest }, index) => (
                        <TestimonialCard key={ key } active={ offsetLeft === index }>
                            <TestimonialCardLeft>
                                <SVGIcon name={ icon } width="100" height="100" />
                                <InformationContent bold textCenter noMarginBottom>{ name }</InformationContent>
                            </TestimonialCardLeft>
                            <TestimonialCardRight>
                                <InformationContent bold>{ rest.jobInformation }</InformationContent>
                                <InformationContent>"{ rest.recommendation }"</InformationContent>
                            </TestimonialCardRight>
                        </TestimonialCard>
                    )
                ) }
            </TestimonialCardContainer>
            <SliderControls>
                { testimonials && testimonials.map(
                    ({ key }, index) => {
                        const handleTestimonialClick = () => setOffsetLeft(index)

                        return (
                            <SliderControlsItem 
                                key={ key } 
                                active={ offsetLeft === index }
                                onClick={ handleTestimonialClick }
                            />
                        )
                    }
                ) }
            </SliderControls>
        </Information>
    )

    return testimonialsElement
}

export { Testimonials }