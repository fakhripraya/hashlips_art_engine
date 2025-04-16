const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  // Specific for Cyborg (non set)
  {
    growEditionSizeTo: 25,
    layersOrder: [ 
      { name: "BACKGROUND" },
      { name: "BACK WEAPON" },
      { 
        name: "CYBORG", 
        options: {
          displayName: "BODY TYPE",
        }, 
      },
      { name: "EYES" },
      { 
        name: "CYBORG FACE", 
        options: {
          displayName: "FACE",
        }, 
      },
      { name: "HAIR" },
      { name: "TOP" },
      { 
        name: "TRANSPARENT", 
        options: {
          displayName: "TOP",
        }, 
      },
      { name: "PANTS" },
      { 
        name: "TRANSPARENT", 
        options: {
          displayName: "PANTS",
        }, 
      },
      { name: "COAT" },
      { 
        name: "TRANSPARENT", 
        options: {
          displayName: "COAT",
        }, 
      },
      { name: "HAND WEAPON" },
      { name: "BAGS" },
      { name: "HEADWEAR" },
      { name: "NECK" },
    ],
  },
  // Specific for Cyborg with sets (excluding niqab and nun)
  {
    growEditionSizeTo: 50,
    layersOrder: [ 
      { name: "BACKGROUND" },
      { name: "BACK WEAPON" },
      { 
        name: "CYBORG", 
        options: {
          displayName: "BODY TYPE",
        }, 
      },
      { name: "EYES" },
      { 
        name: "CYBORG FACE", 
        options: {
          displayName: "FACE",
        }, 
      },
      { name: "HAIR" },
      { name: "SET" },
      { name: "HAND WEAPON" },
      { name: "BAGS" },
      { name: "HEADWEAR" },
      { name: "NECK" },
    ],
  },
  // Specific for Cyborg with niqab only
  {
    growEditionSizeTo: 75,
    layersOrder: [ 
      { name: "BACKGROUND" },
      { name: "BACK WEAPON" },
      { 
        name: "CYBORG", 
        options: {
          displayName: "BODY TYPE",
        }, 
      },
      { name: "EYES" },
      { 
        name: "CYBORG FACE", 
        options: {
          displayName: "FACE",
        }, 
      },
      { 
        name: "NIQAB HAIR", 
        options: {
          displayName: "HAIR",
        }, 
      },
      { 
        name: "NIQAB", 
        options: {
          displayName: "SET",
        }, 
      },
      { name: "HAND WEAPON" },
      { name: "BAGS" },
      { name: "NECK" },
    ],
  },
  // Specific for Cyborg with nun only
  {
    growEditionSizeTo: 100,
    layersOrder: [ 
      { name: "BACKGROUND" },
      { name: "BACK WEAPON" },
      { 
        name: "CYBORG", 
        options: {
          displayName: "BODY TYPE",
        }, 
      },
      { name: "EYES" },
      { 
        name: "CYBORG FACE", 
        options: {
          displayName: "FACE",
        }, 
      },
      { 
        name: "NUN HAIR", 
        options: {
          displayName: "HAIR",
        }, 
      },
      { 
        name: "NUN", 
        options: {
          displayName: "SET",
        }, 
      },
      { name: "HAND WEAPON" },
      { name: "BAGS" },
      { 
        name: "NUN NECK", 
        options: {
          displayName: "NECK",
        }, 
      },
    ],
  },
  // Specific for Demon (non set)
  {
    growEditionSizeTo: 125,
    layersOrder: [ 
      { name: "BACKGROUND" },
      { name: "BACK WEAPON" },
      { 
        name: "DEMON", 
        options: {
          displayName: "BODY TYPE",
        }, 
      },
      { 
        name: "DEMON EYES", 
        options: {
          displayName: "EYES",
        }, 
      },
      { name: "FACE" },
      { name: "HAIR" },
      { name: "TOP" },
      { name: "PANTS" },
      { name: "COAT" },
      { name: "HAND WEAPON" },
      { name: "BAGS" },
      { name: "HEADWEAR" },
      { name: "NECK" },
    ],
  },
  // Specific for Demon with sets (excluding niqab and nun)
  {
    growEditionSizeTo: 150,
    layersOrder: [ 
      { name: "BACKGROUND" },
      { name: "BACK WEAPON" },
      { 
        name: "DEMON", 
        options: {
          displayName: "BODY TYPE",
        }, 
      },
      { 
        name: "DEMON EYES", 
        options: {
          displayName: "EYES",
        }, 
      },
      { name: "FACE" },
      { name: "HAIR" },
      { name: "SET" },
      { name: "HAND WEAPON" },
      { name: "BAGS" },
      { name: "HEADWEAR" },
      { name: "NECK" },
    ],
  },
  // Specific for Demon with niqab only
  {
    growEditionSizeTo: 175,
    layersOrder: [ 
      { name: "BACKGROUND" },
      { name: "BACK WEAPON" },
      { 
        name: "DEMON", 
        options: {
          displayName: "BODY TYPE",
        }, 
      },
      { 
        name: "DEMON EYES", 
        options: {
          displayName: "EYES",
        }, 
      },
      { name: "FACE" },
      { 
        name: "NIQAB HAIR", 
        options: {
          displayName: "HAIR",
        }, 
      },
      { 
        name: "NIQAB", 
        options: {
          displayName: "SET",
        }, 
      },
      { name: "HAND WEAPON" },
      { name: "BAGS" },
      { name: "NECK" },
    ],
  },
  // Specific for Demon with nun only
  {
    growEditionSizeTo: 175,
    layersOrder: [ 
      { name: "BACKGROUND" },
      { name: "BACK WEAPON" },
      { 
        name: "DEMON", 
        options: {
          displayName: "BODY TYPE",
        }, 
      },
      { 
        name: "DEMON EYES", 
        options: {
          displayName: "EYES",
        }, 
      },
      { name: "FACE" },
      { 
        name: "NUN HAIR", 
        options: {
          displayName: "HAIR",
        }, 
      },
      { 
        name: "NUN", 
        options: {
          displayName: "SET",
        }, 
      },
      { name: "HAND WEAPON" },
      { name: "BAGS" },
      { 
        name: "NUN NECK", 
        options: {
          displayName: "NECK",
        }, 
      },
    ],
  },
  // Specific for Red Spirit (non set)
  {
    growEditionSizeTo: 200,
    layersOrder: [ 
      { name: "BACKGROUND" },
      { name: "BACK WEAPON" },
      { 
        name: "RED SPIRIT", 
        options: {
          displayName: "BODY TYPE",
        }, 
      },
      { 
        name: "RED SPIRIT EYES", 
        options: {
          displayName: "EYES",
        }, 
      },
      { 
        name: "RED SPIRIT FACE", 
        options: {
          displayName: "FACE",
        }, 
      },
      { 
        name: "RED SPIRIT HAIR", 
        options: {
          displayName: "HAIR",
        }, 
      },
      { name: "TOP" },
      { name: "PANTS" },
      { name: "COAT" },
      { 
        name: "RED SPIRIT HAND WEAPON", 
        options: {
          displayName: "HAND WEAPON",
        }, 
      },
      { name: "BAGS" },
      { name: "HEADWEAR" },
      { name: "NECK" },
    ],
  },
  // Specific for Red Spirit with sets (excluding niqab and nun)
  {
    growEditionSizeTo: 225,
    layersOrder: [ 
      { name: "BACKGROUND" },
      { name: "BACK WEAPON" },
      { 
        name: "RED SPIRIT", 
        options: {
          displayName: "BODY TYPE",
        }, 
      },
      { 
        name: "RED SPIRIT EYES", 
        options: {
          displayName: "EYES",
        }, 
      },
      { 
        name: "RED SPIRIT FACE", 
        options: {
          displayName: "FACE",
        }, 
      },
      { 
        name: "RED SPIRIT HAIR", 
        options: {
          displayName: "HAIR",
        }, 
      },
      { name: "SET" },
      { 
        name: "RED SPIRIT HAND WEAPON", 
        options: {
          displayName: "HAND WEAPON",
        }, 
      },
      { name: "BAGS" },
      { name: "HEADWEAR" },
      { name: "NECK" },
    ],
  },
  // Specific for Red Spirit with niqab only
  {
    growEditionSizeTo: 250,
    layersOrder: [ 
      { name: "BACKGROUND" },
      { name: "BACK WEAPON" },
      { 
        name: "RED SPIRIT", 
        options: {
          displayName: "BODY TYPE",
        }, 
      },
      { 
        name: "RED SPIRIT EYES", 
        options: {
          displayName: "EYES",
        }, 
      },
      { 
        name: "RED SPIRIT FACE", 
        options: {
          displayName: "FACE",
        }, 
      },
      { 
        name: "NIQAB HAIR", 
        options: {
          displayName: "HAIR",
        }, 
      },
      { 
        name: "NIQAB", 
        options: {
          displayName: "SET",
        }, 
      },
      { 
        name: "RED SPIRIT HAND WEAPON", 
        options: {
          displayName: "HAND WEAPON",
        }, 
      },
      { name: "BAGS" },
      { name: "NECK" },
    ],
  },
  // Specific for Red Spirit with nun only
  {
    growEditionSizeTo: 275,
    layersOrder: [ 
      { name: "BACKGROUND" },
      { name: "BACK WEAPON" },
      { 
        name: "RED SPIRIT", 
        options: {
          displayName: "BODY TYPE",
        }, 
      },
      { 
        name: "RED SPIRIT EYES", 
        options: {
          displayName: "EYES",
        }, 
      },
      { 
        name: "RED SPIRIT FACE", 
        options: {
          displayName: "FACE",
        }, 
      },
      { 
        name: "NUN HAIR", 
        options: {
          displayName: "HAIR",
        }, 
      },
      { 
        name: "NUN", 
        options: {
          displayName: "SET",
        }, 
      },
      { 
        name: "RED SPIRIT HAND WEAPON", 
        options: {
          displayName: "HAND WEAPON",
        }, 
      },
      { name: "BAGS" },
      { 
        name: "NUN NECK", 
        options: {
          displayName: "NECK",
        }, 
      },
    ],
  },
  // Specific for Blue Spirit (non set)
  {
    growEditionSizeTo: 300,
    layersOrder: [ 
      { name: "BACKGROUND" },
      { name: "BACK WEAPON" },
      { 
        name: "BLUE SPIRIT", 
        options: {
          displayName: "BODY TYPE",
        }, 
      },
      { 
        name: "BLUE SPIRIT EYES", 
        options: {
          displayName: "EYES",
        }, 
      },
      { 
        name: "BLUE SPIRIT FACE", 
        options: {
          displayName: "FACE",
        }, 
      },
      { 
        name: "BLUE SPIRIT HAIR", 
        options: {
          displayName: "HAIR",
        }, 
      },
      { name: "TOP" },
      { name: "PANTS" },
      { name: "COAT" },
      { 
        name: "BLUE SPIRIT HAND WEAPON", 
        options: {
          displayName: "HAND WEAPON",
        }, 
      },
      { name: "BAGS" },
      { name: "HEADWEAR" },
      { name: "NECK" },
    ],
  },
  // Specific for Blue Spirit with sets (excluding niqab and nun)
  {
    growEditionSizeTo: 325,
    layersOrder: [ 
      { name: "BACKGROUND" },
      { name: "BACK WEAPON" },
      { 
        name: "BLUE SPIRIT", 
        options: {
          displayName: "BODY TYPE",
        }, 
      },
      { 
        name: "BLUE SPIRIT EYES", 
        options: {
          displayName: "EYES",
        }, 
      },
      { 
        name: "BLUE SPIRIT FACE", 
        options: {
          displayName: "FACE",
        }, 
      },
      { 
        name: "BLUE SPIRIT HAIR", 
        options: {
          displayName: "HAIR",
        }, 
      },
      { name: "SET" },
      { 
        name: "BLUE SPIRIT HAND WEAPON", 
        options: {
          displayName: "HAND WEAPON",
        }, 
      },
      { name: "BAGS" },
      { name: "HEADWEAR" },
      { name: "NECK" },
    ],
  },
  // Specific for Blue Spirit with niqab only
  {
    growEditionSizeTo: 350,
    layersOrder: [ 
      { name: "BACKGROUND" },
      { name: "BACK WEAPON" },
      { 
        name: "BLUE SPIRIT", 
        options: {
          displayName: "BODY TYPE",
        }, 
      },
      { 
        name: "BLUE SPIRIT EYES", 
        options: {
          displayName: "EYES",
        }, 
      },
      { 
        name: "BLUE SPIRIT FACE", 
        options: {
          displayName: "FACE",
        }, 
      },
      { 
        name: "NIQAB HAIR", 
        options: {
          displayName: "HAIR",
        }, 
      },
      { 
        name: "NIQAB", 
        options: {
          displayName: "SET",
        }, 
      },
      { 
        name: "BLUE SPIRIT HAND WEAPON", 
        options: {
          displayName: "HAND WEAPON",
        }, 
      },
      { name: "BAGS" },
      { name: "NECK" },
    ],
  },
  // Specific for Blue Spirit with nun only
  {
    growEditionSizeTo: 375,
    layersOrder: [ 
      { name: "BACKGROUND" },
      { name: "BACK WEAPON" },
      { 
        name: "BLUE SPIRIT", 
        options: {
          displayName: "BODY TYPE",
        }, 
      },
      { 
        name: "BLUE SPIRIT EYES", 
        options: {
          displayName: "EYES",
        }, 
      },
      { 
        name: "BLUE SPIRIT FACE", 
        options: {
          displayName: "FACE",
        }, 
      },
      { 
        name: "NUN HAIR", 
        options: {
          displayName: "HAIR",
        }, 
      },
      { 
        name: "NUN", 
        options: {
          displayName: "SET",
        }, 
      },
      { 
        name: "BLUE SPIRIT HAND WEAPON", 
        options: {
          displayName: "HAND WEAPON",
        }, 
      },
      { name: "BAGS" },
      { 
        name: "NUN NECK", 
        options: {
          displayName: "NECK",
        }, 
      },
    ],
  },
  // Specific for Human (non set)
  {
    growEditionSizeTo: 400,
    layersOrder: [ 
      { name: "BACKGROUND" },
      { name: "BACK WEAPON" },
      { name: "BODY TYPE" },
      { name: "EYES" },
      { name: "FACE" },
      { name: "HAIR" },
      { name: "TOP" },
      { name: "PANTS" },
      { name: "COAT" },
      { name: "HAND WEAPON" },
      { name: "BAGS" },
      { name: "HEADWEAR" },
      { name: "NECK" },
    ],
  },
  // Specific for Human with sets (excluding niqab and nun)
  {
    growEditionSizeTo: 425,
    layersOrder: [ 
      { name: "BACKGROUND" },
      { name: "BACK WEAPON" },
      { name: "BODY TYPE" },
      { name: "EYES" },
      { name: "FACE" },
      { name: "HAIR" },
      { name: "SET" },
      { name: "HAND WEAPON" },
      { name: "BAGS" },
      { name: "HEADWEAR" },
      { name: "NECK" },
    ],
  },
  // Specific for Human with niqab only
  {
    growEditionSizeTo: 450,
    layersOrder: [ 
      { name: "BACKGROUND" },
      { name: "BACK WEAPON" },
      { name: "BODY TYPE" },
      { name: "EYES" },
      { name: "FACE" },
      { 
        name: "NIQAB HAIR", 
        options: {
          displayName: "HAIR",
        }, 
      },
      { 
        name: "NIQAB", 
        options: {
          displayName: "SET",
        }, 
      },
      { name: "HAND WEAPON" },
      { name: "BAGS" },
      { name: "NECK" },
    ],
  },
  // Specific for Human with nun only
  {
    growEditionSizeTo: 500,
    layersOrder: [ 
      { name: "BACKGROUND" },
      { name: "BACK WEAPON" },
      { name: "BODY TYPE" },
      { name: "EYES" },
      { name: "FACE" },
      { 
        name: "NUN HAIR", 
        options: {
          displayName: "HAIR",
        }, 
      },
      { 
        name: "NUN", 
        options: {
          displayName: "SET",
        }, 
      },
      { name: "HAND WEAPON" },
      { name: "BAGS" },
      { 
        name: "NUN NECK", 
        options: {
          displayName: "NECK",
        }, 
      },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 2000,
  height: 2000,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
