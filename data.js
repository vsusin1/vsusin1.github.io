const projects = [
    {
        "name": "Projet Biblio",
        "used_technologies": ["DotNet"],
        "images": [
            {
                "src": "biblio_1.png",
                "caption": "La page de connexion."
            },
            {
                "src": "biblio_2.png",
                "caption": "Les catégories de livres."
            },
            {
                "src": "biblio_3.png",
                "caption": "La liste des livres dans une catégorie."
            },
            {
                "src": "biblio_4.png",
                "caption": "La page utilisateur."
            }
        ]
    },
    {
        "name": "Projet Bonbons",
        "used_technologies": ["PHP", "Bootstrap", "MySQL"],
        "images": [
            {
                "src": "bonbons1.png",
                "caption": "La page principale, une fois connecté."
            }
        ]
    },
    {
        "name": "Mission 2 - SicilyLines",
        "used_technologies": ["C#", "MySQL"],
        "images": [
            {
                "src": "mission2_1.png",
                "caption": "L'écran principal, avec tous les secteurs affichés."
            },
            {
                "src": "mission2_2.png",
                "caption": "La création d'une traversée."
            },
            {
                "src": "mission2_3.png",
                "caption": "La modification d'une traversée."
            },
            {
                "src": "mission2_4.png",
                "caption": "La sélection d'un secteur."
            }
        ]
    },
    {
        "name": "Mission 4 - SicilyLines",
        "used_technologies": ["PHP", "Laravel", "CSS", "MySQL"],
        "images": [
            {
                "src": "mission4_1.png",
                "caption": "L'écran principal."
            },
            {
                "src": "mission4_2.png",
                "caption": "Écran d'ajout de bateau."
            },
            {
                "src": "mission4_3.png",
                "caption": "Liste des ferries."
            }
        ]
    }
]

function makeTechnoIcon(name)
{
    const technoColors = {
        "php": {r: 0, g: 45, b: 180},
        "laravel": {r: 205, g: 24, b: 81},
        "bootstrap": {r: 0x71, g: 0x2D, b: 0xF6},
        "css": {r: 0xdd, g: 0xb1, b: 0x20},
        
    }

    const technoIconsSvgSrc = {
        "c#" : "https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg",
        "mysql": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mysql-icon.png",
        "dotnet": "https://cdn.freebiesupply.com/logos/large/2x/dotnet-logo-png-transparent.png"
    }

    let slug = name.toLowerCase();

    let technoIcon;
    let isSvgIcon = false;

    let color = {r: 0, g: 0, b: 0};

    if (Object.hasOwn(technoIconsSvgSrc, slug))
    {
        technoIcon = document.createElement('img');
        isSvgIcon = true;
    }
    else 
    {
        technoIcon = document.createElement("i"); 
        isSvgIcon = false;
    }


    if (Object.hasOwn(technoColors, slug))
        color = technoColors[slug];
    
    if (!isSvgIcon)
    {
        
        technoIcon.classList = `techno-icon fa-brands fa-${slug}`;
        technoIcon.style = `color: rgb(${color.r}, ${color.g}, ${color.b});`;
    }
    else
    {
        technoIcon.classList = 'techno-icon-svg';
        technoIcon.src = technoIconsSvgSrc[slug];
    }

    technoIcon.dataset.bsToggle = "tooltip";
    technoIcon.dataset.bsTitle = name;
    technoIcon.alt = name;

    return technoIcon;
    
}

window.onload = (ev) => {
    const root = document.querySelector("#projects-root");

    for (let project of projects)
    {
        console.log(project);
        let element = document.createElement("div");

        element.classList = "project-card";

        let title = document.createElement("h4");

        title.classList = ["project-title"];
        title.textContent = project.name;

        element.appendChild(title);

        let technosUsed = document.createElement("p");

        for (let techno of project.used_technologies)
        {

            technosUsed.appendChild(makeTechnoIcon(techno));
        }
        element.appendChild(technosUsed);

        let imageContainer = document.createElement("div");

        imageContainer.classList = ["project-image-container"];

        for (let imageObj of project.images)
        {
            let figure = document.createElement("figure");

            let image = document.createElement("img");

            image.src = `assets/${imageObj.src}`;
            image.classList = ["project-image"];

            let imgCaption = document.createElement("figcaption");
            
            imgCaption.textContent = imageObj.caption;
            imgCaption.classList = "project-image-caption";

            figure.appendChild(image);
            figure.appendChild(imgCaption);
            imageContainer.appendChild(figure);

        }

        element.appendChild(imageContainer);

        element.appendChild(
            document.createElement("hr")
        );

        root.appendChild(
            element
        );
    }
};