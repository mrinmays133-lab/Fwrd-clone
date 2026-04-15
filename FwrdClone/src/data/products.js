const products = [
  {
    id: 1,
    brand: "VERSACE",
    name: "Scarf Top",
    type: "top",
    price: 46781.85,
    category: "matching-sets",
    image: ""
  },
  {
    id: 2,
    brand: "VERSACE",
    name: "Short Pareo",
    type: "bottom",
    price: 42528.96,
    category: "matching-sets",
    image: ""
  },
  {
    id: 3,
    brand: "AYA MUSE",
    name: "Eteri Top",
    type: "top",
    price: 40166.24,
    category: "matching-sets",
    image: ""
  },
  {
    id: 4,
    brand: "AYA MUSE",
    name: "Eteri Skirt",
    type: "bottom",
    price: 80332.48,
    category: "matching-sets",
    image: ""
  },
  {
    id: 5,
    brand: "MATTHEW BRUCH",
    name: "Structured Bandeau Crop Top",
    type: "top",
    price: 27880.10,
    category: "matching-sets",
    image: ""
  },
  {
    id: 6,
    brand: "MATTHEW BRUCH",
    name: "Bubble Short",
    type: "bottom",
    price: 37330.97,
    category: "matching-sets",
    image: ""
  },
  {
    id: 7,
    brand: "POSSE",
    name: "Phoebe Top",
    type: "top",
    price: 28352.64,
    category: "matching-sets",
    image: ""
  },
  {
    id: 8,
    brand: "POSSE",
    name: "Evie Pant",
    type: "bottom",
    price: 33078.08,
    category: "matching-sets",
    image: ""
  },
  {
    id: 9,
    brand: "ZIMMERMANN",
    name: "Alchemy Relaxed Satin Top",
    type: "top",
    price: 68518.88,
    category: "matching-sets",
    image: ""
  },
  {
    id: 10,
    brand: "ZIMMERMANN",
    name: "Alchemy Relaxed Short",
    type: "bottom",
    price: 56232.73,
    category: "matching-sets",
    image: ""
  },
  {
    id: 11,
    brand: "ALL THAT REMAINS",
    name: "Valentine Top",
    type: "top",
    price: 36858.43,
    category: "matching-sets",
    image: ""
  },
  {
    id: 12,
    brand: "ALL THAT REMAINS",
    name: "Valentine Skirt",
    type: "bottom",
    price: 39693.69,
    category: "matching-sets",
    image: ""
  },
  {
    id: 13,
    brand: "SABLYN",
    name: "Camden Top",
    type: "top",
    price: 46781.85,
    category: "matching-sets",
    image: ""
  },
  {
    id: 14,
    brand: "SABLYN",
    name: "Naomi Pull On Pant",
    type: "bottom",
    price: 84585.37,
    category: "matching-sets",
    image: ""
  },
  {
    id: 15,
    brand: "SOLID & STRIPED",
    name: "The Celeste Tube Top",
    type: "top",
    price: 12097.13,
    category: "matching-sets",
    image: ""
  },
  {
    id: 16,
    brand: "SOLID & STRIPED",
    name: "The Celeste Skort",
    type: "bottom",
    price: 13042.21,
    category: "matching-sets",
    image: ""
  },
  {
    id: 17,
    brand: "FLEUR DU MAL",
    name: "Poplin Bustier Top",
    type: "top",
    price: 18712.74,
    category: "matching-sets",
    image: ""
  },
  {
    id: 18,
    brand: "FLEUR DU MAL",
    name: "Poplin Draped Ruched Skirt",
    type: "bottom",
    price: 21548.01,
    category: "matching-sets",
    image: ""
  },
  {
    id: 19,
    brand: "KHAITE",
    name: "Davet Top",
    type: "top",
    price: 115300.73,
    category: "matching-sets",
    image: ""
  },
  {
    id: 20,
    brand: "KHAITE",
    name: "Inaya Skirt",
    type: "bottom",
    price: 130422.14,
    category: "matching-sets",
    image: ""
  },
  {
    id: 21,
    brand: "THE ROW",
    name: "Dayton Coat",
    type: "outerwear",
    price: 354408.00,
    category: "kendalls-edit",
    image: ""
  },
  {
    id: 22,
    brand: "THE ROW",
    name: "Eglitta Wide Leg",
    type: "bottom",
    price: 86948.09,
    category: "kendalls-edit",
    image: ""
  },
  {
    id: 23,
    brand: "LESET",
    name: "Margo Long Sleeve Polo",
    type: "top",
    price: 15121.41,
    category: "kendalls-edit",
    image: ""
  },
  {
    id: 24,
    brand: "SAINT LAURENT",
    name: "70's Flare Leg",
    type: "bottom",
    price: 116245.82,
    category: "kendalls-edit",
    image: ""
  },
  {
    id: 25,
    brand: "BODE",
    name: "Worcester Fringe Dress",
    type: "dress",
    price: 151214.06,
    category: "kendalls-edit",
    image: ""
  },
  {
    id: 26,
    brand: "ADAM LIPPES",
    name: "Twyla Dress",
    type: "dress",
    price: 140818.11,
    category: "kendalls-edit",
    image: ""
  },
  {
    id: 27,
    brand: "JADE TRAU",
    name: "Rae Stud Earrings",
    type: "accessory",
    price: 292977.28,
    category: "kendalls-edit",
    image: ""
  },
  {
    id: 28,
    brand: "SAINT LAURENT",
    name: "Monogram Hinge XS Cat Eye Sunglasses",
    type: "accessory",
    price: 46781.85,
    category: "kendalls-edit",
    image: ""
  },
  {
    id: 29,
    brand: "SAINT LAURENT",
    name: "Flap Card Case",
    type: "accessory",
    price: 40638.78,
    category: "kendalls-edit",
    image: ""
  },
  {
    id: 30,
    brand: "THE ROW",
    name: "Marlo 12 Bag",
    type: "accessory",
    price: 463093.09,
    category: "kendalls-edit",
    image: ""
  },
  {
    id: 31,
    brand: "EAVES",
    name: "Janith Capri Pant",
    type: "bottom",
    price: 21642.51,
    category: "kendalls-edit",
    image: ""
  },
  {
    id: 32,
    brand: "ALEX PERRY",
    name: "Single Shoulder Dress",
    type: "dress",
    price: 213211.84,
    category: "kendalls-edit",
    image: ""
  },
  {
    id: 33,
    brand: "TOVE",
    name: "Fina Jersey Top",
    type: "top",
    price: 26935.01,
    category: "kendalls-edit",
    image: ""
  },
  {
    id: 34,
    brand: "LESET",
    name: "Barb Lace V Neck Tank Top",
    type: "top",
    price: 26462.46,
    category: "kendalls-edit",
    image: ""
  },
  {
    id: 35,
    brand: "LESET",
    name: "Nando Slim Fit Tee",
    type: "top",
    price: 8316.77,
    category: "kendalls-edit",
    image: ""
  },
  {
    id: 36,
    brand: "THE ROW",
    name: "Mirai Sweater",
    type: "top",
    price: 155939.52,
    category: "kendalls-edit",
    image: ""
  },
  {
    id: 37,
    brand: "GUEST IN RESIDENCE",
    name: "The Big Scarf",
    type: "accessory",
    price: 23154.66,
    category: "kendalls-edit",
    image: ""
  },
  {
    id: 38,
    brand: "THE ROW",
    name: "Wristlet Pouch",
    type: "accessory",
    price: 89783.36,
    category: "kendalls-edit",
    image: ""
  },
  {
    id: 39,
    brand: "THE ROW",
    name: "Travel Pouch",
    type: "accessory",
    price: 79387.39,
    category: "kendalls-edit",
    image: ""
  },
  {
    id: 40,
    brand: "THE ROW",
    name: "Clovis Toiletry Pouch",
    type: "accessory",
    price: 198468.47,
    category: "kendalls-edit",
    image: ""
  },
  {
    id: 41,
    brand: "BOND EYE",
    name: "Arlo Maxi Dress",
    type: "dress",
    price: 26462.46,
    category: "destination-dresses",
    image: ""
  },
  {
    id: 42,
    brand: "DAVID KOMA",
    name: "3D Flower Embroidered Mesh Gown",
    type: "dress",
    price: 313296.66,
    category: "destination-dresses",
    image: ""
  },
  {
    id: 43,
    brand: "ALEXIS",
    name: "Sidi Dress",
    type: "dress",
    price: 103487.13,
    category: "destination-dresses",
    image: ""
  },
  {
    id: 44,
    brand: "CULT GAIA",
    name: "Celestina Dress",
    type: "dress",
    price: 151025.06,
    category: "destination-dresses",
    image: ""
  },
  {
    id: 45,
    brand: "JOHANNA ORTIZ",
    name: "Tide Strength Mini Dress",
    type: "dress",
    price: 80332.48,
    category: "destination-dresses",
    image: ""
  },
  {
    id: 46,
    brand: "MARLIES GRACE",
    name: "Rosamund Crochet Dress",
    type: "dress",
    price: 61430.72,
    category: "destination-dresses",
    image: ""
  },
  {
    id: 47,
    brand: "POSSE",
    name: "Danielle Dress",
    type: "dress",
    price: 36858.43,
    category: "destination-dresses",
    image: ""
  },
  {
    id: 48,
    brand: "CULT GAIA",
    name: "Renata Gown",
    type: "dress",
    price: 217181.20,
    category: "destination-dresses",
    image: ""
  },
  {
    id: 49,
    brand: "CULT GAIA",
    name: "Dareen Dress",
    type: "dress",
    price: 45175.20,
    category: "destination-dresses",
    image: ""
  },
  {
    id: 50,
    brand: "PATBO",
    name: "Honey Flower Plunge Dress",
    type: "dress",
    price: 113410.56,
    category: "destination-dresses",
    image: ""
  },
  {
    id: 51,
    brand: "HAIGHT.",
    name: "Luna Knit Dress",
    type: "dress",
    price: 32889.06,
    category: "destination-dresses",
    image: ""
  },
  {
    id: 52,
    brand: "SANDY LIANG",
    name: "Patsy Dress",
    type: "dress",
    price: 33078.08,
    category: "destination-dresses",
    image: ""
  },
  {
    id: 53,
    brand: "HELSA",
    name: "Aaliyah Maxi Knit Dress",
    type: "dress",
    price: 28163.62,
    category: "destination-dresses",
    image: ""
  },
  {
    id: 54,
    brand: "THE ATTICO",
    name: "Draped Mini Dress",
    type: "dress",
    price: 121916.35,
    category: "destination-dresses",
    image: ""
  },
  {
    id: 55,
    brand: "ST. AGNI",
    name: "Relaxed Pleat Dress",
    type: "dress",
    price: 47159.89,
    category: "destination-dresses",
    image: ""
  },
  {
    id: 56,
    brand: "SHANI SHEMER",
    name: "Oliver Mini Dress",
    type: "dress",
    price: 37803.52,
    category: "destination-dresses",
    image: ""
  },
  {
    id: 57,
    brand: "PATBO",
    name: "Wave Cut Out Beach Dress",
    type: "dress",
    price: 84585.37,
    category: "destination-dresses",
    image: ""
  },
  {
    id: 58,
    brand: "ALL THAT REMAINS",
    name: "Zinnia Dress",
    type: "dress",
    price: 49144.57,
    category: "destination-dresses",
    image: ""
  },
  {
    id: 59,
    brand: "ENZA COSTA",
    name: "Silk Rib U Neck Halter Fluid Maxi Dress",
    type: "dress",
    price: 27880.10,
    category: "destination-dresses",
    image: ""
  },
  {
    id: 60,
    brand: "ALEMAIS",
    name: "Wilson Mini Dress",
    type: "dress",
    price: 74661.95,
    category: "destination-dresses",
    image: ""
  },{
    id: 61,
    brand: "ALAÏA",
    name: "Peplum Top",
    type: "top",
    price: 197523.39,
    category: "spring-shop",
    image: ""
  },
  {
    id: 62,
    brand: "TOTEME",
    name: "Capri Knit Legging",
    type: "bottom",
    price: 39693.69,
    category: "spring-shop",
    image: ""
  },
  {
    id: 63,
    brand: "JENNIFER FISHER",
    name: "Chavez Micro Huggie Earrings",
    type: "accessory",
    price: 23154.66,
    category: "spring-shop",
    image: ""
  },
  {
    id: 64,
    brand: "KHAITE",
    name: "Loop Kitten Heel 35 Sandal",
    type: "footwear",
    price: 84112.83,
    category: "spring-shop",
    image: ""
  },
  {
    id: 65,
    brand: "BALENCIAGA",
    name: "Le City Small Hobo Bag",
    type: "accessory",
    price: 188072.52,
    category: "spring-shop",
    image: ""
  },
  {
    id: 66,
    brand: "JACQUEMUS",
    name: "Bcare Sunglasses",
    type: "accessory",
    price: 30715.36,
    category: "spring-shop",
    image: ""
  },
  {
    id: 67,
    brand: "CITIZENS OF HUMANITY",
    name: "Anita Puff Sleeve Jacket",
    type: "outerwear",
    price: 42339.94,
    category: "spring-shop",
    image: ""
  },
  {
    id: 68,
    brand: "MATTHEW BRUCH",
    name: "High Waist Twist Seam Straight Leg",
    type: "bottom",
    price: 46781.85,
    category: "spring-shop",
    image: ""
  },
  {
    id: 69,
    brand: "ROWEN ROSE",
    name: "Oversized Earrings",
    type: "accessory",
    price: 49239.08,
    category: "spring-shop",
    image: ""
  },
  {
    id: 70,
    brand: "ZIMMERMANN",
    name: "Luna Paneled Peplum Top",
    type: "top",
    price: 49617.12,
    category: "spring-shop",
    image: ""
  },
  {
    id: 71,
    brand: "ZIMMERMANN",
    name: "Luna Moulin Midi Skirt",
    type: "bottom",
    price: 56232.73,
    category: "spring-shop",
    image: ""
  },
  {
    id: 72,
    brand: "SAINT LAURENT",
    name: "Kate Clutch On Chain",
    type: "accessory",
    price: 203193.91,
    category: "spring-shop",
    image: ""
  },
  {
    id: 73,
    brand: "TOTEME",
    name: "Grained Leather Lounge Tote Bag",
    type: "accessory",
    price: 168225.66,
    category: "spring-shop",
    image: ""
  },
  {
    id: 74,
    brand: "SPINELLI KILCOLLIN",
    name: "Libra Noir Ring",
    type: "accessory",
    price: 274075.50,
    category: "spring-shop",
    image: ""
  },
  {
    id: 75,
    brand: "ALFIE",
    name: "Lilly Dress",
    type: "dress",
    price: 85057.92,
    category: "spring-shop",
    image: ""
  },
  {
    id: 76,
    brand: "SAINT LAURENT",
    name: "Mabrouka Slide",
    type: "footwear",
    price: 99234.24,
    category: "spring-shop",
    image: ""
  },
  {
    id: 77,
    brand: "POLO RALPH LAUREN",
    name: "Button Front Shirt",
    type: "top",
    price: 13987.30,
    category: "spring-shop",
    image: ""
  },
  {
    id: 78,
    brand: "MOTHER",
    name: "The Kick It Jeans",
    type: "bottom",
    price: 26273.45,
    category: "spring-shop",
    image: ""
  },
  {
    id: 79,
    brand: "LOULOU DE SAISON",
    name: "Niham Mini Wedge Sandal",
    type: "footwear",
    price: 62375.81,
    category: "spring-shop",
    image: ""
  },
  {
    id: 80,
    brand: "BOTTEGA VENETA",
    name: "Small Sardine Earrings",
    type: "accessory",
    price: 85057.92,
    category: "spring-shop",
    image: ""
  },
  {
    id: 81,
    brand: "ALEMAIS",
    name: "Wilson Silk Top",
    type: "top",
    price: 55760.19,
    category: "vacation-shop",
    image: ""
  },
  {
    id: 82,
    brand: "ALEMAIS",
    name: "Wilson Silk Pant",
    type: "bottom",
    price: 55760.19,
    category: "vacation-shop",
    image: ""
  },
  {
    id: 83,
    brand: "JIMMY CHOO",
    name: "Elsy 90 Sandal",
    type: "footwear",
    price: 77969.76,
    category: "vacation-shop",
    image: ""
  },
  {
    id: 84,
    brand: "SIMONMILLER",
    name: "Pom Pom Mini Skirt",
    type: "bottom",
    price: 34495.71,
    category: "vacation-shop",
    image: ""
  },
  {
    id: 85,
    brand: "JENNIFER BEHR",
    name: "Cara Earrings",
    type: "accessory",
    price: 16822.57,
    category: "vacation-shop",
    image: ""
  },
  {
    id: 86,
    brand: "BODE",
    name: "Lucky Draw Tap Short",
    type: "bottom",
    price: 36858.43,
    category: "vacation-shop",
    image: ""
  },
  {
    id: 87,
    brand: "DRIES VAN NOTEN",
    name: "Rectangle Sunglasses",
    type: "accessory",
    price: 32605.53,
    category: "vacation-shop",
    image: ""
  },
  {
    id: 88,
    brand: "KHAITE",
    name: "Olivia Medium Raffia Hobo Bag",
    type: "accessory",
    price: 146488.62,
    category: "vacation-shop",
    image: ""
  },
  {
    id: 89,
    brand: "POSSE",
    name: "Bowie Dress",
    type: "dress",
    price: 43474.05,
    category: "vacation-shop",
    image: ""
  },
  {
    id: 90,
    brand: "MIU MIU",
    name: "Ballerine Slingback Flat",
    type: "footwear",
    price: 121916.35,
    category: "vacation-shop",
    image: ""
  },
  {
    id: 91,
    brand: "ELIOU",
    name: "Elene Earrings",
    type: "accessory",
    price: 22682.11,
    category: "vacation-shop",
    image: ""
  },
  {
    id: 92,
    brand: "BOTTEGA VENETA",
    name: "Dash Square Sunglasses",
    type: "accessory",
    price: 52452.38,
    category: "vacation-shop",
    image: ""
  },
  {
    id: 93,
    brand: "TOTEME",
    name: "Belted Woven Leather Tote Bag",
    type: "accessory",
    price: 159719.88,
    category: "vacation-shop",
    image: ""
  },
  {
    id: 94,
    brand: "SIMONMILLER",
    name: "Soleil Wedge Sandal",
    type: "footwear",
    price: 37330.97,
    category: "vacation-shop",
    image: ""
  },
  {
    id: 95,
    brand: "SIR.",
    name: "Danica Layered Top",
    type: "top",
    price: 36858.43,
    category: "vacation-shop",
    image: ""
  },
  {
    id: 96,
    brand: "AEXAE",
    name: "Linen Trouser",
    type: "bottom",
    price: 23627.20,
    category: "vacation-shop",
    image: ""
  },
  {
    id: 97,
    brand: "STONE AND STRAND",
    name: "Gone Fishing Earrings",
    type: "accessory",
    price: 25517.38,
    category: "vacation-shop",
    image: ""
  },
  {
    id: 98,
    brand: "OLIVER PEOPLES",
    name: "x Khaite 1985C Sunglasses",
    type: "accessory",
    price: 55665.68,
    category: "vacation-shop",
    image: ""
  },
  {
    id: 99,
    brand: "CULT GAIA",
    name: "Maren Dress",
    type: "dress",
    price: 65967.14,
    category: "vacation-shop",
    image: ""
  },
  {
    id: 100,
    brand: "SAINT LAURENT",
    name: "Mabrouka Slide",
    type: "footwear",
    price: 99234.24,
    category: "vacation-shop",
    image: ""
  },
  {
    id: 101,
    brand: "ALAÏA",
    name: "Cargo Wide Leg",
    type: "bottom",
    price: 217370.23,
    category: "rosies-picks",
    image: ""
  },
  {
    id: 102,
    brand: "ALAÏA",
    name: "D'Orsay Pump",
    type: "footwear",
    price: 174841.27,
    category: "rosies-picks",
    image: ""
  },
  {
    id: 103,
    brand: "MAGDA BUTRYM",
    name: "Belted Trench Jacket",
    type: "outerwear",
    price: 259899.19,
    category: "rosies-picks",
    image: ""
  },
  {
    id: 104,
    brand: "MUGLER",
    name: "Straight Leg Pant",
    type: "bottom",
    price: 116245.82,
    category: "rosies-picks",
    image: ""
  },
  {
    id: 105,
    brand: "BURBERRY",
    name: "Check Compact Umbrella",
    type: "accessory",
    price: 41111.33,
    category: "rosies-picks",
    image: ""
  },
  {
    id: 106,
    brand: "SAINT LAURENT",
    name: "Deroche Slingback Pump",
    type: "footwear",
    price: 118136.00,
    category: "rosies-picks",
    image: ""
  },
  {
    id: 107,
    brand: "SAINT LAURENT",
    name: "Chain Belt",
    type: "accessory",
    price: 141763.20,
    category: "rosies-picks",
    image: ""
  },
  {
    id: 108,
    brand: "ALAÏA",
    name: "Asymmetric Dress",
    type: "dress",
    price: 311879.03,
    category: "rosies-picks",
    image: ""
  },
  {
    id: 109,
    brand: "SAINT LAURENT",
    name: "College Y Cap",
    type: "accessory",
    price: 51979.84,
    category: "rosies-picks",
    image: ""
  },
  {
    id: 110,
    brand: "SAINT LAURENT",
    name: "Suede Bomber",
    type: "outerwear",
    price: 661561.56,
    category: "rosies-picks",
    image: ""
  },
  {
    id: 111,
    brand: "SAINT LAURENT",
    name: "Lace Tank Top",
    type: "top",
    price: 93563.71,
    category: "rosies-picks",
    image: ""
  },
  {
    id: 112,
    brand: "SAINT LAURENT",
    name: "Mon Cheri Chain Sandal",
    type: "footwear",
    price: 236271.98,
    category: "rosies-picks",
    image: ""
  },
  {
    id: 113,
    brand: "THE ROW",
    name: "Marlo 14 Bag",
    type: "accessory",
    price: 500896.62,
    category: "rosies-picks",
    image: ""
  },
  {
    id: 114,
    brand: "ARMA",
    name: "Loua Smooth Leather Jacket",
    type: "outerwear",
    price: 114356.64,
    category: "rosies-picks",
    image: ""
  },
  {
    id: 115,
    brand: "MUGLER",
    name: "Bustier Dress",
    type: "dress",
    price: 181456.89,
    category: "rosies-picks",
    image: ""
  },
  {
    id: 116,
    brand: "KHAITE",
    name: "Sabina Sweater",
    type: "top",
    price: 111520.38,
    category: "rosies-picks",
    image: ""
  },
  {
    id: 117,
    brand: "KHAITE",
    name: "Sybil Skirt",
    type: "bottom",
    price: 187147.42,
    category: "rosies-picks",
    image: ""
  },
  {
    id: 118,
    brand: "KHAITE",
    name: "Lori Baguette Bag",
    type: "accessory",
    price: 158774.78,
    category: "rosies-picks",
    image: ""
  },
  {
    id: 119,
    brand: "SAINT LAURENT",
    name: "Babylone Slingback Pump",
    type: "footwear",
    price: 118136.00,
    category: "rosies-picks",
    image: ""
  },
  {
    id: 120,
    brand: "ARMA",
    name: "Frederica Suede Bomber Jacket",
    type: "outerwear",
    price: 116718.36,
    category: "rosies-picks",
    image: ""
  },
   {
    id: 121,
    brand: "BLUMARINE",
    name: "Mini Skirt",
    type: "bottom",
    price: 68991.42,
    category: "soft-focus",
    image: ""
  },
  {
    id: 122,
    brand: "SANTANGELO",
    name: "Mistral Belt Necklace",
    type: "accessory",
    price: 35913.34,
    category: "soft-focus",
    image: ""
  },
  {
    id: 123,
    brand: "LOEWE",
    name: "Slim Sunglasses",
    type: "accessory",
    price: 34023.17,
    category: "soft-focus",
    image: ""
  },
  {
    id: 124,
    brand: "LE MONDE BÉRYL",
    name: "Babouche Leather Kitten Heel",
    type: "footwear",
    price: 61903.26,
    category: "soft-focus",
    image: ""
  },
  {
    id: 125,
    brand: "LIE STUDIO",
    name: "The Julie Earrings",
    type: "accessory",
    price: 28352.64,
    category: "soft-focus",
    image: ""
  },
  {
    id: 126,
    brand: "HELSA",
    name: "Mix Media Slip Dress",
    type: "dress",
    price: 40544.27,
    category: "soft-focus",
    image: ""
  },
  {
    id: 127,
    brand: "STELLA MCCARTNEY",
    name: "Pearl Shirt",
    type: "top",
    price: 150268.98,
    category: "soft-focus",
    image: ""
  },
  {
    id: 128,
    brand: "STELLA MCCARTNEY",
    name: "Satin Trouser",
    type: "bottom",
    price: 112465.47,
    category: "soft-focus",
    image: ""
  },
  {
    id: 129,
    brand: "KHAITE",
    name: "Colt Mule",
    type: "footwear",
    price: 93563.71,
    category: "soft-focus",
    image: ""
  },
  {
    id: 130,
    brand: "BOTTEGA VENETA",
    name: "Sardine Dustbag",
    type: "accessory",
    price: 302428.16,
    category: "soft-focus",
    image: ""
  },
  {
    id: 131,
    brand: "SAINT LAURENT",
    name: "Romy Mule Sandal",
    type: "footwear",
    price: 141763.20,
    category: "soft-focus",
    image: ""
  },
  {
    id: 132,
    brand: "BEN-AMUN",
    name: "Meg Bangle",
    type: "accessory",
    price: 26884.43,
    category: "soft-focus",
    image: ""
  },
  {
    id: 133,
    brand: "THE ANDAMANE",
    name: "Minerva Strappy Openback Maxi Dress",
    type: "dress",
    price: 110102.75,
    category: "soft-focus",
    image: ""
  },
  {
    id: 134,
    brand: "ALAÏA",
    name: "Alia Sphere Earrings",
    type: "accessory",
    price: 113410.56,
    category: "soft-focus",
    image: ""
  },
  {
    id: 135,
    brand: "RE/DONE",
    name: "Slim Cashmere Cardigan",
    type: "top",
    price: 40168.24,
    category: "soft-focus",
    image: ""
  },
  {
    id: 136,
    brand: "HELSA",
    name: "The Baggy Barrel Trouser in Very Heavy Crepe",
    type: "bottom",
    price: 28258.13,
    category: "soft-focus",
    image: ""
  },
  {
    id: 137,
    brand: "MIU MIU",
    name: "Nappa Aviator Contenitori Bag",
    type: "accessory",
    price: 181456.89,
    category: "soft-focus",
    image: ""
  },
  {
    id: 138,
    brand: "MAGDA BUTRYM",
    name: "Snake Low Slingback Heel",
    type: "footwear",
    price: 116718.36,
    category: "soft-focus",
    image: ""
  },
  {
    id: 139,
    brand: "DEHANCHE",
    name: "Tetra Large Earrings",
    type: "accessory",
    price: 33078.08,
    category: "soft-focus",
    image: ""
  },
  {
    id: 140,
    brand: "AYA MUSE",
    name: "Viona Top",
    type: "top",
    price: 35440.80,
    category: "soft-focus",
    image: ""
  },
   {
    id: 141,
    brand: "BRANDON MAXWELL",
    name: "Noemi Tank Top",
    type: "top",
    price: 92618.62,
    category: "the-color-report",
    image: ""
  },
  {
    id: 142,
    brand: "ALEXANDER WANG",
    name: "Blowup Wide Leg",
    type: "bottom",
    price: 49617.12,
    category: "the-color-report",
    image: ""
  },
  {
    id: 143,
    brand: "FWRD RENEW",
    name: "Chanel Lambskin 19 Flap Bag",
    type: "accessory",
    price: 585954.56,
    category: "the-color-report",
    image: ""
  },
  {
    id: 144,
    brand: "LPA",
    name: "Natasha Ballet Flat",
    type: "footwear",
    price: 15877.48,
    category: "the-color-report",
    image: ""
  },
  {
    id: 145,
    brand: "CULT GAIA",
    name: "Brielle Wristlet Bag",
    type: "accessory",
    price: 85967.14,
    category: "the-color-report",
    image: ""
  },
  {
    id: 146,
    brand: "AQUAZZURA",
    name: "Tati 85 Sandal",
    type: "footwear",
    price: 88365.72,
    category: "the-color-report",
    image: ""
  },
  {
    id: 147,
    brand: "AYA MUSE",
    name: "Eteri Top",
    type: "top",
    price: 40166.24,
    category: "the-color-report",
    image: ""
  },
  {
    id: 148,
    brand: "AYA MUSE",
    name: "Eteri Skirt",
    type: "bottom",
    price: 80332.48,
    category: "the-color-report",
    image: ""
  },
  {
    id: 149,
    brand: "LOUIS ABEL",
    name: "Uzu Mid Square Earring",
    type: "accessory",
    price: 36858.43,
    category: "the-color-report",
    image: ""
  },
  {
    id: 150,
    brand: "FWRD RENEW",
    name: "Chanel Calfskin Small 22 Hobo Bag",
    type: "accessory",
    price: 544843.19,
    category: "the-color-report",
    image: ""
  },
  {
    id: 151,
    brand: "ALEXIS",
    name: "Aravine Dress",
    type: "dress",
    price: 65883.61,
    category: "the-color-report",
    image: ""
  },
  {
    id: 152,
    brand: "TOTEME",
    name: "Croc Embossed Heeled Flip Flop",
    type: "footwear",
    price: 52924.93,
    category: "the-color-report",
    image: ""
  },
  {
    id: 153,
    brand: "SOLID & STRIPED",
    name: "The Daphne Bikini Top",
    type: "top",
    price: 11152.04,
    category: "the-color-report",
    image: ""
  },
  {
    id: 154,
    brand: "SOLID & STRIPED",
    name: "The Mini Short",
    type: "bottom",
    price: 15877.48,
    category: "the-color-report",
    image: ""
  },
  {
    id: 155,
    brand: "VERSACE",
    name: "Square Sunglasses",
    type: "accessory",
    price: 43474.05,
    category: "the-color-report",
    image: ""
  },
  {
    id: 156,
    brand: "HELEN KAMINSKI",
    name: "Gwen Raffia Fedora Hat",
    type: "accessory",
    price: 30242.81,
    category: "the-color-report",
    image: ""
  },
  {
    id: 157,
    brand: "CULT GAIA",
    name: "Una Clutch",
    type: "accessory",
    price: 56516.26,
    category: "the-color-report",
    image: ""
  },
  {
    id: 158,
    brand: "SIR.",
    name: "Isla Cowl Back Gown",
    type: "dress",
    price: 70881.60,
    category: "the-color-report",
    image: ""
  },
  {
    id: 159,
    brand: "GIANVITO ROSSI",
    name: "Strappy Sandal",
    type: "footwear",
    price: 122388.89,
    category: "the-color-report",
    image: ""
  },
  {
    id: 160,
    brand: "GABRIELA HEARST",
    name: "Ediptar Tank Top",
    type: "top",
    price: 118136.00,
    category: "the-color-report",
    image: ""
  },
   {
    id: 161,
    brand: "THE ATTICO",
    name: "Midi Lace Dress",
    type: "dress",
    price: 121916.35,
    category: "spring-dress-shop",
    image: ""
  },
  {
    id: 162,
    brand: "MAYGEL CORONEL",
    name: "Arlo Dress",
    type: "dress",
    price: 65211.07,
    category: "spring-dress-shop",
    image: ""
  },
  {
    id: 163,
    brand: "LEO LIN",
    name: "Yvonne Applique Mini Dress",
    type: "dress",
    price: 75134.49,
    category: "spring-dress-shop",
    image: ""
  },
  {
    id: 164,
    brand: "KAREN MILLEN",
    name: "Forli Dress",
    type: "dress",
    price: 87420.64,
    category: "spring-dress-shop",
    image: ""
  },
  {
    id: 165,
    brand: "POSSE",
    name: "Phoebe Dress",
    type: "dress",
    price: 43474.05,
    category: "spring-dress-shop",
    image: ""
  },
  {
    id: 166,
    brand: "LAQUAN SMITH",
    name: "Neck Tie Gown",
    type: "dress",
    price: 146488.62,
    category: "spring-dress-shop",
    image: ""
  },
  {
    id: 167,
    brand: "MAYGEL CORONEL",
    name: "Arena Dress",
    type: "dress",
    price: 55760.19,
    category: "spring-dress-shop",
    image: ""
  },
  {
    id: 168,
    brand: "CAROLINA HERRERA",
    name: "Midi Dress",
    type: "dress",
    price: 216425.14,
    category: "spring-dress-shop",
    image: ""
  },
  {
    id: 169,
    brand: "SELF-PORTRAIT",
    name: "Broderie Denim Mini Dress",
    type: "dress",
    price: 46309.31,
    category: "spring-dress-shop",
    image: ""
  },
  {
    id: 170,
    brand: "MARLIES GRACE",
    name: "Sofia Dress",
    type: "dress",
    price: 49617.12,
    category: "spring-dress-shop",
    image: ""
  },
  {
    id: 171,
    brand: "CULT GAIA",
    name: "Dove Dress",
    type: "dress",
    price: 94319.78,
    category: "spring-dress-shop",
    image: ""
  },
  {
    id: 172,
    brand: "KHAITE",
    name: "Oris Dress",
    type: "dress",
    price: 236271.98,
    category: "spring-dress-shop",
    image: ""
  },
  {
    id: 173,
    brand: "ZIMMERMANN",
    name: "Luna Ruffle Playsuit",
    type: "dress",
    price: 84855.37,
    category: "spring-dress-shop",
    image: ""
  },
  {
    id: 174,
    brand: "BOND EYE",
    name: "Arlo Maxi Dress",
    type: "dress",
    price: 26462.46,
    category: "spring-dress-shop",
    image: ""
  },
  {
    id: 175,
    brand: "ISABEL MARANT ETOILE",
    name: "Elodie Dress",
    type: "dress",
    price: 56323.73,
    category: "spring-dress-shop",
    image: ""
  },
  {
    id: 176,
    brand: "JEAN PAUL GAULTIER",
    name: "Cotton Ribbed Printed Marine Grape Long Dress",
    type: "dress",
    price: 54815.10,
    category: "spring-dress-shop",
    image: ""
  },
  {
    id: 177,
    brand: "LEO LIN",
    name: "Floret Mini Dress",
    type: "dress",
    price: 75134.49,
    category: "spring-dress-shop",
    image: ""
  },
  {
    id: 178,
    brand: "VICTORIA BECKHAM",
    name: "Asymmetric Midi Dress",
    type: "dress",
    price: 93563.71,
    category: "spring-dress-shop",
    image: ""
  },
  {
    id: 179,
    brand: "STELLA MCCARTNEY",
    name: "Crepe Jersey Mini Dress",
    type: "dress",
    price: 198468.47,
    category: "spring-dress-shop",
    image: ""
  },
  {
    id: 180,
    brand: "SANS FAFF",
    name: "Cinque Terre Dress",
    type: "dress",
    price: 47065.38,
    category: "spring-dress-shop",
    image: ""
  },
   {
    id: 181,
    brand: "KHAITE",
    name: "Taja Dress",
    type: "dress",
    price: 120971.26,
    category: "for-the-wedding-guest",
    image: ""
  },
  {
    id: 182,
    brand: "SAINT LAURENT",
    name: "Iris Ruched Dress",
    type: "dress",
    price: 150347.50,
    category: "for-the-wedding-guest",
    image: ""
  },
  {
    id: 183,
    brand: "BOTTEGA VENETA",
    name: "Sequin Mini Dress",
    type: "dress",
    price: 519798.38,
    category: "for-the-wedding-guest",
    image: ""
  },
  {
    id: 184,
    brand: "TOTEME",
    name: "V Neck Slip Dress",
    type: "dress",
    price: 113410.56,
    category: "for-the-wedding-guest",
    image: ""
  },
  {
    id: 185,
    brand: "HOUSE OF DACMAR",
    name: "Contrast Knit Dress",
    type: "dress",
    price: 75607.04,
    category: "for-the-wedding-guest",
    image: ""
  },
  {
    id: 186,
    brand: "CAROLINA HERRERA",
    name: "Midi Dress",
    type: "dress",
    price: 216425.14,
    category: "for-the-wedding-guest",
    image: ""
  },
  {
    id: 187,
    brand: "GRACE LING",
    name: "Relic Charms Strapless Maxi Dress",
    type: "dress",
    price: 118136.00,
    category: "for-the-wedding-guest",
    image: ""
  },
  {
    id: 188,
    brand: "A.L.C.",
    name: "Ayla Dress",
    type: "dress",
    price: 56323.73,
    category: "for-the-wedding-guest",
    image: ""
  },
  {
    id: 189,
    brand: "A.L.C.",
    name: "Gia Dress",
    type: "dress",
    price: 84585.37,
    category: "for-the-wedding-guest",
    image: ""
  },
  {
    id: 190,
    brand: "ETERNE",
    name: "Gia Maxi Dress",
    type: "dress",
    price: 37330.97,
    category: "for-the-wedding-guest",
    image: ""
  },
  {
    id: 191,
    brand: "MAYGEL CORONEL",
    name: "Susurro Dress",
    type: "dress",
    price: 48199.49,
    category: "for-the-wedding-guest",
    image: ""
  },
  {
    id: 192,
    brand: "VICTORIA BECKHAM",
    name: "Asymmetric Midi Dress",
    type: "dress",
    price: 93563.71,
    category: "for-the-wedding-guest",
    image: ""
  },
  {
    id: 193,
    brand: "CULT GAIA",
    name: "Emir Dress",
    type: "dress",
    price: 122672.42,
    category: "for-the-wedding-guest",
    image: ""
  },
  {
    id: 194,
    brand: "HELSA",
    name: "The Duchess Jersey Dress",
    type: "dress",
    price: 37164.50,
    category: "for-the-wedding-guest",
    image: ""
  },
  {
    id: 195,
    brand: "DAVID KOMA",
    name: "Asymmetric Sleeve Printed Mesh Mini Dress",
    type: "dress",
    price: 85057.92,
    category: "for-the-wedding-guest",
    image: ""
  },
  {
    id: 196,
    brand: "RONNY KOBO",
    name: "Scorpio Dress",
    type: "dress",
    price: 46120.29,
    category: "for-the-wedding-guest",
    image: ""
  },
  {
    id: 197,
    brand: "JOHANNA ORTIZ",
    name: "Sendero De Astromelias Ankle Dress",
    type: "dress",
    price: 118136.00,
    category: "for-the-wedding-guest",
    image: ""
  },
  {
    id: 198,
    brand: "A.L.C.",
    name: "Josephine Dress",
    type: "dress",
    price: 84585.37,
    category: "for-the-wedding-guest",
    image: ""
  },
  {
    id: 199,
    brand: "HELSA",
    name: "The Heidi Dress",
    type: "dress",
    price: 32889.06,
    category: "for-the-wedding-guest",
    image: ""
  },
  {
    id: 200,
    brand: "CULT GAIA",
    name: "Sequoia Dress",
    type: "dress",
    price: 113221.54,
    category: "for-the-wedding-guest",
    image: ""
  },
  {
    id: 201,
    brand: "LAPOINTE",
    name: "Feather Bandeau Top",
    type: "top",
    price: 89783.36,
    category: "night-out",
    image: ""
  },
  {
    id: 202,
    brand: "THE ATTICO",
    name: "Long Pant",
    type: "bottom",
    price: 89783.36,
    category: "night-out",
    image: ""
  },
  {
    id: 203,
    brand: "SAINT LAURENT",
    name: "Knit Mule Sandal",
    type: "footwear",
    price: 91673.53,
    category: "night-out",
    image: ""
  },
  {
    id: 204,
    brand: "SORDO",
    name: "Cataumbo Mini Earrings",
    type: "accessory",
    price: 41583.87,
    category: "night-out",
    image: ""
  },
  {
    id: 205,
    brand: "ATLEIN",
    name: "Draped Circle Top",
    type: "top",
    price: 34873.75,
    category: "night-out",
    image: ""
  },
  {
    id: 206,
    brand: "ATLEIN",
    name: "Draped Asymmetric Skirt",
    type: "bottom",
    price: 67384.77,
    category: "night-out",
    image: ""
  },
  {
    id: 207,
    brand: "ELIOU",
    name: "Alegra Cuff Bracelet",
    type: "accessory",
    price: 24572.29,
    category: "night-out",
    image: ""
  },
  {
    id: 208,
    brand: "MANOLO BLAHNIK",
    name: "Hangisi 105 Satin Heel",
    type: "footwear",
    price: 112938.01,
    category: "night-out",
    image: ""
  },
  {
    id: 209,
    brand: "JUDE",
    name: "Mixer Sandal",
    type: "footwear",
    price: 53870.01,
    category: "night-out",
    image: ""
  },
  {
    id: 210,
    brand: "COMPLETEDWORKS",
    name: "Red Bio Resin Bead Earrings",
    type: "accessory",
    price: 26935.01,
    category: "night-out",
    image: ""
  },
  {
    id: 211,
    brand: "GIVENCHY",
    name: "Mini Dress",
    type: "dress",
    price: 250448.31,
    category: "night-out",
    image: ""
  },
  {
    id: 212,
    brand: "ALAÏA",
    name: "ALAÏA Medium East West Bag",
    type: "accessory",
    price: 245722.88,
    category: "night-out",
    image: ""
  },
  {
    id: 213,
    brand: "ALAÏA",
    name: "Curved Dress",
    type: "dress",
    price: 394101.69,
    category: "night-out",
    image: ""
  },
  {
    id: 214,
    brand: "THE ATTICO",
    name: "Cheopissima Thigh High Boot",
    type: "footwear",
    price: 206974.27,
    category: "night-out",
    image: ""
  },
  {
    id: 215,
    brand: "JACQUEMUS",
    name: "Shield Sunglasses",
    type: "accessory",
    price: 28352.64,
    category: "night-out",
    image: ""
  },
  {
    id: 216,
    brand: "JACQUEMUS",
    name: "Le Petit Turismo Bag",
    type: "accessory",
    price: 131367.23,
    category: "night-out",
    image: ""
  },
  {
    id: 217,
    brand: "ALAÏA",
    name: "Small Hoop Earrings",
    type: "accessory",
    price: 108865.12,
    category: "night-out",
    image: ""
  },
  {
    id: 218,
    brand: "AYA MUSE",
    name: "Romi Top",
    type: "top",
    price: 30242.81,
    category: "night-out",
    image: ""
  },
  {
    id: 219,
    brand: "SAINT LAURENT",
    name: "Kate Sandal",
    type: "footwear",
    price: 103959.68,
    category: "night-out",
    image: ""
  },
  {
    id: 220,
    brand: "AYA MUSE",
    name: "Kir Dress",
    type: "dress",
    price: 68518.88,
    category: "night-out",
    image: ""
  },
   {
    id: 221,
    brand: "SABLYN",
    name: "Atticus Tank Top",
    type: "top",
    price: 37330.97,
    category: "elevated-essentials",
    image: ""
  },
  {
    id: 222,
    brand: "TWP",
    name: "Crosby Wide Leg Pant",
    type: "bottom",
    price: 65683.61,
    category: "elevated-essentials",
    image: ""
  },
  {
    id: 223,
    brand: "SAINT LAURENT",
    name: "Icare Cassandra Baby Hobo Bag",
    type: "accessory",
    price: 292977.28,
    category: "elevated-essentials",
    image: ""
  },
  {
    id: 224,
    brand: "AMINA MUADDI",
    name: "Jamie Nappa 80 Boot",
    type: "footwear",
    price: 157357.16,
    category: "elevated-essentials",
    image: ""
  },
  {
    id: 225,
    brand: "ELIOU",
    name: "Tripla Hoop Earrings",
    type: "accessory",
    price: 32132.99,
    category: "elevated-essentials",
    image: ""
  },
  {
    id: 226,
    brand: "THE ATTICO",
    name: "Asymmetrical Shirt",
    type: "top",
    price: 51798.84,
    category: "elevated-essentials",
    image: ""
  },
  {
    id: 227,
    brand: "THE ATTICO",
    name: "Long Pant",
    type: "bottom",
    price: 89783.36,
    category: "elevated-essentials",
    image: ""
  },
  {
    id: 228,
    brand: "JENNI KAYNE",
    name: "Gia Sandal",
    type: "footwear",
    price: 30715.36,
    category: "elevated-essentials",
    image: ""
  },
  {
    id: 229,
    brand: "WARDROBE.NYC",
    name: "Layered Tunic Top",
    type: "top",
    price: 70881.60,
    category: "elevated-essentials",
    image: ""
  },
  {
    id: 230,
    brand: "TOTEME",
    name: "Leather Trim Cotton Cap",
    type: "accessory",
    price: 18901.76,
    category: "elevated-essentials",
    image: ""
  },
  {
    id: 231,
    brand: "MIU MIU",
    name: "Oval Sunglasses",
    type: "accessory",
    price: 51790.82,
    category: "elevated-essentials",
    image: ""
  },
  {
    id: 232,
    brand: "SAINT LAURENT",
    name: "Mini Niki Chain Bag",
    type: "accessory",
    price: 184292.16,
    category: "elevated-essentials",
    image: ""
  },
  {
    id: 233,
    brand: "KHAITE",
    name: "Steph Cardigan",
    type: "top",
    price: 158774.78,
    category: "elevated-essentials",
    image: ""
  },
  {
    id: 234,
    brand: "ACOLDE",
    name: "90's Pinch Waist High Rise Straight Jeans",
    type: "bottom",
    price: 22493.09,
    category: "elevated-essentials",
    image: ""
  },
  {
    id: 235,
    brand: "SAINT LAURENT",
    name: "Buckle Vadim Belt",
    type: "accessory",
    price: 65211.07,
    category: "elevated-essentials",
    image: ""
  },
  {
    id: 236,
    brand: "HELSA",
    name: "Puffy Leather Jacket",
    type: "outerwear",
    price: 66061.65,
    category: "elevated-essentials",
    image: ""
  },
  {
    id: 237,
    brand: "KHAITE",
    name: "Audrey Clutch",
    type: "accessory",
    price: 207919.34,
    category: "elevated-essentials",
    image: ""
  },
  {
    id: 238,
    brand: "KHAITE",
    name: "Vin Top",
    type: "top",
    price: 158774.78,
    category: "elevated-essentials",
    image: ""
  },
  {
    id: 239,
    brand: "CULT GAIA",
    name: "Savoy Skirt",
    type: "bottom",
    price: 37614.50,
    category: "elevated-essentials",
    image: ""
  },
  {
    id: 240,
    brand: "SAINT LAURENT",
    name: "Cassandra Flat Sandal",
    type: "footwear",
    price: 99234.24,
    category: "elevated-essentials",
    image: ""
  },
  {
    id: 241,
    brand: "MAISON MARGIELA",
    name: "Western Boot",
    type: "footwear",
    price: 235326.91,
    category: "desert-bound",
    image: ""
  },
  {
    id: 242,
    brand: "FLEUR DU MAL",
    name: "Adeline Maxi Skirt",
    type: "bottom",
    price: 30998.89,
    category: "desert-bound",
    image: ""
  },
  {
    id: 243,
    brand: "ISABEL MARANT ETOILE",
    name: "Danienne Blouse",
    type: "top",
    price: 51507.29,
    category: "desert-bound",
    image: ""
  },
  {
    id: 244,
    brand: "JEAN PAUL GAULTIER",
    name: "Cut Out Wide Leg",
    type: "bottom",
    price: 90728.44,
    category: "desert-bound",
    image: ""
  },
  {
    id: 245,
    brand: "KHAITE",
    name: "Klee 35mm Belt",
    type: "accessory",
    price: 92618.62,
    category: "desert-bound",
    image: ""
  },
  {
    id: 246,
    brand: "AMINA MUADDI",
    name: "Jamie Crosta 25 Boot",
    type: "footwear",
    price: 133729.95,
    category: "desert-bound",
    image: ""
  },
  {
    id: 247,
    brand: "CHAN LUU",
    name: "Tie Top",
    type: "top",
    price: 27880.10,
    category: "desert-bound",
    image: ""
  },
  {
    id: 248,
    brand: "CASABLANCA",
    name: "Cotton Pocket Skirt",
    type: "bottom",
    price: 70409.05,
    category: "desert-bound",
    image: ""
  },
  {
    id: 249,
    brand: "ISABEL MARANT",
    name: "Maia Medium Shoulder Bag",
    type: "accessory",
    price: 140818.11,
    category: "desert-bound",
    image: ""
  },
  {
    id: 250,
    brand: "SAINT LAURENT",
    name: "Carree Passport Cassandra Belt",
    type: "accessory",
    price: 59540.54,
    category: "desert-bound",
    image: ""
  },
  {
    id: 251,
    brand: "ISABEL MARANT",
    name: "Miller Long Earrings",
    type: "accessory",
    price: 61430.72,
    category: "desert-bound",
    image: ""
  },
  {
    id: 252,
    brand: "NILI LOTAN",
    name: "Cecily Top",
    type: "top",
    price: 74661.95,
    category: "desert-bound",
    image: ""
  },
  {
    id: 253,
    brand: "KHAITE",
    name: "Danico Wide Leg",
    type: "bottom",
    price: 68046.33,
    category: "desert-bound",
    image: ""
  },
  {
    id: 254,
    brand: "SAINT LAURENT",
    name: "Oversize Ma Bracelet",
    type: "accessory",
    price: 121996.35,
    category: "desert-bound",
    image: ""
  },
  {
    id: 255,
    brand: "KHAITE",
    name: "Hamel Jacket",
    type: "outerwear",
    price: 699365.12,
    category: "desert-bound",
    image: ""
  },
  {
    id: 256,
    brand: "AYA MUSE",
    name: "Eteri Skirt",
    type: "bottom",
    price: 80332.48,
    category: "desert-bound",
    image: ""
  },
  {
    id: 257,
    brand: "SAINT LAURENT",
    name: "Rectangular Sunglasses",
    type: "accessory",
    price: 51798.84,
    category: "desert-bound",
    image: ""
  },
  {
    id: 258,
    brand: "ENZA COSTA",
    name: "Silk Rib U Neck Halter Fluid Maxi Dress",
    type: "dress",
    price: 27880.10,
    category: "desert-bound",
    image: ""
  },
  {
    id: 259,
    brand: "HELEN KAMINSKI",
    name: "Gwen Raffia Fedora Hat",
    type: "accessory",
    price: 30242.81,
    category: "desert-bound",
    image: ""
  },
  {
    id: 260,
    brand: "JENNIFER BEHR",
    name: "Cara Earrings",
    type: "accessory",
    price: 16822.57,
    category: "desert-bound",
    image: ""
  },
  {
    id: 261,
    brand: "LIE STUDIO",
    name: "The Diana Earrings",
    type: "accessory",
    price: 23627.20,
    category: "clean-lines",
    image: ""
  },
  {
    id: 262,
    brand: "BOTTEGA VENETA",
    name: "Rana Mule Sandal",
    type: "footwear",
    price: 207919.34,
    category: "clean-lines",
    image: ""
  },
  {
    id: 263,
    brand: "SAINT LAURENT",
    name: "Monogram Hinge XS Cat Eye Sunglasses",
    type: "accessory",
    price: 46781.85,
    category: "clean-lines",
    image: ""
  },
  {
    id: 264,
    brand: "WARDROBE.NYC",
    name: "Ribbed Tank Top",
    type: "top",
    price: 18901.76,
    category: "clean-lines",
    image: ""
  },
  {
    id: 265,
    brand: "SUSANNE KAUFMANN",
    name: "Lip Balm",
    type: "accessory",
    price: 2362.72,
    category: "clean-lines",
    image: ""
  },
  {
    id: 266,
    brand: "WARDROBE.NYC",
    name: "Fitted Long Sleeve Tee",
    type: "top",
    price: 23627.20,
    category: "clean-lines",
    image: ""
  },
  {
    id: 267,
    brand: "ENZA COSTA",
    name: "Twill Minimal Trouser",
    type: "bottom",
    price: 37330.97,
    category: "clean-lines",
    image: ""
  },
  {
    id: 268,
    brand: "SAINT LAURENT",
    name: "Babylone Slingback Pump",
    type: "footwear",
    price: 118136.00,
    category: "clean-lines",
    image: ""
  },
  {
    id: 269,
    brand: "KHAITE",
    name: "Joan Large Hobo Bag",
    type: "accessory",
    price: 376145.00,
    category: "clean-lines",
    image: ""
  },
  {
    id: 270,
    brand: "SAINT LAURENT",
    name: "SL 462 Sulpice Sunglasses",
    type: "accessory",
    price: 49144.57,
    category: "clean-lines",
    image: ""
  },
  {
    id: 271,
    brand: "JENNI KAYNE",
    name: "Cara Dress",
    type: "dress",
    price: 40166.24,
    category: "clean-lines",
    image: ""
  },
  {
    id: 272,
    brand: "KHAITE",
    name: "Archer Thong Sandal",
    type: "footwear",
    price: 73716.86,
    category: "clean-lines",
    image: ""
  },
  {
    id: 273,
    brand: "WARDROBE.NYC",
    name: "Classic T-Shirt",
    type: "top",
    price: 23627.20,
    category: "clean-lines",
    image: ""
  },
  {
    id: 274,
    brand: "ST. AGNI",
    name: "Relaxed Pleat Pant",
    type: "bottom",
    price: 39599.19,
    category: "clean-lines",
    image: ""
  },
  {
    id: 275,
    brand: "BOTTEGA VENETA",
    name: "Square Eyeglasses",
    type: "accessory",
    price: 46781.85,
    category: "clean-lines",
    image: ""
  },
  {
    id: 276,
    brand: "LIE STUDIO",
    name: "Victoria Ring",
    type: "accessory",
    price: 15593.95,
    category: "clean-lines",
    image: ""
  },
  {
    id: 277,
    brand: "TOM FORD",
    name: "Patent Leather Zipped Wristlet Pouch",
    type: "accessory",
    price: 65211.07,
    category: "clean-lines",
    image: ""
  },
  {
    id: 278,
    brand: "ACOLDE",
    name: "X Maria McManus A-Line Poplin Top",
    type: "top",
    price: 43285.03,
    category: "clean-lines",
    image: ""
  },
  {
    id: 279,
    brand: "MUGLER",
    name: "Mid Rise Wide Leg",
    type: "bottom",
    price: 71286.89,
    category: "clean-lines",
    image: ""
  },
  {
    id: 280,
    brand: "KHAITE",
    name: "Loop Kitten Heel 35 Sandal",
    type: "footwear",
    price: 84112.83,
    category: "clean-lines",
    image: ""
  },
   {
    id: 281,
    brand: "AQUAZZURA",
    name: "Bisous 85 Mule Sandal",
    type: "footwear",
    price: 89783.36,
    category: "new-arrivals",
    image: ""
  },
  {
    id: 282,
    brand: "AQUAZZURA",
    name: "Copacabana 130 Wedge Sandal",
    type: "footwear",
    price: 122861.44,
    category: "new-arrivals",
    image: ""
  },
  {
    id: 283,
    brand: "A.EMERY",
    name: "Jalen Sandal",
    type: "footwear",
    price: 23627.20,
    category: "new-arrivals",
    image: ""
  },
  {
    id: 284,
    brand: "A.EMERY",
    name: "Jalen Slim Sandal",
    type: "footwear",
    price: 23627.20,
    category: "new-arrivals",
    image: ""
  },
  {
    id: 285,
    brand: "A.EMERY",
    name: "Elmer Sandal",
    type: "footwear",
    price: 24572.29,
    category: "new-arrivals",
    image: ""
  },
  {
    id: 286,
    brand: "A.EMERY",
    name: "Viola Sandal",
    type: "footwear",
    price: 21737.02,
    category: "new-arrivals",
    image: ""
  },
  {
    id: 287,
    brand: "A.EMERY",
    name: "Kinto Sandal",
    type: "footwear",
    price: 18901.76,
    category: "new-arrivals",
    image: ""
  },
  {
    id: 288,
    brand: "A.EMERY",
    name: "Viola Sandal",
    type: "footwear",
    price: 21737.02,
    category: "new-arrivals",
    image: ""
  },
  {
    id: 289,
    brand: "A.EMERY",
    name: "Paton Sandal",
    type: "footwear",
    price: 19846.85,
    category: "new-arrivals",
    image: ""
  },
  {
    id: 290,
    brand: "A.EMERY",
    name: "Leon Sandal",
    type: "footwear",
    price: 26462.46,
    category: "new-arrivals",
    image: ""
  },
  {
    id: 291,
    brand: "A.EMERY",
    name: "Adams Low Sneaker",
    type: "footwear",
    price: 29297.73,
    category: "new-arrivals",
    image: ""
  },
  {
    id: 292,
    brand: "ACOLDE",
    name: "Barton Dress",
    type: "dress",
    price: 26273.45,
    category: "new-arrivals",
    image: ""
  },
  {
    id: 293,
    brand: "ACOLDE",
    name: "Nyle Relaxed Shorts",
    type: "bottom",
    price: 15877.48,
    category: "new-arrivals",
    image: ""
  },
  {
    id: 294,
    brand: "BOUCHER",
    name: "Slinkee Hoop Earrings",
    type: "accessory",
    price: 44791.69,
    category: "new-arrivals",
    image: ""
  },
  {
    id: 295,
    brand: "COMME SI",
    name: "Striped Tube Sock",
    type: "accessory",
    price: 2835.26,
    category: "new-arrivals",
    image: ""
  },
  {
    id: 296,
    brand: "SAINT LAURENT",
    name: "Taffeta Trench",
    type: "outerwear",
    price: 510347.50,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 297,
    brand: "LOEWE",
    name: "Slim Sunglasses",
    type: "accessory",
    price: 34023.17,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 298,
    brand: "SAINT LAURENT",
    name: "XXL Envelope Pouch",
    type: "accessory",
    price: 189017.59,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 299,
    brand: "FWRD RENEW",
    name: "Hermes Togo Birkin 40 Handbag",
    type: "accessory",
    price: 1134105.50,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 300,
    brand: "HELSA",
    name: "The Poet Blouse",
    type: "top",
    price: 25328.36,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 301,
    brand: "HELSA",
    name: "Stripe Twill Blanket Skirt",
    type: "bottom",
    price: 40544.27,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 302,
    brand: "BOTTEGA VENETA",
    name: "Leather Belt",
    type: "accessory",
    price: 94508.80,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 303,
    brand: "JIMMY CHOO",
    name: "Elsy 90 Sandal",
    type: "footwear",
    price: 77969.76,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 304,
    brand: "FLORE FLORE",
    name: "Dinah Tank Top",
    type: "top",
    price: 10395.97,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 305,
    brand: "WARDROBE.NYC",
    name: "Sheer Tube Skirt",
    type: "bottom",
    price: 33078.08,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 306,
    brand: "BOTTEGA VENETA",
    name: "Dustbag Note Chain Bag",
    type: "accessory",
    price: 302428.16,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 307,
    brand: "SAINT LAURENT",
    name: "Guermantes Slingback Pump",
    type: "footwear",
    price: 127586.88,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 308,
    brand: "DOLCE & GABBANA",
    name: "Slingback Pump",
    type: "footwear",
    price: 136565.20,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 309,
    brand: "THE ATTICO",
    name: "Midi Lace Dress",
    type: "dress",
    price: 121916.35,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 310,
    brand: "ANASTASIA BEVERLY HILLS",
    name: "Magic Touch Blush Trio",
    type: "accessory",
    price: 3591.33,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 311,
    brand: "MONCLER",
    name: "Cloche Sunglasses",
    type: "accessory",
    price: 53019.43,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 312,
    brand: "HELSA",
    name: "Suede Trench Coat",
    type: "outerwear",
    price: 160475.94,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 313,
    brand: "DOLCE & GABBANA",
    name: "Sleeveless Top",
    type: "top",
    price: 193270.48,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 314,
    brand: "THE ATTICO",
    name: "Low Rise Midi Skirt",
    type: "bottom",
    price: 89783.36,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 315,
    brand: "ALAÏA",
    name: "Mule Sandal",
    type: "footwear",
    price: 203193.91,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 296,
    brand: "SAINT LAURENT",
    name: "Taffeta Trench",
    type: "outerwear",
    price: 510347.50,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 297,
    brand: "LOEWE",
    name: "Slim Sunglasses",
    type: "accessory",
    price: 34023.17,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 298,
    brand: "SAINT LAURENT",
    name: "XXL Envelope Pouch",
    type: "accessory",
    price: 189017.59,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 299,
    brand: "FWRD RENEW",
    name: "Hermes Togo Birkin 40 Handbag",
    type: "accessory",
    price: 1134105.50,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 300,
    brand: "HELSA",
    name: "The Poet Blouse",
    type: "top",
    price: 25328.36,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 301,
    brand: "HELSA",
    name: "Stripe Twill Blanket Skirt",
    type: "bottom",
    price: 40544.27,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 302,
    brand: "BOTTEGA VENETA",
    name: "Leather Belt",
    type: "accessory",
    price: 94508.80,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 303,
    brand: "JIMMY CHOO",
    name: "Elsy 90 Sandal",
    type: "footwear",
    price: 77969.76,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 304,
    brand: "FLORE FLORE",
    name: "Dinah Tank Top",
    type: "top",
    price: 10395.97,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 305,
    brand: "WARDROBE.NYC",
    name: "Sheer Tube Skirt",
    type: "bottom",
    price: 33078.08,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 306,
    brand: "BOTTEGA VENETA",
    name: "Dustbag Note Chain Bag",
    type: "accessory",
    price: 302428.16,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 307,
    brand: "SAINT LAURENT",
    name: "Guermantes Slingback Pump",
    type: "footwear",
    price: 127586.88,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 308,
    brand: "DOLCE & GABBANA",
    name: "Slingback Pump",
    type: "footwear",
    price: 136565.20,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 309,
    brand: "THE ATTICO",
    name: "Midi Lace Dress",
    type: "dress",
    price: 121916.35,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 310,
    brand: "ANASTASIA BEVERLY HILLS",
    name: "Magic Touch Blush Trio",
    type: "accessory",
    price: 3591.33,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 311,
    brand: "MONCLER",
    name: "Cloche Sunglasses",
    type: "accessory",
    price: 53019.43,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 312,
    brand: "HELSA",
    name: "Suede Trench Coat",
    type: "outerwear",
    price: 160475.94,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 313,
    brand: "DOLCE & GABBANA",
    name: "Sleeveless Top",
    type: "top",
    price: 193270.48,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 314,
    brand: "THE ATTICO",
    name: "Low Rise Midi Skirt",
    type: "bottom",
    price: 89783.36,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 315,
    brand: "ALAÏA",
    name: "Mule Sandal",
    type: "footwear",
    price: 203193.91,
    category: "trending-color-pairings",
    image: ""
  },
  {
    id: 316,
    brand: "MIU MIU",
    name: "Cashmere F12 Vest",
    type: "top",
    price: 169170.75,
    category: "miu-miu-style-essential",
    image: ""
  },
  {
    id: 317,
    brand: "MIU MIU",
    name: "Intreccio Metal Belt",
    type: "accessory",
    price: 96398.97,
    category: "miu-miu-style-essential",
    image: ""
  },
  {
    id: 318,
    brand: "MIU MIU",
    name: "Straight Leg Trouser",
    type: "bottom",
    price: 178621.62,
    category: "miu-miu-style-essential",
    image: ""
  },
  {
    id: 319,
    brand: "MIU MIU",
    name: "Check Mini Dress",
    type: "dress",
    price: 217370.23,
    category: "miu-miu-style-essential",
    image: ""
  },
  {
    id: 320,
    brand: "MIU MIU",
    name: "Ballerine Slingback Flat",
    type: "footwear",
    price: 121916.35,
    category: "miu-miu-style-essential",
    image: ""
  },
  {
    id: 321,
    brand: "MIU MIU",
    name: "Popeline Top",
    type: "top",
    price: 101124.41,
    category: "miu-miu-style-essential",
    image: ""
  },
  {
    id: 322,
    brand: "MIU MIU",
    name: "Square Eyeglasses",
    type: "accessory",
    price: 43379.54,
    category: "miu-miu-style-essential",
    image: ""
  },
  {
    id: 323,
    brand: "MIU MIU",
    name: "Short",
    type: "bottom",
    price: 137037.77,
    category: "miu-miu-style-essential",
    image: ""
  },
  {
    id: 324,
    brand: "MIU MIU",
    name: "Modellere 55 Pump",
    type: "footwear",
    price: 153104.25,
    category: "miu-miu-style-essential",
    image: ""
  },
  {
    id: 325,
    brand: "MIU MIU",
    name: "Gabardine Old Skirt",
    type: "bottom",
    price: 127586.88,
    category: "miu-miu-style-essential",
    image: ""
  },
  {
    id: 326,
    brand: "MIU MIU",
    name: "Gabardine Old Dress",
    type: "dress",
    price: 283526.38,
    category: "miu-miu-style-essential",
    image: ""
  },
  {
    id: 327,
    brand: "MIU MIU",
    name: "Agnello Scamosciato Cerato Jacket",
    type: "outerwear",
    price: 727717.75,
    category: "miu-miu-style-essential",
    image: ""
  },
  {
    id: 328,
    brand: "MIU MIU",
    name: "Gabardine Old Pelle Jacket",
    type: "outerwear",
    price: 519798.38,
    category: "miu-miu-style-essential",
    image: ""
  },
  {
    id: 329,
    brand: "MIU MIU",
    name: "Scamosciato Jacket",
    type: "outerwear",
    price: 850579.19,
    category: "miu-miu-style-essential",
    image: ""
  },
  {
    id: 330,
    brand: "MIU MIU",
    name: "Macrame Anemone Skirt",
    type: "bottom",
    price: 463093.09,
    category: "miu-miu-style-essential",
    image: ""
  },
  {
    id: 331,
    brand: "KHAITE",
    name: "Dolos Jacket",
    type: "outerwear",
    price: 642669.81,
    category: "future-heirlooms",
    image: ""
  },
  {
    id: 332,
    brand: "ALAÏA",
    name: "Round Leg Pant",
    type: "bottom",
    price: 141763.20,
    category: "future-heirlooms",
    image: ""
  },
  {
    id: 333,
    brand: "MONCLER",
    name: "Sunset Aviator Sunglasses",
    type: "accessory",
    price: 38276.06,
    category: "future-heirlooms",
    image: ""
  },
  {
    id: 334,
    brand: "VALENTINO GARAVANI",
    name: "Viva Superstar Animalier Small Tote Bag",
    type: "accessory",
    price: 302428.16,
    category: "future-heirlooms",
    image: ""
  },
  {
    id: 335,
    brand: "AMINA MUADDI",
    name: "Anok 105 Patent Pump",
    type: "footwear",
    price: 97816.60,
    category: "future-heirlooms",
    image: ""
  },
  {
    id: 336,
    brand: "ROWEN ROSE",
    name: "Long Coat",
    type: "outerwear",
    price: 221056.08,
    category: "future-heirlooms",
    image: ""
  },
  {
    id: 337,
    brand: "DEMARSON",
    name: "Ivy Tennis Bracelet Set Of 2",
    type: "accessory",
    price: 42528.96,
    category: "future-heirlooms",
    image: ""
  },
  {
    id: 338,
    brand: "THE ROW",
    name: "Janne Suede Jacket",
    type: "outerwear",
    price: 557601.88,
    category: "future-heirlooms",
    image: ""
  },
  {
    id: 339,
    brand: "THE ROW",
    name: "Kieran Suede Pant",
    type: "bottom",
    price: 519798.38,
    category: "future-heirlooms",
    image: ""
  },
  {
    id: 340,
    brand: "THE ROW",
    name: "Marlo 12 Bag",
    type: "accessory",
    price: 463093.09,
    category: "future-heirlooms",
    image: ""
  },
  {
    id: 341,
    brand: "THE ROW",
    name: "Mens Loafer",
    type: "footwear",
    price: 103014.59,
    category: "future-heirlooms",
    image: ""
  },
  {
    id: 342,
    brand: "SAINT LAURENT",
    name: "SL 596 Dune Optical Eyeglasses",
    type: "accessory",
    price: 49144.57,
    category: "future-heirlooms",
    image: ""
  },
  {
    id: 343,
    brand: "FWRD RENEW",
    name: "Chanel Caviar Wallet On Chain",
    type: "accessory",
    price: 311879.03,
    category: "future-heirlooms",
    image: ""
  },
  {
    id: 344,
    brand: "MUGLER",
    name: "Long Sleeve Mini Dress",
    type: "dress",
    price: 141763.20,
    category: "future-heirlooms",
    image: ""
  },
  {
    id: 345,
    brand: "VALENTINO GARAVANI",
    name: "Porteque Des Gouttes Earrings",
    type: "accessory",
    price: 160664.95,
    category: "future-heirlooms",
    image: ""
  },
  {
    id: 346,
    brand: "FWRD RENEW",
    name: "Fendi X Sarah Coleman FF Fish Eye Embroidered Bag",
    type: "accessory",
    price: 207919.34,
    category: "future-heirlooms",
    image: ""
  },
  {
    id: 347,
    brand: "ALAÏA",
    name: "Cinch Bomber",
    type: "outerwear",
    price: 686287.00,
    category: "future-heirlooms",
    image: ""
  },
  {
    id: 348,
    brand: "HELSA",
    name: "Devora Polo Bodysuit",
    type: "top",
    price: 22493.09,
    category: "future-heirlooms",
    image: ""
  },
  {
    id: 349,
    brand: "EB DENIM",
    name: "Aida Loose Bowed Jean",
    type: "bottom",
    price: 26935.01,
    category: "future-heirlooms",
    image: ""
  },
  {
    id: 350,
    brand: "BALENCIAGA",
    name: "Bathrobe Coat",
    type: "outerwear",
    price: 467815.53,
    category: "future-heirlooms",
    image: ""
  },
   {
    id: 351,
    brand: "WARDROBE.NYC",
    name: "Crepe Safari Jacket",
    type: "outerwear",
    price: 231546.55,
    category: "spring-fwrd-in-pastels",
    image: ""
  },
  {
    id: 352,
    brand: "THE ATTICO",
    name: "Ornella 140 Sandal",
    type: "footwear",
    price: 108685.12,
    category: "spring-fwrd-in-pastels",
    image: ""
  },
  {
    id: 353,
    brand: "WARDROBE.NYC",
    name: "Sheer Tank Bodysuit",
    type: "top",
    price: 37803.52,
    category: "spring-fwrd-in-pastels",
    image: ""
  },
  {
    id: 354,
    brand: "WARDROBE.NYC",
    name: "Sheer Skirt",
    type: "bottom",
    price: 37803.52,
    category: "spring-fwrd-in-pastels",
    image: ""
  },
  {
    id: 355,
    brand: "VALENTINO",
    name: "Rouche Blazer",
    type: "outerwear",
    price: 434704.47,
    category: "spring-fwrd-in-pastels",
    image: ""
  },
  {
    id: 356,
    brand: "VALENTINO",
    name: "Flare Leg",
    type: "bottom",
    price: 131310.47,
    category: "spring-fwrd-in-pastels",
    image: ""
  },
  {
    id: 357,
    brand: "FWRD RENEW",
    name: "Chanel Calfskin Small 22 Hobo Bag",
    type: "accessory",
    price: 544843.19,
    category: "spring-fwrd-in-pastels",
    image: ""
  },
  {
    id: 358,
    brand: "MAGDA BUTRYM",
    name: "Leather Ballet Flat",
    type: "footwear",
    price: 113410.56,
    category: "spring-fwrd-in-pastels",
    image: ""
  },
  {
    id: 359,
    brand: "EMILIO PUCCI",
    name: "Square Sunglasses",
    type: "accessory",
    price: 32312.99,
    category: "spring-fwrd-in-pastels",
    image: ""
  },
  {
    id: 360,
    brand: "LACADEMIE",
    name: "by Marianna Aylin Jacket",
    type: "outerwear",
    price: 26367.95,
    category: "spring-fwrd-in-pastels",
    image: ""
  },
  {
    id: 361,
    brand: "ADRIANA DEGREAS",
    name: "Petal Applique Open Side Dress",
    type: "dress",
    price: 54815.10,
    category: "spring-fwrd-in-pastels",
    image: ""
  },
  {
    id: 362,
    brand: "LOUIS ABEL",
    name: "Uzu Midi Square Earring",
    type: "accessory",
    price: 36858.43,
    category: "spring-fwrd-in-pastels",
    image: ""
  },
  {
    id: 363,
    brand: "LA PORTE",
    name: "Willa Knit Tank Top",
    type: "top",
    price: 14932.39,
    category: "spring-fwrd-in-pastels",
    image: ""
  },
  {
    id: 364,
    brand: "LA PORTE",
    name: "Sonya Knit Skirt",
    type: "bottom",
    price: 16822.57,
    category: "spring-fwrd-in-pastels",
    image: ""
  },
  {
    id: 365,
    brand: "ACMES",
    name: "Ava Earrings",
    type: "accessory",
    price: 67101.25,
    category: "spring-fwrd-in-pastels",
    image: ""
  },
  {
    id: 366,
    brand: "STAUD",
    name: "Tommy Beaded Bag",
    type: "accessory",
    price: 33078.08,
    category: "spring-fwrd-in-pastels",
    image: ""
  },
  {
    id: 367,
    brand: "FWRD RENEW",
    name: "Chanel Lambskin Boy Bag",
    type: "accessory",
    price: 472071.44,
    category: "spring-fwrd-in-pastels",
    image: ""
  },
  {
    id: 368,
    brand: "LIE STUDIO",
    name: "The Ruby Earrings",
    type: "accessory",
    price: 33078.08,
    category: "spring-fwrd-in-pastels",
    image: ""
  },
  {
    id: 369,
    brand: "KHAITE",
    name: "Omis Dress",
    type: "dress",
    price: 236271.98,
    category: "spring-fwrd-in-pastels",
    image: ""
  },
  {
    id: 370,
    brand: "LE MONDE BERYL",
    name: "Antonia Kitten Heel Sandal",
    type: "footwear",
    price: 64738.53,
    category: "spring-fwrd-in-pastels",
    image: ""
  },
   {
    id: 371,
    brand: "ALFIE",
    name: "for FWRD Bustier Dress",
    type: "dress",
    price: 60013.09,
    category: "neutral-dresses",
    image: ""
  },
  {
    id: 372,
    brand: "ST. AGNI",
    name: "Silk Handkerchief Halter Dress",
    type: "dress",
    price: 70787.09,
    category: "neutral-dresses",
    image: ""
  },
  {
    id: 373,
    brand: "CHLOÉ",
    name: "Flowy Tiered Dress",
    type: "dress",
    price: 585009.44,
    category: "neutral-dresses",
    image: ""
  },
  {
    id: 374,
    brand: "DAVID KOMA",
    name: "3D Flower Embroidered Mesh Gown",
    type: "dress",
    price: 313296.66,
    category: "neutral-dresses",
    image: ""
  },
  {
    id: 375,
    brand: "AYA MUSE",
    name: "Lune Maxi Dress",
    type: "dress",
    price: 70881.60,
    category: "neutral-dresses",
    image: ""
  },
  {
    id: 376,
    brand: "LAPOINTE",
    name: "Satin Halter Gown",
    type: "dress",
    price: 140818.11,
    category: "neutral-dresses",
    image: ""
  },
  {
    id: 377,
    brand: "COPERNI",
    name: "Linen Flower Gown",
    type: "dress",
    price: 106794.94,
    category: "neutral-dresses",
    image: ""
  },
  {
    id: 378,
    brand: "SAINT LAURENT",
    name: "Satin Long Dress",
    type: "dress",
    price: 557601.88,
    category: "neutral-dresses",
    image: ""
  },
  {
    id: 379,
    brand: "BOTTEGA VENETA",
    name: "Midi Dress",
    type: "dress",
    price: 217370.23,
    category: "neutral-dresses",
    image: ""
  },
  {
    id: 380,
    brand: "PATBO",
    name: "Lycra Mesh Dress",
    type: "dress",
    price: 122861.44,
    category: "neutral-dresses",
    image: ""
  },
  {
    id: 381,
    brand: "STAUD",
    name: "Aurelia Mini Dress",
    type: "dress",
    price: 37330.97,
    category: "neutral-dresses",
    image: ""
  },
  {
    id: 382,
    brand: "HELSA",
    name: "Fairweather Midi Dress in Stretch Cotton Sateen",
    type: "dress",
    price: 32983.57,
    category: "neutral-dresses",
    image: ""
  },
  {
    id: 383,
    brand: "HELSA",
    name: "Tesca Knit Dress",
    type: "dress",
    price: 37614.50,
    category: "neutral-dresses",
    image: ""
  },
  {
    id: 384,
    brand: "HELSA",
    name: "Katerina Jersey Gown",
    type: "dress",
    price: 47159.89,
    category: "neutral-dresses",
    image: ""
  },
  {
    id: 385,
    brand: "LEFT ON FRIDAY",
    name: "Leisure Maxi Dress",
    type: "dress",
    price: 17956.67,
    category: "neutral-dresses",
    image: ""
  },
   {
    id: 386,
    brand: "BALENCIAGA",
    name: "Strap Top",
    type: "top",
    price: 82695.20,
    category: "personality-packed-wardrobe",
    image: ""
  },
  {
    id: 387,
    brand: "HELSA",
    name: "Ariella Knit Pant",
    type: "bottom",
    price: 21548.01,
    category: "personality-packed-wardrobe",
    image: ""
  },
  {
    id: 388,
    brand: "BALENCIAGA",
    name: "Gossip Sunglasses",
    type: "accessory",
    price: 58595.45,
    category: "personality-packed-wardrobe",
    image: ""
  },
  {
    id: 389,
    brand: "KHAITE",
    name: "Bella 100 Pump",
    type: "footwear",
    price: 120971.26,
    category: "personality-packed-wardrobe",
    image: ""
  },
  {
    id: 390,
    brand: "TOM FORD",
    name: "Brass Cuff",
    type: "accessory",
    price: 84112.83,
    category: "personality-packed-wardrobe",
    image: ""
  },
  {
    id: 391,
    brand: "THE ATTICO",
    name: "Cropped T-Shirt",
    type: "top",
    price: 55760.19,
    category: "personality-packed-wardrobe",
    image: ""
  },
  {
    id: 392,
    brand: "THE ATTICO",
    name: "Low Rise Midi Skirt",
    type: "bottom",
    price: 89783.36,
    category: "personality-packed-wardrobe",
    image: ""
  },
  {
    id: 393,
    brand: "SAINT LAURENT",
    name: "Howl Oversize Sunglasses",
    type: "accessory",
    price: 56322.73,
    category: "personality-packed-wardrobe",
    image: ""
  },
  {
    id: 394,
    brand: "ATLEIN",
    name: "Cropped Quilted Jacket",
    type: "outerwear",
    price: 190529.73,
    category: "personality-packed-wardrobe",
    image: ""
  },
  {
    id: 395,
    brand: "THE ATTICO",
    name: "Long Pant",
    type: "bottom",
    price: 89783.36,
    category: "personality-packed-wardrobe",
    image: ""
  },
  {
    id: 396,
    brand: "ALAÏA",
    name: "Slingbacks Wedge",
    type: "footwear",
    price: 132312.31,
    category: "personality-packed-wardrobe",
    image: ""
  },
  {
    id: 397,
    brand: "SAINT LAURENT",
    name: "Kiki Mule Sandal",
    type: "footwear",
    price: 108685.12,
    category: "personality-packed-wardrobe",
    image: ""
  },
  {
    id: 398,
    brand: "VALENTINO GARAVANI",
    name: "Vourlavore Butterfly Earrings",
    type: "accessory",
    price: 70881.60,
    category: "personality-packed-wardrobe",
    image: ""
  },
  {
    id: 399,
    brand: "EMILIO PUCCI",
    name: "Mini Dress",
    type: "dress",
    price: 190907.77,
    category: "personality-packed-wardrobe",
    image: ""
  },
  {
    id: 400,
    brand: "BOTTEGA VENETA",
    name: "Knot Clutch",
    type: "accessory",
    price: 680463.31,
    category: "personality-packed-wardrobe",
    image: ""
  },
  {
    id: 401,
    brand: "HELSA",
    name: "The Silk Charmeuse Shirt",
    type: "top",
    price: 27218.53,
    category: "personality-packed-wardrobe",
    image: ""
  },
  {
    id: 402,
    brand: "ACNE STUDIOS",
    name: "Petra Pant",
    type: "bottom",
    price: 80332.48,
    category: "personality-packed-wardrobe",
    image: ""
  },
  {
    id: 403,
    brand: "THE ATTICO",
    name: "La Passeggiata Mini Top Handle Bag",
    type: "accessory",
    price: 112465.47,
    category: "personality-packed-wardrobe",
    image: ""
  },
  {
    id: 404,
    brand: "LE MONDE BERYL",
    name: "Babouche Leather Kitten Heel",
    type: "footwear",
    price: 61903.26,
    category: "personality-packed-wardrobe",
    image: ""
  },
  {
    id: 405,
    brand: "SAINT LAURENT",
    name: "Anja Slingback Pump",
    type: "footwear",
    price: 108685.12,
    category: "personality-packed-wardrobe",
    image: ""
  },
   {
    id: 406,
    brand: "HAELO",
    name: "Split Bandana Top",
    type: "top",
    price: 20791.94,
    category: "haelo-season-3",
    image: ""
  },
  {
    id: 407,
    brand: "HAELO",
    name: "Spiral Bandana Skirt",
    type: "bottom",
    price: 24572.29,
    category: "haelo-season-3",
    image: ""
  },
  {
    id: 408,
    brand: "HAELO",
    name: "Corseted Drape Dress",
    type: "dress",
    price: 28352.64,
    category: "haelo-season-3",
    image: ""
  },
  {
    id: 409,
    brand: "HAELO",
    name: "Feather Lace Mini Dress",
    type: "dress",
    price: 26462.46,
    category: "haelo-season-3",
    image: ""
  },
  {
    id: 410,
    brand: "HAELO",
    name: "Knotted LS Top",
    type: "top",
    price: 18901.76,
    category: "haelo-season-3",
    image: ""
  },
  {
    id: 411,
    brand: "HAELO",
    name: "Split Bandana Dress",
    type: "dress",
    price: 33078.08,
    category: "haelo-season-3",
    image: ""
  },
  {
    id: 412,
    brand: "HAELO",
    name: "Knotted Skirt",
    type: "skirt",
    price: 20791.94,
    category: "haelo-season-3",
    image: ""
  },
  {
    id: 413,
    brand: "HAELO",
    name: "Minimal Oval Belt",
    type: "accessory",
    price: 17956.67,
    category: "haelo-season-3",
    image: ""
  },
  {
    id: 414,
    brand: "HAELO",
    name: "Veiled Mini Dress",
    type: "dress",
    price: 35618.83,
    category: "haelo-season-3",
    image: ""
  },
  {
    id: 415,
    brand: "HAELO",
    name: "Layered Lace Up Corset Dress",
    type: "dress",
    price: 29203.22,
    category: "haelo-season-3",
    image: ""
  },
  {
    id: 416,
    brand: "HAELO",
    name: "Twist Drape Tank Dress",
    type: "dress",
    price: 29203.22,
    category: "haelo-season-3",
    image: ""
  },
  {
    id: 417,
    brand: "HAELO",
    name: "Sport Stripe Short",
    type: "shorts",
    price: 36763.92,
    category: "haelo-season-3",
    image: ""
  },
  {
    id: 418,
    brand: "HAELO",
    name: "Crop Sweater",
    type: "top",
    price: 26042.51,
    category: "haelo-season-3",
    image: ""
  },
  {
    id: 419,
    brand: "HAELO",
    name: "Twist Sweater",
    type: "top",
    price: 22482.87,
    category: "haelo-season-3",
    image: ""
  },
  {
    id: 420,
    brand: "HAELO",
    name: "Sport Zip Up Jacket",
    type: "jacket",
    price: 36763.92,
    category: "haelo-season-3",
    image: ""
  },
  {
    id: 421,
    brand: "THE ATTICO",
    name: "Midi Lace Dress",
    type: "dress",
    price: 121916.35,
    category: "8-dresses-you-need",
    image: ""
  },
  {
    id: 422,
    brand: "MAYGEL CORONEL",
    name: "Ariro Dress",
    type: "dress",
    price: 65211.07,
    category: "8-dresses-you-need",
    image: ""
  },
  {
    id: 423,
    brand: "LEO LIN",
    name: "Yvonne Applique Mini Dress",
    type: "dress",
    price: 75134.49,
    category: "8-dresses-you-need",
    image: ""
  },
  {
    id: 424,
    brand: "KAREN AZANCIO",
    name: "Flori Dress",
    type: "dress",
    price: 87420.64,
    category: "8-dresses-you-need",
    image: ""
  },
  {
    id: 425,
    brand: "POSSE",
    name: "Phoebe Dress",
    type: "dress",
    price: 43474.05,
    category: "8-dresses-you-need",
    image: ""
  },
  {
    id: 426,
    brand: "LAQUAN SMITH",
    name: "Neck Tie Gown",
    type: "dress",
    price: 146486.62,
    category: "8-dresses-you-need",
    image: ""
  },
  {
    id: 427,
    brand: "MAYGEL CORONEL",
    name: "Arena Dress",
    type: "dress",
    price: 55760.19,
    category: "8-dresses-you-need",
    image: ""
  },
  {
    id: 428,
    brand: "CAROLINA HERRERA",
    name: "Midi Dress",
    type: "dress",
    price: 216425.14,
    category: "8-dresses-you-need",
    image: ""
  },
  {
    id: 429,
    brand: "SELF-PORTRAIT",
    name: "Broderie Mini Dress",
    type: "dress",
    price: 46309.31,
    category: "8-dresses-you-need",
    image: ""
  },
  {
    id: 430,
    brand: "MARLIES GRACE",
    name: "Sofia Dress",
    type: "dress",
    price: 49617.12,
    category: "8-dresses-you-need",
    image: ""
  },
  {
    id: 431,
    brand: "CULT GAIA",
    name: "Doe Dress",
    type: "dress",
    price: 94319.78,
    category: "8-dresses-you-need",
    image: ""
  },
  {
    id: 432,
    brand: "KHAITE",
    name: "Onis Dress",
    type: "dress",
    price: 236271.98,
    category: "8-dresses-you-need",
    image: ""
  },
  {
    id: 433,
    brand: "ZIMMERMANN",
    name: "Luna Ruffle Playsuit",
    type: "dress",
    price: 84585.37,
    category: "8-dresses-you-need",
    image: ""
  },
  {
    id: 434,
    brand: "BONDI EYE",
    name: "Arlo Maxi Dress",
    type: "dress",
    price: 26462.46,
    category: "8-dresses-you-need",
    image: ""
  },
  {
    id: 435,
    brand: "ISABEL MARANT ETOILE",
    name: "Beline Dress",
    type: "dress",
    price: 56232.73,
    category: "8-dresses-you-need",
    image: ""
  },
  {
    id: 436,
    brand: "JEAN PAUL GAULTIER",
    name: "Cotton Ribbed Printed Marine Long Dress",
    type: "dress",
    price: 54815.10,
    category: "8-dresses-you-need",
    image: ""
  },
  {
    id: 437,
    brand: "BALMAIN",
    name: "Gold Detail Jersey Draped Long Dress",
    type: "dress",
    price: 188072.52,
    category: "8-dresses-you-need",
    image: ""
  },
  {
    id: 438,
    brand: "LEO LIN",
    name: "Emily Applique Midi Dress",
    type: "dress",
    price: 84585.37,
    category: "8-dresses-you-need",
    image: ""
  },
  {
    id: 439,
    brand: "MARIANNA SENCHINA",
    name: "Calla Dress",
    type: "dress",
    price: 98383.66,
    category: "8-dresses-you-need",
    image: ""
  },
  {
    id: 440,
    brand: "SIR",
    name: "Costa Gathered Mini Dress",
    type: "dress",
    price: 39963.69,
    category: "8-dresses-you-need",
    image: ""
  }  
];
export default products;