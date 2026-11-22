// VANTA product catalogue — imagery is served locally from /public/images.

const imageAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

export const products = [
  {
    "id": "v-001",
    "slug": "dark-blue-bootcut-jeans-01",
    "name": "شلوار بوت‌کات دارک بلو",
    "englishName": "ATLAS DARK BOOTCUT",
    "category": "pants",
    "categoryLabel": "شلوارها",
    "price": 2890000,
    "colors": [
      {
        "name": "آبی تیره",
        "hex": "#263b53"
      }
    ],
    "sizes": [
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "description": "بوت‌کات کلاسیک با فاق متعادل و شکست تمیز روی کفش.",
    "fabric": "Denim",
    "fit": "آزاد و راحت",
    "stock": 5,
    "isNew": true,
    "isBest": true,
    "images": [
      imageAsset("/images/dark-blue-bootcut-jeans-01.jpg")
    ]
  },
  {
    "id": "v-002",
    "slug": "medium-wash-bootcut-jeans-01",
    "name": "شلوار بوت‌کات مدیوم واش",
    "englishName": "ARCHIVE BOOTCUT",
    "category": "pants",
    "categoryLabel": "شلوارها",
    "price": 2790000,
    "colors": [
      {
        "name": "آبی میانه",
        "hex": "#718398"
      }
    ],
    "sizes": [
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "description": "جین با شست‌وشوی میانه و فرم بوت‌کات متعادل.",
    "fabric": "Denim",
    "fit": "آزاد و راحت",
    "stock": 6,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/medium-wash-bootcut-jeans-01.jpg")
    ]
  },
  {
    "id": "v-003",
    "slug": "navy-pinstripe-button-down-shirt-01",
    "name": "پیراهن پین‌استرایپ سرمه‌ای",
    "englishName": "NAVY PINSTRIPE",
    "category": "essentials",
    "categoryLabel": "اسنشیال",
    "price": 2190000,
    "colors": [
      {
        "name": "سرمه‌ای راه‌راه",
        "hex": "#26364d"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "پیراهن دکمه‌دار با خطوط باریک و فرم مرتب.",
    "fabric": "Cotton poplin",
    "fit": "استاندارد",
    "stock": 7,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/navy-pinstripe-button-down-shirt-01.jpg")
    ]
  },
  {
    "id": "v-004",
    "slug": "black-leather-bomber-jacket-01",
    "name": "بامبر چرم مشکی",
    "englishName": "LEATHER BOMBER",
    "category": "outerwear",
    "categoryLabel": "کت و ژاکت",
    "price": 6290000,
    "colors": [
      {
        "name": "مشکی",
        "hex": "#222222"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "بامبر چرمی با یقه کلاسیک و حجم متعادل.",
    "fabric": "Leather",
    "fit": "آزاد و راحت",
    "stock": 8,
    "isNew": true,
    "isBest": false,
    "images": [
      imageAsset("/images/black-leather-bomber-jacket-01.jpg")
    ]
  },
  {
    "id": "v-005",
    "slug": "black-leather-jacket-01",
    "name": "کت چرم مشکی",
    "englishName": "BLACK LEATHER",
    "category": "outerwear",
    "categoryLabel": "کت و ژاکت",
    "price": 5990000,
    "colors": [
      {
        "name": "مشکی",
        "hex": "#242424"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "کت چرمی مشکی با ساختار تمیز و استایل ماندگار.",
    "fabric": "Leather",
    "fit": "آزاد و راحت",
    "stock": 9,
    "isNew": false,
    "isBest": true,
    "images": [
      imageAsset("/images/black-leather-jacket-01.jpg")
    ]
  },
  {
    "id": "v-006",
    "slug": "black-leather-zip-jacket-02",
    "name": "کت زیپ‌دار چرم",
    "englishName": "ZIP LEATHER JACKET",
    "category": "outerwear",
    "categoryLabel": "کت و ژاکت",
    "price": 6190000,
    "colors": [
      {
        "name": "مشکی",
        "hex": "#252525"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "کت چرمی زیپ‌دار با خطوط مینیمال و فرم معاصر.",
    "fabric": "Leather",
    "fit": "آزاد و راحت",
    "stock": 10,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/black-leather-zip-jacket-02.jpg")
    ]
  },
  {
    "id": "v-007",
    "slug": "brown-leather-zip-jacket-01",
    "name": "کت چرم قهوه‌ای",
    "englishName": "BROWN LEATHER",
    "category": "outerwear",
    "categoryLabel": "کت و ژاکت",
    "price": 6390000,
    "colors": [
      {
        "name": "قهوه‌ای",
        "hex": "#75543f"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "چرم قهوه‌ای با حس وینتیج و برش کلاسیک.",
    "fabric": "Leather",
    "fit": "آزاد و راحت",
    "stock": 11,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/brown-leather-zip-jacket-01.jpg")
    ]
  },
  {
    "id": "v-008",
    "slug": "burgundy-brown-leather-jacket-01",
    "name": "کت چرم بورگاندی",
    "englishName": "BURGUNDY LEATHER",
    "category": "outerwear",
    "categoryLabel": "کت و ژاکت",
    "price": 6490000,
    "colors": [
      {
        "name": "بورگاندی",
        "hex": "#673d3c"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "رنگ بورگاندی-قهوه‌ای با بافت چرمی شاخص.",
    "fabric": "Leather",
    "fit": "آزاد و راحت",
    "stock": 12,
    "isNew": true,
    "isBest": false,
    "images": [
      imageAsset("/images/burgundy-brown-leather-jacket-01.jpg")
    ]
  },
  {
    "id": "v-009",
    "slug": "dark-brown-leather-toggle-jacket-01",
    "name": "کت چرمی دکمه‌چفتی قهوه‌ای",
    "englishName": "TOGGLE LEATHER",
    "category": "outerwear",
    "categoryLabel": "کت و ژاکت",
    "price": 6590000,
    "colors": [
      {
        "name": "قهوه‌ای تیره",
        "hex": "#4b382d"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "جزئیات چفتی و رنگ عمیق برای یک لایه شاخص.",
    "fabric": "Leather",
    "fit": "آزاد و راحت",
    "stock": 13,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/dark-brown-leather-toggle-jacket-01.jpg")
    ]
  },
  {
    "id": "v-010",
    "slug": "dark-brown-suede-toggle-jacket-01",
    "name": "کت جیر قهوه‌ای",
    "englishName": "SUEDE TOGGLE",
    "category": "outerwear",
    "categoryLabel": "کت و ژاکت",
    "price": 6790000,
    "colors": [
      {
        "name": "قهوه‌ای جیر",
        "hex": "#66513f"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "جیر قهوه‌ای با بافت مات و جزئیات چفتی.",
    "fabric": "Suede leather",
    "fit": "آزاد و راحت",
    "stock": 14,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/dark-brown-suede-toggle-jacket-01.jpg")
    ]
  },
  {
    "id": "v-011",
    "slug": "black-long-sleeve-henley-01",
    "name": "هنلی مشکی",
    "englishName": "CORE HENLEY",
    "category": "henley",
    "categoryLabel": "هنلی",
    "price": 1590000,
    "colors": [
      {
        "name": "مشکی",
        "hex": "#242424"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "هنلی کلاسیک با یقه دکمه‌دار و فیت نزدیک به بدن.",
    "fabric": "Cotton jersey",
    "fit": "استاندارد",
    "stock": 15,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/black-long-sleeve-henley-01.jpg")
    ]
  },
  {
    "id": "v-012",
    "slug": "black-long-sleeve-henley-03",
    "name": "هنلی مشکی اسلیم",
    "englishName": "SLIM HENLEY",
    "category": "henley",
    "categoryLabel": "هنلی",
    "price": 1590000,
    "colors": [
      {
        "name": "مشکی",
        "hex": "#242424"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "نسخه‌ای جمع‌وجور با خطوط ساده و یقه هنلی.",
    "fabric": "Cotton jersey",
    "fit": "استاندارد",
    "stock": 16,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/black-long-sleeve-henley-03.jpg")
    ]
  },
  {
    "id": "v-013",
    "slug": "black-textured-long-sleeve-henley-02",
    "name": "هنلی تکسچر مشکی",
    "englishName": "TEXTURE HENLEY",
    "category": "henley",
    "categoryLabel": "هنلی",
    "price": 1790000,
    "colors": [
      {
        "name": "مشکی بافت‌دار",
        "hex": "#292929"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "بافت ملموس و جزئیات ظریف برای یک لایه مستقل.",
    "fabric": "Textured cotton",
    "fit": "استاندارد",
    "stock": 4,
    "isNew": false,
    "isBest": true,
    "images": [
      imageAsset("/images/black-textured-long-sleeve-henley-02.jpg")
    ]
  },
  {
    "id": "v-014",
    "slug": "burgundy-long-sleeve-henley-01",
    "name": "هنلی بورگاندی",
    "englishName": "BURGUNDY HENLEY",
    "category": "henley",
    "categoryLabel": "هنلی",
    "price": 1690000,
    "colors": [
      {
        "name": "زرشکی",
        "hex": "#6b263b"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "رنگ عمیق بورگاندی با فرم ساده و کاربردی.",
    "fabric": "Cotton jersey",
    "fit": "استاندارد",
    "stock": 5,
    "isNew": true,
    "isBest": false,
    "images": [
      imageAsset("/images/burgundy-long-sleeve-henley-01.jpg")
    ]
  },
  {
    "id": "v-015",
    "slug": "charcoal-burgundy-raglan-henley-01",
    "name": "هنلی رگلان زغالی",
    "englishName": "RAGLAN HENLEY",
    "category": "henley",
    "categoryLabel": "هنلی",
    "price": 1790000,
    "colors": [
      {
        "name": "زغالی / زرشکی",
        "hex": "#4c4647"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "ترکیب دو رنگ با برش رگلان و یقه دکمه‌دار.",
    "fabric": "Cotton blend",
    "fit": "استاندارد",
    "stock": 6,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/charcoal-burgundy-raglan-henley-01.jpg")
    ]
  },
  {
    "id": "v-016",
    "slug": "cream-long-sleeve-henley-01",
    "name": "هنلی کرم",
    "englishName": "CREAM HENLEY",
    "category": "henley",
    "categoryLabel": "هنلی",
    "price": 1690000,
    "colors": [
      {
        "name": "کرم",
        "hex": "#e7dfd0"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "هنلی روشن با بافت نرم و فرم روزمره.",
    "fabric": "Cotton jersey",
    "fit": "استاندارد",
    "stock": 7,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/cream-long-sleeve-henley-01.jpg")
    ]
  },
  {
    "id": "v-017",
    "slug": "dark-burgundy-long-sleeve-henley-01",
    "name": "هنلی زرشکی تیره",
    "englishName": "DARK BURGUNDY",
    "category": "henley",
    "categoryLabel": "هنلی",
    "price": 1690000,
    "colors": [
      {
        "name": "زرشکی تیره",
        "hex": "#4e202c"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "تناژ تیره و عمیق در سیلوئتی کلاسیک.",
    "fabric": "Cotton jersey",
    "fit": "استاندارد",
    "stock": 0,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/dark-burgundy-long-sleeve-henley-01.jpg")
    ]
  },
  {
    "id": "v-018",
    "slug": "deep-burgundy-long-sleeve-henley-02",
    "name": "هنلی دیپ بورگاندی",
    "englishName": "DEEP BURGUNDY",
    "category": "henley",
    "categoryLabel": "هنلی",
    "price": 1790000,
    "colors": [
      {
        "name": "زرشکی",
        "hex": "#702b48"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "رنگ غنی و یقه هنلی با جزئیات مینیمال.",
    "fabric": "Cotton jersey",
    "fit": "استاندارد",
    "stock": 9,
    "isNew": false,
    "isBest": true,
    "images": [
      imageAsset("/images/deep-burgundy-long-sleeve-henley-02.jpg")
    ]
  },
  {
    "id": "v-019",
    "slug": "navy-long-sleeve-henley-01",
    "name": "هنلی سرمه‌ای",
    "englishName": "NAVY HENLEY",
    "category": "henley",
    "categoryLabel": "هنلی",
    "price": 1690000,
    "colors": [
      {
        "name": "سرمه‌ای",
        "hex": "#26364d"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "سرمه‌ای عمیق با فیت استاندارد و پارچه سبک.",
    "fabric": "Cotton jersey",
    "fit": "استاندارد",
    "stock": 10,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/navy-long-sleeve-henley-01.jpg")
    ]
  },
  {
    "id": "v-020",
    "slug": "olive-raglan-long-sleeve-henley-01",
    "name": "هنلی رگلان زیتونی",
    "englishName": "OLIVE RAGLAN",
    "category": "henley",
    "categoryLabel": "هنلی",
    "price": 1790000,
    "colors": [
      {
        "name": "زیتونی",
        "hex": "#75775d"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "رگلان زیتونی با ترکیب رنگ آرام و فرم راحت.",
    "fabric": "Cotton blend",
    "fit": "استاندارد",
    "stock": 11,
    "isNew": true,
    "isBest": false,
    "images": [
      imageAsset("/images/olive-raglan-long-sleeve-henley-01.jpg")
    ]
  },
  {
    "id": "v-021",
    "slug": "olive-ribbed-long-sleeve-henley-01",
    "name": "هنلی ریب زیتونی",
    "englishName": "OLIVE RIB HENLEY",
    "category": "henley",
    "categoryLabel": "هنلی",
    "price": 1890000,
    "colors": [
      {
        "name": "زیتونی",
        "hex": "#797b64"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "بافت ریب با انعطاف ملایم و یقه دکمه‌دار.",
    "fabric": "Ribbed cotton",
    "fit": "استاندارد",
    "stock": 12,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/olive-ribbed-long-sleeve-henley-01.jpg")
    ]
  },
  {
    "id": "v-022",
    "slug": "olive-rolled-sleeve-henley-01",
    "name": "هنلی زیتونی آستین‌تاخورده",
    "englishName": "ROLLED SLEEVE",
    "category": "henley",
    "categoryLabel": "هنلی",
    "price": 1790000,
    "colors": [
      {
        "name": "زیتونی روشن",
        "hex": "#96977d"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "فرم سبک با آستین تاخورده و رنگ زیتونی ملایم.",
    "fabric": "Cotton jersey",
    "fit": "استاندارد",
    "stock": 13,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/olive-rolled-sleeve-henley-01.jpg")
    ]
  },
  {
    "id": "v-023",
    "slug": "black-duffle-style-jacket-01",
    "name": "کت دافل مشکی",
    "englishName": "BLACK DUFFLE",
    "category": "outerwear",
    "categoryLabel": "کت و ژاکت",
    "price": 5290000,
    "colors": [
      {
        "name": "مشکی",
        "hex": "#252525"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "کت دافل با بست‌های شاخص و فرم ساختاریافته.",
    "fabric": "Wool blend",
    "fit": "آزاد و راحت",
    "stock": 14,
    "isNew": false,
    "isBest": true,
    "images": [
      imageAsset("/images/black-duffle-style-jacket-01.jpg")
    ]
  },
  {
    "id": "v-024",
    "slug": "black-military-pea-coat-01",
    "name": "پالتو پیکوت مشکی",
    "englishName": "MILITARY PEA COAT",
    "category": "outerwear",
    "categoryLabel": "کت و ژاکت",
    "price": 5490000,
    "colors": [
      {
        "name": "مشکی",
        "hex": "#252525"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "پالتوی پیکوت با الهام از فرم نظامی و برش مرتب.",
    "fabric": "Wool blend",
    "fit": "آزاد و راحت",
    "stock": 15,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/black-military-pea-coat-01.jpg")
    ]
  },
  {
    "id": "v-025",
    "slug": "black-gray-raglan-long-sleeve-tee-01",
    "name": "لانگ‌اسلیو رگلان مشکی",
    "englishName": "BLACK RAGLAN TEE",
    "category": "longsleeve",
    "categoryLabel": "آستین‌بلند",
    "price": 1490000,
    "colors": [
      {
        "name": "مشکی / طوسی",
        "hex": "#343434"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "آستین رگلان دو رنگ با ساختاری ساده و راحت.",
    "fabric": "Cotton jersey",
    "fit": "آزاد و راحت",
    "stock": 16,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/black-gray-raglan-long-sleeve-tee-01.jpg")
    ]
  },
  {
    "id": "v-026",
    "slug": "cream-navy-raglan-long-sleeve-tee-01",
    "name": "لانگ‌اسلیو رگلان کرم",
    "englishName": "CREAM RAGLAN TEE",
    "category": "longsleeve",
    "categoryLabel": "آستین‌بلند",
    "price": 1590000,
    "colors": [
      {
        "name": "کرم / سرمه‌ای",
        "hex": "#e7dfd1"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "ترکیب کرم و سرمه‌ای با خطوط رگلان واضح.",
    "fabric": "Cotton jersey",
    "fit": "آزاد و راحت",
    "stock": 4,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/cream-navy-raglan-long-sleeve-tee-01.jpg")
    ]
  },
  {
    "id": "v-027",
    "slug": "gray-layered-long-sleeve-tee-01",
    "name": "لانگ‌اسلیو لایه‌ای طوسی",
    "englishName": "LAYERED LONG SLEEVE",
    "category": "longsleeve",
    "categoryLabel": "آستین‌بلند",
    "price": 1690000,
    "colors": [
      {
        "name": "طوسی",
        "hex": "#999891"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "طراحی لایه‌ای با بافت سبک و فرم آزاد.",
    "fabric": "Cotton jersey",
    "fit": "آزاد و راحت",
    "stock": 5,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/gray-layered-long-sleeve-tee-01.jpg")
    ]
  },
  {
    "id": "v-028",
    "slug": "striped-long-sleeve-crewneck-top-01",
    "name": "لانگ‌اسلیو راه‌راه",
    "englishName": "STRIPED CREWNECK",
    "category": "longsleeve",
    "categoryLabel": "آستین‌بلند",
    "price": 1590000,
    "colors": [
      {
        "name": "راه‌راه",
        "hex": "#404b53"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "راه‌راه کلاسیک در فرمی راحت و بدون جزئیات اضافه.",
    "fabric": "Cotton jersey",
    "fit": "آزاد و راحت",
    "stock": 6,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/striped-long-sleeve-crewneck-top-01.jpg")
    ]
  },
  {
    "id": "v-029",
    "slug": "black-short-sleeve-henley-01",
    "name": "هنلی آستین‌کوتاه مشکی",
    "englishName": "SHORT SLEEVE HENLEY",
    "category": "henley",
    "categoryLabel": "هنلی",
    "price": 1490000,
    "colors": [
      {
        "name": "مشکی",
        "hex": "#242424"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "نسخه آستین‌کوتاه هنلی برای لایه‌های ساده روزمره.",
    "fabric": "Cotton jersey",
    "fit": "استاندارد",
    "stock": 7,
    "isNew": true,
    "isBest": false,
    "images": [
      imageAsset("/images/black-short-sleeve-henley-01.jpg")
    ]
  },
  {
    "id": "v-030",
    "slug": "black-straight-leg-jeans-01",
    "name": "جین استریت مشکی",
    "englishName": "FORM STRAIGHT",
    "category": "pants",
    "categoryLabel": "شلوارها",
    "price": 2690000,
    "colors": [
      {
        "name": "مشکی",
        "hex": "#222222"
      }
    ],
    "sizes": [
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "description": "جین مشکی با خط مستقیم و سیلوئت مینیمال.",
    "fabric": "Denim",
    "fit": "آزاد و راحت",
    "stock": 8,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/black-straight-leg-jeans-01.jpg")
    ]
  },
  {
    "id": "v-031",
    "slug": "charcoal-wash-relaxed-straight-jeans-01",
    "name": "جین ریلکس ذغالی",
    "englishName": "RELAXED STRAIGHT",
    "category": "pants",
    "categoryLabel": "شلوارها",
    "price": 2790000,
    "colors": [
      {
        "name": "ذغالی",
        "hex": "#555752"
      }
    ],
    "sizes": [
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "description": "فرم ریلکس با شست‌وشوی ذغالی و افت طبیعی.",
    "fabric": "Denim",
    "fit": "آزاد و راحت",
    "stock": 0,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/charcoal-wash-relaxed-straight-jeans-01.jpg")
    ]
  },
  {
    "id": "v-032",
    "slug": "dark-blue-straight-leg-jeans-02",
    "name": "جین استریت دارک بلو",
    "englishName": "DARK BLUE STRAIGHT",
    "category": "pants",
    "categoryLabel": "شلوارها",
    "price": 2690000,
    "colors": [
      {
        "name": "سرمه‌ای",
        "hex": "#283d53"
      }
    ],
    "sizes": [
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "description": "استریت کلاسیک با رنگ آبی عمیق و ظاهر روزمره.",
    "fabric": "Denim",
    "fit": "آزاد و راحت",
    "stock": 10,
    "isNew": false,
    "isBest": true,
    "images": [
      imageAsset("/images/dark-blue-straight-leg-jeans-02.jpg")
    ]
  },
  {
    "id": "v-033",
    "slug": "dark-wash-straight-leg-jeans-01",
    "name": "جین استریت دارک واش",
    "englishName": "STUDIO STRAIGHT",
    "category": "pants",
    "categoryLabel": "شلوارها",
    "price": 2790000,
    "colors": [
      {
        "name": "آبی تیره",
        "hex": "#33475d"
      }
    ],
    "sizes": [
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "description": "جین تیره با برش مستقیم؛ ساده و قابل ترکیب.",
    "fabric": "Denim",
    "fit": "آزاد و راحت",
    "stock": 11,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/dark-wash-straight-leg-jeans-01.jpg")
    ]
  },
  {
    "id": "v-034",
    "slug": "gray-wide-leg-trousers-01",
    "name": "شلوار واید طوسی",
    "englishName": "WIDE TAILORED",
    "category": "pants",
    "categoryLabel": "شلوارها",
    "price": 2990000,
    "colors": [
      {
        "name": "طوسی",
        "hex": "#85847f"
      }
    ],
    "sizes": [
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "description": "شلوار پارچه‌ای واید با خطی روان و حجم کنترل‌شده.",
    "fabric": "Cotton blend",
    "fit": "آزاد و راحت",
    "stock": 12,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/gray-wide-leg-trousers-01.jpg")
    ]
  },
  {
    "id": "v-035",
    "slug": "black-wide-leg-jeans-01",
    "name": "جین واید مشکی",
    "englishName": "WIDE BLACK",
    "category": "pants",
    "categoryLabel": "شلوارها",
    "price": 2890000,
    "colors": [
      {
        "name": "مشکی",
        "hex": "#242424"
      }
    ],
    "sizes": [
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "description": "واید مشکی با حجم آزاد و فرم یکدست.",
    "fabric": "Denim",
    "fit": "آزاد و راحت",
    "stock": 13,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/black-wide-leg-jeans-01.jpg")
    ]
  },
  {
    "id": "v-036",
    "slug": "dark-indigo-wide-leg-jeans-01",
    "name": "جین واید ایندیگو",
    "englishName": "INDIGO WIDE",
    "category": "pants",
    "categoryLabel": "شلوارها",
    "price": 2990000,
    "colors": [
      {
        "name": "ایندیگو",
        "hex": "#26384c"
      }
    ],
    "sizes": [
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "description": "جین ایندیگو با پاچه آزاد و شست‌وشوی عمیق.",
    "fabric": "Denim",
    "fit": "آزاد و راحت",
    "stock": 14,
    "isNew": true,
    "isBest": false,
    "images": [
      imageAsset("/images/dark-indigo-wide-leg-jeans-01.jpg")
    ]
  },
  {
    "id": "v-037",
    "slug": "light-wash-wide-leg-jeans-01",
    "name": "جین واید لایت واش",
    "englishName": "LIGHT WASH WIDE",
    "category": "pants",
    "categoryLabel": "شلوارها",
    "price": 2890000,
    "colors": [
      {
        "name": "آبی روشن",
        "hex": "#9aa9b4"
      }
    ],
    "sizes": [
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "description": "جین روشن با فرم واید و حال‌وهوای وینتیج.",
    "fabric": "Denim",
    "fit": "آزاد و راحت",
    "stock": 15,
    "isNew": false,
    "isBest": true,
    "images": [
      imageAsset("/images/light-wash-wide-leg-jeans-01.jpg")
    ]
  },
  {
    "id": "v-038",
    "slug": "navy-wide-leg-jeans-01",
    "name": "جین واید سرمه‌ای",
    "englishName": "NAVY WIDE",
    "category": "pants",
    "categoryLabel": "شلوارها",
    "price": 2890000,
    "colors": [
      {
        "name": "سرمه‌ای",
        "hex": "#202e43"
      }
    ],
    "sizes": [
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "description": "فرم واید با رنگ سرمه‌ای یکدست و جزئیات کم.",
    "fabric": "Denim",
    "fit": "آزاد و راحت",
    "stock": 16,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/navy-wide-leg-jeans-01.jpg")
    ]
  },
  {
    "id": "v-039",
    "slug": "vintage-wash-wide-leg-jeans-01",
    "name": "جین واید وینتیج",
    "englishName": "VINTAGE WIDE",
    "category": "pants",
    "categoryLabel": "شلوارها",
    "price": 3090000,
    "colors": [
      {
        "name": "وینتیج",
        "hex": "#65705e"
      }
    ],
    "sizes": [
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "description": "شست‌وشوی وینتیج و سیلوئت آزاد با شخصیت مستقل.",
    "fabric": "Denim",
    "fit": "آزاد و راحت",
    "stock": 4,
    "isNew": false,
    "isBest": false,
    "images": [
      imageAsset("/images/vintage-wash-wide-leg-jeans-01.jpg")
    ]
  }
];

export const categories = [
  { id: 'pants', label: 'شلوار', english: 'PANTS', image: imageAsset('/images/dark-blue-bootcut-jeans-01.jpg'), count: 12 },
  { id: 'henley', label: 'هنلی', english: 'HENLEY', image: imageAsset('/images/olive-ribbed-long-sleeve-henley-01.jpg'), count: 13 },
  { id: 'longsleeve', label: 'آستین‌بلند', english: 'LONG SLEEVE', image: imageAsset('/images/cream-navy-raglan-long-sleeve-tee-01.jpg'), count: 4 },
  { id: 'outerwear', label: 'کت و ژاکت', english: 'OUTERWEAR', image: imageAsset('/images/black-leather-bomber-jacket-01.jpg'), count: 9 },
  { id: 'essentials', label: 'اسنشیال', english: 'ESSENTIALS', image: imageAsset('/images/navy-pinstripe-button-down-shirt-01.jpg'), count: 1 },
];
export const heroImage = imageAsset('/images/black-leather-bomber-jacket-01.jpg');
export const editorialImage = imageAsset('/images/dark-brown-suede-toggle-jacket-01.jpg');
export const formatPrice = (value) => `${new Intl.NumberFormat('fa-IR').format(value)} تومان`;
export const formatNumber = (value) => new Intl.NumberFormat('fa-IR').format(value);
