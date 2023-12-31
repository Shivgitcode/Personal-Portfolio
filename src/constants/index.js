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
