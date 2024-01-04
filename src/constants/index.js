import {
  github,
  vs,
  css,
  js,
  html,
  tailwind,
  materialui,
  express,
  nodejs,
  react,
  ts,
  passwordGenerator,
  appleclone,
  testimonial,
  college,
  highSchool,
  school,
  instagram,
  linkedin,
  twitter,
} from "../assets";

export const navlinks = ["About", "Skills", "Projects", "Education"];

export const skills = [
  {
    id: "Frontend",
    skill: [
      { name: "React js", logo: react },
      { name: "HTML", logo: html },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: js,
      },
      {
        name: "TypeScript",
        logo: ts,
      },
      {
        name: "TailwindCss",
        logo: tailwind,
      },
      {
        name: "Material UI",
        logo: materialui,
      },
    ],
  },
  {
    id: "Backend",
    skill: [
      {
        name: "Node.js",
        logo: nodejs,
      },
      {
        name: "Express.js",
        logo: express,
      },
    ],
  },
  {
    id: "Others",
    skill: [
      {
        name: "GitHub",
        logo: github,
      },
      {
        name: "VS Code",
        logo: vs,
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Apple-Landing-Page",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim atque omnis porro cumque optio repellendus minima, voluptas impedit provident iusto beatae debitis aut rem! Aliquam soluta voluptatibus eveniet corporis distinctio Cupiditate, ducimus. Magni, eius. Laboriosam expedita sunt ipsam aliquam exercitationem dolor molestiae quis dolores fugiat! Maiores est iusto neque, deleniti iure tempore tenetur cupiditate deserunt Dolorem atque dolor optio odio",
    image: appleclone,
    tags: ["HTML5", "CSS3", "JavaScript", "Reactjs", "Tailwind Css"],
    projectLink: "https://tubular-figolla-daef52.netlify.app/",
    github: "https://github.com/Shivgitcode/apple-clone.git",
  },
  {
    id: 2,
    title: "Testimonial-Slider",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim atque omnis porro cumque optio repellendus minima, voluptas impedit provident iusto beatae debitis aut rem! Aliquam soluta voluptatibus eveniet corporis distinctio Cupiditate, ducimus. Magni, eius. Laboriosam expedita sunt ipsam aliquam exercitationem dolor molestiae quis dolores fugiat! Maiores est iusto neque, deleniti iure tempore tenetur cupiditate deserunt Dolorem atque dolor optio odio",
    image: testimonial,
    tags: ["HTML5", "CSS3", "JavaScript", "Reactjs", "Tailwind Css"],
    projectLink: "https://testimonial-opal.vercel.app/",
    github: "https://github.com/Shivgitcode/testimonial-slider-project.git",
  },
  {
    id: 3,
    title: "Password Generator",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim atque omnis porro cumque optio repellendus minima, voluptas impedit provident iusto beatae debitis aut rem! Aliquam soluta voluptatibus eveniet corporis distinctio Cupiditate, ducimus. Magni, eius. Laboriosam expedita sunt ipsam aliquam exercitationem dolor molestiae quis dolores fugiat! Maiores est iusto neque, deleniti iure tempore tenetur cupiditate deserunt Dolorem atque dolor optio odio",
    image: passwordGenerator,
    tags: ["HTML5", "CSS3", "JavaScript"],
    projectLink: "https://password-generator-woad-zeta.vercel.app/",
    github: "https://github.com/Shivgitcode/passwordGenerator.git",
  },
];

export const education = [
  {
    image: college,
    name: "Chitkara University,Punjab",
    degree: "Bachelor of Engineering - B.E , Computer Science and Engineering",
    date: "Nov 2022 - Jun 2026",
    Grade: "9.13 CGPA",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim atque omnis porro cumque optio repellendus minima, voluptas impedit provident iusto beatae debitis aut rem! Aliquam soluta voluptatibus eveniet corporis distinctio Cupiditate, ducimus. Magni, eius. Laboriosam expedita sunt ipsam aliquam exercitationem dolor molestiae quis dolores fugiat! Maiores est iusto neque, deleniti iure tempore tenetur cupiditate deserunt Dolorem atque dolor optio odio",
  },
  {
    image: highSchool,
    name: "Cambridge School,Indirapuram",
    degree: "CBSE(XII),Science with Computer",
    date: "Apr 2020 - Apr 2021",
    Grade: "82.6%",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim atque omnis porro cumque optio repellendus minima, voluptas impedit provident iusto ",
  },
  {
    image: school,
    name: "Doon International Schoool",
    degree: "CBSE(X),Science with Computer",
    date: "Apr 2018 - Apr 2019",
    Grade: "88%",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim atque omnis porro cumque optio repellendus minima, voluptas impedit provident iusto ",
  },
];

export const socialmedia = [
  "https://www.instagram.com/shiv_cr710/",
  "https://github.com/Shivgitcode",
  "https://www.linkedin.com/in/shivansh-aggarwal-a363a4235/",
  "https://twitter.com/toji2604",
];
