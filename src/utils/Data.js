import {FaVuejs, FaLaravel, FaHtml5, FaPhp} from 'react-icons/fa';
// import {SiJavascript} from 'react-icons/si';

import Project1 from '../assets/satu.png';
import Project2 from '../assets/dua.png';
import Project3 from '../assets/tiga.png';
import Project4 from '../assets/empat.png';
import Project5 from '../assets/lima.png';

export const Skills = [
    {
        id: 0,
        tech: 'Vue JS',
        icon: <FaVuejs />
    },
    {
        id: 1,
        tech: 'Laravel',
        icon: <FaLaravel />
    },
    {
        id: 2,
        tech: 'HTML',
        icon: <FaHtml5 />
    },
    {
        id: 3,
        tech: 'PHP',
        icon: <FaPhp />
    }
];


export const projectDetails = [
    {
        id: 0,
        project_name: "Rental Car App",
        project_desc: "A Laravel and Vue.js based car rental application using the Badaso low-code development platform." ,
        tech_stack: ['Vue JS', 'Laravel'],
        project_img: Project1,
        project_url: 'https://www.youtube.com',
        reverse: false,
    },
    {
        id: 1,
        project_name: "Web Blogging CMS",
        project_desc: "Building a Web Blogging CMS (Authors Page) using Laravel Filament PHP." ,
        tech_stack: ['Laravel'],
        project_img: Project2,
        project_url: 'https://www.youtube.com',
        reverse: true,
    },
    {
        id: 2,
        project_name: "REST API",
        project_desc: "Learning to Understand REST APIs and Creating a Simple Project." ,
        tech_stack: ['Javascript','PHP','HTML'],
        project_img: Project3,
        project_url: 'https://www.youtube.com',
        reverse: false,
    },
    {
        id: 3,
        project_name: "Simple CRUD Website",
        project_desc: "Creating Basic CRUD Functions for the Politeknik Negeri Padang Website." ,
        tech_stack: ['PHP'],
        project_img: Project4,
        project_url: 'https://www.youtube.com',
        reverse: true,
    },
    {
        id: 4,
        project_name: "Mini Games",
        project_desc: "Creating a Web-Based Game using HTML, CSS, and JavaScript with OOP Concepts, Canvas Elements, Best Practices, and More." ,
        tech_stack: ['HTML','CSS','Javascript'],
        project_img: Project5,
        project_url: 'https://www.youtube.com',
        reverse: false,
    },
]

export const navLinks = [
    {
        id: 0,
        name: 'Home',
        href: 'Home'
    },
    {
        id: 1,
        name: 'My Skills',
        href: 'Skills'
    },
    {
        id: 2,
        name: 'My Projects',
        href: 'Projects'
    },
    {
        id: 3,
        name: 'My Contact',
        href: 'Contact'
    }
]