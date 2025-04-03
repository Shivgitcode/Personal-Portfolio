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
	mongo,
	docker,
	git,
	postman,
	vercel,
	postgres,
	prisma,
	nextjs,
	redis,
	mysql,
	trpc,
	hono,
	java,
	go,
	aws,
	kubernetes,
	shadcn,
	astrocode,
	tweetx,
} from "../assets";

export const navlinks = ["About", "Skills", "Projects", "Education"];

export const skills = [
	{
		id: "Frontend",
		skill: [
			{ name: "React.js", logo: react },
			{ name: "Next.js", logo: nextjs },
			{ name: "Shadcn", logo: shadcn },
			{ name: "HTML5", logo: html },
			{ name: "CSS3", logo: css },
			{ name: "JavaScript", logo: js },
			{ name: "TypeScript", logo: ts },
			{ name: "Tailwind CSS", logo: tailwind },
			{ name: "Material UI", logo: materialui },
		],
	},
	{
		id: "Backend",
		skill: [
			{ name: "Node.js", logo: nodejs },
			{ name: "Express.js", logo: express },
			{ name: "Hono.js", logo: hono }, // Assuming no logo available
			{ name: "tRPC", logo: trpc }, // Assuming no logo available
			{ name: "MongoDB", logo: mongo },
			{ name: "PostgreSQL", logo: postgres },
			{ name: "MySQL", logo: mysql },
			{ name: "Prisma", logo: prisma },
			{ name: "Redis", logo: redis },
		],
	},
	{
		id: "Languages",
		skill: [
			{ name: "JavaScript", logo: js },
			{ name: "TypeScript", logo: ts },
			{ name: "Java", logo: java },
			{ name: "Go", logo: go },
		],
	},
	{
		id: "Cloud & DevOps",
		skill: [
			{ name: "AWS (S3, EC2, ECS, ECR)", logo: aws }, // Assuming no logo available
			{ name: "Docker", logo: docker },
			{ name: "Kubernetes", logo: kubernetes }, // Assuming no logo available
		],
	},
	{
		id: "Others",
		skill: [
			{ name: "GitHub", logo: github },
			{ name: "VS Code", logo: vs },
			{ name: "Git", logo: git },
			{ name: "Postman", logo: postman },
			{ name: "Vercel", logo: vercel },
		],
	},
];

export const projects = [
	{
		id: 1,
		title: "TweetX - Full Stack Social Media Platform",
		desc: "A full-stack social media platform built with React.js, TypeScript, Node.js, and Express.js. It features a Redis caching system for improved API response time and a scalable authentication system.",
		image: tweetx, // Replace with the appropriate image if available
		tags: [
			"React.js",
			"TypeScript",
			"Node.js",
			"Express.js",
			"Prisma",
			"PostgreSQL",
			"Redis",
			"Docker",
		],
		projectLink: "https://github.com/Shivgitcode/new_twitter",
		github: "https://github.com/Shivgitcode/new_twitter",
	},
	{
		id: 2,
		title: "Snap-Up - Website Monitoring Tool",
		desc: "A website monitoring tool that notifies users via email when websites go down. Built with Next.js, TanStack Query, tRPC, and Tailwind CSS for a responsive interface.",
		image: null, // Replace with the appropriate image if available
		tags: [
			"Next.js",
			"TanStack Query",
			"tRPC",
			"NextAuth",
			"Tailwind CSS",
			"Drizzle ORM",
			"PostgreSQL",
		],
		projectLink: "https://github.com/Shivgitcode/snap-up",
		github: "https://github.com/Shivgitcode/snap-up",
	},
	{
		id: 3,
		title: "AstroCode - Developer Platform",
		desc: "A developer platform that allows users to create and share code snippets. It features secure two-factor authentication and an automated password recovery system.",
		image: astrocode, // Replace with the appropriate image if available
		tags: ["React.js", "Express.js", "MongoDB", "Prisma", "Cloudinary"],
		projectLink: "https://github.com/Shivgitcode/codepen-fullstack",
		github: "https://github.com/Shivgitcode/codepen-fullstack",
	},
];

export const education = [
	{
		image: college,
		name: "Chitkara University, Punjab",
		degree: "Bachelor of Engineering - B.E, Computer Science and Engineering",
		date: "Nov 2022 - Jun 2026",
		grade: "9.13 CGPA",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim atque omnis porro cumque optio repellendus minima, voluptas impedit provident iusto beatae debitis aut rem! Aliquam soluta voluptatibus eveniet corporis distinctio Cupiditate, ducimus. Magni, eius. Laboriosam expedita sunt ipsam aliquam exercitationem dolor molestiae quis dolores fugiat! Maiores est iusto neque, deleniti iure tempore tenetur cupiditate deserunt Dolorem atque dolor optio odio",
	},
	{
		image: highSchool,
		name: "Cambridge School, Indirapuram",
		degree: "CBSE (XII), Science with Computer",
		date: "Apr 2020 - Apr 2021",
		grade: "82.6%",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim atque omnis porro cumque optio repellendus minima, voluptas impedit provident iusto.",
	},
	{
		image: school,
		name: "Doon International School",
		degree: "CBSE (X), Science with Computer",
		date: "Apr 2018 - Apr 2019",
		grade: "88%",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim atque omnis porro cumque optio repellendus minima, voluptas impedit provident iusto.",
	},
];

export const socialmedia = [
	"https://www.instagram.com/shiv_cr710/",
	"https://github.com/Shivgitcode",
	"https://www.linkedin.com/in/shivansh-aggarwal/",
	"https://twitter.com/toji2604",
];
