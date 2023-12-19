import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'Can’t Visit the Dentist? Don’t!',
    subHeading: 'ToothConnect - A trip to the dentist from the comfort of your couch',
    text: 'The ToothConnect mobile application brings you a step closer to healthy teeth with only a few clicks. Book an appointment online with our network of professionals and get connected instantly.',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}


export const brandFeaturesContent = {
    heading: 'On the Go, At Home, Anywhere!',
    subHeading: 'HALF OF THE RELIEF IS THE ELIMINATION OF THE HASSLE On the Go, At Home, Anywhere!',
    features: [
        {
            title: 'Videochat',
            description: 'Recreate a face-to-face environment without spending time and money on commute.',
            icon: 'branching'
        },
        {
            title: 'Capture Images',
            description: 'AI camera captures images by detecting simple movements for diagnostics.',
            icon: 'karate-student'
        },
        {
            title: 'Intuitive Pricing',
            description: 'Not all consultations are the same. Pay for the care and advice you receive.',
            icon: 'karate-uniform'
        },
        {
            title: 'Efficient Admin',
            description: 'ToothConnect allows you to input your insurance information which is kept confidentially on file and can be retrieved for future sessions.',
            icon: 'nutrition-guide'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'They say you are never fully dressed without a smile, but nobody tells you how packed up a dentist’s waiting room is after you had to wait a week for consultation.',
        'With ToothConnect cut through the line and get consultations with dentists you prefer any time, anywhere. Use the AI camera to offer a clear view of your teeth, and use the video chat feature to discuss your condition. What is more, you do not have to repeatedly offer your reports and insurance information, just upload it to the app, and every professional you ever consult with can request access.',
    ],
}

export const benefitsContent = {
    heading: 'Visiting the dentist made easy!',
    text: 'At ToothConnect both professionals and patients benefit. Dentists can allocate valuable time accordingly to consultations that can be done over the ToothConnect app without compromising on clinic-bound duties such as surgeries. Patients can communicate dental ailments with state-of-the-art app features.',
    benefits: [
        {
            title: 'Immediate Assistance ',
            description: 'Connect instantly for consultations on emergency care.',
            icon: 'assist-person'
        },
        {
            title: 'Perfect for Remote Locations',
            description: 'Don’t have a satisfactory dentist in town? Just download ToothConnect.',
            icon: 'special-cards'
        },
        {
            title: 'Cost-Effective ',
            description: 'Online consultation saves time, effort, and fuel money to visit the dentist. Dentists who sign up only have to pay a flat monthly fee.',
            icon: 'steps-circle'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Is ToothConnect Compatible with Android or iOS?',
            answer: 'The answer will be here......',

        },
        {
            question: 'How do I get in touch with someone if there is something wrong with my profile?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'Who is this app for?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Download the app and connect with a dentist today!',
    text: 'Download the ToothConnect App Today!'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: {
            email: 'Email: info@ToothConnect.co',
            number: 'Number: 800-370-1060'
        },
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Sign up',
    whyUsBtn: `Why ${siteName}`,
    ctaBtn: 'Download App',
    accent: 'Get Started'
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
