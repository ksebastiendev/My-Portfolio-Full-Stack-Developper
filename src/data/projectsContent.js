export const projectsContent = {
  en: {
    title: "PROJECTS",
    subtitle: "Things I've Built",
    description: "A collection of projects I've developed, showcasing my skills in full-stack web and mobile development. Each project demonstrates my ability to create scalable, user-centric applications.",
    projects: [
      {
        id: 1,
        title: "MyShowTime",
        description: "Full-stack online booking and ticketing solution with user management, secure authentication, and optimized UX with payment integration.",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80", // Placeholder
        technologies: ["React", "Next.js", "Nest.js", "SQL"],
        liveUrl: null, // null = disabled
        githubUrl: "https://github.com/ksebastiendev/myshowtime",
        featured: true
      },
      {
        id: 2,
        title: "Fammers",
        description: "Full-stack online app where we can appreciate movies and .",
        image: "src/assets/fammer-site-capture.png", // Placeholder
        technologies: ["React Native", "Firebase"],
        liveUrl: 'https://tomatoes-farmers.vercel.app/',
        githubUrl: "https://github.com/ksebastiendev/trellmobile",
        featured: true
      },
      {
        id: 3,
        title: "Myshop",
        description: "Complete e-commerce platform with product catalog, shopping cart, checkout system, and admin dashboard for inventory management.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80", // Placeholder
        technologies: ["Laravel", "HTML", "CSS", "JavaScript"],
        liveUrl: null,
        githubUrl: "https://github.com/ksebastiendev/myshop",
        featured: true
      }
    ],
    buttons: {
      viewDemo: "View Demo",
      viewCode: "View Code",
      comingSoon: "Coming Soon"
    }
  },
  fr: {
    title: "PROJETS",
    subtitle: "Ce Que J'ai Construit",
    description: "Une collection de projets que j'ai développés, démontrant mes compétences en développement web et mobile full-stack. Chaque projet illustre ma capacité à créer des applications scalables et centrées sur l'utilisateur.",
    projects: [
      {
        id: 1,
        title: "MyShowTime",
        description: "Solution complète de réservation et billetterie en ligne avec gestion des utilisateurs, authentification sécurisée et UX optimisée avec intégration de paiement.",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
        technologies: ["React", "Next.js", "Nest.js", "SQL"],
        liveUrl: null,
        githubUrl: "https://github.com/ksebastiendev/myshowtime",
        featured: true
      },
        {
        id: 2,
        title: "Fammers",
        description: "Full-stack online app where we can appreciate movies and .",
        image: "src/assets/fammer-site-capture.png", // Placeholder
        technologies: ["React Native", "Firebase"],
        liveUrl: 'https://tomatoes-farmers.vercel.app/',
        githubUrl: "https://github.com/ksebastiendev/trellmobile",
        featured: true
      },
      {
        id: 3,
        title: "Myshop",
        description: "Plateforme e-commerce complète avec catalogue de produits, panier d'achat, système de paiement et tableau de bord admin pour la gestion d'inventaire.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        technologies: ["Laravel", "HTML", "CSS", "JavaScript"],
        liveUrl: null,
        githubUrl: "https://github.com/ksebastiendev/myshop",
        featured: true
      }
    ],
    buttons: {
      viewDemo: "Voir la Démo",
      viewCode: "Voir le Code",
      comingSoon: "Bientôt Disponible"
    }
  }
};