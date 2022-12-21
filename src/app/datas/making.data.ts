import { Making } from "../models/making.model";

export const MAKINGS: Making[] = [
    {
        id: 1,
        picture: "../assets/images/making/shifumi/shifumi4.png",
        pictureArray: [
            {
                picture: "../assets/images/making/shifumi/shifumi1.png",
                description: `Ce Shi Fu Mi a été créé de manière dynamique en javascript. En ouvrant le jeu, une fenêtre apparaît afin de laisser le choix au joueur d'écrire un pseudo de maximum 15 caractères. Après cela, le joueur clique sur le bouton "Envoyer".`
            },
            {
                picture: "../assets/images/making/shifumi/shifumi2.png",
                description: `Après avoir cliqué sur le bouton "Envoyer", une autre fenêtre apparaît afin d'expliquer les règles du jeu. Cette dernière peut être fermé en appuyant sur le bouton "Fermer", sur la croix en haut à droite ou en dehors de la fenêtre.`
            },
            {
                picture: "../assets/images/making/shifumi/shifumi3.png",
                description: `Après avoir eu les informations nécessaires, le joueur atteint l'affichage principal. Si le joueur a choisi un pseudo, ce dernier est affiché, sinon le mot "Player" sera inscrit du côté où le joueur peut jouer. Le bouton "Recommencer" permet de relancer une partie et ne peut être cliquable uniquement si celle-ci est terminée. Le joueur a également la possibilité de voir à nouveau les règles du jeu en cliquant sur le personnange en méditation en bas de la fenêtre. Afin de lancer la partie, il reste au joueur à cliquer sur l'une des trois images correspondant à pierre (les trois pierres empilées), feuille (le bonsaï) ou ciseaux (le râteau).`
            },
            {
                picture: "../assets/images/making/shifumi/shifumi4.png",
                description: `Lorsque le joueur a fait son choix entre les trois possibilités, le choix aléatoire de "l'ordinateur" est affiché. Une partie est composée de trois manches. Le résultat de la manche est affiché au centre de la fenêtre. Si la manche est gagnée, un point est ajouté sous le nom du gagnant à côté de "Manche(s)". Au bout des trois manches, si la partie est gagnée, un point est ajouté sous le nom du gagnant à côté de "Partie(s)" et le nombre de manches gagnées est remis à zéro. Si le joueur veut continuer à jouer, il appuie sur le bouton "Recommencer".`
            }
        ],         
        alt: "Image du jeu Shi-Fu-Mi",
        title: "Shi-Fu-Mi zen",
        link: "https://adeline-i.github.io/Shi_Fu_Mi/"
    },
    {
        id: 2,
        picture: "../assets/images/making/calendrier/calendrier1.png",
        pictureArray: [
            {
                picture: "../assets/images/making/calendrier/calendrier1.png",
                description: "Texte 1"
            },
            {
                picture: "../assets/images/making/calendrier/calendrier2.png",
                description: "Texte 2"
            },
            {
                picture: "../assets/images/making/calendrier/calendrier3.png",
                description: "Texte 3"
            },
            {
                picture: "../assets/images/making/calendrier/calendrier4.png",
                description: "Texte 4"
            }
        ],         
        alt: "Image d'un calendrier",
        title: "Calendrier mensuel",
        link: "https://github.com/Adeline-I/Calendar"
    },
    {
        id: 3,
        picture: "../assets/images/making/formulaire/formulaire1.png",
        pictureArray: [
            {
                picture: "../assets/images/making/formulaire/formulaire1.png",
                description: "Texte 1"
            },
            {
                picture: "../assets/images/making/formulaire/formulaire2.png",
                description: "Texte 2"
            },
            {
                picture: "../assets/images/making/formulaire/formulaire3.png",
                description: "Texte 3"
            },
            {
                picture: "../assets/images/making/formulaire/formulaire4.png",
                description: "Texte 4"
            }
        ],         
        alt: "Image d'un formulaire",
        title: "Formulaire d'inscription",
        link: "https://github.com/Adeline-I/Formulaire"
    },
    {
        id: 4,
        picture: "../assets/images/making/precedentCV/precedentCV1.png",
        pictureArray: [
            {
                picture: "../assets/images/making/precedentCV/precedentCV1.png",
                description: "Texte 1"
            },
            {
                picture: "../assets/images/making/precedentCV/precedentCV2.png",
                description: "Texte 2"
            },
            {
                picture: "../assets/images/making/precedentCV/precedentCV3.png",
                description: "Texte 3"
            },
            {
                picture: "../assets/images/making/precedentCV/precedentCV4.png",
                description: "Texte 4"
            }
        ],         
        alt: "Image de la page d'accueil du CV",
        title: "Précédent CV",
        link: "https://adeline-i.github.io/CV/"
    },
    {
        id: 5,
        picture: "../assets/images/making/panterest/panterest13.png",
        pictureArray: [
            {
                picture: "../assets/images/making/panterest/panterest1.png",
                description: "Texte 1"
            },
            {
                picture: "../assets/images/making/panterest/panterest2.png",
                description: "Texte 2"
            },
            {
                picture: "../assets/images/making/panterest/panterest3.png",
                description: "Texte 3"
            },
            {
                picture: "../assets/images/making/panterest/panterest4.png",
                description: "Texte 4"
            }
        ],       
        alt: "Image des épingles Panterest",
        title: "Clone de Pinterest",
        link: "https://github.com/Adeline-I/pinterest-clone"
    },
    {
        id: 6,
        picture: "../assets/images/making/pokedex/pokedex2.png",
        pictureArray: [
            {
                picture: "../assets/images/making/pokedex/pokedex1.png",
                description: "Texte 1"
            },
            {
                picture: "../assets/images/making/pokedex/pokedex2.png",
                description: "Texte 2"
            },
            {
                picture: "../assets/images/making/pokedex/pokedex3.png",
                description: "Texte 3"
            },
            {
                picture: "../assets/images/making/pokedex/pokedex4.png",
                description: "Texte 4"
            }
        ],
        alt: "Image du Pokédex",
        title: "Pokédex",
        link: "https://adeline-i.github.io/ng-pokemon-app/"
    }
];