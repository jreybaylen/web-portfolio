import React from 'react'

import { Mouse } from './Mouse'
import { Programmer } from './Programmer'
import { Wesley, Ian, Michael, Bjon } from './testimonials'
import { Hybrid, ReactIcon, Angular, Vue, Node, PHP, AWS, Jenkins, JavaScript, Apple, Android } from './skills'

function SVGIcon ({ name, ...rest }) {
    if (name === 'mouse') {
        return <Mouse { ...rest } />
    }

    if (name === 'programmer') {
        return <Programmer { ...rest } />
    }

    if (name === 'bjon') {
        return <Bjon { ...rest } />
    }

    if (name === 'ian') {
        return <Ian { ...rest } />
    }

    if (name === 'michael') {
        return <Michael { ...rest } />
    }

    if (name === 'wesley') {
        return <Wesley { ...rest } />
    }

    if (name === 'hybrid') {
        return <Hybrid { ...rest } />
    }

    if (name === 'react' || name === 'react-native') {
        return <ReactIcon { ...rest } />
    }

    if (name === 'angular') {
        return <Angular { ...rest } />
    }

    if (name === 'vue') {
        return <Vue { ...rest } />
    }

    if (name === 'node') {
        return <Node { ...rest } />
    }

    if (name === 'php') {
        return <PHP { ...rest } />
    }

    if (name === 'aws') {
        return <AWS { ...rest } />
    }

    if (name === 'jenkins') {
        return <Jenkins { ...rest } />
    }

    if (name === 'javascript') {
        return <JavaScript { ...rest } />
    }

    if (name === 'apple') {
        return <Apple { ...rest } />
    }

    if (name === 'android') {
        return <Android { ...rest } />
    }

    return null
}

export { SVGIcon }