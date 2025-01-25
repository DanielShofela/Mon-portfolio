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
        title: "🌦️ Application avancée d'analyse et de prédiction météorologique",
        description: "Cette solution innovante collecte, traite et analyse en temps réel les données météorologiques de différentes capitales mondiales.<br><br>🚀Caractéristiques principales :<br><li> Collecte de données en direct via l'API OpenWeatherMap.</li> <li>Capacités prédictives basées sur l'apprentissage automatique pour anticiper les tendances futures.</li><br> 💡Grâce à cette approche double, le système permet :<br><br> <li>De suivre les conditions météorologiques actuelles avec précision.</li> <li>D'anticiper les évolutions climatiques pour une meilleure prise de décision.</li><br> Elle offre une vue claire et détaillée pour l'analyse météorologique, combinant technologie avancée et efficacité. 🌈",
        image: "meteo.png",
        technologies: ["Python (Pandas, Requests, Schedule & NumPy)", "Power BI", "OpenWeatherMap API", "Encodage UTF-8"],
        projectLink: "#", // Lien désactivé pour le moment
        githubLink: "https://github.com/DanielShofela/Analyse-de-Donn-es-M-t-orologiques-en-Temps-R-el.git"
    },
    {
        title: "🏟️ Solution SaaS pour la gestion d'équipes sportives",
        description: "⚽ Fonctionnalités principales :<br><br>👥 Suivi des joueurs :<br> gestion des profils, performances et statistiques.<br><br>📅 Planification des entraînements :<br> création de calendriers et organisation des sessions.<br><br>📊 Statistiques des performances :<br> analyse et visualisation des données pour optimiser les résultats.<br><br> Une solution complète pour accompagner les équipes sportives dans leur gestion quotidienne et l’amélioration de leurs performances. 🚀",
        image: "footsaas.png",
        technologies: ["PHP", "HTML5", "CSS3", "JavaScript","MySQL"],
        projectLink: "#", // Lien désactivé pour le moment
        githubLink: "https://github.com/DanielShofela/SaaS-pour-la-Gestion-d-quipe-de-Football.git" 
    },
    {
        title: "Site des Royal Ambassadors de l'Eglise Baptiste Eli d'Adjamé",
        description: "Ce site permet aux membres de la communauté de se connecter pour effectuer des achats, consulter les événements et découvrir les biographies des directeurs.<br> Il offre également aux personnes extérieures une présentation détaillée du mouvement et de ses activités.",
        image: "ra.png",
        technologies: ["PHP", "HTML5", "CSS3", "JavaScript","MySQL","Apache","Fontawesome6.0","Bootstrap"],
        projectLink: "#", // Lien désactivé pour le moment
        githubLink: "#" // Lien désactivé pour le moment
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
    "title": "🌍 Tableau de Bord Démographique Mondial",
    "description": "📊 **Fonctionnalités principales** :<br><br>🗺️ **Carte interactive** :<br> visualisation des indicateurs démographiques par pays avec code couleur.<br><br>📈 **Graphique temporel** :<br> analyse des tendances démographiques globales depuis 1960.<br><br>🏆 **Classement dynamique** :<br> top 10 des pays par indicateur, mis à jour en temps réel.<br><br>👥 **Analyse comparative** :<br> courbes personnalisées pour les 10 pays les plus peuplés.<br><br>💡 Une solution intuitive et puissante pour explorer et comprendre les données démographiques mondiales. 🚀",
    "image": "global-dashboard.png",
    "technologies": ["Python", "Dash", "Plotly", "API Integration", "Data Analysis"],
    "projectLink": "#", // Lien désactivé pour le moment
    "githubLink": "https://github.com/DanielShofela/Tableau-de-Bord-Demographique.git"
    },
    {
        title: "Gestion de Restaurant",
        description: "Application de gestion complète pour les restaurants, dévelopée avec Windev 25, permettant de gérer les commandes, les budgets quotidiens, et de calculer la rentabilité.",
        image: "restaurant.png",
        technologies: ["Windev 25"],
        projectLink: "#", // Lien désactivé pour le moment
        githubLink: "https://github.com/DanielShofela/Logiciel-de-gestion-de-restaurant-2024-1.0.git" 
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
