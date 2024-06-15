export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Janani Sankaralingam',
    subtitle: 'Front-end Developer',
    description: 'Developer Portfolio',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'Behance',
            href: 'https://www.behance.net/jananis8'
        },
        {
            text: 'Github',
            href: 'https://github.com/Jananisankar21419'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/jananis-s/'
        },
        {
            text: 'X',
            href: 'https://twitter.com/janani_dev1'
        }
    ],
    hero: {
        text: " Hi There !!  I'm **Janani**,  I'm a 22 y/o  ECE graduate student at SSM Institute of Engineering and Technology  located at Dindigul. I like to play with colors and building things. I enjoy designing , web development and I love to sketch buildings.",

        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    
    postsPerPage: 1,
    projectsPerPage: 3
};

export default siteConfig;
