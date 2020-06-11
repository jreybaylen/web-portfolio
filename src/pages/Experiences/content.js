import phrsGallery from '../../assets/images/experiences/phrs-logo.png'
import tcapGallery from '../../assets/images/experiences/tcap-logo.png'
import shpingGallery from '../../assets/images/experiences/shping-logo.png'
import accentureGallery from '../../assets/images/experiences/acn-logo.jpg'
import wondersGallery from '../../assets/images/experiences/wonders-logo.png'

const experiences = [
    {
        key: 'wonders-company',
        title: 'Wonders Corporation',
        time: '( May 2019 - Present )',
        url: 'https://www.wondersco.com/',
        gallery: wondersGallery,
        jobTitle: 'Software Engineer',
        jobDescription: [
            'Implement best practices in code review',
            'Maintenance and support including mobile application',
            'Create / Update existing feature for mobile application',
            'Working with the Team UI to support all UI related stuff'
        ]
    },
    {
        key: 'shping-company',
        title: 'Shping',
        time: '( November 2018 - July 2019 )',
        url: 'https://www.shping.com/',
        gallery: shpingGallery,
        jobTitle: 'Front-End Developer',
        jobDescription: [
            'Web Development of client website',
            'Mentored other Front-End Developers',
            'Maintenance including client website and assigned tickets',
            'Working with the Dev Ops Engineer and Back-End Developer'
        ]
    },
    {
        key: 'accenture-company',
        title: 'Accenture',
        time: '( September 2018 - March 2019 )',
        url: 'https://www.accenture.com/ph-en',
        gallery: accentureGallery,
        jobTitle: 'Application Development Senior Analyst',
        jobDescription: [
            'Involve in daily Scrum meeting',
            'Deployment of the web application',
            'Web Development (Front-End, Back-End and Testing)',
            'Maintenance including client website and assigned tickets'
        ]
    },
    {
        key: 'tcap-company',
        title: 'transcosmos Asia Philippines Inc.',
        time: '( November 2015 - August 2018 )',
        url: 'http://www.transcosmos.com.ph/',
        gallery: tcapGallery,
        jobTitle: 'Senior Front-End Developer',
        jobDescription: [
            'Research and Development',
            'Maintenance of client websites',
            'Web Development of new and existing website',
            'Implement latest technology and tools for development'
        ]
    },
    {
        key: 'phrs-company',
        title: 'PHRS Philippine Hotel Reservations Service',
        time: '( April 2015 - November 2015 )',
        url: 'http://www.philippinehotelreservations.com/',
        gallery: phrsGallery,
        jobTitle: 'PHP Programmer / IT Specialist',
        jobDescription: [
            'All other adhoc IT activities',
            'Web functionalities across different platforms',
            'Web Development and Programming of new websites',
            'Maintenance including system development and database'
        ]
    }
]

export { experiences }