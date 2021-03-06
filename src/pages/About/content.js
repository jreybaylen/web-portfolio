import travel00Gallery from '../../assets/images/about/activities/travels/outing-0.jpg'
import travel01Gallery from '../../assets/images/about/activities/travels/outing-1.jpg'
import travel02Gallery from '../../assets/images/about/activities/travels/outing-2.jpg'
import travel03Gallery from '../../assets/images/about/activities/travels/outing-3.jpg'
import travel04Gallery from '../../assets/images/about/activities/travels/outing-4.jpg'
import avengerGallery from '../../assets/images/about/activities/movies/avenger.png'
import theRaidGallery from '../../assets/images/about/activities/movies/the-raid.png'
import moneyHeistGallery from '../../assets/images/about/activities/movies/money-heist.png'
import prisonBreakGallery from '../../assets/images/about/activities/movies/prison-break.png'
import justiceLeagueGallery from '../../assets/images/about/activities/movies/justice-league.png'

import dota2Gallery from '../../assets/images/about/activities/games/dota-2.png'
import csGoGallery from '../../assets/images/about/activities/games/cs-go.png'
import warframeGallery from '../../assets/images/about/activities/games/warframe.png'
import battleRealmsGallery from '../../assets/images/about/activities/games/battle-realms.png'
import mobileLegendsGallery from '../../assets/images/about/activities/games/ml.png'

const activies = [
    {
        key: 'travels',
        name: 'Travels',
        gallery: [ travel00Gallery, travel01Gallery, travel02Gallery, travel03Gallery, travel04Gallery ]
    },
    {
        key: 'movies',
        name: 'Movies',
        gallery: [ avengerGallery, justiceLeagueGallery, prisonBreakGallery, moneyHeistGallery, theRaidGallery ]
    },
    {
        key: 'games',
        name: 'Games',
        gallery: [ dota2Gallery, csGoGallery, warframeGallery, battleRealmsGallery, mobileLegendsGallery ]
    }
]
const skills = [
    {
        key: 'mobile',
        name: 'Mobile App Development',
        percent: 0,
        framework: [
            {
                key: 'react-native',
                name: 'React Native',
                percent: 80,
                icon: 'react'
            },
            {
                key: 'capacitor',
                name: 'Capacitor',
                percent: 80,
                icon: 'capacitor'
            },
            {
                key: 'apple',
                name: 'iOS',
                percent: 50,
                icon: 'apple'
            },
            {
                key: 'android',
                name: 'Android',
                percent: 50,
                icon: 'android'
            }
        ]
    },
    {
        key: 'front-end',
        name: 'Front-End Development',
        percent: 0,
        framework: [
            {
                key: 'javascript',
                name: 'JavaScript',
                percent: 90,
                icon: 'javascript'
            },
            {
                key: 'react',
                name: 'React',
                percent: 90,
                icon: 'react'
            },
            {
                key: 'ionic',
                name: 'Ionic',
                percent: 90,
                icon: 'ionic'
            },
            {
                key: 'typescript',
                name: 'TypeScript',
                percent: 80,
                icon: 'typescript'
            },
            {
                key: 'svelte',
                name: 'Svelte',
                percent: 70,
                icon: 'svelte'
            },
            {
                key: 'angular',
                name: 'Angular',
                percent: 50,
                icon: 'angular'
            },
            {
                key: 'vue',
                name: 'Vue',
                percent: 50,
                icon: 'vue'
            }
        ]
    },
    {
        key: 'back-end',
        name: 'Back-End Development',
        percent: 0,
        framework: [
            {
                key: 'node',
                name: 'Node',
                percent: 80,
                icon: 'node'
            },
            {
                key: 'next',
                name: 'Next',
                percent: 70,
                icon: 'next'
            },
            {
                key: 'php',
                name: 'PHP',
                percent: 50,
                icon: 'php'
            },
            {
                key: 'java',
                name: 'Java',
                percent: 30,
                icon: 'java'
            }
        ]
    },
    {
        key: 'dev-ops',
        name: 'Dev Ops Development',
        percent: 0,
        framework: [
            {
                key: 'git',
                name: 'Git',
                percent: 70,
                icon: 'git'
            },
            {
                key: 'aws',
                name: 'AWS',
                percent: 50,
                icon: 'aws'
            },
            {
                key: 'jenkins',
                name: 'Jenkins',
                percent: 40,
                icon: 'jenkins'
            }
        ]
    }
]
const testimonials = [
    {
        key: 'jegger-saren',
        icon: 'michael',
        name: 'Jegger Saren',
        jobInformation: 'Software Engineer at Wonders',
        recommendation: `
            John Rey is very passionate and has great vision for his work and he makes things happen! 
            Through the years, we worked on various projects at Transcosmos Asia Philippines Inc and Wonders Corporation and I was impressed by his manner of doing a great job.
        `
    },
    {
        key: 'john-wesley-salvador',
        icon: 'wesley',
        name: 'John Wesley Salvador',
        jobInformation: 'Senior Software Engineer at Aeronology',
        recommendation: `
            JRey was one of our outsourced frontend developer in our team helping us accomplish our goals in our web app. 
            When we first hired JRey, I was a bit sceptical at first because of his age and experience as we wanted someone that is more experienced. But JRey proved himself in every aspect in his task, from shipping good code quality to production free bugs. 
            But what stood out the most is his desire to learn, and passion for what he does. 
            He's just very easy to work with, and would definitely recommend him.
        `
    },
    {
        key: 'ian-fritz-bacangan',
        icon: 'ian',
        name: 'Ian Fritz Bacangan',
        jobInformation: 'Software Engineer at Wonders',
        recommendation: `
            A jolly good fellow. 
            Passionate at what he does and always lives up to expectations if not beyond. 
            Always gives a good laugh and fun to work with.
        `
    },
    {
        key: 'michael-nico-suarez',
        icon: 'michael',
        name: 'Michael Nico Suarez',
        jobInformation: 'Team Lead at Accenture',
        recommendation: `
            JRey is wonderful to work with, and has exceptional expertise in front-end development. 
            He consistently demonstrated a solid work ethic and with dedication to success.
        `
    },
    {
        key: 'bjon-javin-reyes',
        icon: 'bjon',
        name: 'Bjon Javin Reyes',
        jobInformation: 'Unity Game Engineer at Upwork',
        recommendation: `
            I recommend him for website programming specially using ReactJS. 
            We worked on the same onshore team.
        `
    }
]

export { activies, skills, testimonials }