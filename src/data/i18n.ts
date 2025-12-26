import { portfolio } from "./portfolio";

export type Language = 'es' | 'en';

export const dictionary = {
  es: {
    nav: {
      about: portfolio.nav.items.find(i => i.key === 'about')?.es || "Sobre mí",
      skills: portfolio.nav.items.find(i => i.key === 'skills')?.es || "Skills",
      projects: portfolio.nav.items.find(i => i.key === 'projects')?.es || "Proyectos",
      contact: portfolio.nav.items.find(i => i.key === 'contact')?.es || "Contacto",
      language: "Idioma",
      theme: "Tema",
    },
    hero: {
      badge: portfolio.personal.availability.es,
      role: portfolio.personal.role.es,
      roleSubtitle: portfolio.personal.roleSubtitle.es,
      description: portfolio.personal.description.es,
      ctaProject: "Ver Trabajos",
      ctaCv: "Descargar CV",
    },
    about: {
      title: "Sobre Mí",
      p1: portfolio.about.text.es[0],
      p2: portfolio.about.text.es[1],
      p3: portfolio.about.text.es[2],
      stats: {
        experience: portfolio.about.stats.experience.label.es,
        years: portfolio.about.stats.experience.value,
        projects: portfolio.about.stats.projects.label.es,
        count: portfolio.about.stats.projects.value,
        clients: portfolio.about.stats.clients.label.es,
        global: portfolio.about.stats.clients.value,
      },
    },
    skills: {
      title: "Habilidades Técnicas",
      items: portfolio.skills.map(s => ({
          title: s.title.es,
          items: s.items
      }))
    },
    projects: {
      title: "Proyectos Destacados",
      demo: "Demo",
      code: "Código",
      items: portfolio.projects.map(p => ({
          title: p.title,
          description: p.description.es
      }))
    },
    studies: {
      title: "Educación y Certificaciones",
      items: portfolio.studies.map(s => ({
          institution: s.institution,
          degree: s.degree.es,
          period: s.period,
          description: s.description.es
      }))
    },

    github: {
      title: "Contribución Open Source",
      subtitle: "Construyendo en público y contribuyendo a la comunidad.",
      commits: portfolio.github.stats[0].label.es,
      prs: portfolio.github.stats[1].label.es,
      stars: portfolio.github.stats[2].label.es,
      followers: portfolio.github.stats[3].label.es,
    },
    contact: {
        title: "Contáctame",
        p1: "¿Interesado en trabajar juntos? ¿Tienes alguna pregunta? Envíame un mensaje y te responderé lo antes posible.",
        email_label: "Correo",
        email_value: portfolio.contact.email,
        remote_label: portfolio.contact.remote.es,
        form: {
            name: "Nombre",
            name_placeholder: "Tu Nombre",
            email: "Email",
            email_placeholder: "tu@email.com",
            message: "Mensaje",
            message_placeholder: "¿Cómo puedo ayudarte?",
            submit: "Enviar Mensaje",
            sending: "Enviando...",
            success: "¡Mensaje enviado con éxito!",
            error_name: "El nombre es requerido",
            error_email: "Email inválido",
            error_message: "El mensaje debe tener al menos 10 caracteres"
        }
    },
    footer: {
      rights: "Todos los derechos reservados.",
      tagline: portfolio.footer.tagline.es
    }
  },
  en: {
    nav: {
      about: portfolio.nav.items.find(i => i.key === 'about')?.en || "About",
      skills: portfolio.nav.items.find(i => i.key === 'skills')?.en || "Skills",
      projects: portfolio.nav.items.find(i => i.key === 'projects')?.en || "Projects",
      contact: portfolio.nav.items.find(i => i.key === 'contact')?.en || "Contact",
      language: "Language",
      theme: "Theme",
    },
    hero: {
      badge: portfolio.personal.availability.en,
      role: portfolio.personal.role.en,
      roleSubtitle: portfolio.personal.roleSubtitle.en,
      description: portfolio.personal.description.en,
      ctaProject: "View Work",
      ctaCv: "Download CV",
    },
    about: {
      title: "About Me",
      p1: portfolio.about.text.en[0],
      p2: portfolio.about.text.en[1],
      p3: portfolio.about.text.en[2],
      stats: {
        experience: portfolio.about.stats.experience.label.en,
        years: portfolio.about.stats.experience.value,
        projects: portfolio.about.stats.projects.label.en,
        count: portfolio.about.stats.projects.value,
        clients: portfolio.about.stats.clients.label.en,
        global: portfolio.about.stats.clients.value,
      },
    },
    skills: {
      title: "Technical Skills",
      items: portfolio.skills.map(s => ({
          title: s.title.en,
          items: s.items
      }))
    },
    projects: {
      title: "Featured Projects",
      demo: "Demo",
      code: "Code",
      items: portfolio.projects.map(p => ({
          title: p.title,
          description: p.description.en
      }))
    },
    studies: {
      title: "Education & Certifications",
      items: portfolio.studies.map(s => ({
          institution: s.institution,
          degree: s.degree.en,
          period: s.period,
          description: s.description.en
      }))
    },

    github: {
      title: "Open Source Contribution",
      subtitle: "Building in public and contributing to the community.",
      commits: portfolio.github.stats[0].label.en,
      prs: portfolio.github.stats[1].label.en,
      stars: portfolio.github.stats[2].label.en,
      followers: portfolio.github.stats[3].label.en,
    },
    contact: {
        title: "Get in Touch",
        p1: "Interested in working together? Have a question? Send me a message and I'll get back to you as soon as possible.",
        email_label: "Email",
        email_value: portfolio.contact.email,
        remote_label: portfolio.contact.remote.en,
        form: {
            name: "Name",
            name_placeholder: "Your Name",
            email: "Email",
            email_placeholder: "your@email.com",
            message: "Message",
            message_placeholder: "How can I help you?",
            submit: "Send Message",
            sending: "Sending...",
            success: "Message sent successfully!",
            error_name: "Name is required",
            error_email: "Invalid email address",
            error_message: "Message must be at least 10 characters"
        }
    },
    footer: {
      rights: "All rights reserved.",
      tagline: portfolio.footer.tagline.en
    }
  },
};
