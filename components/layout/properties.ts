type NavLinks = {
    label: string,
    icon?: string
    link?: string
}

const navigationLinks: NavLinks[] = [
    {
        label: 'How it works',
        icon: 'flower'
    },
    {
        label: 'Health Made Fun',
        icon: 'health'
    },
    {
        label: 'Your Personal Couch',
        icon: 'sun'
    }
]

const footerLinks: NavLinks[] = [
    {
        label: 'Terms and Conditions',
    },
    {
        label: 'Privacy Policy',
    },
    {
        label: 'Link Goes Here',
    },
    {
        label: 'Link Goes Here',
    },
    {
        label: 'Link Goes Here',
    },
    {
        label: 'Link Goes Here',
    }
]

export { navigationLinks, footerLinks }