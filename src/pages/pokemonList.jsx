import React from 'react';
import Pokemon from '../pokemon';

export const PokemonList = () => {
    const pokemonData = [
        {
            name: "Bulbasaur",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            type: "Grass, Poison",
            id: 1,
            description:
                "Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo. ",
            information: "altura: 0,7 cm  peso:6,9 kg  habilidad: espesura",
        },
        {
            name: "Ivysaur",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
            type: "Grass, Poison",
            id: 2,
            description: "",
        },
        {
            name: "Venusaur",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
            type: "Grass, Poison",
            id: 3,
            description: "",
        },
        {
            name: "Charmander",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            type: "Fire",
            id: 4,
            description: "",
        },
        {
            name: "Charmeleon",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
            type: "Fire",
            id: 5,
            description: "",
        },
        {
            name: "Charizard",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
            type: "Fire, Flying",
            id: 6,
            description: "",
        },
        {
            name: "Squirtle",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
            type: "Water",
            id: 7,
        },
        {
            name: "Wartortle",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
            type: "Water",
            id: 8,
        },
        {
            name: "Blastoise",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
            type: "Water",
            id: 9,
        },
        {
            name: "Caterpie",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
            type: "bug",
            id: 10,
        },
        {
            name: "Metapod",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
            type: "bug",
            id: 11,
        },
        {
            name: "Butterfree",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
            type: "bug, Flying",
            id: 12,
        },
        {
            name: "Weedle",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
            type: "bug, Poison",
            id: 13,
        },
        {
            name: "Kakuna",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
            type: "bug, Poison",
            id: 14,
        },
        {
            name: "Beedrill",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
            type: "bug, Poison",
            id: 15,
        },
        {
            name: "Pidgey",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
            type: "normal, Flying",
            id: 16,
        },
        {
            name: "Pidgeotto",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
            type: "normal, Flying",
            id: 17,
        },
        {
            name: "Pidgeot",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
            type: "normal, Flying",
            id: 18,
        },
        {
            name: "Rattata",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
            type: "normal",
            id: 19,
        },
        {
            name: "Raticate",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
            type: "normal",
            id: 20,
        },
        {
            name: "Spearow",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
            type: "normal, Flying",
            id: 21,
        },
        {
            name: "Fearow",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
            type: "normal, Flying",
            id: 22,
        },
        {
            name: "Ekans",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
            type: "Poison",
            id: 23,
        },
        {
            name: "Arbok",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
            type: "Poison",
            id: 24,
        },
        {
            name: "Pikachu",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
            type: "Electric",
            id: 25,
        },
        {
            name: "Raichu",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
            type: "Electric",
            id: 26,
        },
        {
            name: "Sandshrew",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
            type: "ground",
            id: 27,
        },
        {
            name: "Sandslash",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
            type: "ground",
            id: 28,
        },
        {
            name: "Nidoran-f",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
            type: "Poison",
            id: 29,
        },
        {
            name: "Nidorina",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
            type: "Poison",
            id: 30,
        },
        {
            name: "Nidoqueen",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
            type: "Poison, ground",
            id: 31,
        },
        {
            name: "Nidoran-m",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
            type: "Poison",
            id: 32,
        },
        {
            name: "Nidorino",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
            type: "Poison",
            id: 33,
        },
        {
            name: "Nidoking",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
            type: "Poison, ground",
            id: 34,
        },
        {
            name: "Clefairy",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
            type: "fairy",
            id: 35,
        },
        {
            name: "Clefable",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
            type: "fairy",
            id: 36,
        },
        {
            name: "Vulpix",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
            type: "Fire",
            id: 37,
        },
        {
            name: "Ninetales",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
            type: "Fire",
            id: 38,
        },
        {
            name: "Jigglypuff",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
            type: "normal, fairy",
            id: 39,
        },
        {
            name: "Wigglytuff",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
            type: "normal, fairy",
            id: 40,
        },
        {
            name: "Zubat",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
            type: "Poison, Flying",
            id: 41,
        },
        {
            name: "Golbat",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
            type: "Poison, Flying",
            id: 42,
        },
        {
            name: "Oddish",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
            type: "Grass, Poison",
            id: 43,
        },
        {
            name: "Gloom",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
            type: "Grass, Poison",
            id: 44,
        },
        {
            name: "Vileplume",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
            type: "Grass, Poison",
            id: 45,
        },
        {
            name: "Paras",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
            type: "bug, Grass",
            id: 46,
        },
        {
            name: "Parasect",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
            type: "bug, Grass",
            id: 47,
        },
        {
            name: "Venonat",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
            type: "bug, Poison",
            id: 48,
        },
        {
            name: "Venomoth",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
            type: "bug, Poison",
            id: 49,
        },
        {
            name: "Diglett",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
            type: "ground",
            id: 50,
        },
        {
            name: "Dugtrio",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
            type: "ground",
            id: 51,
        },
        {
            name: "Meowth",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
            type: "normal",
            id: 52,
        },
        {
            name: "Persian",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
            type: "normal",
            id: 53,
        },
        {
            name: "Psyduck",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
            type: "Water",
            id: 54,
        },
        {
            name: "Golduck",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
            type: "Water",
            id: 55,
        },
        {
            name: "Mankey",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
            type: "fighting",
            id: 56,
        },
        {
            name: "Primeape",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
            type: "fighting",
            id: 57,
        },
        {
            name: "Growlithe",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
            type: "Fire",
            id: 58,
        },
        {
            name: "Arcanine",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
            type: "Fire",
            id: 59,
        },
        {
            name: "Poliwag",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
            type: "Water",
            id: 60,
        },
        {
            name: "Poliwhirl",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
            type: "Water",
            id: 61,
        },
        {
            name: "Poliwrath",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
            type: "Water, fighting",
            id: 62,
        },
        {
            name: "Abra",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
            type: "psychic",
            id: 63,
        },
        {
            name: "Kadabra",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
            type: "psychic",
            id: 64,
        },
        {
            name: "Alakazam",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
            type: "psychic",
            id: 65,
        },
        {
            name: "Machop",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
            type: "fighting",
            id: 66,
        },
        {
            name: "Machoke",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
            type: "fighting",
            id: 67,
        },
        {
            name: "Machamp",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
            type: "fighting",
            id: 68,
        },
        {
            name: "Bellsprout",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
            type: "Grass, Poison",
            id: 69,
        },
        {
            name: "Weepinbell",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
            type: "Grass, Poison",
            id: 70,
        },
        {
            name: "Victreebel",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
            type: "Grass, Poison",
            id: 71,
        },
        {
            name: "Tentacool",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
            type: "Water, Poison",
            id: 72,
        },
        {
            name: "Tentacruel",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
            type: "Water, Poison",
            id: 73,
        },
        {
            name: "Geodude",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
            type: "rock, ground",
            id: 74,
        },
        {
            name: "Graveler",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
            type: "rock, ground",
            id: 75,
        },
        {
            name: "Golem",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
            type: "rock, ground",
            id: 76,
        },
        {
            name: "Ponyta",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
            type: "Fire",
            id: 77,
        },
        {
            name: "Rapidash",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
            type: "Fire",
            id: 78,
        },
        {
            name: "Slowpoke",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
            type: "Water, psychic",
            id: 79,
        },
        {
            name: "Slowbro",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
            type: "Water, psychic",
            id: 80,
        },
        {
            name: "Magnemite",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
            type: "Electric, steel",
            id: 81,
        },
        {
            name: "Magneton",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
            type: "Electric, steel",
            id: 82,
        },
        {
            name: "Farfetchd",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
            type: "normal, Flying",
            id: 83,
        },
        {
            name: "Doduo",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
            type: "normal, Flying",
            id: 84,
        },
        {
            name: "Dodrio",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
            type: "normal, Flying",
            id: 85,
        },
        {
            name: "Seel",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
            type: "Water",
            id: 86,
        },
        {
            name: "Dewgong",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
            type: "Water, ice",
            id: 87,
        },
        {
            name: "Grimer",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
            type: "Poison",
            id: 88,
        },
        {
            name: "Muk",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
            type: "Poison",
            id: 89,
        },
        {
            name: "Shellder",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
            type: "Water",
            id: 90,
        },
        {
            name: "Cloyster",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
            type: "Water, ice",
            id: 91,
        },
        {
            name: "Gastly",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
            type: "ghost, Poison",
            id: 92,
        },
        {
            name: "Haunter",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
            type: "ghost, Poison",
            id: 93,
        },
        {
            name: "Gengar",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
            type: "ghost, Poison",
            id: 94,
        },
        {
            name: "Onix",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
            type: "rock, ground",
            id: 95,
        },
        {
            name: "Drowzee",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
            type: "psychic",
            id: 96,
        },
        {
            name: "Hypno",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
            type: "psychic",
            id: 97,
        },
        {
            name: "Krabby",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
            type: "Water",
            id: 98,
        },
        {
            name: "Kingler",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
            type: "Water",
            id: 99,
        },
        {
            name: "Voltorb",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
            type: "Electric",
            id: 100,
        },
        {
            name: "Electrode",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
            type: "Electric",
            id: 101,
        },
        {
            name: "Exeggcute",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
            type: "Grass, psychic",
            id: 102,
        },
        {
            name: "Exeggutor",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
            type: "Grass, psychic",
            id: 103,
        },
        {
            name: "Cubone",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
            type: "ground",
            id: 104,
        },
        {
            name: "Marowak",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
            type: "ground",
            id: 105,
        },
        {
            name: "Hitmonlee",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
            type: "fighting",
            id: 106,
        },
        {
            name: "Hitmonchan",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
            type: "fighting",
            id: 107,
        },
        {
            name: "Lickitung",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
            type: "normal",
            id: 108,
        },
        {
            name: "Koffing",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
            type: "Poison",
            id: 109,
        },
        {
            name: "Weezing",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
            type: "Poison",
            id: 110,
        },
        {
            name: "Rhyhorn",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
            type: "ground, rock",
            id: 111,
        },
        {
            name: "Rhydon",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
            type: "ground, rock",
            id: 112,
        },
        {
            name: "Chansey",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
            type: "normal",
            id: 113,
        },
        {
            name: "Tangela",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
            type: "Grass",
            id: 114,
        },
        {
            name: "Kangaskhan",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
            type: "normal",
            id: 115,
        },
        {
            name: "Horsea",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
            type: "Water",
            id: 116,
        },
        {
            name: "Seadra",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
            type: "Water",
            id: 117,
        },
        {
            name: "Goldeen",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
            type: "Water",
            id: 118,
        },
        {
            name: "Seaking",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
            type: "Water",
            id: 119,
        },
        {
            name: "Staryu",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
            type: "Water",
            id: 120,
        },
        {
            name: "Starmie",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
            type: "Water, psychic",
            id: 121,
        },
        {
            name: "Mr-mime",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
            type: "psychic, fairy",
            id: 122,
        },
        {
            name: "Scyther",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
            type: "bug, Flying",
            id: 123,
        },
        {
            name: "Jynx",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
            type: "Ice, psychic",
            id: 124,
        },
        {
            name: "Electabuzz",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
            type: "Electric",
            id: 125,
        },
        {
            name: "Magmar",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
            type: "Fire",
            id: 126,
        },
        {
            name: "Pinsir",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
            type: "bug",
            id: 127,
        },
        {
            name: "Tauros",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
            type: "normal",
            id: 128,
        },
        {
            name: "Magikarp",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
            type: "Water",
            id: 129,
        },
        {
            name: "Gyarados",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
            type: "Water, Flying",
            id: 130,
        },
        {
            name: "Lapras",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
            type: "Water, ice",
            id: 131,
        },
        {
            name: "Ditto",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
            type: "normal",
            id: 132,
        },
        {
            name: "Eevee",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
            type: "normal",
            id: 133,
        },
        {
            name: "Vaporeon",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
            type: "Water",
            id: 134,
        },
        {
            name: "Jolteon",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
            type: "Electric",
            id: 135,
        },
        {
            name: "Flareon",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
            type: "Fire",
            id: 136,
        },
        {
            name: "Porygon",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
            type: "normal",
            id: 137,
        },
        {
            name: "Omanyte",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
            type: "rock, Water",
            id: 138,
        },
        {
            name: "Omastar",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
            type: "rock, Water",
            id: 139,
        },
        {
            name: "Kabuto",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
            type: "rock, Water",
            id: 140,
        },
        {
            name: "Kabutops",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
            type: "rock, Water",
            id: 141,
        },
        {
            name: "Aerodactyl",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
            type: "rock, Flying",
            id: 142,
        },
        {
            name: "Snorlax",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
            type: "normal",
            id: 143,
        },
        {
            name: "Articuno",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
            type: "ice, Flying",
            id: 144,
        },
        {
            name: "Zapdos",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
            type: "Electric, Flying",
            id: 145,
        },
        {
            name: "Moltres",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
            type: "Fire, Flying",
            id: 146,
        },
        {
            name: "Dratini",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
            type: "dragon",
            id: 147,
        },
        {
            name: "Dragonair",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
            type: "dragon",
            id: 148,
        },
        {
            name: "Dragonite",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
            type: "dragon, Flying",
            id: 149,
        },
        {
            name: "Mewtwo",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
            type: "psychic",
            id: 150,
        },
    ];
    return (
        <Pokemon pokemonData={pokemonData}>  </Pokemon>)
}