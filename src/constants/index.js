import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import award1 from "../assets/awards/BYU ACM.jpg";
import award2 from "../assets/awards/BYU PMA.jpg";
import award3 from "../assets/awards/Justbuilding.jpg"
import award4 from "../assets/awards/utah-tech-week-hackathon.jpg";
import { image, title } from "framer-motion/client";

export const HERO_CONTENT = `I am an aspiring software engineer passionate about building meaningful applications that make a difference. With a solid foundation in full-stack development and a keen interest in solving real-world problems, I am constantly striving to learn and grow in the field of software engineering.`;

export const ABOUT_TEXT = `I am a passionate software engineering student with a deep enthusiasm for coding and problem-solving. With a proven track record of building innovative web applications, I excel in leveraging technologies like React.js, Node.js, and Python to create scalable solutions that contribute positively to society. Tackling complex challenges and collaborating with teams to deliver impactful results drive my motivation. Beyond my technical pursuits, I find joy in playing soccer, staying active, and continuously seeking opportunities to grow both as a developer and as an individual.`;

export const EXPERIENCES = [
  {
    year: "Aug 2023 – Present",
    role: "Software Engineer",
    company: "iLabz",
    location: "Provo, UT",
    description: [
      "Optimized application performance by decreasing redundant API calls by 30%, resulting in a 1-second decrease in load time, which streamlined approach lowered server costs and enhanced user experience, using React.js.",
      "Successfully resolved over 60 compatibility issues and performance bottlenecks introduced by the Vue.js upgrade, resulting in a 20% reduction in load times.",
      "Leveraged WebSocket technology to create a real-time trading system that enables users to initiate and accept trading requests.",
      "Reduced task completion time by 25% while improving product quality by establishing a collaborative team structure, using GitHub.",
    ],
    technologies: ["React.js", "Vue.js", "DynamoDB", "WebSocket"],
  },
  {
    year: "Jun 2024 – Aug 2024",
    role: "Full Stack Software Engineer",
    company: "Glod-AI",
    location: "Provo, UT",
    description: [
      "Reduced media processing time by 28% by integrating OpenAI Text-to-Audio and dubbing APIs, building a video merging API with Python and FastAPI, and developing a RESTful API for streamlined content delivery and management.",
      "Improved user experience and increased subtitle accuracy by 34% by designing and integrating UI for review page customization using Next.js (React.js) and constructing a subtitle API with OpenAI Audio-to-Text.",
      "Cut down API testing costs by 92% through the development of efficient and test functions, conducting end-to-end testing, and resolving critical bugs using Python.",
      "Leveraged an open-source library (Moviepy) to overcome the complexities of synchronizing text, audio, and video, resulting in a robust and customizable video generation process, using Python.",
    ],
    technologies: ["Python", "FastAPI", "Next.js", "Moviepy", "OpenAI APIs"],
  },
  {
    year: "Aug 2023 – Present",
    role: "Tech Team Lead",
    company: "BYU Korean Business Student Association",
    location: "Provo, UT",
    description: [
      "Built an online platform allowing Korean students to share information and seek assistance through a blog and authentication system, utilizing React.js, Express.js, TypeScript, PostgreSQL, TailwindCSS, Amazon S3, Google Auth, and MongoDB.",
      "By scaling server resources by 50%, we were able to handle a 30% increase in website traffic.",
    ],
    technologies: [
      "React.js",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "TailwindCSS",
      "Amazon S3",
      "MongoDB",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Swift Shorts - AI Shorts Generation and Video Analytics Tool",
    image: project1,
    demoLink: "https://www.youtube.com/watch?v=oy6Oik1Os6c",
    description: [
      "Automatically created 3 short videos from a long one by operating an algorithm to identify the most engaging parts, using Python.",
      "Resolved a critical issue with a misconfigured Google Document API, salvaging the project by successfully integrating the API through extensive parameter adjustments.",
      "Integrated the analysis results into a user-friendly interface for easy video editing, using React.js and TailwindCSS.",
    ],
    award: "2024 BYU ACM YHack 1st Place",
    technologies: ["Python", "Flask", "React.js", "TailwindCSS"],
  },
  {
    title: "Find My Housing",
    image: project2,
    demoLink: "https://www.findmyhousings.com/",
    description: [
      "Boosted user engagement by 22% by developing and implementing a Google Maps integration using React.js, displaying over 140 housing locations with interactive markers, and engineering a modal system for detailed information on marker clicks.",
      "Experienced significant user growth, attracting over 2,000 users since its launch.",
    ],
    technologies: ["React.js", "Google Maps API", "TailwindCSS"],
  },
  {
    title: "Sports Day",
    image: project3,
    demoLink: "https://fsykorea.click/",
    description: [
      "Supported up to 500 concurrent users with an average response time of under 2 seconds, developed and deployed a high-performance web app for real-time score input and management, using React.js.",
      "Utilized React.js, Node.js, MongoDB, and AWS to deliver a scalable and user-friendly solution.",
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "AWS"],
  },
  {
    title: "G-TRAVEL - Gemini AI Travel Planner",
    image: project4,
    demoLink: "https://www.youtube.com/watch?v=ambPHFr96l4",
    description: [
      "Developed a travel planning application utilizing the Google Gemini API and integrated Booking.com, Skyscanner, and Tripadvisor APIs, offering users a comprehensive, real-time solution for hotels, flights, and attractions, enhancing decision-making, using React.",
      "Engineered the application with Node.js and React.js, creating a streamlined, user-friendly interface for itinerary management.",
    ],
    technologies: ["React.js", "Node.js", "Google Gemini API"],
  },
  {
    title: "Skill Gap Analyzer - Career Development Tool",
    image: project5,
    demoLink: "https://github.com/Yi-99/are-you-gapped",
    description: [
      "Developed a skill gap analysis tool to help users identify skill deficiencies and receive personalized learning recommendations.",
      "Leveraged OpenAI to dynamically generate questions, scored user responses with AI, and visualized user performance in a pentagon chart resembling game-like ability stats, enhancing engagement and user experience.",
    ],
    technologies: ["React.js", "Node.js", "OpenAI API", "MongoDB"],
  },
  {
    title: "AI Roofing and Solar Optimization Tool",
    image: project6,
    demoLink: "https://www.youtube.com/watch?v=oy6Oik1Os6c",
    description: [
      "Developed an AI-powered tool that analyzes satellite images to optimize solar panel and roofing installations, using Python.",
      "Successfully integrated the tool with Google Maps API, enabling users to visualize the optimal placement of solar panels and roofing.",
    ],
    technologies: ["React.js", "Google Maps API", "Object Detection Model", "Python"],
  },
  {
    title: "AI Tutor",
    image: project7,
    demoLink: "https://ai-tutor-frontend-two.vercel.app/",
    description: [
      "Enables users to interact with an AI tutor by speaking their queries, which are transcribed, processed, and responded to with text and speech output, providing an interactive learning experience.",
      "Utilizes OpenAI’s Whisper and GPT-4 models to convert voice inputs into text, generate insightful responses, and deliver audio output, all within a seamless web-based interface."
    ],
    technologies: ["Next.js", "OpenAI API", "FastAPI", "Python"]
  }
];

export const AWARD = [
  {
    title: "1st Place Winner in the 2024 BYU ACM YHack",
    link: "https://www.linkedin.com/posts/jason-jonghyuk_im-thrilled-to-announce-that-our-team-emerged-activity-7175737182949654529-1b6X?utm_source=share&utm_medium=member_desktop",
    image: award1,
  },
  {
    title: "1st Place Winner in the 2024 BYU PMA Hackathon",
    link: "https://www.linkedin.com/posts/jason-jonghyuk_hackathon-skillgapanalyzer-careergrowth-activity-7264450034392281088-uBBo?utm_source=share&utm_medium=member_desktop",
    image: award2,
  },
  {
    title: "1st Place Winner in the 2024 Justbuilding Hackathon",
    link: "https://www.linkedin.com/posts/jason-jonghyuk_hackathon-ai-innovation-activity-7272000942898573312-c4gB?utm_source=share&utm_medium=member_desktop",
    image: award3,
  },
  {
    title: "1st Place Winner in the 2024 Utah Tech Week Hackathon(1st out of 186)",
    link: "https://www.linkedin.com/posts/brightlightkim_2025-utah-ai-hackathon-winner-1st-place-activity-7291711965016530945-kD8Z?utm_source=share&utm_medium=member_desktop&rcm=ACoAADhosZ8BT3_7hDhQJhXdOyIt4iNTgCBelbw",
    image: award4,
  }
];

export const CONTACT = {
  address: "44 W 2170 N, Provo UT",
  phoneNo: "(385) 497-4201",
  email: "whdgur826333@gmail.com",
};
