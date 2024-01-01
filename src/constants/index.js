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
