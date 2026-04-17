const products = [
  {
    id: 1,
    brand: "VERSACE",
    name: "Scarf Top",
    image: "https://is4.fwrdassets.com/images/p/fw/p/VSAC-WS304_V4.jpg",
    type: "top",
    price: 46781.85,
    category: "matching-sets",

  },
  {
    id: 2,
    brand: "VERSACE",
    name: "Short Pareo",
    image: "https://is4.fwrdassets.com/images/p/fw/p/VSAC-WQ126_V5.jpg",
    type: "bottom",
    price: 42528.96,
    category: "matching-sets",
  },
  {
    id: 3,
    brand: "AYA MUSE",
    name: "Eteri Top",
    type: "top",
    price: 40166.24,
    category: "matching-sets",
    image: "https://is4.fwrdassets.com/images/p/fw/p/AYAF-WS70_V4.jpg"
  },
  {
    id: 4,
    brand: "AYA MUSE",
    name: "Eteri Skirt",
    type: "bottom",
    price: 80332.48,
    category: "matching-sets",
    image: "https://is4.fwrdassets.com/images/p/fw/p/AYAF-WQ36_V5.jpg"
  },
  {
    id: 5,
    brand: "MATTHEW BRUCH",
    name: "Structured Bandeau Crop Top",
    type: "top",
    price: 27880.10,
    category: "matching-sets",
    image: "https://is4.fwrdassets.com/images/p/fw/p/MUCF-WS90_V4.jpg"
  },
  {
    id: 6,
    brand: "MATTHEW BRUCH",
    name: "Bubble Short",
    type: "bottom",
    price: 37330.97,
    category: "matching-sets",
    image: "https://is4.fwrdassets.com/images/p/fw/p/MUCF-WF35_V5.jpg"
  },
  {
    id: 7,
    brand: "POSSE",
    name: "Phoebe Top",
    type: "top",
    price: 28352.64,
    category: "matching-sets",
    image: "https://is4.fwrdassets.com/images/p/fw/p/PSSF-WS50_V5.jpg"
  },
  {
    id: 8,
    brand: "POSSE",
    name: "Evie Pant",
    type: "bottom",
    price: 33078.08,
    category: "matching-sets",
    image: "https://is4.fwrdassets.com/images/p/fw/p/PSSF-WP16_V5.jpg"
  },
  {
    id: 9,
    brand: "ZIMMERMANN",
    name: "Alchemy Relaxed Satin Top",
    type: "top",
    price: 68518.88,
    category: "matching-sets",
    image: "https://is4.fwrdassets.com/images/p/fw/p/ZMER-WS490_V4.jpg"
  },
  {
    id: 10,
    brand: "ZIMMERMANN",
    name: "Alchemy Relaxed Short",
    type: "bottom",
    price: 56232.73,
    category: "matching-sets",
    image: "https://is4.fwrdassets.com/images/p/fw/p/ZMER-WF131_V1.jpg"
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
    image: "https://is4.fwrdassets.com/images/p/fw/p/ATRF-WS39_V4.jpg"
  },
  {
    id: 13,
    brand: "SABLYN",
    name: "Camden Top",
    type: "top",
    price: 46781.85,
    category: "matching-sets",
    image: "https://is4.fwrdassets.com/images/p/fw/p/SABF-WS279_V4.jpg"
  },
  {
    id: 14,
    brand: "SABLYN",
    name: "Naomi Pull On Pant",
    type: "bottom",
    price: 84585.37,
    category: "matching-sets",
    image: "https://is4.fwrdassets.com/images/p/fw/p/SABF-WP112_V5.jpg"
  },
  {
    id: 15,
    brand: "SOLID & STRIPED",
    name: "The Celeste Tube Top",
    type: "top",
    price: 12097.13,
    category: "matching-sets",
    image: "https://is4.fwrdassets.com/images/p/fw/p/SOLF-WS28_V4.jpg"
  },
  {
    id: 16,
    brand: "SOLID & STRIPED",
    name: "The Celeste Skort",
    type: "bottom",
    price: 13042.21,
    category: "matching-sets",
    image: "https://is4.fwrdassets.com/images/p/fw/p/SOLF-WF12_V5.jpg"
  },
  {
    id: 17,
    brand: "FLEUR DU MAL",
    name: "Poplin Bustier Top",
    type: "top",
    price: 18712.74,
    category: "matching-sets",
    image: "https://is4.fwrdassets.com/images/p/fw/p/FLEF-WS211_V4.jpg"
  },
  {
    id: 18,
    brand: "FLEUR DU MAL",
    name: "Poplin Draped Ruched Skirt",
    type: "bottom",
    price: 21548.01,
    category: "matching-sets",
    image: " https://is4.fwrdassets.com/images/p/fw/p/FLEF-WQ38_V1.jpg "
  },
  {
    id: 19,
    brand: "KHAITE",
    name: "Davet Top",
    type: "top",
    price: 115300.73,
    category: "matching-sets",
    image: "https://is4.fwrdassets.com/images/p/fw/p/KTAH-WS301_V4.jpg"
  },
  {
    id: 20,
    brand: "KHAITE",
    name: "Inaya Skirt",
    type: "bottom",
    price: 130422.14,
    category: "matching-sets",
    image: "https://is4.fwrdassets.com/images/p/fw/p/KTAH-WQ79_V5.jpg"
  },
  {
    id: 21,
    brand: "THE ROW",
    name: "Dayton Coat",
    type: "outerwear",
    price: 354408.00,
    category: "kendalls-edit",
    image: "https://is4.fwrdassets.com/images/p/fw/p/TERX-WO167_V4.jpg"
  },
  {
    id: 22,
    brand: "THE ROW",
    name: "Eglitta Wide Leg",
    type: "bottom",
    price: 86948.09,
    category: "kendalls-edit",
    image: "https://is4.fwrdassets.com/images/p/fw/p/TERX-WJ25_V4.jpg"
  },
  {
    id: 23,
    brand: "LESET",
    name: "Margo Long Sleeve Polo",
    type: "top",
    price: 15121.41,
    category: "kendalls-edit",
    image: "https://is4.fwrdassets.com/images/p/fw/p/LSEF-WS135_V4.jpg"
  },
  {
    id: 24,
    brand: "SAINT LAURENT",
    name: "70's Flare Leg",
    type: "bottom",
    price: 116245.82,
    category: "kendalls-edit",
    image: "https://is4.fwrdassets.com/images/p/fw/p/SLAU-WJ75_V5.jpg"
  },
  {
    id: 25,
    brand: "BODE",
    name: "Worcester Fringe Dress",
    type: "dress",
    price: 151214.06,
    category: "kendalls-edit",
    image: "https://is4.fwrdassets.com/images/p/fw/p/BOFE-WD49_V3.jpg"
  },
  {
    id: 26,
    brand: "ADAM LIPPES",
    name: "Twyla Dress",
    type: "dress",
    price: 140818.11,
    category: "kendalls-edit",
    image: "https://is4.fwrdassets.com/images/p/fw/p/ALIP-WD33_V4.jpg"
  },
  {
    id: 27,
    brand: "JADE TRAU",
    name: "Rae Stud Earrings",
    type: "accessory",
    price: 292977.28,
    category: "kendalls-edit",
    image: "https://is4.fwrdassets.com/images/p/fw/p/JTRF-WL9_V2.jpg"
  },
  {
    id: 28,
    brand: "SAINT LAURENT",
    name: "Monogram Hinge XS Cat Eye Sunglasses",
    type: "accessory",
    price: 46781.85,
    category: "kendalls-edit",
    image: "https://is4.fwrdassets.com/images/p/fw/45s/SLAU-WG154_V2.jpg"
  },
  {
    id: 29,
    brand: "SAINT LAURENT",
    name: "Flap Card Case",
    type: "accessory",
    price: 40638.78,
    category: "kendalls-edit",
    image: "https://is4.fwrdassets.com/images/p/fw/45s/SLAU-WY3369_V2.jpg"
  },
  {
    id: 30,
    brand: "THE ROW",
    name: "Marlo 12 Bag",
    type: "accessory",
    price: 463093.09,
    category: "kendalls-edit",
    image: "https://is4.fwrdassets.com/images/p/fw/45s/TERX-WY850_V2.jpg"
  },
  {
    id: 31,
    brand: "EAVES",
    name: "Janith Capri Pant",
    type: "bottom",
    price: 21642.51,
    category: "kendalls-edit",
    image: "https://is4.fwrdassets.com/images/p/fw/p/EAVR-WP24_V5.jpg"
  },
  {
    id: 32,
    brand: "ALEX PERRY",
    name: "Single Shoulder Dress",
    type: "dress",
    price: 213211.84,
    category: "kendalls-edit",
    image: "https://is4.fwrdassets.com/images/p/fw/p/APEF-WD276_V3.jpg"
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
    image: "https://is4.fwrdassets.com/images/p/fw/p/LSEF-WS114_V4.jpg"
  },
  {
    id: 35,
    brand: "LESET",
    name: "Nando Slim Fit Tee",
    type: "top",
    price: 8316.77,
    category: "kendalls-edit",
    image: "https://is4.fwrdassets.com/images/p/fw/p/LSEF-WS103_V4.jpg"
  },
  {
    id: 36,
    brand: "THE ROW",
    name: "Mirai Sweater",
    type: "top",
    price: 155939.52,
    category: "kendalls-edit",
    image: "https://is4.fwrdassets.com/images/p/fw/p/TERX-WK125_V4.jpg"
  },
  {
    id: 37,
    brand: "GUEST IN RESIDENCE",
    name: "The Big Scarf",
    type: "accessory",
    price: 23154.66,
    category: "kendalls-edit",
    image: "https://is4.fwrdassets.com/images/p/fw/p/GUEF-WA36_V2.jpg"
  },
  {
    id: 38,
    brand: "THE ROW",
    name: "Wristlet Pouch",
    type: "accessory",
    price: 89783.36,
    category: "kendalls-edit",
    image: "https://is4.fwrdassets.com/images/p/fw/p/TERX-WY764_V2.jpg"
  },
  {
    id: 39,
    brand: "THE ROW",
    name: "Travel Pouch",
    type: "accessory",
    price: 79387.39,
    category: "kendalls-edit",
    image: "https://is4.fwrdassets.com/images/p/fw/p/TERX-WY760_V2.jpg"
  },
  {
    id: 40,
    brand: "THE ROW",
    name: "Clovis Toiletry Pouch",
    type: "accessory",
    price: 198468.47,
    category: "kendalls-edit",
    image: "https://is4.fwrdassets.com/images/p/fw/z/TERX-WY897_V1.jpg"
  },
  {
    id: 41,
    brand: "BOND EYE",
    name: "Arlo Maxi Dress",
    type: "dress",
    price: 26462.46,
    category: "destination-dresses",
    image: "https://is4.fwrdassets.com/images/p/fw/z/BONF-WD24_V2.jpg"
  },
  {
    id: 42,
    brand: "DAVID KOMA",
    name: "3D Flower Embroidered Mesh Gown",
    type: "dress",
    price: 313296.66,
    category: "destination-dresses",
    image: "https://is4.fwrdassets.com/images/p/fw/z/DAVF-WD476_V3.jpg"
  },
  {
    id: 43,
    brand: "ALEXIS",
    name: "Sidi Dress",
    type: "dress",
    price: 103487.13,
    category: "destination-dresses",
    image: "https://is4.fwrdassets.com/images/p/fw/z/ALXF-WD639_V3.jpg"
  },
  {
    id: 44,
    brand: "CULT GAIA",
    name: "Celestina Dress",
    type: "dress",
    price: 151025.06,
    category: "destination-dresses",
    image: "https://is4.fwrdassets.com/images/p/fw/z/GAIA-WD392_V2.jpg"
  },
  {
    id: 45,
    brand: "JOHANNA ORTIZ",
    name: "Tide Strength Mini Dress",
    type: "dress",
    price: 80332.48,
    category: "destination-dresses",
    image: "https://is4.fwrdassets.com/images/p/fw/z/JOTZ-WD256_V3.jpg"
  },
  {
    id: 46,
    brand: "MARLIES GRACE",
    name: "Rosamund Crochet Dress",
    type: "dress",
    price: 61430.72,
    category: "destination-dresses",
    image: "https://is4.fwrdassets.com/images/p/fw/z/MSGF-WD16_V3.jpg"
  },
  {
    id: 47,
    brand: "POSSE",
    name: "Danielle Dress",
    type: "dress",
    price: 36858.43,
    category: "destination-dresses",
    image: "https://is4.fwrdassets.com/images/p/fw/z/PSSF-WD79_V3.jpg"
  },
  {
    id: 48,
    brand: "CULT GAIA",
    name: "Renata Gown",
    type: "dress",
    price: 217181.20,
    category: "destination-dresses",
    image: "https://is4.fwrdassets.com/images/p/fw/z/GAIA-WD382_V3.jpg"
  },
  {
    id: 49,
    brand: "CULT GAIA",
    name: "Dareen Dress",
    type: "dress",
    price: 45175.20,
    category: "destination-dresses",
    image: "https://is4.fwrdassets.com/images/p/fw/z/GAIA-WD387_V3.jpg"
  },
  {
    id: 50,
    brand: "PATBO",
    name: "Honey Flower Plunge Dress",
    type: "dress",
    price: 113410.56,
    category: "destination-dresses",
    image: "https://is4.fwrdassets.com/images/p/fw/z/PTAB-WD341_V3.jpg"
  },
  {
    id: 51,
    brand: "HAIGHT.",
    name: "Luna Knit Dress",
    type: "dress",
    price: 32889.06,
    category: "destination-dresses",
    image: "https://is4.fwrdassets.com/images/p/fw/z/HGHF-WD25_V4.jpg"
  },
  {
    id: 52,
    brand: "SANDY LIANG",
    name: "Patsy Dress",
    type: "dress",
    price: 33078.08,
    category: "destination-dresses",
    image: "https://is4.fwrdassets.com/images/p/fw/z/SLGF-WD69_V3.jpg"
  },
  {
    id: 53,
    brand: "HELSA",
    name: "Aaliyah Maxi Knit Dress",
    type: "dress",
    price: 28163.62,
    category: "destination-dresses",
    image: "https://is4.fwrdassets.com/images/p/fw/z/HLSA-WD172_V2.jpg"
  },
  {
    id: 54,
    brand: "THE ATTICO",
    name: "Draped Mini Dress",
    type: "dress",
    price: 121916.35,
    category: "destination-dresses",
    image: "https://is4.fwrdassets.com/images/p/fw/z/ATTF-WD338_V5.jpg"
  },
  {
    id: 55,
    brand: "ST. AGNI",
    name: "Relaxed Pleat Dress",
    type: "dress",
    price: 47159.89,
    category: "destination-dresses",
    image: "https://is4.fwrdassets.com/images/p/fw/z/SGNF-WD84_V3.jpg"
  },
  {
    id: 56,
    brand: "SHANI SHEMER",
    name: "Oliver Mini Dress",
    type: "dress",
    price: 37803.52,
    category: "destination-dresses",
    image: "https://is4.fwrdassets.com/images/p/fw/z/SMEF-WD47_V1.jpg"
  },
  {
    id: 57,
    brand: "PATBO",
    name: "Wave Cut Out Beach Dress",
    type: "dress",
    price: 84585.37,
    category: "destination-dresses",
    image: "https://is4.fwrdassets.com/images/p/fw/z/PTAB-WD340_V4.jpg"
  },
  {
    id: 58,
    brand: "ALL THAT REMAINS",
    name: "Zinnia Dress",
    type: "dress",
    price: 49144.57,
    category: "destination-dresses",
    image: "https://is4.fwrdassets.com/images/p/fw/z/ATRF-WD42_V2.jpg"
  },
  {
    id: 59,
    brand: "ENZA COSTA",
    name: "Silk Rib U Neck Halter Fluid Maxi Dress",
    type: "dress",
    price: 27880.10,
    category: "destination-dresses",
    image: "https://is4.fwrdassets.com/images/p/fw/z/ENZF-WD556_V3.jpg"
  },
  {
    id: 60,
    brand: "ALEMAIS",
    name: "Wilson Mini Dress",
    type: "dress",
    price: 74661.95,
    category: "destination-dresses",
    image: "https://is4.fwrdassets.com/images/p/fw/z/AAIX-WD3_V3.jpg"
  },{
    id: 61,
    brand: "ALAÏA",
    name: "Peplum Top",
    type: "top",
    price: 197523.39,
    category: "spring-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/z/ALIA-WS291_V4.jpg"
  },
  {
    id: 62,
    brand: "TOTEME",
    name: "Capri Knit Legging",
    type: "bottom",
    price: 39693.69,
    category: "spring-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/z/TOTF-WP84_V5.jpg"
  },
  {
    id: 63,
    brand: "JENNIFER FISHER",
    name: "Chavez Micro Huggie Earrings",
    type: "accessory",
    price: 23154.66,
    category: "spring-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/z/JHEF-WL66_V1.jpg"
  },
  {
    id: 64,
    brand: "KHAITE",
    name: "Loop Kitten Heel 35 Sandal",
    type: "footwear",
    price: 84112.83,
    category: "spring-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/z/KTAH-WZ282_V2.jpg"
  },
  {
    id: 65,
    brand: "BALENCIAGA",
    name: "Le City Small Hobo Bag",
    type: "accessory",
    price: 188072.52,
    category: "spring-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/z/BALF-WY1638_V2.jpg"
  },
  {
    id: 66,
    brand: "JACQUEMUS",
    name: "Bcare Sunglasses",
    type: "accessory",
    price: 30715.36,
    category: "spring-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/z/JQUF-WG25_V2.jpg"
  },
  {
    id: 67,
    brand: "CITIZENS OF HUMANITY",
    name: "Anita Puff Sleeve Jacket",
    type: "outerwear",
    price: 42339.94,
    category: "spring-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/z/CITI-WO146_V4.jpg"
  },
  {
    id: 68,
    brand: "MATTHEW BRUCH",
    name: "High Waist Twist Seam Straight Leg",
    type: "bottom",
    price: 46781.85,
    category: "spring-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/z/MUCF-WJ7_V1.jpg"
  },
  {
    id: 69,
    brand: "ROWEN ROSE",
    name: "Oversized Earrings",
    type: "accessory",
    price: 49239.08,
    category: "spring-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/z/ROWF-WL10_V2.jpg"
  },
  {
    id: 70,
    brand: "ZIMMERMANN",
    name: "Luna Paneled Peplum Top",
    type: "top",
    price: 49617.12,
    category: "spring-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/z/ZMER-WF127_V5.jpg"
  },
  {
    id: 71,
    brand: "ZIMMERMANN",
    name: "Luna Moulin Midi Skirt",
    type: "bottom",
    price: 56232.73,
    category: "spring-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/z/ZMER-WF131_V5.jpg"
  },
  {
    id: 72,
    brand: "SAINT LAURENT",
    name: "Kate Clutch On Chain",
    type: "accessory",
    price: 203193.91,
    category: "spring-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/z/SLAU-WY3371_V2.jpg"
  },
  {
    id: 73,
    brand: "TOTEME",
    name: "Grained Leather Lounge Tote Bag",
    type: "accessory",
    price: 168225.66,
    category: "spring-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/z/TOTF-WY61_V2.jpg"
  },
  {
    id: 74,
    brand: "SPINELLI KILCOLLIN",
    name: "Libra Noir Ring",
    type: "accessory",
    price: 274075.50,
    category: "spring-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/z/SLKN-WL41_V2.jpg"
  },
  {
    id: 75,
    brand: "ALFIE",
    name: "Lilly Dress",
    type: "dress",
    price: 85057.92,
    category: "spring-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/z/AFIE-WD9_V3.jpg"
  },
  {
    id: 76,
    brand: "SAINT LAURENT",
    name: "Mabrouka Slide",
    type: "footwear",
    price: 99234.24,
    category: "spring-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/z/SLAU-WZ1571_V2.jpg"
  },
  {
    id: 77,
    brand: "POLO RALPH LAUREN",
    name: "Button Front Shirt",
    type: "top",
    price: 13987.30,
    category: "spring-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/p/PLAU-WS71_V4.jpg"
  },
  {
    id: 78,
    brand: "MOTHER",
    name: "The Kick It Jeans",
    type: "bottom",
    price: 26273.45,
    category: "spring-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/p/MOTH-WJ2041_V5.jpg"
  },
  {
    id: 79,
    brand: "LOULOU DE SAISON",
    name: "Niham Mini Wedge Sandal",
    type: "footwear",
    price: 62375.81,
    category: "spring-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/p/LSUD-WZ10_V2.jpg"
  },
  {
    id: 80,
    brand: "BOTTEGA VENETA",
    name: "Small Sardine Earrings",
    type: "accessory",
    price: 85057.92,
    category: "spring-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/p/BOTT-WL145_V2.jpg"
  },
  {
    id: 81,
    brand: "ALEMAIS",
    name: "Wilson Silk Top",
    type: "top",
    price: 55760.19,
    category: "vacation-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/p/AAIX-WS4_V5.jpg"
  },
  {
    id: 82,
    brand: "ALEMAIS",
    name: "Wilson Silk Pant",
    type: "bottom",
    price: 55760.19,
    category: "vacation-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/p/AAIX-WP2_V5.jpg"
  },
  {
    id: 83,
    brand: "JIMMY CHOO",
    name: "Elsy 90 Sandal",
    type: "footwear",
    price: 77969.76,
    category: "vacation-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/p/JIMM-WZ456_V2.jpg"
  },
  {
    id: 84,
    brand: "SIMONMILLER",
    name: "Pom Pom Mini Skirt",
    type: "bottom",
    price: 34495.71,
    category: "vacation-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/p/SIMF-WQ34_V5.jpg"
  },
  {
    id: 85,
    brand: "JENNIFER BEHR",
    name: "Cara Earrings",
    type: "accessory",
    price: 16822.57,
    category: "vacation-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/p/JEHR-WL291_V2.jpg"
  },
  {
    id: 86,
    brand: "BODE",
    name: "Lucky Draw Tap Short",
    type: "bottom",
    price: 36858.43,
    category: "vacation-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/p/BOFE-WF29_V5.jpg"
  },
  {
    id: 87,
    brand: "DRIES VAN NOTEN",
    name: "Rectangle Sunglasses",
    type: "accessory",
    price: 32605.53,
    category: "vacation-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/p/DRNF-WG8_V2.jpg"
  },
  {
    id: 88,
    brand: "KHAITE",
    name: "Olivia Medium Raffia Hobo Bag",
    type: "accessory",
    price: 146488.62,
    category: "vacation-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/p/KTAH-WY260_V2.jpg"
  },
  {
    id: 89,
    brand: "POSSE",
    name: "Bowie Dress",
    type: "dress",
    price: 43474.05,
    category: "vacation-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/p/PSSF-WD75_V3.jpg"
  },
  {
    id: 90,
    brand: "MIU MIU",
    name: "Ballerine Slingback Flat",
    type: "footwear",
    price: 121916.35,
    category: "vacation-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/p/MIUF-WZ268_V2.jpg"
  },
  {
    id: 91,
    brand: "ELIOU",
    name: "Elene Earrings",
    type: "accessory",
    price: 22682.11,
    category: "vacation-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/p/EIOF-WL128_V2.jpg"
  },
  {
    id: 92,
    brand: "BOTTEGA VENETA",
    name: "Dash Square Sunglasses",
    type: "accessory",
    price: 52452.38,
    category: "vacation-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/p/BOTT-WG106_V2.jpg"
  },
  {
    id: 93,
    brand: "TOTEME",
    name: "Belted Woven Leather Tote Bag",
    type: "accessory",
    price: 159719.88,
    category: "vacation-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/p/TOTF-WY58_V1.jpg"
  },
  {
    id: 94,
    brand: "SIMONMILLER",
    name: "Soleil Wedge Sandal",
    type: "footwear",
    price: 37330.97,
    category: "vacation-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/p/SIMF-WZ27_V2.jpg"
  },
  {
    id: 95,
    brand: "SIR.",
    name: "Danica Layered Top",
    type: "top",
    price: 36858.43,
    category: "vacation-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/p/SIF-WS64_V5.jpg"
  },
  {
    id: 96,
    brand: "AEXAE",
    name: "Linen Trouser",
    type: "bottom",
    price: 23627.20,
    category: "vacation-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/p/AEXR-WP2_V4.jpg"
  },
  {
    id: 97,
    brand: "STONE AND STRAND",
    name: "Gone Fishing Earrings",
    type: "accessory",
    price: 25517.38,
    category: "vacation-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/p/SRAF-WL119_V1.jpg"
  },
  {
    id: 98,
    brand: "OLIVER PEOPLES",
    name: "x Khaite 1985C Sunglasses",
    type: "accessory",
    price: 55665.68,
    category: "vacation-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/p/OPEO-WG121_V2.jpg"
  },
  {
    id: 99,
    brand: "CULT GAIA",
    name: "Maren Dress",
    type: "dress",
    price: 65967.14,
    category: "vacation-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/p/GAIA-WD372_V3.jpg"
  },
  {
    id: 100,
    brand: "SAINT LAURENT",
    name: "Mabrouka Slide",
    type: "footwear",
    price: 99234.24,
    category: "vacation-shop",
    image: "https://is4.fwrdassets.com/images/p/fw/p/SLAU-WZ1571_V2.jpg"
  },
  {
    id: 101,
    brand: "ALAÏA",
    name: "Cargo Wide Leg",
    type: "bottom",
    price: 217370.23,
    category: "rosies-picks",
    image: "https://is4.fwrdassets.com/images/p/fw/p/ALIA-WJ37_V1.jpg"
  },
  {
    id: 102,
    brand: "ALAÏA",
    name: "D'Orsay Pump",
    type: "footwear",
    price: 174841.27,
    category: "rosies-picks",
    image: "https://is4.fwrdassets.com/images/p/fw/p/ALIA-WZ274_V2.jpg"
  },
  {
    id: 103,
    brand: "MAGDA BUTRYM",
    name: "Belted Trench Jacket",
    type: "outerwear",
    price: 259899.19,
    category: "rosies-picks",
    image: "https://is4.fwrdassets.com/images/p/fw/p/MAGF-WO53_V5.jpg"
  },
  {
    id: 104,
    brand: "MUGLER",
    name: "Straight Leg Pant",
    type: "bottom",
    price: 116245.82,
    category: "rosies-picks",
    image: "https://is4.fwrdassets.com/images/p/fw/p/MUGL-WP85_V5.jpg"
  },
  {
    id: 105,
    brand: "BURBERRY",
    name: "Check Compact Umbrella",
    type: "accessory",
    price: 41111.33,
    category: "rosies-picks",
    image: "https://is4.fwrdassets.com/images/p/fw/45s/BURF-WA237_V2.jpg"
  },
  {
    id: 106,
    brand: "SAINT LAURENT",
    name: "Deroche Slingback Pump",
    type: "footwear",
    price: 118136.00,
    category: "rosies-picks",
    image: "https://is4.fwrdassets.com/images/p/fw/p/SLAU-WZ1532_V2.jpg"
  },
  {
    id: 107,
    brand: "SAINT LAURENT",
    name: "Chain Belt",
    type: "accessory",
    price: 141763.20,
    category: "rosies-picks",
    image: "https://is4.fwrdassets.com/images/p/fw/45s/SLAU-WA487_V2.jpg"
  },
  {
    id: 108,
    brand: "ALAÏA",
    name: "Asymmetric Dress",
    type: "dress",
    price: 311879.03,
    category: "rosies-picks",
    image: "https://is4.fwrdassets.com/images/p/fw/p/ALIA-WD259_V4.jpg"
  },
  {
    id: 109,
    brand: "SAINT LAURENT",
    name: "College Y Cap",
    type: "accessory",
    price: 51979.84,
    category: "rosies-picks",
    image: "https://is4.fwrdassets.com/images/p/fw/45s/SLAU-WA485_V2.jpg"
  },
  {
    id: 110,
    brand: "SAINT LAURENT",
    name: "Suede Bomber",
    type: "outerwear",
    price: 661561.56,
    category: "rosies-picks",
    image: "https://is4.fwrdassets.com/images/p/fw/p/SLAU-WO284_V5.jpg"
  },
  {
    id: 111,
    brand: "SAINT LAURENT",
    name: "Lace Tank Top",
    type: "top",
    price: 93563.71,
    category: "rosies-picks",
    image: "https://is4.fwrdassets.com/images/p/fw/p/SLAU-WS497_V4.jpg"
  },
  {
    id: 112,
    brand: "SAINT LAURENT",
    name: "Mon Cheri Chain Sandal",
    type: "footwear",
    price: 236271.98,
    category: "rosies-picks",
    image: "https://is4.fwrdassets.com/images/p/fw/p/SLAU-WZ1550_V2.jpg"
  },
  {
    id: 113,
    brand: "THE ROW",
    name: "Marlo 14 Bag",
    type: "accessory",
    price: 500896.62,
    category: "rosies-picks",
    image: "https://is4.fwrdassets.com/images/p/fw/45s/TERX-WY1001_V2.jpg"
  },
  {
    id: 114,
    brand: "ARMA",
    name: "Loua Smooth Leather Jacket",
    type: "outerwear",
    price: 114356.64,
    category: "rosies-picks",
    image: "https://is4.fwrdassets.com/images/p/fw/p/AMFF-WO8_V5.jpg"
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
    image: "https://is4.fwrdassets.com/images/p/fw/p/KTAH-WK202_V4.jpg"
  },
  {
    id: 117,
    brand: "KHAITE",
    name: "Sybil Skirt",
    type: "bottom",
    price: 187147.42,
    category: "rosies-picks",
    image: "https://is4.fwrdassets.com/images/p/fw/p/KTAH-WQ76_V5.jpg"
  },
  {
    id: 118,
    brand: "KHAITE",
    name: "Lori Baguette Bag",
    type: "accessory",
    price: 158774.78,
    category: "rosies-picks",
    image: "https://is4.fwrdassets.com/images/p/fw/p/KTAH-WY160_V2.jpg"
  },
  {
    id: 119,
    brand: "SAINT LAURENT",
    name: "Babylone Slingback Pump",
    type: "footwear",
    price: 118136.00,
    category: "rosies-picks",
    image: "https://is4.fwrdassets.com/images/p/fw/p/SLAU-WZ1551_V1.jpg"
  },
  {
    id: 120,
    brand: "ARMA",
    name: "Frederica Suede Bomber Jacket",
    type: "outerwear",
    price: 116718.36,
    category: "rosies-picks",
    image: "https://is4.fwrdassets.com/images/p/fw/p/AMFF-WO2_V5.jpg"
  },
  {
  id: 121,
  brand: "MAISON MARGIELA",
  name: "Western Boot",
  type: "footwear",
  price: 235326.91,
  category: "desert-bound",
  image: ""
},
{
  id: 122,
  brand: "FLEUR DU MAL",
  name: "Adeline Maxi Skirt",
  type: "bottom",
  price: 30998.89,
  category: "desert-bound",
  image: ""
},
{
  id: 123,
  brand: "ISABEL MARANT ETOILE",
  name: "Danienne Blouse",
  type: "top",
  price: 51507.29,
  category: "desert-bound",
  image: ""
},
{
  id: 124,
  brand: "JEAN PAUL GAULTIER",
  name: "Cut Out Wide Leg",
  type: "bottom",
  price: 90728.44,
  category: "desert-bound",
  image: ""
},
{
  id: 125,
  brand: "KHAITE",
  name: "Klee 35mm Belt",
  type: "accessory",
  price: 92618.62,
  category: "desert-bound",
  image: ""
},
{
  id: 126,
  brand: "AMINA MUADDI",
  name: "Jamie Crosta 25 Boot",
  type: "footwear",
  price: 133729.95,
  category: "desert-bound",
  image: ""
},
{
  id: 127,
  brand: "CHAN LUU",
  name: "Tie Top",
  type: "top",
  price: 27880.10,
  category: "desert-bound",
  image: ""
},
{
  id: 128,
  brand: "CASABLANCA",
  name: "Cotton Pocket Skirt",
  type: "bottom",
  price: 70409.05,
  category: "desert-bound",
  image: ""
},
{
  id: 129,
  brand: "ISABEL MARANT",
  name: "Maia Medium Shoulder Bag",
  type: "accessory",
  price: 140818.11,
  category: "desert-bound",
  image: ""
},
{
  id: 130,
  brand: "SAINT LAURENT",
  name: "Carree Passport Cassandra Belt",
  type: "accessory",
  price: 59540.54,
  category: "desert-bound",
  image: ""
},
{
  id: 131,
  brand: "ISABEL MARANT",
  name: "Miller Long Earrings",
  type: "accessory",
  price: 61430.72,
  category: "desert-bound",
  image: ""
},
{
  id: 132,
  brand: "NILI LOTAN",
  name: "Cecily Top",
  type: "top",
  price: 74661.95,
  category: "desert-bound",
  image: ""
},
{
  id: 133,
  brand: "KHAITE",
  name: "Danico Wide Leg",
  type: "bottom",
  price: 68046.33,
  category: "desert-bound",
  image: ""
},
{
  id: 134,
  brand: "SAINT LAURENT",
  name: "Oversize Ma Bracelet",
  type: "accessory",
  price: 121996.35,
  category: "desert-bound",
  image: ""
},
{
  id: 135,
  brand: "KHAITE",
  name: "Hamel Jacket",
  type: "outerwear",
  price: 699365.12,
  category: "desert-bound",
  image: ""
},
{
  id: 136,
  brand: "AYA MUSE",
  name: "Eteri Skirt",
  type: "bottom",
  price: 80332.48,
  category: "desert-bound",
  image: ""
},
{
  id: 137,
  brand: "SAINT LAURENT",
  name: "Rectangular Sunglasses",
  type: "accessory",
  price: 51798.84,
  category: "desert-bound",
  image: ""
},
{
  id: 138,
  brand: "ENZA COSTA",
  name: "Silk Rib U Neck Halter Fluid Maxi Dress",
  type: "dress",
  price: 27880.10,
  category: "desert-bound",
  image: ""
},
{
  id: 139,
  brand: "HELEN KAMINSKI",
  name: "Gwen Raffia Fedora Hat",
  type: "accessory",
  price: 30242.81,
  category: "desert-bound",
  image: ""
},
{
  id: 140,
  brand: "JENNIFER BEHR",
  name: "Cara Earrings",
  type: "accessory",
  price: 16822.57,
  category: "desert-bound",
  image: ""
},
{
  id: 141,
  brand: "LIE STUDIO",
  name: "The Diana Earrings",
  type: "accessory",
  price: 23627.20,
  category: "clean-lines",
  image: ""
},
{
  id: 142,
  brand: "BOTTEGA VENETA",
  name: "Rana Mule Sandal",
  type: "footwear",
  price: 207919.34,
  category: "clean-lines",
  image: ""
},
{
  id: 143,
  brand: "SAINT LAURENT",
  name: "Monogram Hinge XS Cat Eye Sunglasses",
  type: "accessory",
  price: 46781.85,
  category: "clean-lines",
  image: ""
},
{
  id: 144,
  brand: "WARDROBE.NYC",
  name: "Ribbed Tank Top",
  type: "top",
  price: 18901.76,
  category: "clean-lines",
  image: ""
},
{
  id: 145,
  brand: "SUSANNE KAUFMANN",
  name: "Lip Balm",
  type: "accessory",
  price: 2362.72,
  category: "clean-lines",
  image: ""
},
{
  id: 146,
  brand: "WARDROBE.NYC",
  name: "Fitted Long Sleeve Tee",
  type: "top",
  price: 23627.20,
  category: "clean-lines",
  image: ""
},
{
  id: 147,
  brand: "ENZA COSTA",
  name: "Twill Minimal Trouser",
  type: "bottom",
  price: 37330.97,
  category: "clean-lines",
  image: ""
},
{
  id: 148,
  brand: "SAINT LAURENT",
  name: "Babylone Slingback Pump",
  type: "footwear",
  price: 118136.00,
  category: "clean-lines",
  image: ""
},
{
  id: 149,
  brand: "KHAITE",
  name: "Joan Large Hobo Bag",
  type: "accessory",
  price: 376145.00,
  category: "clean-lines",
  image: ""
},
{
  id: 150,
  brand: "SAINT LAURENT",
  name: "SL 462 Sulpice Sunglasses",
  type: "accessory",
  price: 49144.57,
  category: "clean-lines",
  image: ""
},
{
  id: 151,
  brand: "JENNI KAYNE",
  name: "Cara Dress",
  type: "dress",
  price: 40166.24,
  category: "clean-lines",
  image: ""
},
{
  id: 152,
  brand: "KHAITE",
  name: "Archer Thong Sandal",
  type: "footwear",
  price: 73716.86,
  category: "clean-lines",
  image: ""
},
{
  id: 153,
  brand: "WARDROBE.NYC",
  name: "Classic T-Shirt",
  type: "top",
  price: 23627.20,
  category: "clean-lines",
  image: ""
},
{
  id: 154,
  brand: "ST. AGNI",
  name: "Relaxed Pleat Pant",
  type: "bottom",
  price: 39599.19,
  category: "clean-lines",
  image: ""
},
{
  id: 155,
  brand: "BOTTEGA VENETA",
  name: "Square Eyeglasses",
  type: "accessory",
  price: 46781.85,
  category: "clean-lines",
  image: ""
},
{
  id: 156,
  brand: "LIE STUDIO",
  name: "Victoria Ring",
  type: "accessory",
  price: 15593.95,
  category: "clean-lines",
  image: ""
},
{
  id: 157,
  brand: "TOM FORD",
  name: "Patent Leather Zipped Wristlet Pouch",
  type: "accessory",
  price: 65211.07,
  category: "clean-lines",
  image: ""
},
{
  id: 158,
  brand: "ACOLDE",
  name: "X Maria McManus A-Line Poplin Top",
  type: "top",
  price: 43285.03,
  category: "clean-lines",
  image: ""
},
{
  id: 159,
  brand: "MUGLER",
  name: "Mid Rise Wide Leg",
  type: "bottom",
  price: 71286.89,
  category: "clean-lines",
  image: ""
},
{
  id: 160,
  brand: "KHAITE",
  name: "Loop Kitten Heel 35 Sandal",
  type: "footwear",
  price: 84112.83,
  category: "clean-lines",
  image: ""
},
{
  id: 161,
  brand: "AQUAZZURA",
  name: "Bisous 85 Mule Sandal",
  type: "footwear",
  price: 89783.36,
  category: "new-arrivals",
  image: ""
},
{
  id: 162,
  brand: "AQUAZZURA",
  name: "Copacabana 130 Wedge Sandal",
  type: "footwear",
  price: 122861.44,
  category: "new-arrivals",
  image: ""
},
{
  id: 163,
  brand: "A.EMERY",
  name: "Jalen Sandal",
  type: "footwear",
  price: 23627.20,
  category: "new-arrivals",
  image: ""
},
{
  id: 164,
  brand: "A.EMERY",
  name: "Jalen Slim Sandal",
  type: "footwear",
  price: 23627.20,
  category: "new-arrivals",
  image: ""
},
{
  id: 165,
  brand: "A.EMERY",
  name: "Elmer Sandal",
  type: "footwear",
  price: 24572.29,
  category: "new-arrivals",
  image: ""
},
{
  id: 166,
  brand: "A.EMERY",
  name: "Viola Sandal",
  type: "footwear",
  price: 21737.02,
  category: "new-arrivals",
  image: ""
},
{
  id: 167,
  brand: "A.EMERY",
  name: "Kinto Sandal",
  type: "footwear",
  price: 18901.76,
  category: "new-arrivals",
  image: ""
},
{
  id: 168,
  brand: "A.EMERY",
  name: "Viola Sandal",
  type: "footwear",
  price: 21737.02,
  category: "new-arrivals",
  image: ""
},
{
  id: 169,
  brand: "A.EMERY",
  name: "Paton Sandal",
  type: "footwear",
  price: 19846.85,
  category: "new-arrivals",
  image: ""
},
{
  id: 170,
  brand: "A.EMERY",
  name: "Leon Sandal",
  type: "footwear",
  price: 26462.46,
  category: "new-arrivals",
  image: ""
},
{
  id: 171,
  brand: "A.EMERY",
  name: "Adams Low Sneaker",
  type: "footwear",
  price: 29297.73,
  category: "new-arrivals",
  image: ""
},
{
  id: 172,
  brand: "ACOLDE",
  name: "Barton Dress",
  type: "dress",
  price: 26273.45,
  category: "new-arrivals",
  image: ""
},
{
  id: 173,
  brand: "ACOLDE",
  name: "Nyle Relaxed Shorts",
  type: "bottom",
  price: 15877.48,
  category: "new-arrivals",
  image: ""
},
{
  id: 174,
  brand: "BOUCHER",
  name: "Slinkee Hoop Earrings",
  type: "accessory",
  price: 44791.69,
  category: "new-arrivals",
  image: ""
},
{
  id: 175,
  brand: "COMME SI",
  name: "Striped Tube Sock",
  type: "accessory",
  price: 2835.26,
  category: "new-arrivals",
  image: ""
},
{
  id: 176,
  brand: "SAINT LAURENT",
  name: "Taffeta Trench",
  type: "outerwear",
  price: 510347.50,
  category: "trending-color-pairings",
  image: ""
},
{
  id: 177,
  brand: "LOEWE",
  name: "Slim Sunglasses",
  type: "accessory",
  price: 34023.17,
  category: "trending-color-pairings",
  image: ""
},
{
  id: 178,
  brand: "SAINT LAURENT",
  name: "XXL Envelope Pouch",
  type: "accessory",
  price: 189017.59,
  category: "trending-color-pairings",
  image: ""
},
{
  id: 179,
  brand: "FWRD RENEW",
  name: "Hermes Togo Birkin 40 Handbag",
  type: "accessory",
  price: 1134105.50,
  category: "trending-color-pairings",
  image: ""
},
{
  id: 180,
  brand: "HELSA",
  name: "The Poet Blouse",
  type: "top",
  price: 25328.36,
  category: "trending-color-pairings",
  image: ""
},
{
  id: 181,
  brand: "HELSA",
  name: "Stripe Twill Blanket Skirt",
  type: "bottom",
  price: 40544.27,
  category: "trending-color-pairings",
  image: ""
},
{
  id: 182,
  brand: "BOTTEGA VENETA",
  name: "Leather Belt",
  type: "accessory",
  price: 94508.80,
  category: "trending-color-pairings",
  image: ""
},
{
  id: 183,
  brand: "JIMMY CHOO",
  name: "Elsy 90 Sandal",
  type: "footwear",
  price: 77969.76,
  category: "trending-color-pairings",
  image: ""
},
{
  id: 184,
  brand: "FLORE FLORE",
  name: "Dinah Tank Top",
  type: "top",
  price: 10395.97,
  category: "trending-color-pairings",
  image: ""
},
{
  id: 185,
  brand: "WARDROBE.NYC",
  name: "Sheer Tube Skirt",
  type: "bottom",
  price: 33078.08,
  category: "trending-color-pairings",
  image: ""
},
{
  id: 186,
  brand: "BOTTEGA VENETA",
  name: "Dustbag Note Chain Bag",
  type: "accessory",
  price: 302428.16,
  category: "trending-color-pairings",
  image: ""
},
{
  id: 187,
  brand: "SAINT LAURENT",
  name: "Guermantes Slingback Pump",
  type: "footwear",
  price: 127586.88,
  category: "trending-color-pairings",
  image: ""
},
{
  id: 188,
  brand: "DOLCE & GABBANA",
  name: "Slingback Pump",
  type: "footwear",
  price: 136565.20,
  category: "trending-color-pairings",
  image: ""
},
{
  id: 189,
  brand: "THE ATTICO",
  name: "Midi Lace Dress",
  type: "dress",
  price: 121916.35,
  category: "trending-color-pairings",
  image: ""
},
{
  id: 190,
  brand: "ANASTASIA BEVERLY HILLS",
  name: "Magic Touch Blush Trio",
  type: "accessory",
  price: 3591.33,
  category: "trending-color-pairings",
  image: ""
},
{
  id: 191,
  brand: "MONCLER",
  name: "Cloche Sunglasses",
  type: "accessory",
  price: 53019.43,
  category: "trending-color-pairings",
  image: ""
},
{
  id: 192,
  brand: "HELSA",
  name: "Suede Trench Coat",
  type: "outerwear",
  price: 160475.94,
  category: "trending-color-pairings",
  image: ""
},
{
  id: 193,
  brand: "DOLCE & GABBANA",
  name: "Sleeveless Top",
  type: "top",
  price: 193270.48,
  category: "trending-color-pairings",
  image: ""
},
{
  id: 194,
  brand: "THE ATTICO",
  name: "Low Rise Midi Skirt",
  type: "bottom",
  price: 89783.36,
  category: "trending-color-pairings",
  image: ""
},
{
  id: 195,
  brand: "ALAÏA",
  name: "Mule Sandal",
  type: "footwear",
  price: 203193.91,
  category: "trending-color-pairings",
  image: ""
},
{
    "id": 196,
    "brand": "MIU MIU",
    "name": "Cashmere F12 Vest",
    "type": "top",
    "price": 169170.75,
    "category": "miu-miu-style-essential",
    "image": ""
  },
  {
    "id": 197,
    "brand": "MIU MIU",
    "name": "Intreccio Metal Belt",
    "type": "accessory",
    "price": 96398.97,
    "category": "miu-miu-style-essential",
    "image": ""
  },
  {
    "id": 198,
    "brand": "MIU MIU",
    "name": "Straight Leg Trouser",
    "type": "bottom",
    "price": 178621.62,
    "category": "miu-miu-style-essential",
    "image": ""
  },
  {
    "id": 199,
    "brand": "MIU MIU",
    "name": "Check Mini Dress",
    "type": "dress",
    "price": 217370.23,
    "category": "miu-miu-style-essential",
    "image": ""
  },
  {
    "id": 200,
    "brand": "MIU MIU",
    "name": "Ballerine Slingback Flat",
    "type": "footwear",
    "price": 121916.35,
    "category": "miu-miu-style-essential",
    "image": ""
  },
  {
    "id": 201,
    "brand": "MIU MIU",
    "name": "Popeline Top",
    "type": "top",
    "price": 101124.41,
    "category": "miu-miu-style-essential",
    "image": ""
  },
  {
    "id": 202,
    "brand": "MIU MIU",
    "name": "Square Eyeglasses",
    "type": "accessory",
    "price": 43379.54,
    "category": "miu-miu-style-essential",
    "image": ""
  },
  {
    "id": 203,
    "brand": "MIU MIU",
    "name": "Short",
    "type": "bottom",
    "price": 137037.77,
    "category": "miu-miu-style-essential",
    "image": ""
  },
  {
    "id": 204,
    "brand": "MIU MIU",
    "name": "Modellere 55 Pump",
    "type": "footwear",
    "price": 153104.25,
    "category": "miu-miu-style-essential",
    "image": ""
  },
  {
    "id": 205,
    "brand": "MIU MIU",
    "name": "Gabardine Old Skirt",
    "type": "bottom",
    "price": 127586.88,
    "category": "miu-miu-style-essential",
    "image": ""
  },
  {
    "id": 206,
    "brand": "MIU MIU",
    "name": "Gabardine Old Dress",
    "type": "dress",
    "price": 283526.38,
    "category": "miu-miu-style-essential",
    "image": ""
  },
  {
    "id": 207,
    "brand": "MIU MIU",
    "name": "Agnello Scamosciato Cerato Jacket",
    "type": "outerwear",
    "price": 727717.75,
    "category": "miu-miu-style-essential",
    "image": ""
  },
  {
    "id": 208,
    "brand": "MIU MIU",
    "name": "Gabardine Old Pelle Jacket",
    "type": "outerwear",
    "price": 519798.38,
    "category": "miu-miu-style-essential",
    "image": ""
  },
  {
    "id": 209,
    "brand": "MIU MIU",
    "name": "Scamosciato Jacket",
    "type": "outerwear",
    "price": 850579.19,
    "category": "miu-miu-style-essential",
    "image": ""
  },
  {
    "id": 210,
    "brand": "MIU MIU",
    "name": "Macrame Anemone Skirt",
    "type": "bottom",
    "price": 463093.09,
    "category": "miu-miu-style-essential",
    "image": ""
  },
  {
    "id": 211,
    "brand": "KHAITE",
    "name": "Dolos Jacket",
    "type": "outerwear",
    "price": 642669.81,
    "category": "future-heirlooms",
    "image": ""
  },
  {
    "id": 212,
    "brand": "ALAÏA",
    "name": "Round Leg Pant",
    "type": "bottom",
    "price": 141763.20,
    "category": "future-heirlooms",
    "image": ""
  },
  {
    "id": 213,
    "brand": "MONCLER",
    "name": "Sunset Aviator Sunglasses",
    "type": "accessory",
    "price": 38276.06,
    "category": "future-heirlooms",
    "image": ""
  },
  {
    "id": 214,
    "brand": "VALENTINO GARAVANI",
    "name": "Viva Superstar Animalier Small Tote Bag",
    "type": "accessory",
    "price": 302428.16,
    "category": "future-heirlooms",
    "image": ""
  },
  {
    "id": 215,
    "brand": "AMINA MUADDI",
    "name": "Anok 105 Patent Pump",
    "type": "footwear",
    "price": 97816.60,
    "category": "future-heirlooms",
    "image": ""
  },
  {
    "id": 216,
    "brand": "ROWEN ROSE",
    "name": "Long Coat",
    "type": "outerwear",
    "price": 221056.08,
    "category": "future-heirlooms",
    "image": ""
  },
  {
    "id": 217,
    "brand": "DEMARSON",
    "name": "Ivy Tennis Bracelet Set Of 2",
    "type": "accessory",
    "price": 42528.96,
    "category": "future-heirlooms",
    "image": ""
  },
  {
    "id": 218,
    "brand": "THE ROW",
    "name": "Janne Suede Jacket",
    "type": "outerwear",
    "price": 557601.88,
    "category": "future-heirlooms",
    "image": ""
  },
  {
    "id": 219,
    "brand": "THE ROW",
    "name": "Kieran Suede Pant",
    "type": "bottom",
    "price": 519798.38,
    "category": "future-heirlooms",
    "image": ""
  },
  {
    "id": 220,
    "brand": "THE ROW",
    "name": "Marlo 12 Bag",
    "type": "accessory",
    "price": 463093.09,
    "category": "future-heirlooms",
    "image": ""
  },
  {
    "id": 221,
    "brand": "THE ROW",
    "name": "Mens Loafer",
    "type": "footwear",
    "price": 103014.59,
    "category": "future-heirlooms",
    "image": ""
  },
  {
    "id": 222,
    "brand": "SAINT LAURENT",
    "name": "SL 596 Dune Optical Eyeglasses",
    "type": "accessory",
    "price": 49144.57,
    "category": "future-heirlooms",
    "image": ""
  },
  {
    "id": 223,
    "brand": "FWRD RENEW",
    "name": "Chanel Caviar Wallet On Chain",
    "type": "accessory",
    "price": 311879.03,
    "category": "future-heirlooms",
    "image": ""
  },
  {
    "id": 224,
    "brand": "MUGLER",
    "name": "Long Sleeve Mini Dress",
    "type": "dress",
    "price": 141763.20,
    "category": "future-heirlooms",
    "image": ""
  },
  {
    "id": 225,
    "brand": "VALENTINO GARAVANI",
    "name": "Porteque Des Gouttes Earrings",
    "type": "accessory",
    "price": 160664.95,
    "category": "future-heirlooms",
    "image": ""
  },
  {
    "id": 226,
    "brand": "FWRD RENEW",
    "name": "Fendi X Sarah Coleman FF Fish Eye Embroidered Bag",
    "type": "accessory",
    "price": 207919.34,
    "category": "future-heirlooms",
    "image": ""
  },
  {
    "id": 227,
    "brand": "ALAÏA",
    "name": "Cinch Bomber",
    "type": "outerwear",
    "price": 686287.00,
    "category": "future-heirlooms",
    "image": ""
  },
  {
    "id": 228,
    "brand": "HELSA",
    "name": "Devora Polo Bodysuit",
    "type": "top",
    "price": 22493.09,
    "category": "future-heirlooms",
    "image": ""
  },
  {
    "id": 229,
    "brand": "EB DENIM",
    "name": "Aida Loose Bowed Jean",
    "type": "bottom",
    "price": 26935.01,
    "category": "future-heirlooms",
    "image": ""
  },
  {
    "id": 230,
    "brand": "BALENCIAGA",
    "name": "Bathrobe Coat",
    "type": "outerwear",
    "price": 467815.53,
    "category": "future-heirlooms",
    "image": ""
  },
  {
    "id": 231,
    "brand": "ACOLDE",
    "name": "Barton Dress",
    "type": "dress",
    "price": 26273.45,
    "category": "clothing",
    "image": ""
  },
  {
    "id": 232,
    "brand": "ACOLDE",
    "name": "Nye Relaxed Shorts",
    "type": "bottom",
    "price": 15877.48,
    "category": "clothing",
    "image": ""
  },
  {
    "id": 233,
    "brand": "CITIZENS OF HUMANITY",
    "name": "Charissa Shrunken Jacket",
    "type": "jacket",
    "price": 28163.62,
    "category": "clothing",
    "image": ""
  },
  {
    "id": 234,
    "brand": "CITIZENS OF HUMANITY",
    "name": "Flight Pant",
    "type": "bottom",
    "price": 33834.15,
    "category": "clothing",
    "image": ""
  },
  {
    "id": 235,
    "brand": "CITIZENS OF HUMANITY",
    "name": "Esme Cargo Trouser",
    "type": "bottom",
    "price": 24383.27,
    "category": "clothing",
    "image": ""
  },
  {
    "id": 236,
    "brand": "CITIZENS OF HUMANITY",
    "name": "Inex Waffle Tank",
    "type": "top",
    "price": 9261.86,
    "category": "clothing",
    "image": ""
  },
  {
    "id": 237,
    "brand": "CITIZENS OF HUMANITY",
    "name": "Gia Bubble Tee",
    "type": "top",
    "price": 15877.48,
    "category": "clothing",
    "image": ""
  },
  {
    "id": 238,
    "brand": "CITIZENS OF HUMANITY",
    "name": "Fabien Tee",
    "type": "top",
    "price": 13987.30,
    "category": "clothing",
    "image": ""
  },
  {
    "id": 239,
    "brand": "CITIZENS OF HUMANITY",
    "name": "Humanity Baby Waffle Tee",
    "type": "top",
    "price": 13987.30,
    "category": "clothing",
    "image": ""
  },
  {
    "id": 240,
    "brand": "CITIZENS OF HUMANITY",
    "name": "Baby Waffle Tee",
    "type": "top",
    "price": 13987.30,
    "category": "clothing",
    "image": ""
  },
  {
    "id": 241,
    "brand": "HELSA",
    "name": "Fairweather Midi Dress in Stretch Cotton Sateen",
    "type": "dress",
    "price": 32983.57,
    "category": "clothing",
    "image": ""
  },
  {
    "id": 242,
    "brand": "HELSA",
    "name": "Fairweather Midi Dress in Stretch Cotton Sateen",
    "type": "dress",
    "price": 32983.57,
    "category": "clothing",
    "image": ""
  },
  {
    "id": 243,
    "brand": "HELSA",
    "name": "Fairweather Midi Dress in Stretch Cotton Sateen",
    "type": "dress",
    "price": 32983.57,
    "category": "clothing",
    "image": ""
  },
  {
    "id": 244,
    "brand": "HELSA",
    "name": "Emmalyn Cowl Gown",
    "type": "dress",
    "price": 31093.39,
    "category": "clothing",
    "image": ""
  },
  {
    "id": 245,
    "brand": "HELSA",
    "name": "Mayumi Open Side Dress",
    "type": "dress",
    "price": 28352.64,
    "category": "clothing",
    "image": ""
  },
  {
    "id": 246,
    "brand": "HELSA",
    "name": "Freya Knit Mini Dress",
    "type": "dress",
    "price": 25422.87,
    "category": "clothing",
    "image": ""
  },
  {
    "id": 247,
    "brand": "HELSA",
    "name": "Tesca Knit Dress",
    "type": "dress",
    "price": 37614.50,
    "category": "clothing",
    "image": ""
  },
  {
    "id": 248,
    "brand": "HELSA",
    "name": "Lettie Knit Blazer Dress",
    "type": "dress",
    "price": 31093.39,
    "category": "clothing",
    "image": ""
  },
  {
    "id": 249,
    "brand": "HELSA",
    "name": "Charitra Open Back Dress",
    "type": "dress",
    "price": 32208.00,
    "category": "clothing",
    "image": ""
  },
  {
    "id": 250,
    "brand": "HELSA",
    "name": "Svetlana Jersey Gown",
    "type": "dress",
    "price": 31093.39,
    "category": "clothing",
    "image": ""
  },
  {
    "id": 251,
    "brand": "FWRD RENEW",
    "name": "Gucci Pochette Shoulder Bag",
    "type": "bag",
    "price": 42528.96,
    "category": "bags",
    "image": ""
  },
  {
    "id": 252,
    "brand": "FWRD RENEW",
    "name": "Fendi Zucca Baguette Shoulder Bag",
    "type": "bag",
    "price": 160192.41,
    "category": "bags",
    "image": ""
  },
  {
    "id": 253,
    "brand": "FWRD RENEW",
    "name": "Fendi Zucca Baguette Shoulder Bag",
    "type": "bag",
    "price": 160192.41,
    "category": "bags",
    "image": ""
  },
  {
    "id": 254,
    "brand": "FWRD RENEW",
    "name": "Fendi Zucca Mama Forever Baguette Shoulder Bag",
    "type": "bag",
    "price": 118136.00,
    "category": "bags",
    "image": ""
  },
  {
    "id": 255,
    "brand": "FWRD RENEW",
    "name": "Fendi Mini Chef Shoulder Bag",
    "type": "bag",
    "price": 36683.61,
    "category": "bags",
    "image": ""
  },
  {
    "id": 256,
    "brand": "FWRD RENEW",
    "name": "Fendi Mama Baguette Shoulder Bag",
    "type": "bag",
    "price": 103959.68,
    "category": "bags",
    "image": ""
  },
  {
    "id": 257,
    "brand": "FWRD RENEW",
    "name": "Gucci Nailhead Pochette Shoulder Bag",
    "type": "bag",
    "price": 84585.37,
    "category": "bags",
    "image": ""
  },
  {
    "id": 258,
    "brand": "FWRD RENEW",
    "name": "Louis Vuitton Monogram Match Speedy Bandouliere 25",
    "type": "bag",
    "price": 198468.47,
    "category": "bags",
    "image": ""
  },
  {
    "id": 259,
    "brand": "FWRD RENEW",
    "name": "Prada Saffiano Handbag",
    "type": "bag",
    "price": 236271.98,
    "category": "bags",
    "image": ""
  },
  {
    "id": 260,
    "brand": "FWRD RENEW",
    "name": "Gucci GG Marmont Shoulder Bag",
    "type": "bag",
    "price": 80332.48,
    "category": "bags",
    "image": ""
  },
  {
    "id": 261,
    "brand": "FWRD RENEW",
    "name": "Chanel Nylon Laptop Case",
    "type": "bag",
    "price": 94036.25,
    "category": "bags",
    "image": ""
  },
  {
    "id": 262,
    "brand": "FWRD RENEW",
    "name": "Gucci Mini GG Marmont Shoulder Bag",
    "type": "bag",
    "price": 112938.01,
    "category": "bags",
    "image": ""
  },
  {
    "id": 263,
    "brand": "FWRD RENEW",
    "name": "Chanel Lambskin Classic Double Flap Bag",
    "type": "bag",
    "price": 652110.69,
    "category": "bags",
    "image": ""
  },
  {
    "id": 264,
    "brand": "FWRD RENEW",
    "name": "Chanel Deauville MM Tote Bag",
    "type": "bag",
    "price": 302428.16,
    "category": "bags",
    "image": ""
  },
  {
    "id": 265,
    "brand": "FWRD RENEW",
    "name": "Fendi FF 1974 Mini Baguette Shoulder Bag",
    "type": "bag",
    "price": 165390.39,
    "category": "bags",
    "image": ""
  },
  {
    "id": 266,
    "brand": "FWRD RENEW",
    "name": "Gucci GG Marmont Shoulder Bag",
    "type": "bag",
    "price": 94036.25,
    "category": "bags",
    "image": ""
  },
  {
    "id": 267,
    "brand": "FWRD RENEW",
    "name": "Gucci Neo Vintage Belt Bag",
    "type": "bag",
    "price": 75607.04,
    "category": "bags",
    "image": ""
  },
  {
    "id": 268,
    "brand": "FWRD RENEW",
    "name": "Fendi Corduroy Baguette Shoulder Bag",
    "type": "bag",
    "price": 103959.68,
    "category": "bags",
    "image": ""
  },
  {
    "id": 269,
    "brand": "FWRD RENEW",
    "name": "Chanel Lambskin Wallet On Chain",
    "type": "bag",
    "price": 396936.94,
    "category": "bags",
    "image": ""
  },
  {
    "id": 270,
    "brand": "FWRD RENEW",
    "name": "Gucci Hobo Bag",
    "type": "bag",
    "price": 51979.84,
    "category": "bags",
    "image": ""
  },
  {
    "id": 271,
    "brand": "COMME SI",
    "name": "Striped Tube Sock",
    "type": "accessory",
    "price": 2835.26,
    "category": "accessories",
    "image": ""
  },
  {
    "id": 272,
    "brand": "GIVENCHY",
    "name": "Double Buckle Belt",
    "type": "accessory",
    "price": 45364.22,
    "category": "accessories",
    "image": ""
  },
  {
    "id": 273,
    "brand": "OLIVER PEOPLES",
    "name": "Edition 5 Irregular Sunglasses",
    "type": "accessory",
    "price": 75134.49,
    "category": "accessories",
    "image": ""
  },
  {
    "id": 274,
    "brand": "OLIVER PEOPLES",
    "name": "Leroux Oval Sunglasses",
    "type": "accessory",
    "price": 54268.08,
    "category": "accessories",
    "image": ""
  },
  {
    "id": 275,
    "brand": "OLIVER PEOPLES",
    "name": "Remmet Irregular Sunglasses",
    "type": "accessory",
    "price": 46592.84,
    "category": "accessories",
    "image": ""
  },
  {
    "id": 276,
    "brand": "OLIVER PEOPLES",
    "name": "R-18 Pillow Sunglasses",
    "type": "accessory",
    "price": 45269.71,
    "category": "accessories",
    "image": ""
  },
  {
    "id": 277,
    "brand": "OLIVER PEOPLES",
    "name": "X Jai Sander Cat Eye Sunglasses",
    "type": "accessory",
    "price": 69936.51,
    "category": "accessories",
    "image": ""
  },
  {
    "id": 278,
    "brand": "OLIVER PEOPLES",
    "name": "X Jai Sander Edition 2 Irregular Sunglasses",
    "type": "accessory",
    "price": 75134.49,
    "category": "accessories",
    "image": ""
  },
  {
    "id": 279,
    "brand": "OLIVER PEOPLES",
    "name": "X Khaite Oval Sunglasses",
    "type": "accessory",
    "price": 55665.68,
    "category": "accessories",
    "image": ""
  },
  {
    "id": 280,
    "brand": "OLIVER PEOPLES",
    "name": "X Khaite Wraparound Sunglasses",
    "type": "accessory",
    "price": 55665.68,
    "category": "accessories",
    "image": ""
  },
  {
    "id": 281,
    "brand": "OLIVER PEOPLES",
    "name": "X Khaite Cat Eye Sunglasses",
    "type": "accessory",
    "price": 55665.68,
    "category": "accessories",
    "image": ""
  },
  {
    "id": 282,
    "brand": "PRADA",
    "name": "Oval Sunglasses",
    "type": "accessory",
    "price": 49522.61,
    "category": "accessories",
    "image": ""
  },
  {
    "id": 283,
    "brand": "TOM FORD",
    "name": "Pilot Sunglasses",
    "type": "accessory",
    "price": 56322.73,
    "category": "accessories",
    "image": ""
  },
  {
    "id": 284,
    "brand": "TOM FORD",
    "name": "Abbey Sunglasses",
    "type": "accessory",
    "price": 56705.28,
    "category": "accessories",
    "image": ""
  },
  {
    "id": 285,
    "brand": "FWRD RENEW",
    "name": "Chanel Nylon Laptop Case",
    "type": "accessory",
    "price": 94036.25,
    "category": "accessories",
    "image": ""
  },
  {
    "id": 286,
    "brand": "SAINT LAURENT",
    "name": "Leopard Stole Scarf",
    "type": "accessory",
    "price": 73716.86,
    "category": "accessories",
    "image": ""
  },
  {
    "id": 287,
    "brand": "ALAÏA",
    "name": "Animalier Sunglasses",
    "type": "accessory",
    "price": 43870.01,
    "category": "accessories",
    "image": ""
  },
  {
    "id": 288,
    "brand": "ALAÏA",
    "name": "Animalier Pilot Sunglasses",
    "type": "accessory",
    "price": 61903.26,
    "category": "accessories",
    "image": ""
  },
  {
    "id": 289,
    "brand": "ALAÏA",
    "name": "Animalier Pilot Sunglasses",
    "type": "accessory",
    "price": 61903.26,
    "category": "accessories",
    "image": ""
  },
  {
    "id": 290,
    "brand": "AQUAZZURA",
    "name": "Bloss 85 Mule Sandal",
    "type": "shoes",
    "price": 89783.36,
    "category": "shoes",
    "image": ""
  },
  {
    "id": 291,
    "brand": "AQUAZZURA",
    "name": "Copacabana 130 Wedge Sandal",
    "type": "shoes",
    "price": 122861.44,
    "category": "shoes",
    "image": ""
  },
  {
    "id": 292,
    "brand": "A.EMERY",
    "name": "Jalen Sandal",
    "type": "shoes",
    "price": 23627.20,
    "category": "shoes",
    "image": ""
  },
  {
    "id": 293,
    "brand": "A.EMERY",
    "name": "Jalen Slim Sandal",
    "type": "shoes",
    "price": 23627.20,
    "category": "shoes",
    "image": ""
  },
  {
    "id": 294,
    "brand": "A.EMERY",
    "name": "Elmer Sandal",
    "type": "shoes",
    "price": 24572.29,
    "category": "shoes",
    "image": ""
  },
  {
    "id": 295,
    "brand": "A.EMERY",
    "name": "Viola Sandal",
    "type": "shoes",
    "price": 21737.02,
    "category": "shoes",
    "image": ""
  },
  {
    "id": 296,
    "brand": "A.EMERY",
    "name": "Kinto Sandal",
    "type": "shoes",
    "price": 18901.76,
    "category": "shoes",
    "image": ""
  },
  {
    "id": 297,
    "brand": "A.EMERY",
    "name": "Viola Sandal",
    "type": "shoes",
    "price": 21737.02,
    "category": "shoes",
    "image": ""
  },
  {
    "id": 298,
    "brand": "A.EMERY",
    "name": "Paton Sandal",
    "type": "shoes",
    "price": 19846.85,
    "category": "shoes",
    "image": ""
  },
  {
    "id": 299,
    "brand": "A.EMERY",
    "name": "Leon Sandal",
    "type": "shoes",
    "price": 26462.46,
    "category": "shoes",
    "image": ""
  },
  {
    "id": 300,
    "brand": "A.EMERY",
    "name": "Adams Low Sneaker",
    "type": "shoes",
    "price": 22997.73,
    "category": "shoes",
    "image": ""
  },
  {
    "id": 301,
    "brand": "JENNI KAYNE",
    "name": "Lyle Slide",
    "type": "shoes",
    "price": 34495.71,
    "category": "shoes",
    "image": ""
  },
  {
    "id": 302,
    "brand": "JENNI KAYNE",
    "name": "Lyle Slide",
    "type": "shoes",
    "price": 34495.71,
    "category": "shoes",
    "image": ""
  },
  {
    "id": 303,
    "brand": "KHAITE",
    "name": "Marfa 55 Mule",
    "type": "shoes",
    "price": 111520.38,
    "category": "shoes",
    "image": ""
  },
  {
    "id": 304,
    "brand": "ON",
    "name": "Cloudnova Moon Sneaker",
    "type": "shoes",
    "price": 18901.76,
    "category": "shoes",
    "image": ""
  },
  {
    "id": 305,
    "brand": "ON",
    "name": "Cloudtilt Sneaker",
    "type": "shoes",
    "price": 16066.50,
    "category": "shoes",
    "image": ""
  },
  {
    "id": 306,
    "brand": "ON",
    "name": "Cloudtilt Sneaker",
    "type": "shoes",
    "price": 16066.50,
    "category": "shoes",
    "image": ""
  },
  {
    "id": 307,
    "brand": "ON",
    "name": "Cloudrunner 3 Sneaker",
    "type": "shoes",
    "price": 15121.41,
    "category": "shoes",
    "image": ""
  },
  {
    "id": 308,
    "brand": "SAINT LAURENT",
    "name": "Rika Mule Sandal",
    "type": "shoes",
    "price": 108685.12,
    "category": "shoes",
    "image": ""
  },
  {
    "id": 309,
    "brand": "ADIDAS ORIGINALS",
    "name": "Samba OG Sneaker",
    "type": "shoes",
    "price": 12286.14,
    "category": "shoes",
    "image": ""
  },
  {
    "id": 310,
    "brand": "AMOUAGE",
    "name": "Guidance Eau De Parfum",
    "type": "beauty",
    "price": 37330.97,
    "category": "beauty",
    "image": ""
  },
  {
    "id": 311,
    "brand": "VICTORIA BECKHAM BEAUTY",
    "name": "Colour Wash Bronzer Water Tints",
    "type": "beauty",
    "price": 4347.40,
    "category": "beauty",
    "image": ""
  },
  {
    "id": 312,
    "brand": "NATURA BISSE",
    "name": "Diamond Cocoon Sheer Cream",
    "type": "beauty",
    "price": 25328.36,
    "category": "beauty",
    "image": ""
  },
  {
    "id": 313,
    "brand": "SALTYFACE",
    "name": "Tanning Water",
    "type": "beauty",
    "price": 3989.37,
    "category": "beauty",
    "image": ""
  },
  {
    "id": 314,
    "brand": "SALTYFACE",
    "name": "Brush No. 1",
    "type": "beauty",
    "price": 1964.68,
    "category": "beauty",
    "image": ""
  },
  {
    "id": 315,
    "brand": "ELLIOT COLE",
    "name": "Phases Eau De Parfum",
    "type": "beauty",
    "price": 14648.86,
    "category": "beauty",
    "image": ""
  },
  {
    "id": 316,
    "brand": "MUTHA",
    "name": "Eye Maintenance 6-Peptide Eye Mask",
    "type": "beauty",
    "price": 3591.33,
    "category": "beauty",
    "image": ""
  },
  {
    "id": 317,
    "brand": "BYREDO",
    "name": "Gypsy Water Body Oil",
    "type": "beauty",
    "price": 10395.97,
    "category": "beauty",
    "image": ""
  },
  {
    "id": 318,
    "brand": "111SKIN",
    "name": "Cryo Globes Facial Massage Tool",
    "type": "beauty",
    "price": 10868.51,
    "category": "beauty",
    "image": ""
  },
  {
    "id": 319,
    "brand": "ORIBE",
    "name": "Supershine Smoothing Wax Stick",
    "type": "beauty",
    "price": 4347.40,
    "category": "beauty",
    "image": ""
  },
  {
    "id": 320,
    "brand": "TRONQUE",
    "name": "Firming Butter",
    "type": "beauty",
    "price": 12286.14,
    "category": "beauty",
    "image": ""
  },
  {
    "id": 321,
    "brand": "HERETIC PARFUM",
    "name": "Midnight Toker Body Wash",
    "type": "beauty",
    "price": 3213.30,
    "category": "beauty",
    "image": ""
  },
  {
    "id": 322,
    "brand": "DR. DIAMOND'S METACINE",
    "name": "Instafacial Collection Set",
    "type": "beauty",
    "price": 63793.44,
    "category": "beauty",
    "image": ""
  },
  {
    "id": 323,
    "brand": "PAR OLIVE",
    "name": "Advanced Skin Multivitamin",
    "type": "beauty",
    "price": 7088.16,
    "category": "beauty",
    "image": ""
  },
  {
    "id": 324,
    "brand": "HIGHERDOSE",
    "name": "Full Body Red Light Mat",
    "type": "beauty",
    "price": 113316.05,
    "category": "beauty",
    "image": ""
  },
  {
    "id": 325,
    "brand": "VICTORIA BECKHAM BEAUTY",
    "name": "Posh Lip",
    "type": "beauty",
    "price": 3685.84,
    "category": "beauty",
    "image": ""
  },
  {
    "id": 326,
    "brand": "ALTESSE STUDIO",
    "name": "Beaute Classic Repair & Shine Brush",
    "type": "beauty",
    "price": 30242.81,
    "category": "beauty",
    "image": ""
  },
  {
    "id": 327,
    "brand": "PHILIP B",
    "name": "Detangling Toning Mist With Velvet Oud",
    "type": "beauty",
    "price": 4725.44,
    "category": "beauty",
    "image": ""
  },
  {
    "id": 328,
    "brand": "MELYON",
    "name": "Le Miel Bar Soap",
    "type": "beauty",
    "price": 2646.25,
    "category": "beauty",
    "image": ""
  },
  {
    "id": 329,
    "brand": "CROWN ALCHEMIST",
    "name": "Resurfacing Targeted Body Lotion",
    "type": "beauty",
    "price": 4725.44,
    "category": "beauty",
    "image": ""
  }
];
export default products;