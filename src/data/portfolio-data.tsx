import { GitHubIcon, LinkedInIcon, XIcon, PHPIcon, WordPressIcon, PythonIcon, LaravelIcon } from "@/components/icons";

export const PORTOLFIO_DATA = {
    name: "Kacper Slenzak",
    initials: "KS",
    location: "Ireland",
    about: "Passionate about Computer Science. Professional idiot.",
    photo: "https://media.licdn.com/dms/image/v2/D4E03AQGXXnBFRhxA0w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724227870664?e=1737590400&v=beta&t=-bJXykSh2nPEd265I1J4Fs1v9SVcm1YGxvjzPNWdWW0",
    socialLinks: [
        {
            name: "X",
            url: "https://x.com/kacperslenzak",
            icon: XIcon
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/kacper-slenzak/",
            icon: LinkedInIcon
        },
        {
            name: "GitHub",
            url: "https://github.com/kacperslenzak",
            icon: GitHubIcon
        }
    ],
    aboutBulletPoints: [
        "I'm a full stack developer with a passion for building user-friendly and efficient web applications.",
        "I've been working with the WordPress ecosystem for the past 2 years.",
        "I have been working alot with Laravel and Livewire lately.",
        "I enjoy learning new technologies and building projects with them."
    ],
    techColours: {
        "Python": "bg-blue-500",
        "Laravel": "bg-red-500",
        "PHP": "bg-indigo-700",
    },
    projects: [
        {
            name: "UK Postcode Validation Library",
            description: "A python library that supports validating and formatting UK postcodes.",
            url: "https://github.com/kacperslenzak/ukpostcode",
            tech: "Python",
        },
        {
            name: "Just Digital",
            description: "A full service digital agency specialising in Websites and Web Applications.",
            url: "https://justdigital.ie",
            tech: "PHP",
        }
    ],
    technologies: [
        {
            name: "PHP",
            icon: PHPIcon,
            size: "8"
        },
        {
            name: "WordPress",
            icon: WordPressIcon,
            size: "4"
        },
        {
            name: "Python",
            icon: PythonIcon,
            size: "4"
        },
        {
            name: "Laravel",
            icon: LaravelIcon,
            size: "4"
        }
    ],
    workExperience: [
        {
            name: "Graphedia",
            date: "2022 - 2025",
            description: "A full service digital agency specialising in Wordpress and eCommerce websites.",
            image: "graphedia.png"
        },
        {
            name: "Just Digital",
            date: "2022 - Present",
            description: "A full service digital agency specialising in Websites and Web Applications.",
            image: "justdigital.jpeg"
        }
    ]
} as const;