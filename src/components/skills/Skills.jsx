import React, { useState } from 'react'
import Chip from '../chip/Chip'
import StackChip from '../stackchip/StackChip'

const Skills = () => {

    const [selectedStack, setSelectedStack] = useState('Frontend');

    const stack = [
        'Frontend', 'Backend', 'Mobile App', 'UI/UX'
    ]

    const frontend = [
        'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'ReactJS', 'NextJS',
        'VueJS', 'AngularJS', 'SASS/SCSS', 'Tailwind CSS',
        'Webpack', 'Babel', 'Responsive Design', 'AJAX & Fetch API',
        'Browser Dev Tools', 'Progressive Web Apps', 'Web Accessibility',
        'Version Control'
    ]

    const backend = [
        'NodeJS', 'ExpressJS', 'Deno', 'Python (Django/Flask)', 'Ruby on Rails',
        'Java (Spring Boot)', 'PHP (Laravel)', 'RESTful APIs', 'GraphQL', 'SQL/NoSQL Database',
        '0Auth', 'Docker', 'Kubernetes', 'AWS/Azure/GCP', 'CI/CD Pipelines', 'Microservices Architecture', 'Caching (Redis/Memcached)',
        'WebSockets', 'Serverless Architecture', 'Load Balancing', 'Security Best practices',
    ]

    const mobileApp = [
        'Flutter', 'React Native', 'Swift', 'Kotlin', 'Java',
        'JUnit', 'Mobile App Testing', 'Appium', 'Cross-Platform Frameworks'
    ]

    const uiUx = [
        'Figma', 'Adobe XD', 'Balsamiq', 'Canva',
        'Adobe Illustrator', 'Adobe Photoshop', 'Google Analytics', 'A/B Testing',
        'Lean UX'
    ]

    const getSkills = () => {
        switch (selectedStack) {
            case 'Frontend':
                return frontend;
            case 'Backend':
                return backend;
            case 'Mobile App':
                return mobileApp;
            case 'UI/UX':
                return uiUx;
            default:
                return [];
        }
    };

    return (
        <div className="pt-16">
            <div className="w-max mx-auto border-2 p-1 bg-[#F2F2F2] rounded-full flex justify-center gap-3 flex-wrap">
                {stack.map(item => (
                    <StackChip
                        key={item}
                        text={item}
                        isSelected={item === selectedStack}
                        onClick={() => setSelectedStack(item)} // Update selected stack on click
                    />
                ))}
            </div>

            <div className="pt-6">
                <h1 className="text-3xl sm:text-5xl font-bold text-[#2B2B2B] text-center mb-4">
                    Top {selectedStack} Skills
                </h1>
                <div>
                    <p className="text-center text-[#4E4E4E] w-[90%] mx-auto">
                        Need help determining the right skill set for your business and project needs? Here are some skills to consider.
                    </p>
                </div>
            </div>

            <div className="flex justify-center w-[80%] mx-auto text-center flex-wrap gap-4 mt-8 py-4">
                {getSkills().map(item => (
                    <Chip key={item} text={item} />
                ))}
            </div>

            <div className="w-full flex justify-center pt-20">
                <button className="w-36 h-12 text-white transition-all duration-300 bg-gradient-to-r from-[#001C69] to-[#000B31] hover:bg-gradient-to-b hover:scale-110">
                    Get a Quote
                </button>
            </div>
        </div>
    );
}

export default Skills