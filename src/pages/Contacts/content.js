import skypeGallery from '../../assets/images/contacts/skype-icon.png'
import gmailGallery from '../../assets/images/contacts/gmail-icon.png'
import linkedinGallery from '../../assets/images/contacts/linkedin-icon.png'
import facebookGallery from '../../assets/images/contacts/facebook-icon.png'
import stackoverflowGallery from '../../assets/images/contacts/stackoverflow-icon.png'

const contacts = [
    {
        key: 'linkedin-contact',
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/john-rey-baylen-29878a107/',
        gallery: linkedinGallery
    },
    {
        key: 'skype-contact',
        title: 'Skype',
        url: 'skype:johnreybaylen211995?call',
        gallery: skypeGallery
    },
    {
        key: 'gmail-contact',
        title: 'Gmail',
        url: 'https://mail.google.com/mail/?view=cm&to=johnreybaylen211995@gmail.com',
        gallery: gmailGallery
    },
    {
        key: 'facebook-contact',
        title: 'Facebook',
        url: 'https://www.facebook.com/jrey211995',
        gallery: facebookGallery
    },
    {
        key: 'stackoverflow-contact',
        title: 'Stackoverflow',
        url: 'https://stackoverflow.com/users/4922688/john-rey-m-baylen',
        gallery: stackoverflowGallery
    }
]

export { contacts }