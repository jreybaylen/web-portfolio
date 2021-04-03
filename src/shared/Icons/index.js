import React from 'react'

import { Mouse } from './Mouse'
import { Programmer } from './Programmer'
import { Wesley, Ian, Michael, Bjon } from './testimonials'
import { Git, Typescript, Ionic, ReactIcon, Angular, Vue, Node, PHP, AWS, Jenkins, JavaScript, Apple, Android, Next, Svelte, Java, Capacitor } from './skills'

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

    if (name === 'ionic') {
        return <Ionic { ...rest } />
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

    if (name === 'next') {
        return <Next { ...rest } />
    }

    if (name === 'svelte') {
        return <Svelte { ...rest } />
    }

    if (name === 'java') {
        return <Java { ...rest } />
    }

    if (name === 'capacitor') {
        return <Capacitor { ...rest } />
    }

    if (name === 'typescript') {
        return <Typescript { ...rest } />
    }

    if (name === 'git') {
        return <Git { ...rest } />
    }

    return null
}

export { SVGIcon }