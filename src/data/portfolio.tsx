export const portfolio = {
    personal: {
        name: "DEV",
        role: {
            es: "Desarrollador Frontend",
            en: "Frontend Developer",
        },
        roleSubtitle: {
            es: "& Diseñador UI/UX",
            en: "& UI/UX Designer",
        },
        description: {
            es: "Creando experiencias web modernas, minimalistas y de alto rendimiento. Especializado en React, Next.js e interfaces futuristas.",
            en: "Crafting modern, minimalist, and high-performance web experiences. Specialized in React, Next.js, and futurist interfaces.",
        },
        availability: {
            es: "Disponible para trabajar",
            en: "Available for work",
        },
        cvUrl: "/resume.pdf",
        githubUser: "Kilex79" // change to your github username to auto-fetch data
    },

    nav: {
        items: [
            { key: "about", es: "Sobre mí", en: "About", href: "#about" },
            { key: "skills", es: "Skills", en: "Skills", href: "#skills" },
            { key: "projects", es: "Proyectos", en: "Projects", href: "#projects" },
            { key: "contact", es: "Contacto", en: "Contact", href: "#contact" },
        ],
    },

    about: {
        stats: {
            experience: { label: { es: "Experiencia personal", en: "Personal experience" }, value: "2+ Years" },
            projects: { label: { es: "Proyectos", en: "Projects" }, value: "50+ Delivered" },
            clients: { label: { es: "Clientes", en: "Clients" }, value: "Global / World" }
        },
        text: {
            es: [
                "Soy un Desarrollador Frontend Junior apasionado por el diseño y con un impulso constante por crear experiencias digitales fluidas. Con una base sólida en tecnologías web modernas e implementando IA para mejorar la experiencia del usuario.",
                "Mi enfoque se centra en la escalabilidad, el rendimiento y el diseño centrado en el usuario. Creo que un gran sitio web no solo debe verse bien, sino que debe sentirse intuitivo y receptivo.",
                "Cuando no estoy programando, estoy explorando lo último en IA o refinando mis habilidades de UI/UX para estar siempre a la vanguardia."
            ],
            en: [
                "I am a passionate Junior Frontend Developer with a keen eye for design and a drive for creating seamless digital experiences. With a strong foundation in modern web technologies, I implement AI to improve user experience.",
                "My approach focuses on scalability, performance, and user-centric design. I believe that a great website shouldn't just look good—it should feel intuitive and responsive.",
                "When I'm not coding, I'm exploring the latest in AI or refining my UI/UX skills to stay ahead of the curve."
            ]
        }
    },

    skills: [
        {
            title: { es: "Frontend", en: "Frontend" },
            items: ["React", "Next.js", "TypeScript", "TailwindCSS"]
        },
        {
            title: { es: "Backend", en: "Backend" },
            items: ["Node.js", "PostgreSQL", "MySQL", "Firebase"]
        },
        {
            title: { es: "Desarrollo de Aplicaciones", en: "App Development" },
            items: ["Java", "React Native"]
        },
        {
            title: { es: "IA & Herramientas", en: "AI & Tools" },
            items: ["ChatGPT", "Gemini", "DeepSeek", "Perplexity", "Claude", "Antigravity", "Google Ai Studio"]
        },
        {
            title: { es: "Lenguajes Programación", en: "Programming Languages" },
            items: ["HTML", "CSS", "JavaScript", "Python", "Java", "C#", "React", "Next.js", "TypeScript", "TailwindCSS", "SQL"]
        },
        {
            title: { es: "Idiomas", en: "Languages" },
            items: ["Español", "Inglés", "Catalán"]
        }
    ],

    projects: [
        {
            title: "",
            description: {
                es: "",
                en: "",
            },
            tags: ["OpenAI", "Next.js", "Stripe"],
            links: { demo: "#", code: "#" }
        }
    ],

    studies: [
        {
            institution: "Formación Profesional Superior",
            degree: { es: "Desarrollo de Aplicaciones Multiplataforma", en: "Mobile and Web Development" },
            period: "2022 - 2024",
            description: {
                es: "Formación en Desarrollo de Aplicaciones Multiplataforma. Graduado con honores.",
                en: "Mobile and Web Development. Graduated with honors.",
            }
        },
        {
            institution: "Formación Profesional Grado Medio",
            degree: { es: "Tecnico en Instalaciones de Produccion de Calor - Tecnico Frigorista", en: "Heat Production Installation Technician - Refrigeration Technician" },
            period: "2019 - 2021",
            description: {
                es: "Instalador de equipos de produccion de calor, calderas, suelo radiante, aerotermia, placas solares termicas, gases propanos, termos, etc. Instalador de maquinas frigorificas industriales y temperaturas bajo cero, carnet de gases fluorados, aire acondicionado (splits).",
                en: "Installer of heat production equipment, boilers, underfloor heating, aerothermal systems, solar thermal panels, propane gas, water heaters, etc. Installer of industrial refrigeration machines and sub-zero temperature systems, fluorinated gas certification, air conditioning (split systems).",
            }
        }
    ],



    github: {
        stats: [
            { label: { es: "Total Commits", en: "Total Commits" }, value: "1,234+" },
            { label: { es: "Pull Requests", en: "Pull Requests" }, value: "450+" },
            { label: { es: "Estrellas", en: "Stars Earned" }, value: "890" },
            { label: { es: "Seguidores", en: "Followers" }, value: "340" }
        ]
    },

    contact: {
        email: "netsphere.dev.projects@gmail.com",
        remote: { es: "Remoto / Global", en: "Remote / Worldwide" }
    },

    footer: {
        tagline: {
            es: "Construyendo el futuro, pixel a pixel.",
            en: "Building the future, one pixel at a time."
        }
    }
};
