// Gestion du thème sombre/clair
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Initialiser le thème
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else if (prefersDarkScheme.matches) {
        document.body.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark');
    }
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Données des projets
const projects = [
    {
        title: "Site des Royal Ambassadors de l'Eglise Baptiste Eli d'Adjamé",
        description: "Ce site perment aux membres de cette communauté de se connecter pour faire des achats, voir les evenements, et voir la biographie des directeurs.Il permet aussi aux personnes exterieures de voire en quoi consist ce mouvement.",
        image: "ra.png",
        technologies: ["PHP", "HTML5", "CSS3", "JavaScript","MySQL","Apache","Fontawesome6.0","Bootstrap"],
        projectLink: "#", // Lien désactivé pour le moment
        githubLink: "#" // Lien désactivé pour le moment
    },
    {
        title: "Gestion de Restaurant",
        description: "Application de gestion complète pour les restaurants, dévelopée avec Windev 25, permettant de gérer les commandes, les budgets quotidiens, et de calculer la rentabilité.",
        image: "restaurant.png",
        technologies: ["Windev 25"],
        projectLink: "#", // Lien désactivé pour le moment
        githubLink: "https://github.com/DanielShofela/Logiciel-de-gestion-de-restaurant-2024-1.0.git" 
    },
    {
        title: "SaaS pour la Gestion d'Équipe de Football",
        description: "Solution SaaS pour la gestion d'équipes sportives : suivi des joueurs, planification des entraînements, et statistiques des performances.",
        image: "footsaas.png",
        technologies: ["PHP", "HTML5", "CSS3", "JavaScript","MySQL"],
        projectLink: "#", // Lien désactivé pour le moment
        githubLink: "https://github.com/DanielShofela/SaaS-pour-la-Gestion-d-quipe-de-Football.git" 
    },
 //   {
      //  title: "Tableau de Bord des Performances Scolaires",
        //description: "Application pour analyser et suivre les performances scolaires des étudiants grâce à des visualisations interactives.",
        //image: "static/images/school_performance_dashboard.jpg",
        //technologies: ["Python", "Power BI", "Flask"],
        //projectLink: "#", // Lien désactivé pour le moment
        //githubLink: "#" // Lien désactivé pour le moment
  //  },
    //{
      //  title: "SaaS pour l'identification des Employés d'Entreprise",
        //description: "Plateforme SaaS pour centraliser la gestion des employés : Ajout et suppression d'employés, affichage de la liste des employés, generation d'une fiche d'identification par employé et la fiche est iprimable.",
        //image: "identification.png",
        //technologies: ["PHP", "HTML5", "CSS3", "JavaScript","MySQL", "Bootstrap","Git","GitHub","Dompdf"],
        //projectLink: "#", // Lien désactivé pour le moment
        //githubLink: "https://github.com/DanielShofela/SaaS-pour-l-identification-des-Employ-s-d-Entreprise.git"
    //},
    {
        title: "Analyse de Données Météorologiques en Temps Réel",
        description: "Application d'analyse de données météorologiques qui collecte, traite et analyse en temps réel les données météorologiques de différentes capitales mondiales. Le système est conçu pour fonctionner en continu, en collectant périodiquement des données via l'API OpenWeatherMap et en générant des analyses statistiques pertinentes.",
        image: "meteo.png",
        technologies: ["Python (Pandas, Requests, Schedule & NumPy)", "Power BI", "OpenWeatherMap API","Encodage UTF-8"],
        projectLink: "#", // Lien désactivé pour le moment
        githubLink: "https://github.com/DanielShofela/Analyse-de-Donn-es-M-t-orologiques-en-Temps-R-el.git"
    },
];

// Fonction pour créer une carte de projet
function createProjectCard(project) {
    const projectLink = project.projectLink && project.projectLink !== "#" 
        ? `<a href="${project.projectLink}" class="project-btn project-btn-primary" target="_blank">
             Voir le projet <i class="fas fa-arrow-right"></i>
           </a>`
        : '';

    const githubLink = project.githubLink && project.githubLink !== "#"
        ? `<a href="${project.githubLink}" class="project-btn project-btn-secondary" target="_blank">
             Code source <i class="fab fa-github"></i>
           </a>`
        : '';

    return `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay"></div>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                </div>
                <div class="project-links">
                    ${projectLink}
                    ${githubLink}
                </div>
            </div>
        </div>
    `;
}

// Fonction pour afficher tous les projets
function displayProjects() {
    const projectGrid = document.querySelector('.project-grid');
    if (projectGrid) {
        projectGrid.innerHTML = projects.map(project => createProjectCard(project)).join('');
    }
}

// Fonction pour ajouter un nouveau projet
function addProject(project) {
    // Validation des liens
    if (!project.projectLink) project.projectLink = "#";
    if (!project.githubLink) project.githubLink = "#";
    
    projects.push(project);
    displayProjects();
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    displayProjects();
});

// Fonction pour ajouter un nouveau projet
function addNewProject(title, description, image, technologies, projectLink = "#", githubLink = "#") {
    const newProject = {
        title,
        description,
        image,
        technologies,
        projectLink: projectLink || "#",
        githubLink: githubLink || "#"
    };
    addProject(newProject);
}

// Exemple d'utilisation :
/*
addNewProject(
    "Nouveau Projet",
    "Description du nouveau projet",
    "static/images/nouveau-projet.jpg",
    ["HTML", "CSS", "JavaScript"]
    // Les liens sont optionnels et seront "#" par défaut
);
*/

// Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    formStatus.innerHTML = '<div class="alert alert-success">Message envoyé !</div>';
                    form.reset();
                } else {
                    throw new Error();
                }
            } catch (error) {
                formStatus.innerHTML = '<div class="alert alert-error">Erreur d\'envoi</div>';
            }

            // Cache le message après 3 secondes
            setTimeout(() => {
                formStatus.innerHTML = '';
            }, 3000);
        });
    }
});
