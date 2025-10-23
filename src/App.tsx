import { useState, useRef } from 'react';
import { Wheel } from './components/Wheel';
import { Hero } from './components/Hero';
import { ContentSection } from './components/ContentSection';
import { SkillBars } from './components/SkillBars';
import { PersonalData } from './components/PersonalData';
import { EducationDetails, type Education } from './components/EducationDetails';
import { ProjectDetails, type Project } from './components/ProjectDetails';
import { AchievementDetails, type Achievement } from './components/AchievementDetails';
import { ExperienceDetails, type Experience } from './components/ExperienceDetails';
import { FeedbackSection } from './components/FeedbackSection';
import { ScrollToTopButton } from './components/ScrollToTopButton'; 
import { Footer } from './components/Footer'; // Import th// Import the new component
import { Code, Trophy, Briefcase, GraduationCap, MessageSquare } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const educationRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const achievementRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);

  const sections = [
    {
      id: 0,
      title: 'EDUCATION',
      icon: GraduationCap,
      color: '#ff6b00',
      content: {
        heading: 'Academic Journey',
        items: [
          'Bachelor In Technology',
          'Computer Science & Engineering',
          'Focus on Software Engineering & AI',
          'GPA: 8.8/10.0',
          'Dean\'s List - Multiple Semesters'
        ]
      }
    },
    {
      id: 1,
      title: 'PROJECTS',
      icon: Code,
      color: '#00d4ff',
      content: {
        heading: 'Built for Speed',
        items: [
         'AI-Based Lung Cancer Detection - Python, TensorFlow, Flask',
         'Smart Telemedicine Drone Network - IoT, Flask, Arduino',
         'Carbon Footprint Analyzer for Indian Coal Mines - Python, Streamlit, ML',
         'AI Fitness Trainer - MediaPipe, Flask, OpenCV'

        ]
      }
    },
    {
      id: 2,
      title: 'ACHIEVEMENTS',
      icon: Trophy,
      color: '#ffd700',
      content: {
        heading: 'Victory Laps',
        items: [
          'Google Cloud Digital Leader Certified - Google Cloud',
          'PrepSAT Job-a-thon AIR 86 among 95,000+ participants',
          'Anveshan  East Zone Winner At KOLKATA 2025',
          'TOP 7 TEAM in LERNATHON 2025'

        ]
      }
    },
    {
      id: 3,
      title: 'EXPERIENCE',
      icon: Briefcase,
      color: '#00ff88',
      content: {
        heading: 'In The Fast Lane',
        items: [
          'AI & ML Intern - Lung Cancer Detection Project (2024 - Present)',
'IoT & Cloud Computing Intern - AICTE x Google Cloud (2023)',
'Full Stack Developer - Smart India Hackathon (2023 - 2024)',
'Research & Innovation Intern - Carbon Neutrality in Indian Coal Mines (2024)'

        ]
      }
    },
    {
      id: 4,
      title: 'FEEDBACK',
      icon: MessageSquare,
      color: '#E91E63', // Pink color for feedback
      content: {
        heading: 'Real-time Feedback',
        items: ['Leave a comment or suggestion!']
      }
    }
  ];

  const educations: Education[] = [
    {
      degree: 'Bachelor In Technology',
      institution: 'GIET UNIVERSITY, GUNUPUR',
      year: '2022 - 2026',
      gpa: '8.8/10.0',
      description: 'Computer Science & Engineering with a focus on Software Engineering & AI. Consistently on the Dean\'s List.',
    },
    {
      degree: '+2 XII',
      institution: 'SSVM,NK NAGAR,BRAHMAPUR',
      year: '2020 - 2022',
      gpa: '86.66 %',
      description: 'MATH,CHEMISTRY,PHYSICS, IT',
    },
  ];

  const projects: Project[] = [
    {
      title: 'AI-Based Lung Cancer Detection',
      technologies: 'Python, TensorFlow, Flask',
      year: '2023',
      description: 'A deep learning model to detect lung cancer from CT scans with a web-based interface for analysis.',
      link: 'https://github.com/your-repo/lung-cancer-detection'
    },
    {
      title: 'Smart Telemedicine Drone Network',
      technologies: 'IoT, Flask, Arduino',
      year: '2023',
      description: 'A network of drones designed to deliver medical supplies in remote areas, controlled via a central web application.',
      link: 'https://github.com/your-repo/telemedicine-drone'
    },
    {
      title: 'Carbon Footprint Analyzer',
      technologies: 'Python, Streamlit, ML',
      year: '2022',
      description: 'An analytical tool for Indian coal mines to measure and predict their carbon footprint using machine learning.',
      link: 'https://github.com/your-repo/carbon-analyzer'
    },
  ];

  const achievements: Achievement[] = [
    {
      title: 'Google Cloud Digital Leader Certified',
      description: 'Certified by Google Cloud, demonstrating foundational knowledge of cloud concepts and Google Cloud products.',
      year: '2024',
    },
    {
      title: 'PrepSAT Job-a-thon AIR 86',
      description: 'Achieved an All India Rank of 86 among over 95,000 participants.',
      year: '2024',
    },
    {
      title: 'Anveshan East Zone Winner',
      description: 'Secured the winning position at the Anveshan student research convention held in Kolkata.',
      year: '2025',
    },
    {
      title: 'Top 7 Team in LERNATHON 2025',
      description: 'Finished as one of the top 7 teams in the LERNATHON national-level hackathon.',
      year: '2025',
    }
  ];

  const experiences: Experience[] = [
    {
      role: 'IoT & Cloud Computing Intern',
      company: 'Innovate Intern,Chennai',
      duration: 'Summer 2024',
      points: [
        'Developed IoT prototypes for health monitoring using Arduino and sensor modules.',
        'Integrated Google Cloud IoT Core and Cloud Functions for real-time data visualization.',
        'Earned Google Cloud Digital Leader Certification during internship.'
      ]
    },
    {
      role: 'Android Developer',
      company: 'Acmegrade private Limited',
      duration: '2024 - 2025',
      points: [
        'Designed and built custom websites and web applications for small businesses.',
        'Managed project timelines, client communication, and final deployment.',
        'Integrated third-party services such as payment gateways and analytics tools.'
      ]
    }
  ];

  const handleHeaderClick = (index: number) => {
    const section = sections[index];
    setActiveSection(index);

    if (section.title === 'EDUCATION' && educationRef.current) {
      educationRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section.title === 'PROJECTS' && projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section.title === 'ACHIEVEMENTS' && achievementRef.current) {
      achievementRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section.title === 'EXPERIENCE' && experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section.title === 'FEEDBACK' && feedbackRef.current) {
      feedbackRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      <Hero sections={sections} onSectionClick={handleHeaderClick} />

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          <div className="relative">
            <Wheel
              sections={sections}
              activeSection={activeSection}
              onSectionChange={setActiveSection}
            />
          </div>

          <div className="flex-1 max-w-2xl">
            <ContentSection section={sections[activeSection]} />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <SkillBars
        title="Skills"
        subtitle="Proficiency levels"
        skills={[
          { name: 'Python / Flask', level: 92 },
          { name: 'Machine Learning / Deep Learning', level: 88 },
          { name: 'OpenCV / MediaPipe', level: 85 },
          { name: 'IoT / Arduino / Sensors', level: 83 },
          { name: 'SQL / Firebase / MongoDB', level: 80 },
          { name: 'HTML / CSS / Streamlit', level: 78 },
          { name: 'Google Cloud / AI Services', level: 75 },
          { name: 'React.js / HTML,CSS<', level: 70 },
        ]}
      />

      <PersonalData
        instagram="https://www.instagram.com/029.prithwi_/"
        linkedIn="https://www.linkedin.com/in/prithwiraj-charchi-65275824b/"
        github="https://github.com/licode26"
        email="prithwi.vibecode26@gmail.com"
        phone="+91-7749929725"
        address="https://www.google.com/maps/place/Asika,+Odisha/@19.6085455,84.6522924,6060m/data=!3m1!1e3!4m6!3m5!1s0x3a22b689add7e27d:0x7699291aa03e98eb!8m2!3d19.6159477!4d84.6649045!16zL20vMGYwNmhr?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
        university="GIET UNIVERSITY, GUNUPUR"
      />

      <div ref={educationRef}>
        <EducationDetails educations={educations} />
      </div>

      <div ref={projectRef}>
        <ProjectDetails projects={projects} />
      </div>

      <div ref={achievementRef}>
        <AchievementDetails achievements={achievements} />
      </div>

      <div ref={experienceRef}>
        <ExperienceDetails experiences={experiences} />
      </div>

      {/* Feedback Section */}
      <div ref={feedbackRef}>
        <FeedbackSection />
      </div>
       
       <Footer />
      {/* Add the scroll to top button here */}
      <ScrollToTopButton />

      <div className="fixed bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 animate-pulse"></div>
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"></div>
    </div>
  );
}

export default App;