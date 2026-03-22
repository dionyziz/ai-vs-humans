export interface Event {
  year: string;
  category: "machine" | "human";
  superhuman: boolean;
  text: string;
  era: number;
  link: string;
  image?: string;
  overrideImage?: string;
  imageInvert?: boolean;
  imageCredit?: ImageCredit;
  wikipediaTitle?: string;
  wikipediaExtract?: string;
  wikipediaThumbnail?: string;
}

export interface Era {
  number: number;
  label: string;
  image: string;
  imagePosition?: string;
  imageCredit?: ImageCredit;
}

export interface ImageCredit {
  creator: string;
  title: string;
  date: string;
  license: string;
  url: string;
}

export const eras: Era[] = [
  {
    number: 1,
    label: "Ancient & Industrial Machines (100 BCE – 1945)",
    image:
      "/images/1280px-La_Gare_Saint-Lazare_-_Claude_Monet.jpg",
    imagePosition: "center 35%",  // locomotive and steam fill the upper centre
    imageCredit: { creator: "Claude Monet", title: "La Gare Saint-Lazare", date: "1877", license: "Public domain", url: "https://commons.wikimedia.org/wiki/File:La_Gare_Saint-Lazare_-_Claude_Monet.jpg" },
  },
  {
    number: 2,
    label: "The Computer Age (1946 – 1989)",
    image:
      "/images/1280px-Piet_Mondrian%2C_1942_-_Broadway_Boogie_Woogie.jpg",
    imagePosition: "center center",  // abstract grid — any crop works
    imageCredit: { creator: "Piet Mondrian", title: "Broadway Boogie Woogie", date: "1942\u201343", license: "Public domain", url: "https://commons.wikimedia.org/wiki/File:Piet_Mondrian,_1942_-_Broadway_Boogie_Woogie.jpg" },
  },
  {
    number: 3,
    label: "The Game Wars (1990 – 2015)",
    image:
      "/images/1280px-The_Chess_Game_%28Sofonisba_Anguissola%29_1555_%284096x3236px%29.jpg",
    imagePosition: "center 30%",  // show faces and board, not the blank lower area
    imageCredit: { creator: "Sofonisba Anguissola", title: "The Chess Game", date: "1555", license: "Public domain", url: "https://commons.wikimedia.org/wiki/File:The_Chess_Game_(Sofonisba_Anguissola)_1555_(4096x3236px).jpg" },
  },
  {
    number: 4,
    label: "Deep Learning Dominance (2016 – 2021)",
    image:
      "/images/1280px-Georges_Seurat_-_A_Sunday_on_La_Grande_Jatte_--_1884_-_Google_Art_Project.jpg",
    imagePosition: "65% center",  // iconic promenading figures cluster right of centre
    imageCredit: { creator: "Georges Seurat", title: "A Sunday on La Grande Jatte", date: "1884\u201386", license: "Public domain", url: "https://commons.wikimedia.org/wiki/File:Georges_Seurat_-_A_Sunday_on_La_Grande_Jatte_--_1884_-_Google_Art_Project.jpg" },
  },
  {
    number: 5,
    label: "The Great Acceleration (2022 – 2023)",
    image:
      "/images/1280px-Luigi_Russolo_La_Rivolta_1911.jpg",
    imagePosition: "center 20%",  // rushing crowd converges at upper portion
    imageCredit: { creator: "Luigi Russolo", title: "La Rivolta", date: "1911", license: "Public domain", url: "https://commons.wikimedia.org/wiki/File:Luigi_Russolo_La_Rivolta_1911.jpg" },
  },
  {
    number: 6,
    label: "Current Battlefield (2024 – 2025)",
    image:
      "/images/1280px-El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_in_Google_Earth.jpg",
    imagePosition: "38% center",  // white-shirted man is focal point, left of centre
    imageCredit: { creator: "Francisco Goya", title: "The Third of May 1808", date: "1814", license: "Public domain", url: "https://commons.wikimedia.org/wiki/File:El_Tres_de_Mayo,_by_Francisco_de_Goya,_from_Prado_in_Google_Earth.jpg" },
  },
];

export const events: Event[] = [
  // ERA 1
  {
    year: "~100 BCE",
    category: "machine",
    superhuman: true,
    text: "The Antikythera mechanism predicts the positions of the Sun, Moon and planets and forecasts solar and lunar eclipses decades in advance. No human can replicate it by hand.",
    era: 1,
    link: "https://en.wikipedia.org/wiki/Antikythera_mechanism",
  },
  {
    year: "1642",
    category: "machine",
    superhuman: false,
    text: "Pascal\u2019s Pascaline adds and subtracts columns of figures faster and without error, outperforming any human bookkeeper.",
    era: 1,
    link: "https://en.wikipedia.org/wiki/Pascal%27s_calculator",
  },
  {
    year: "1770",
    category: "human",
    superhuman: false,
    text: "Wolfgang von Kempelen\u2019s \u201cMechanical Turk\u201d, a chess-playing automaton, tours Europe undefeated. Humans are horrified. It is later exposed as a hoax, with a human grandmaster hidden inside.",
    era: 1,
    link: "https://en.wikipedia.org/wiki/Mechanical_Turk",
    overrideImage: "/images/960px-Racknitz_-_The_Turk_3.jpg",
    imageCredit: { creator: "Joseph Racknitz", title: "The Turk (illustration)", date: "1789", license: "Public domain", url: "https://commons.wikimedia.org/wiki/File:Racknitz_-_The_Turk_3.jpg" },
  },
  {
    year: "1801",
    category: "machine",
    superhuman: false,
    text: "The Jacquard loom uses punched cards to weave arbitrarily complex textile patterns, reproducing designs that take human weavers months to produce.",
    era: 1,
    link: "https://en.wikipedia.org/wiki/Jacquard_machine",
  },
  {
    year: "1811",
    category: "human",
    superhuman: false,
    text: "Luddite textile workers in Nottinghamshire begin systematically smashing stocking frames and power looms that threaten their livelihoods. Within months the uprising spreads across Yorkshire and Lancashire, becoming the largest armed industrial rebellion in British history.",
    era: 1,
    link: "https://en.wikipedia.org/wiki/Luddite",
  },
  {
    year: "1812",
    category: "machine",
    superhuman: false,
    text: "Parliament passes the Frame-Breaking Act, making machine destruction a capital offence. The Crown deploys more troops against the Luddites than Wellington commands in the Peninsular War. Seventeen are hanged; dozens transported to Australia. The movement is crushed, but the word \u201cLuddite\u201d enters history as the name for human resistance to machines.",
    era: 1,
    link: "https://en.wikipedia.org/wiki/Frame-Breaking_Act",
  },
  {
    year: "1830",
    category: "machine",
    superhuman: false,
    text: "The steam locomotive \u201cRocket\u201d wins the Rainhill Trials at 48km/h, faster than any horse. The machine age of transport begins.",
    era: 1,
    link: "https://en.wikipedia.org/wiki/Stephenson%27s_Rocket",
  },
  {
    year: "1837",
    category: "machine",
    superhuman: false,
    text: "The electric telegraph transmits a message from Washington, DC to Baltimore in seconds. The fastest human courier on horseback takes hours.",
    era: 1,
    link: "https://en.wikipedia.org/wiki/Electrical_telegraph",
  },
  {
    year: "1890",
    category: "machine",
    superhuman: false,
    text: "Herman Hollerith\u2019s tabulating machine completes the American census in one year. Human clerks had estimated the job would take ten.",
    era: 1,
    link: "https://en.wikipedia.org/wiki/Tabulating_machine",
  },
  {
    year: "1945",
    category: "machine",
    superhuman: false,
    text: "ENIAC performs 5,000 arithmetic operations per second, some 5,000 times faster than the best human \u201ccomputer\u201d doing the same sums by hand.",
    era: 1,
    link: "https://en.wikipedia.org/wiki/ENIAC",
  },
  // ERA 2
  {
    year: "1946",
    category: "human",
    superhuman: false,
    text: "In a live contest in Tokyo, soroban master Kiyoshi Matsuzaki defeats an American Army electric-calculator operator four to one across addition, subtraction, division and mixed problems.",
    era: 2,
    link: "https://en.wikipedia.org/wiki/Soroban",
    overrideImage: "/images/960px-Soroban_%28Abacus%29.JPG",
    imageCredit: { creator: "Fisle", title: "Soroban (Abacus)", date: "2013", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Soroban_(Abacus).JPG" },
  },
  {
    year: "1955",
    category: "machine",
    superhuman: false,
    text: "IBM mainframes solve differential equations in minutes that would occupy a team of mathematicians for weeks.",
    era: 2,
    link: "https://en.wikipedia.org/wiki/IBM_700/7000_series",
  },
  {
    year: "1970s",
    category: "machine",
    superhuman: false,
    text: "Pocket calculators make every schoolchild faster and more accurate at arithmetic than any human working unaided.",
    era: 2,
    link: "https://en.wikipedia.org/wiki/Pocket_calculator",
  },
  // ERA 3
  {
    year: "1994",
    category: "machine",
    superhuman: true,
    text: "The checkers program Chinook defeats world champion Marion Tinsley without dropping a single game in tournament play.",
    era: 3,
    link: "https://en.wikipedia.org/wiki/Chinook_(draughts_player)",
  },
  {
    year: "1996",
    category: "human",
    superhuman: false,
    text: "Garry Kasparov defeats IBM\u2019s Deep Blue four to two in Philadelphia, the last time a reigning world chess champion wins a formal match against a computer.",
    era: 3,
    link: "https://en.wikipedia.org/wiki/Deep_Blue_versus_Kasparov,_1996",
    overrideImage: "/images/330px-Garri_Kasparow_%2818776605665%29_%28cropped%29_2.jpg",
    imageCredit: { creator: "Foto: Przemek Jahr, Attribution-ShareAlike 2.0", title: "Garry Kasparov", date: "2015", license: "CC BY-SA 2.0", url: "https://commons.wikimedia.org/wiki/File:Garri_Kasparow_(18776605665)_(cropped)_2.jpg" },
  },
  {
    year: "1997",
    category: "machine",
    superhuman: true,
    text: "Deep Blue defeats Garry Kasparov by 3\u00bd to 2\u00bd in New York, becoming the first computer to win a formal match against a reigning world chess champion.",
    era: 3,
    link: "https://en.wikipedia.org/wiki/Deep_Blue_versus_Kasparov,_1997",
    overrideImage: "/images/Deep_Blue.jpg",
    imageCredit: { creator: "James the photographer", title: "Deep Blue computer", date: "2007", license: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Deep_Blue.jpg" },
  },
  {
    year: "2002",
    category: "machine",
    superhuman: true,
    text: "Shazam identifies any song from a five-second clip of ambient audio, even in noisy bars and clubs, faster and more reliably than any music expert alive. No human can match it on unfamiliar recordings.",
    era: 3,
    link: "https://en.wikipedia.org/wiki/Shazam_Entertainment",
    overrideImage: "/images/960px-Music_studio.jpg",
    imageCredit: { creator: "DeltaRecords94", title: "Music studio", date: "2019", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Music_studio.jpg" },
  },
  {
    year: "2003",
    category: "human",
    superhuman: false,
    text: "CAPTCHA is deployed; distorted text images that any human reads in seconds defeat every automated recognition system available, locking machines out of millions of websites.",
    era: 3,
    link: "https://en.wikipedia.org/wiki/CAPTCHA",
    overrideImage: "/images/330px-Alan_Turing_%281912-1954%29_in_1936_at_Princeton_University.jpg",
    imageCredit: { creator: "Unknown author", title: "Alan Turing in 1936 at Princeton University", date: "1936", license: "Public domain", url: "https://commons.wikimedia.org/wiki/File:Alan_Turing_(1912-1954)_in_1936_at_Princeton_University.jpg" },
  },
  {
    year: "2004",
    category: "human",
    superhuman: false,
    text: "In the DARPA Grand Challenge, every robot entered in the 150-mile autonomous driving course fails. The best manages only 11.78km before stopping.",
    era: 3,
    link: "https://en.wikipedia.org/wiki/DARPA_Grand_Challenge_(2004)",
  },
  {
    year: "2005",
    category: "human",
    superhuman: false,
    text: "In freestyle chess tournaments, amateur players using modest laptops outperform dedicated chess supercomputers through strategic guidance. Human-machine centaurs reign supreme.",
    era: 3,
    link: "https://en.wikipedia.org/wiki/Advanced_Chess",
    overrideImage: "/images/960px-Paris_-_Playing_chess_at_the_Jardins_du_Luxembourg_-_2966.jpg",
    imageCredit: { creator: "Jorge Royan", title: "Playing chess in the Jardins du Luxembourg, Paris", date: "2008", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Paris_-_Playing_chess_at_the_Jardins_du_Luxembourg_-_2966.jpg" },
  },
  {
    year: "2007",
    category: "machine",
    superhuman: true,
    text: "Checkers is mathematically solved; a perfect computer program cannot be beaten or even drawn against by any human under any circumstances.",
    era: 3,
    link: "https://en.wikipedia.org/wiki/Draughts",
  },
  {
    year: "2011",
    category: "machine",
    superhuman: true,
    text: "IBM\u2019s Watson answers Jeopardy! questions faster and more accurately than all-time champions Ken Jennings and Brad Rutter, winning $1m.",
    era: 3,
    link: "https://en.wikipedia.org/wiki/Watson_(computer)",
  },
  {
    year: "2013",
    category: "machine",
    superhuman: false,
    text: "Deep-learning models identify objects in photographs more accurately than the average human for the first time, on the ImageNet benchmark.",
    era: 3,
    link: "https://en.wikipedia.org/wiki/ImageNet",
    overrideImage: "/images/960px-Artificial_Neural_Network_with_Chip.jpg",
    imageCredit: { creator: "mikemacmarketing", title: "Artificial Neural Network with Chip", date: "2018", license: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Artificial_Neural_Network_with_Chip.jpg" },
  },
  {
    year: "2014",
    category: "machine",
    superhuman: false,
    text: "Google Translate delivers usable translations across more than 50 language pairs faster than any human interpreter.",
    era: 3,
    link: "https://en.wikipedia.org/wiki/Google_Translate",
    overrideImage: "/images/1280px-Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project_-_edited.jpg",
    imageCredit: { creator: "Pieter Bruegel the Elder", title: "The Tower of Babel (Vienna)", date: "c.\u00a01563", license: "Public domain", url: "https://commons.wikimedia.org/wiki/File:Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_(Vienna)_-_Google_Art_Project_-_edited.jpg" },
  },
  {
    year: "2015",
    category: "machine",
    superhuman: true,
    text: "Microsoft\u2019s ResNet identifies objects in images with a 3.5% error rate, below the trained human benchmark of 5%.",
    era: 3,
    link: "https://en.wikipedia.org/wiki/Residual_neural_network",
    overrideImage: "/images/1280px-Dog_Breeds.jpg",
    imageCredit: { creator: "Wikimedia Commons contributors", title: "Dog Breeds", date: "2014", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Dog_Breeds.jpg" },
  },
  // ERA 4
  {
    year: "2016",
    category: "machine",
    superhuman: true,
    text: "AlphaGo defeats world Go champion Lee Sedol four to one. The game had been considered too complex for AI mastery for decades.",
    era: 4,
    link: "https://en.wikipedia.org/wiki/AlphaGo_versus_Lee_Sedol",
    overrideImage: "/images/960px-AlphaGo_computer_rack.jpg",
    imageCredit: { creator: "Immigrant laborer", title: "AlphaGo computer rack", date: "2025", license: "CC0", url: "https://commons.wikimedia.org/wiki/File:AlphaGo_computer_rack.jpg" },
  },
  {
    year: "2016",
    category: "human",
    superhuman: true,
    text: "In game four, Lee Sedol plays \u201cHand of God\u201d move 78, a move with a one-in-10,000 chance of any human attempting it, exposing a blind spot in AlphaGo and winning the only human victory against it in competitive play.",
    era: 4,
    link: "https://en.wikipedia.org/wiki/AlphaGo_versus_Lee_Sedol",
    overrideImage: "/images/Lee_Se-Dol_-_2016_%28cropped%29.jpg",
    imageCredit: { creator: "LG Electronics", title: "Lee Se-dol, 2016", date: "2016", license: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Lee_Se-Dol_-_2016_(cropped).jpg" },
  },
  {
    year: "2016",
    category: "machine",
    superhuman: true,
    text: "The chess engine Stockfish plays at an Elo of 3,400, giving away its queen against Magnus Carlsen (world champion, Elo 2,850) and still winning.",
    era: 4,
    link: "https://en.wikipedia.org/wiki/Stockfish_(chess)",
  },
  {
    year: "2017",
    category: "machine",
    superhuman: true,
    text: "AlphaZero teaches itself chess, Go and Shogi from scratch, with no human knowledge. Within four hours it surpasses all human grandmasters at chess; within eight it does so at Go.",
    era: 4,
    link: "https://en.wikipedia.org/wiki/AlphaZero",
  },
  {
    year: "2017",
    category: "machine",
    superhuman: true,
    text: "Libratus defeats four world-class players over 120,000 hands of no-limit Texas Hold\u2019em poker, the first AI to beat professionals at a major game of imperfect information.",
    era: 4,
    link: "https://en.wikipedia.org/wiki/Libratus",
    overrideImage: "/images/960px-Poker_casino_card_game.jpg",
    imageCredit: { creator: "dutchman1887 / Pixabay", title: "Poker casino card game", date: "2015", license: "CC0", url: "https://commons.wikimedia.org/wiki/File:Poker_casino_card_game.jpg" },
  },
  {
    year: "2018",
    category: "machine",
    superhuman: false,
    text: "An AI reads chest X-rays and detects pneumonia more accurately than the average radiologist.",
    era: 4,
    link: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_healthcare",
  },
  {
    year: "2019",
    category: "machine",
    superhuman: true,
    text: "OpenAI Five defeats the reigning Dota 2 world champions OG in a live five-versus-five exhibition match.",
    era: 4,
    link: "https://en.wikipedia.org/wiki/OpenAI_Five",
    overrideImage: "/images/960px-The_International_Dota_2_video_game_tournament.jpg",
    imageCredit: { creator: "YJ", title: "The International Dota 2 tournament", date: "2011", license: "CC BY-SA 2.0", url: "https://commons.wikimedia.org/wiki/File:The_International_Dota_2_video_game_tournament.jpg" },
  },
  {
    year: "2019",
    category: "machine",
    superhuman: true,
    text: "DeepMind\u2019s AlphaStar defeats top-ranked professional StarCraft II players under standard tournament conditions.",
    era: 4,
    link: "https://en.wikipedia.org/wiki/AlphaStar_(software)",
    overrideImage: "/images/960px-Starcraft_Gamescom_2017_%2836851382835%29.jpg",
    imageCredit: { creator: "dronepicr", title: "StarCraft at Gamescom 2017", date: "2017", license: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Starcraft_Gamescom_2017_(36851382835).jpg" },
  },
  {
    year: "2020",
    category: "machine",
    superhuman: false,
    text: "GPT-3 writes poems, news articles and code that humans cannot reliably identify as machine-generated.",
    era: 4,
    link: "https://en.wikipedia.org/wiki/GPT-3",
    overrideImage: "/images/960px-PrintMus_038.jpg",
    imageCredit: { creator: "Erik Lernestål", title: "Printing press at the Museum of Work, Norrköping", date: "2005", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:PrintMus_038.jpg" },
  },
  {
    year: "2021",
    category: "machine",
    superhuman: false,
    text: "An AI diagnoses skin cancer from smartphone photographs more accurately than the average board-certified dermatologist.",
    era: 4,
    link: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_healthcare",
  },
  // ERA 5
  {
    year: "2022",
    category: "machine",
    superhuman: false,
    text: "Midjourney generates a painting that wins first place in the \u201cDigital Arts/Digitally Manipulated Photography\u201d category at the Colorado State Fair, beating human artists.",
    era: 5,
    link: "https://en.wikipedia.org/wiki/Midjourney",
    imageInvert: true,
  },
  {
    year: "2022",
    category: "machine",
    superhuman: false,
    text: "Riffusion goes viral in December 2022: a fine-tuned Stable Diffusion model that generates music by painting mel spectrograms produces complete songs with melody, harmony and vocals from a single text prompt in seconds. Days later Google publishes MusicLM, which synthesises high-fidelity stereo music from rich text descriptions. Any style, any tempo, any instrumentation \u2014 on demand.",
    era: 5,
    link: "https://en.wikipedia.org/wiki/Riffusion",
    overrideImage: "/images/960px-Music_studio.jpg",
    imageCredit: { creator: "DeltaRecords94", title: "Music studio", date: "2019", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Music_studio.jpg" },
  },
  {
    year: "2022",
    category: "machine",
    superhuman: false,
    text: "ChatGPT writes college-level essays, debugs code and passes medical exams; it reaches 100m users in two months, the fastest product adoption in history.",
    era: 5,
    link: "https://en.wikipedia.org/wiki/ChatGPT",
    imageInvert: true,
  },
  {
    year: "2023",
    category: "machine",
    superhuman: true,
    text: "GPT-4 passes the American bar exam, scoring in the top 10% of all human test-takers.",
    era: 5,
    link: "https://en.wikipedia.org/wiki/Bar_examination",
    overrideImage: "/images/960px-HK_Central_Statue_Square_Legislative_Council_Building_n_Themis_s.jpg",
    imageCredit: { creator: "Wpcpey", title: "Themis statue at the Legislative Council Building, Hong Kong", date: "2012", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:HK_Central_Statue_Square_Legislative_Council_Building_n_Themis_s.jpg" },
  },
  {
    year: "2023",
    category: "machine",
    superhuman: true,
    text: "GPT-4 passes the USMLE medical licensing exam, outperforming the average medical student.",
    era: 5,
    link: "https://en.wikipedia.org/wiki/GPT-4",
    overrideImage: "/images/500px-Da_Vinci_Vitruve_Luc_Viatour.jpg",
    imageCredit: { creator: "Leonardo da Vinci", title: "Vitruvian Man", date: "c.\u00a01492", license: "Public domain", url: "https://commons.wikimedia.org/wiki/File:Da_Vinci_Vitruve_Luc_Viatour.jpg" },
  },
  {
    year: "2023",
    category: "human",
    superhuman: false,
    text: "A lawyer submits AI-generated briefs citing six entirely fabricated cases to a federal court. The hallucinations are exposed, and machines fail their first test of factual accuracy under oath.",
    era: 5,
    link: "https://en.wikipedia.org/wiki/Mata_v._Avianca,_Inc.",
  },
  {
    year: "2023",
    category: "human",
    superhuman: false,
    text: "Hollywood writers and actors strike for months, winning contract protections against AI replacing human screenwriters and performers.",
    era: 5,
    link: "https://en.wikipedia.org/wiki/2023_Writers_Guild_of_America_strike",
  },
  {
    year: "2023",
    category: "human",
    superhuman: false,
    text: "Geoffrey Hinton, the \u201cGodfather of AI\u201d, resigns from Google to warn publicly of existential risk from AI, triggering a global safety movement.",
    era: 5,
    link: "https://en.wikipedia.org/wiki/Geoffrey_Hinton",
  },
  {
    year: "2023",
    category: "human",
    superhuman: false,
    text: "The EU passes the world\u2019s first comprehensive AI Act, restricting high-risk automated decision-making by machines.",
    era: 5,
    link: "https://en.wikipedia.org/wiki/Artificial_Intelligence_Act",
  },
  {
    year: "2023",
    category: "human",
    superhuman: false,
    text: "Twenty-eight nations sign the Bletchley Declaration, the first international agreement on AI safety, at the inaugural AI Safety Summit.",
    era: 5,
    link: "https://en.wikipedia.org/wiki/AI_Safety_Summit",
  },
  // ERA 6
  {
    year: "2024",
    category: "machine",
    superhuman: true,
    text: "AlphaFold 3 predicts the three-dimensional structure of virtually every known protein and DNA complex \u2014 more than 200 million in all. Before it, the entire global field of structural biology had solved roughly 170,000 structures across five decades of effort, a pace of about 3,400 per year. Completing the same catalogue by hand would have kept every structural biologist on Earth occupied for over 50,000 years.",
    era: 6,
    link: "https://en.wikipedia.org/wiki/AlphaFold",
    overrideImage: "/images/960px-ADAR_Protein.png",
    imageCredit: { creator: "Csully222", title: "ADAR protein structure", date: "2022", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:ADAR_Protein.png" },
  },
  {
    year: "2024",
    category: "machine",
    superhuman: true,
    text: "An AI system achieves the equivalent of an International Mathematical Olympiad gold medal on competition problems, outperforming nearly all human mathematicians.",
    era: 6,
    link: "https://en.wikipedia.org/wiki/AlphaProof",
    overrideImage: "/images/330px-FieldsMedalFront.jpg",
    imageCredit: { creator: "Stefan Zachow", title: "Fields Medal (front)", date: "2014", license: "CC BY-SA 3.0 IGO", url: "https://commons.wikimedia.org/wiki/File:FieldsMedalFront.jpg" },
  },
  {
    year: "2024",
    category: "machine",
    superhuman: true,
    text: "AI-guided formal theorem provers supply machine-checked proofs for combinatorial conjectures that resisted human attack for decades, among them open problems Donald Knuth catalogued in The Art of Computer Programming. Verified in Lean, no human had found them first.",
    era: 6,
    link: "https://en.wikipedia.org/wiki/Automated_theorem_proving",
    overrideImage: "/images/960px-KnuthAtOpenContentAlliance.jpg",
    imageCredit: { creator: "Jacob Appelbaum", title: "Donald E. Knuth at the Open Content Alliance", date: "2005", license: "CC BY-SA 2.5", url: "https://commons.wikimedia.org/wiki/File:KnuthAtOpenContentAlliance.jpg" },
  },
  {
    year: "2024",
    category: "machine",
    superhuman: false,
    text: "The Nobel prizes in physics and chemistry are awarded to AI researchers for discoveries made possible by machine learning.",
    era: 6,
    link: "https://en.wikipedia.org/wiki/2024_Nobel_Prize_in_Physics",
    overrideImage: "/images/960px-Demis_Hassabis%2C_2024_Nobel_Prize_Laureate_in_Chemistry.jpg",
    imageCredit: { creator: "Arthur Petron", title: "Demis Hassabis, Nobel Prize Laureate in Chemistry 2024", date: "2024", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Demis_Hassabis,_2024_Nobel_Prize_Laureate_in_Chemistry.jpg" },
  },
  {
    year: "2024",
    category: "machine",
    superhuman: false,
    text: "AI coding assistants write and debug production code faster and more reliably than the average professional software engineer.",
    era: 6,
    link: "https://en.wikipedia.org/wiki/GitHub_Copilot",
    overrideImage: "/images/960px-VS2025_IntelliCode_%2B_Copilot.png",
    imageCredit: { creator: "Microsoft", title: "Visual Studio 2025 with IntelliCode and GitHub Copilot", date: "2025", license: "Public domain", url: "https://commons.wikimedia.org/wiki/File:VS2025_IntelliCode_%2B_Copilot.png" },
  },
  {
    year: "2025",
    category: "machine",
    superhuman: true,
    text: "AI agents autonomously complete multi-hour software development tasks, from writing tests and debugging to deployment, from a single sentence of instruction.",
    era: 6,
    link: "https://en.wikipedia.org/wiki/Intelligent_agent",
  },
];
