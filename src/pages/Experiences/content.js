import phrsGallery from '../../assets/images/experiences/phrs-logo.png'
import tcapGallery from '../../assets/images/experiences/tcap-logo.png'
import shpingGallery from '../../assets/images/experiences/shping-logo.png'
import accentureGallery from '../../assets/images/experiences/acn-logo.jpg'
import wondersGallery from '../../assets/images/experiences/wonders-logo.png'

const experiences = [
    {
        key: 'wonders-company',
        title: 'Wonders Corporation',
        url: 'https://www.wondersco.com/',
        gallery: wondersGallery,
        jobInformation: [
            {
                key: 'position-promoted',
                title: 'Lead Software Engineer',
                time: '( February 2021 - Present )',
                description: [
                    'An architect for mobile app development (React, Ionic React and React Native)',
                    'Working with Leads and Managers to ensure all deliverables are met within given time',
                    'Involved in meeting (SCRUM, Team Leads meeting, Feature discussion and estimation)',
                    'Manage JIRA tickets and Mobile App Team (BA, QA Engineers, Software Engineers and UI/UX)'
                ]
            },
            {
                key: 'position-entry',
                title: 'Software Engineer',
                time: '( May 2019 - February 2021 )',
                description: [
                    'Implement best practices in code review',
                    'Maintenance and support including mobile application',
                    'Create / Update existing feature for mobile application',
                    'Working with the Team UI to support all UI related stuff'
                ]
            }
        ]
    },
    {
        key: 'shping-company',
        title: 'Shping',
        url: 'https://www.shping.com/',
        gallery: shpingGallery,
        jobInformation: [
            {
                key: 'position-entry',
                title: 'Front-End Developer',
                time: '( November 2018 - July 2019 )',
                description: [
                    'Web Development of client website',
                    'Mentored other Front-End Developers',
                    'Maintenance including client website and assigned tickets',
                    'Working with the Dev Ops Engineer and Back-End Developer'
                ]
            }
        ]
    },
    {
        key: 'accenture-company',
        title: 'Accenture',
        url: 'https://www.accenture.com/ph-en',
        gallery: accentureGallery,
        jobInformation: [
            {
                key: 'position-entry',
                title: 'Application Development Senior Analyst',
                time: '( September 2018 - March 2019 )',
                description: [
                    'Involve in daily Scrum meeting',
                    'Deployment of the web application',
                    'Web Development (Front-End, Back-End and Testing)',
                    'Maintenance including client website and assigned tickets'
                ]
            }
        ]
    },
    {
        key: 'tcap-company',
        title: 'transcosmos Asia Philippines Inc.',
        url: 'http://www.transcosmos.com.ph/',
        gallery: tcapGallery,
        jobInformation: [
            {
                key: 'position-promoted',
                title: 'Senior Front-End Developer',
                time: '( January 2018 - August 2018 )',
                description: [
                    'Maintain company web app',
                    'Create and update existing feature',
                    'Lead developer for onshore client'
                ]
            },
            {
                key: 'position-entry',
                title: 'Associate Front-End Developer',
                time: '( November 2015 - December 2017 )',
                description: [
                    'Research and Development',
                    'Maintenance of client websites',
                    'Web Development of new and existing website',
                    'Implement latest technology and tools for development'
                ]
            }
        ]
    },
    {
        key: 'phrs-company',
        title: 'PHRS Philippine Hotel Reservations Service',
        url: 'http://www.philippinehotelreservations.com/',
        gallery: phrsGallery,
        jobInformation: [
            {
                key: 'position-entry',
                title: 'PHP Programmer / IT Specialist',
                time: '( April 2015 - November 2015 )',
                description: [
                    'All other adhoc IT activities',
                    'Web functionalities across different platforms',
                    'Web Development and Programming of new websites',
                    'Maintenance including system development and database'
                ]
            }
        ]
    }
]

export { experiences }