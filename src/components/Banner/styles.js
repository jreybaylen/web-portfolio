import Styled from 'styled-components'

import { SVGIcon } from '../../shared/Icons'

const Container = Styled.div`
    ${ ({ theme }) => theme.container };
    display: flex;
    margin-top: 8%;
    align-items: center;
    flex-direction: column;
`

const Content = Styled.div`
    margin-bottom: ${ ({ theme, distanceMultiplier }) => theme.spacing * (distanceMultiplier || 1) }px;
`

const HeadLine = Styled.h1`
    font-size: 300%;
    font-weight: 600;
    text-align: center;
`

const Description = Styled.h2`
    line-height: 1.5;
    text-align: center;
`

const ModifiedSVGIcon = Styled(SVGIcon)`
    opacity: 0.7;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`

export { Container, Content, HeadLine, Description, ModifiedSVGIcon }