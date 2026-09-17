import notesFromLastRow from "../../assets/Images/Notesfromlastrow.jpg";
import taxiDriver from "../../assets/Images/TaxiDriver.jpg";
import vincenzo from "../../assets/Images/Vincenzo.jpg";
import mobland from "../../assets/Images/Mobland.jpg";
import cars2 from "../../assets/Images/Car2.jpg";
import cocktail2 from "../../assets/Images/Cockail.jpg";
import welcomeToJungle from "../../assets/Images/Welcometojungle.jpg";
import toxic from "../../assets/Images/Toxic.jpg";
import dhamaal4 from "../../assets/Images/Dhamaal4,png.jpg";
import biggBoss from "../../assets/Images/big Boss.jpg";
import reacher from "../../assets/Images/reacher.jpg";
import neagley from "../../assets/Images/Negely.jpg";
import vishwanath from "../../assets/Images/Vishwanath&Sons.jpg"

const movies = [
  {
    id: 1,
    title: "Notes from the Last Row",
    image: notesFromLastRow,
    category: "K-Drama",
    genre: "Psychological Thriller • Drama",
    year: 2026,
    duration: "Series",
    rating: null,
    quality: "HD",
    language: "Korean",
    type: "series",
    episodes: 8,
    description:
      "A psychological thriller following a talented student whose writing attracts the intense attention of a literature professor.",
    downloads: [
      { quality: "720P", size: "800MB", link: "https://nexdrive.fit/genxfm784776492379/" },
      { quality: "1080P", size: "1.5GB", link: "https://nexdrive.fit/genxfm784776492457/" },
    ],
  },

  {
    id: 2,
    title: "Taxi Driver",
    image: taxiDriver,
    category: "K-Drama",
    genre: "Action • Crime • Thriller",
    year: 2021,
    duration: "Series",
    rating: null,
    quality: "HD",
    language: "Korean",
    type: "series",
    episodes: null,
    description:
      "A mysterious taxi service helps victims seek justice when the legal system fails them.",
    downloads: [
      { quality: "720P", size: "800MB", link: "https://nexdrive.fit/genxfm784776503457/" },
      { quality: "1080P", size: "1.5GB", link: "https://nexdrive.fit/genxfm784776503429/" },
    ],
  },

  {
    id: 3,
    title: "Vincenzo",
    image: vincenzo,
    category: "K-Drama",
    genre: "Crime • Comedy • Drama",
    year: 2021,
    duration: "Series",
    rating: null,
    quality: "HD",
    language: "Korean",
    type: "series",
    episodes: 20,
    description:
      "An Italian-Korean mafia lawyer returns to South Korea and uses unconventional methods to fight powerful criminals.",
    downloads: [
      { quality: "720P", size: "800MB", link: "https://nexdrive.fit/genxfm784776505951/" },
      { quality: "1080P", size: "1.5GB", link: "https://nexdrive.fit/genxfm784776123048/" },
    ],
  },

  {
    id: 4,
    title: "MobLand",
    image: mobland,
    category: "Hollywood",
    genre: "Crime • Drama",
    year: 2025,
    duration: "Series",
    rating: null,
    quality: "HD",
    language: "English",
    type: "series",
    episodes: 10,
    description:
      "A crime drama focused on rival crime families, power struggles, and dangerous relationships.",
    downloads: [
      { quality: "720P", size: "800MB", link: "https://nexdrive.fit/genxfm784776506482/" },
      { quality: "1080P", size: "1.5GB", link: "https://nexdrive.fit/genxfm784776506490/" },
    ],
  },

  {
    id: 5,
    title: "Cars 2",
    image: cars2,
    category: "Animation",
    genre: "Animation • Adventure • Comedy",
    year: 2011,
    duration: "1h 46m",
    rating: null,
    quality: "HD",
    language: "English",
    type: "movie",
    episodes: null,
    description:
      "Lightning McQueen and Mater travel around the world and become involved in an international spy adventure.",
    downloads: [
      { quality: "720P", size: "800MB", link: "https://nexdrive.fit/genxfm78477634913/" },
      { quality: "1080P", size: "1.5GB", link: "https://nexdrive.fit/genxfm784776211537/" },
    ],
  },

  {
    id: 6,
    title: "Cocktail 2",
    image: cocktail2,
    category: "Bollywood",
    genre: "Romantic Comedy • Drama",
    year: 2026,
    duration: "Movie",
    rating: null,
    quality: "HD",
    language: "Hindi",
    type: "movie",
    episodes: null,
    description:
      "A romantic comedy-drama featuring complicated relationships and unexpected changes between friends.",
    downloads: [
      { quality: "720P", size: "800MB", link: "https://nexdrive.fit/genxfm784776491315/" },
      { quality: "1080P", size: "1.5GB", link: "https://nexdrive.fit/genxfm784776502131/" },
    ],
  },

  {
    id: 7,
    title: "Welcome to the Jungle",
    image: welcomeToJungle,
    category: "Bollywood",
    genre: "Action • Comedy",
    year: 2026,
    duration: "2h 45m",
    rating: null,
    quality: "HD",
    language: "Hindi",
    type: "movie",
    episodes: null,
    description:
      "An action-comedy featuring a large ensemble cast and chaotic adventures in the Welcome franchise.",
    downloads: [
      { quality: "720P", size: "800MB", link: "https://nexdrive.fit/genxfm784776492357/" },
      { quality: "1080P", size: "1.5GB", link: "https://nexdrive.fit/genxfm784776492358/" },
    ],
  },

  {
    id: 8,
    title: "Toxic: A Fairy Tale for Grown-Ups",
    image: toxic,
    category: "Indian Cinema",
    genre: "Action • Crime • Drama",
    year: 2026,
    duration: "Movie",
    rating: null,
    quality: "HD",
    language: "Kannada",
    type: "movie",
    episodes: null,
    description:
      "A gangster action drama centered around power, crime, and dangerous relationships.",
    downloads: [
      { quality: "720P", size: "800MB", link: "https://nexdrive.fit/genxfm784776504723/" },
      { quality: "1080P", size: "1.5GB", link: "https://nexdrive.fit/genxfm784776504724/" },
    ],
  },

  {
    id: 9,
    title: "Dhamaal 4",
    image: dhamaal4,
    category: "Bollywood",
    genre: "Comedy • Adventure",
    year: 2026,
    duration: "Movie",
    rating: null,
    quality: "HD",
    language: "Hindi",
    type: "movie",
    episodes: null,
    description:
      "The fourth installment of the Dhamaal franchise, featuring a chaotic treasure-hunt adventure.",
    downloads: [
      { quality: "720P", size: "800MB", link: "https://nexdrive.fit/genxfm784776495506/" },
      { quality: "1080P", size: "1.5GB", link: "https://nexdrive.fit/genxfm784776506297/" },
    ],
  },

  {
    id: 10,
    title: "Vishwanath & Sons",
    image:  vishwanath,
    category: "Bollywood",
    genre: "Drama",
    year: null,
    duration: "Movie",
    rating: null,
    quality: "HD",
    language: "Hindi",
    type: "movie",
    episodes: null,
    verified: false,
    description:
      "The title shown on the supplied poster could not be reliably verified as an official movie listing. Confirm the title and metadata before publishing.",
    downloads: [
      { quality: "720P", size: "800MB", link: "https://nexdrive.fit/genxfm784776507405/" },
      { quality: "1080P", size: "1.5GB", link: "https://nexdrive.fit/genxfm784776507407/" },
    ],
  },

  {
    id: 11,
    title: "Bigg Boss",
    image: biggBoss,
    category: "Reality Show",
    genre: "Reality • Entertainment",
    year: null,
    duration: "Series",
    rating: null,
    quality: "HD",
    language: "Hindi",
    type: "series",
    episodes: null,
    description:
      "A reality television show in which contestants live together and participate in tasks, nominations, and eliminations.",
    downloads: [
      { quality: "720P", size: "800MB", link: "https://nexdrive.fit/genxfm784776506699/" },
      { quality: "1080P", size: "1.5GB", link: "https://nexdrive.fit/genxfm784776506702/" },
    ],
  },

  {
    id: 12,
    title: "Reacher",
    image: reacher,
    category: "Hollywood",
    genre: "Action • Crime • Thriller",
    year: 2022,
    duration: "Series",
    rating: null,
    quality: "HD",
    language: "English",
    type: "series",
    episodes: null,
    description:
      "Jack Reacher, a former military investigator, becomes involved in dangerous conspiracies and criminal investigations.",
    downloads: [
      { quality: "720P", size: "800MB", link: "https://nexdrive.fit/genxfm784776501822/" },
      { quality: "1080P", size: "1.5GB", link: "https://nexdrive.fit/genxfm784776501826/" },
    ],
  },

  {
    id: 13,
    title: "Neagley",
    image: neagley,
    category: "Hollywood",
    genre: "Action • Crime • Thriller",
    year: 2026,
    duration: "Series",
    rating: null,
    quality: "HD",
    language: "English",
    type: "series",
    episodes: null,
    description:
      "An action thriller spin-off centered on Frances Neagley, a character from the Reacher universe.",
    downloads: [
      { quality: "720P", size: "800MB", link: "https://nexdrive.fit/genxfm784776508442/" },
      { quality: "1080P", size: "1.5GB", link: "https://nexdrive.fit/genxfm784776508458/" },
    ],
  },
];

export default movies;