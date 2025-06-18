const productsList = [
    {
        "id": 1,
        "category": "Mouse",
        "title": "SteelSeries Rival 5 Wired Gaming Mouse",
        "rating": 3,
        "totalRatings": 386,
        "previousPrice": 472,
        "price": 448,
        "discountTag": true,
        "discountPercent": 5
    },
    {
        "id": 2,
        "category": "Smartphone",
        "title": "Google Pixel 8 Pro 128GB",
        "rating": 3,
        "totalRatings": 256,
        "previousPrice": 311,
        "price": 311
    },
    {
        "id": 3,
        "category": "Keyboard",
        "title": "Keychron K6 Wireless Mechanical Keyboard",
        "rating": 3,
        "totalRatings": 109,
        "previousPrice": 750,
        "price": 750
    },
    {
        "id": 4,
        "category": "Keyboard",
        "title": "Keychron K6 Wireless Mechanical Keyboard",
        "rating": 3,
        "totalRatings": 433,
        "previousPrice": 1647,
        "price": 1647
    },
    {
        "id": 5,
        "category": "Mouse",
        "title": "Logitech MX Master 3S Wireless Mouse",
        "rating": 4,
        "totalRatings": 104,
        "previousPrice": 1263,
        "price": 884,
        "discountTag": true,
        "discountPercent": 30
    },
    {
        "id": 6,
        "category": "Mouse",
        "title": "Logitech MX Master 3S Wireless Mouse",
        "rating": 3,
        "totalRatings": 104,
        "previousPrice": 955,
        "price": 955
    },
    {
        "id": 7,
        "category": "Tablet",
        "title": "Apple iPad Pro 12.9\u201d M4 Chip",
        "rating": 3,
        "totalRatings": 488,
        "previousPrice": 864,
        "price": 864
    },
    {
        "id": 8,
        "category": "Smartphone",
        "title": "Apple iPhone 15 Pro Max 256GB",
        "rating": 4,
        "totalRatings": 80,
        "previousPrice": 1550,
        "price": 1472,
        "discountTag": true,
        "discountPercent": 5
    },
    {
        "id": 9,
        "category": "Monitor",
        "title": "ASUS ROG Swift 32\u201d 4K OLED 240Hz Gaming Monitor",
        "rating": 3,
        "totalRatings": 37,
        "previousPrice": 1180,
        "price": 1180
    },
    {
        "id": 10,
        "category": "Keyboard",
        "title": "Razer Huntsman V2 Optical Gaming Keyboard",
        "rating": 5,
        "totalRatings": 400,
        "previousPrice": 1235,
        "price": 1235
    },
    {
        "id": 11,
        "category": "Smartphone",
        "title": "Samsung Galaxy S24 Ultra 512GB",
        "rating": 3,
        "totalRatings": 40,
        "previousPrice": 1486,
        "price": 1486
    },
    {
        "id": 12,
        "category": "Headphone",
        "title": "Bose QuietComfort Ultra Headphones",
        "rating": 4,
        "totalRatings": 134,
        "previousPrice": 586,
        "price": 410,
        "discountTag": true,
        "discountPercent": 30
    },
    {
        "id": 13,
        "category": "Monitor",
        "title": "Dell UltraSharp 27\u201d QHD IPS Monitor",
        "rating": 3,
        "totalRatings": 490,
        "previousPrice": 545,
        "price": 545
    },
    {
        "id": 14,
        "category": "Tablet",
        "title": "Samsung Galaxy Tab S9 Ultra",
        "rating": 3,
        "totalRatings": 63,
        "previousPrice": 1295,
        "price": 1036,
        "discountTag": true,
        "discountPercent": 20
    },
    {
        "id": 15,
        "category": "Tablet",
        "title": "Microsoft Surface Pro 9 Intel Evo",
        "rating": 4,
        "totalRatings": 26,
        "previousPrice": 413,
        "price": 330,
        "discountTag": true,
        "discountPercent": 20
    },
    {
        "id": 16,
        "category": "Keyboard",
        "title": "Logitech MX Keys Advanced Wireless Keyboard",
        "rating": 3,
        "totalRatings": 309,
        "previousPrice": 1824,
        "price": 1550,
        "discountTag": true,
        "discountPercent": 15
    },
    {
        "id": 17,
        "category": "Tablet",
        "title": "Samsung Galaxy Tab S9 Ultra",
        "rating": 5,
        "totalRatings": 465,
        "previousPrice": 1531,
        "price": 1531
    },
    {
        "id": 18,
        "category": "Keyboard",
        "title": "Logitech MX Keys Advanced Wireless Keyboard",
        "rating": 3,
        "totalRatings": 341,
        "previousPrice": 1772,
        "price": 1418,
        "discountTag": true,
        "discountPercent": 20
    },
    {
        "id": 19,
        "category": "Monitor",
        "title": "Dell UltraSharp 27\u201d QHD IPS Monitor",
        "rating": 3,
        "totalRatings": 79,
        "previousPrice": 1953,
        "price": 1367,
        "discountTag": true,
        "discountPercent": 30
    },
    {
        "id": 20,
        "category": "Headphone",
        "title": "Sony WH-1000XM5 Wireless Noise-Canceling Headphones",
        "rating": 5,
        "totalRatings": 382,
        "previousPrice": 1843,
        "price": 1659,
        "discountTag": true,
        "discountPercent": 10
    },
    {
        "id": 21,
        "category": "Monitor",
        "title": "Dell UltraSharp 27\u201d QHD IPS Monitor",
        "rating": 5,
        "totalRatings": 57,
        "previousPrice": 302,
        "price": 302
    },
    {
        "id": 22,
        "category": "Keyboard",
        "title": "Razer Huntsman V2 Optical Gaming Keyboard",
        "rating": 5,
        "totalRatings": 432,
        "previousPrice": 1567,
        "price": 1567
    },
    {
        "id": 23,
        "category": "Monitor",
        "title": "ASUS ROG Swift 32\u201d 4K OLED 240Hz Gaming Monitor",
        "rating": 5,
        "totalRatings": 82,
        "previousPrice": 1978,
        "price": 1582,
        "discountTag": true,
        "discountPercent": 20
    },
    {
        "id": 24,
        "category": "Mouse",
        "title": "SteelSeries Rival 5 Wired Gaming Mouse",
        "rating": 5,
        "totalRatings": 446,
        "previousPrice": 924,
        "price": 878,
        "discountTag": true,
        "discountPercent": 5
    },
    {
        "id": 25,
        "category": "Laptop",
        "title": "Dell XPS 15 Touchscreen Laptop",
        "rating": 5,
        "totalRatings": 49,
        "previousPrice": 971,
        "price": 971
    },
    {
        "id": 26,
        "category": "Tablet",
        "title": "Samsung Galaxy Tab S9 Ultra",
        "rating": 5,
        "totalRatings": 282,
        "previousPrice": 955,
        "price": 764,
        "discountTag": true,
        "discountPercent": 20
    },
    {
        "id": 27,
        "category": "Keyboard",
        "title": "Keychron K6 Wireless Mechanical Keyboard",
        "rating": 3,
        "totalRatings": 125,
        "previousPrice": 698,
        "price": 663,
        "discountTag": true,
        "discountPercent": 5
    },
    {
        "id": 28,
        "category": "Mouse",
        "title": "SteelSeries Rival 5 Wired Gaming Mouse",
        "rating": 5,
        "totalRatings": 245,
        "previousPrice": 778,
        "price": 778
    },
    {
        "id": 29,
        "category": "Laptop",
        "title": "Dell XPS 15 Touchscreen Laptop",
        "rating": 4,
        "totalRatings": 30,
        "previousPrice": 584,
        "price": 584
    },
    {
        "id": 30,
        "category": "Monitor",
        "title": "Dell UltraSharp 27\u201d QHD IPS Monitor",
        "rating": 3,
        "totalRatings": 227,
        "previousPrice": 635,
        "price": 635
    },
    {
        "id": 31,
        "category": "Headphone",
        "title": "Sony WH-1000XM5 Wireless Noise-Canceling Headphones",
        "rating": 5,
        "totalRatings": 242,
        "previousPrice": 1151,
        "price": 1151
    },
    {
        "id": 32,
        "category": "Tablet",
        "title": "Samsung Galaxy Tab S9 Ultra",
        "rating": 5,
        "totalRatings": 200,
        "previousPrice": 1081,
        "price": 1081
    },
    {
        "id": 33,
        "category": "Tablet",
        "title": "Apple iPad Pro 12.9\u201d M4 Chip",
        "rating": 4,
        "totalRatings": 261,
        "previousPrice": 1740,
        "price": 1392,
        "discountTag": true,
        "discountPercent": 20
    },
    {
        "id": 34,
        "category": "Smartphone",
        "title": "Samsung Galaxy S24 Ultra 512GB",
        "rating": 3,
        "totalRatings": 441,
        "previousPrice": 373,
        "price": 373
    },
    {
        "id": 35,
        "category": "Tablet",
        "title": "Apple iPad Pro 12.9\u201d M4 Chip",
        "rating": 4,
        "totalRatings": 370,
        "previousPrice": 450,
        "price": 428,
        "discountTag": true,
        "discountPercent": 5
    },
    {
        "id": 36,
        "category": "Mouse",
        "title": "SteelSeries Rival 5 Wired Gaming Mouse",
        "rating": 4,
        "totalRatings": 308,
        "previousPrice": 1505,
        "price": 1129,
        "discountTag": true,
        "discountPercent": 25
    },
    {
        "id": 37,
        "category": "Keyboard",
        "title": "Logitech MX Keys Advanced Wireless Keyboard",
        "rating": 3,
        "totalRatings": 81,
        "previousPrice": 1555,
        "price": 1400,
        "discountTag": true,
        "discountPercent": 10
    },
    {
        "id": 38,
        "category": "Monitor",
        "title": "Dell UltraSharp 27\u201d QHD IPS Monitor",
        "rating": 4,
        "totalRatings": 275,
        "previousPrice": 1835,
        "price": 1376,
        "discountTag": true,
        "discountPercent": 25
    },
    {
        "id": 39,
        "category": "Laptop",
        "title": "HP Spectre x360 13.5\u201d OLED Laptop",
        "rating": 3,
        "totalRatings": 31,
        "previousPrice": 1168,
        "price": 1168
    },
    {
        "id": 40,
        "category": "Smartphone",
        "title": "Google Pixel 8 Pro 128GB",
        "rating": 4,
        "totalRatings": 271,
        "previousPrice": 681,
        "price": 681
    },
    {
        "id": 41,
        "category": "Headphone",
        "title": "Sennheiser HD 660S Open Back Headphones",
        "rating": 3,
        "totalRatings": 316,
        "previousPrice": 1742,
        "price": 1742
    },
    {
        "id": 42,
        "category": "Keyboard",
        "title": "Razer Huntsman V2 Optical Gaming Keyboard",
        "rating": 3,
        "totalRatings": 436,
        "previousPrice": 1543,
        "price": 1543
    },
    {
        "id": 43,
        "category": "Headphone",
        "title": "Sony WH-1000XM5 Wireless Noise-Canceling Headphones",
        "rating": 5,
        "totalRatings": 378,
        "previousPrice": 1074,
        "price": 1074
    },
    {
        "id": 44,
        "category": "Monitor",
        "title": "LG UltraGear 34\u201d Curved Gaming Monitor",
        "rating": 5,
        "totalRatings": 11,
        "previousPrice": 1433,
        "price": 1290,
        "discountTag": true,
        "discountPercent": 10
    },
    {
        "id": 45,
        "category": "Tablet",
        "title": "Apple iPad Pro 12.9\u201d M4 Chip",
        "rating": 4,
        "totalRatings": 127,
        "previousPrice": 1893,
        "price": 1893
    },
    {
        "id": 46,
        "category": "Keyboard",
        "title": "Logitech MX Keys Advanced Wireless Keyboard",
        "rating": 5,
        "totalRatings": 372,
        "previousPrice": 454,
        "price": 318,
        "discountTag": true,
        "discountPercent": 30
    },
    {
        "id": 47,
        "category": "Tablet",
        "title": "Apple iPad Pro 12.9\u201d M4 Chip",
        "rating": 5,
        "totalRatings": 280,
        "previousPrice": 1364,
        "price": 1364
    },
    {
        "id": 48,
        "category": "Keyboard",
        "title": "Razer Huntsman V2 Optical Gaming Keyboard",
        "rating": 5,
        "totalRatings": 297,
        "previousPrice": 1238,
        "price": 1176,
        "discountTag": true,
        "discountPercent": 5
    },
    {
        "id": 49,
        "category": "Keyboard",
        "title": "Keychron K6 Wireless Mechanical Keyboard",
        "rating": 3,
        "totalRatings": 263,
        "previousPrice": 1635,
        "price": 1635
    },
    {
        "id": 50,
        "category": "Monitor",
        "title": "ASUS ROG Swift 32\u201d 4K OLED 240Hz Gaming Monitor",
        "rating": 4,
        "totalRatings": 462,
        "previousPrice": 917,
        "price": 825,
        "discountTag": true,
        "discountPercent": 10
    },
    {
        "id": 51,
        "category": "Monitor",
        "title": "Dell UltraSharp 27\u201d QHD IPS Monitor",
        "rating": 5,
        "totalRatings": 227,
        "previousPrice": 584,
        "price": 584
    },
    {
        "id": 52,
        "category": "Tablet",
        "title": "Microsoft Surface Pro 9 Intel Evo",
        "rating": 4,
        "totalRatings": 36,
        "previousPrice": 1551,
        "price": 1551
    },
    {
        "id": 53,
        "category": "Tablet",
        "title": "Microsoft Surface Pro 9 Intel Evo",
        "rating": 3,
        "totalRatings": 198,
        "previousPrice": 1523,
        "price": 1523
    },
    {
        "id": 54,
        "category": "Headphone",
        "title": "Bose QuietComfort Ultra Headphones",
        "rating": 5,
        "totalRatings": 125,
        "previousPrice": 835,
        "price": 835
    },
    {
        "id": 55,
        "category": "Smartphone",
        "title": "Google Pixel 8 Pro 128GB",
        "rating": 3,
        "totalRatings": 19,
        "previousPrice": 946,
        "price": 946
    },
    {
        "id": 56,
        "category": "Mouse",
        "title": "Razer DeathAdder V3 Pro Gaming Mouse",
        "rating": 5,
        "totalRatings": 173,
        "previousPrice": 1637,
        "price": 1637
    },
    {
        "id": 57,
        "category": "Mouse",
        "title": "SteelSeries Rival 5 Wired Gaming Mouse",
        "rating": 3,
        "totalRatings": 37,
        "previousPrice": 1667,
        "price": 1667
    },
    {
        "id": 58,
        "category": "Mouse",
        "title": "SteelSeries Rival 5 Wired Gaming Mouse",
        "rating": 4,
        "totalRatings": 208,
        "previousPrice": 310,
        "price": 310
    },
    {
        "id": 59,
        "category": "Smartphone",
        "title": "Apple iPhone 15 Pro Max 256GB",
        "rating": 4,
        "totalRatings": 466,
        "previousPrice": 611,
        "price": 611
    },
    {
        "id": 60,
        "category": "Tablet",
        "title": "Samsung Galaxy Tab S9 Ultra",
        "rating": 5,
        "totalRatings": 40,
        "previousPrice": 1451,
        "price": 1451
    },
    {
        "id": 61,
        "category": "Smartphone",
        "title": "Apple iPhone 15 Pro Max 256GB",
        "rating": 3,
        "totalRatings": 358,
        "previousPrice": 743,
        "price": 743
    },
    {
        "id": 62,
        "category": "Monitor",
        "title": "LG UltraGear 34\u201d Curved Gaming Monitor",
        "rating": 4,
        "totalRatings": 74,
        "previousPrice": 933,
        "price": 746,
        "discountTag": true,
        "discountPercent": 20
    },
    {
        "id": 63,
        "category": "Mouse",
        "title": "SteelSeries Rival 5 Wired Gaming Mouse",
        "rating": 4,
        "totalRatings": 373,
        "previousPrice": 551,
        "price": 386,
        "discountTag": true,
        "discountPercent": 30
    },
    {
        "id": 64,
        "category": "Monitor",
        "title": "LG UltraGear 34\u201d Curved Gaming Monitor",
        "rating": 3,
        "totalRatings": 251,
        "previousPrice": 1351,
        "price": 1283,
        "discountTag": true,
        "discountPercent": 5
    },
    {
        "id": 65,
        "category": "Keyboard",
        "title": "Razer Huntsman V2 Optical Gaming Keyboard",
        "rating": 5,
        "totalRatings": 177,
        "previousPrice": 763,
        "price": 687,
        "discountTag": true,
        "discountPercent": 10
    },
    {
        "id": 66,
        "category": "Mouse",
        "title": "Razer DeathAdder V3 Pro Gaming Mouse",
        "rating": 3,
        "totalRatings": 366,
        "previousPrice": 1705,
        "price": 1449,
        "discountTag": true,
        "discountPercent": 15
    },
    {
        "id": 67,
        "category": "Headphone",
        "title": "Sennheiser HD 660S Open Back Headphones",
        "rating": 3,
        "totalRatings": 184,
        "previousPrice": 1375,
        "price": 1375
    },
    {
        "id": 68,
        "category": "Headphone",
        "title": "Bose QuietComfort Ultra Headphones",
        "rating": 3,
        "totalRatings": 350,
        "previousPrice": 1723,
        "price": 1723
    },
    {
        "id": 69,
        "category": "Laptop",
        "title": "Dell XPS 15 Touchscreen Laptop",
        "rating": 3,
        "totalRatings": 45,
        "previousPrice": 1930,
        "price": 1834,
        "discountTag": true,
        "discountPercent": 5
    },
    {
        "id": 70,
        "category": "Keyboard",
        "title": "Razer Huntsman V2 Optical Gaming Keyboard",
        "rating": 4,
        "totalRatings": 80,
        "previousPrice": 1052,
        "price": 999,
        "discountTag": true,
        "discountPercent": 5
    },
    {
        "id": 71,
        "category": "Monitor",
        "title": "Dell UltraSharp 27\u201d QHD IPS Monitor",
        "rating": 3,
        "totalRatings": 378,
        "previousPrice": 814,
        "price": 610,
        "discountTag": true,
        "discountPercent": 25
    },
    {
        "id": 72,
        "category": "Smartphone",
        "title": "Google Pixel 8 Pro 128GB",
        "rating": 4,
        "totalRatings": 34,
        "previousPrice": 765,
        "price": 650,
        "discountTag": true,
        "discountPercent": 15
    },
    {
        "id": 73,
        "category": "Tablet",
        "title": "Microsoft Surface Pro 9 Intel Evo",
        "rating": 5,
        "totalRatings": 147,
        "previousPrice": 1293,
        "price": 1293
    },
    {
        "id": 74,
        "category": "Keyboard",
        "title": "Keychron K6 Wireless Mechanical Keyboard",
        "rating": 5,
        "totalRatings": 446,
        "previousPrice": 616,
        "price": 616
    },
    {
        "id": 75,
        "category": "Headphone",
        "title": "Sony WH-1000XM5 Wireless Noise-Canceling Headphones",
        "rating": 5,
        "totalRatings": 321,
        "previousPrice": 627,
        "price": 627
    },
    {
        "id": 76,
        "category": "Headphone",
        "title": "Bose QuietComfort Ultra Headphones",
        "rating": 4,
        "totalRatings": 481,
        "previousPrice": 1528,
        "price": 1528
    },
    {
        "id": 77,
        "category": "Keyboard",
        "title": "Razer Huntsman V2 Optical Gaming Keyboard",
        "rating": 3,
        "totalRatings": 279,
        "previousPrice": 729,
        "price": 729
    },
    {
        "id": 78,
        "category": "Mouse",
        "title": "Logitech MX Master 3S Wireless Mouse",
        "rating": 3,
        "totalRatings": 244,
        "previousPrice": 1218,
        "price": 1157,
        "discountTag": true,
        "discountPercent": 5
    },
    {
        "id": 79,
        "category": "Tablet",
        "title": "Apple iPad Pro 12.9\u201d M4 Chip",
        "rating": 3,
        "totalRatings": 376,
        "previousPrice": 1418,
        "price": 1205,
        "discountTag": true,
        "discountPercent": 15
    },
    {
        "id": 80,
        "category": "Headphone",
        "title": "Sennheiser HD 660S Open Back Headphones",
        "rating": 5,
        "totalRatings": 457,
        "previousPrice": 1906,
        "price": 1525,
        "discountTag": true,
        "discountPercent": 20
    },
    {
        "id": 81,
        "category": "Mouse",
        "title": "Razer DeathAdder V3 Pro Gaming Mouse",
        "rating": 3,
        "totalRatings": 106,
        "previousPrice": 1454,
        "price": 1018,
        "discountTag": true,
        "discountPercent": 30
    },
    {
        "id": 82,
        "category": "Tablet",
        "title": "Samsung Galaxy Tab S9 Ultra",
        "rating": 5,
        "totalRatings": 275,
        "previousPrice": 373,
        "price": 373
    },
    {
        "id": 83,
        "category": "Keyboard",
        "title": "Keychron K6 Wireless Mechanical Keyboard",
        "rating": 3,
        "totalRatings": 220,
        "previousPrice": 740,
        "price": 740
    },
    {
        "id": 84,
        "category": "Laptop",
        "title": "Dell XPS 15 Touchscreen Laptop",
        "rating": 4,
        "totalRatings": 165,
        "previousPrice": 334,
        "price": 334
    },
    {
        "id": 85,
        "category": "Laptop",
        "title": "Dell XPS 15 Touchscreen Laptop",
        "rating": 5,
        "totalRatings": 201,
        "previousPrice": 1243,
        "price": 1243
    },
    {
        "id": 86,
        "category": "Keyboard",
        "title": "Logitech MX Keys Advanced Wireless Keyboard",
        "rating": 3,
        "totalRatings": 443,
        "previousPrice": 1911,
        "price": 1529,
        "discountTag": true,
        "discountPercent": 20
    },
    {
        "id": 87,
        "category": "Smartphone",
        "title": "Apple iPhone 15 Pro Max 256GB",
        "rating": 5,
        "totalRatings": 56,
        "previousPrice": 1818,
        "price": 1818
    },
    {
        "id": 88,
        "category": "Tablet",
        "title": "Apple iPad Pro 12.9\u201d M4 Chip",
        "rating": 5,
        "totalRatings": 419,
        "previousPrice": 1153,
        "price": 1153
    },
    {
        "id": 89,
        "category": "Mouse",
        "title": "SteelSeries Rival 5 Wired Gaming Mouse",
        "rating": 5,
        "totalRatings": 491,
        "previousPrice": 1927,
        "price": 1927
    },
    {
        "id": 90,
        "category": "Mouse",
        "title": "Logitech MX Master 3S Wireless Mouse",
        "rating": 4,
        "totalRatings": 393,
        "previousPrice": 1870,
        "price": 1870
    },
    {
        "id": 91,
        "category": "Laptop",
        "title": "Apple MacBook Pro 14\u201d M2 Chip",
        "rating": 5,
        "totalRatings": 112,
        "previousPrice": 1654,
        "price": 1654
    },
    {
        "id": 92,
        "category": "Tablet",
        "title": "Apple iPad Pro 12.9\u201d M4 Chip",
        "rating": 5,
        "totalRatings": 335,
        "previousPrice": 1909,
        "price": 1909
    },
    {
        "id": 93,
        "category": "Monitor",
        "title": "Dell UltraSharp 27\u201d QHD IPS Monitor",
        "rating": 4,
        "totalRatings": 310,
        "previousPrice": 1926,
        "price": 1926
    },
    {
        "id": 94,
        "category": "Keyboard",
        "title": "Logitech MX Keys Advanced Wireless Keyboard",
        "rating": 5,
        "totalRatings": 271,
        "previousPrice": 336,
        "price": 336
    },
    {
        "id": 95,
        "category": "Mouse",
        "title": "Logitech MX Master 3S Wireless Mouse",
        "rating": 5,
        "totalRatings": 277,
        "previousPrice": 1573,
        "price": 1573
    },
    {
        "id": 96,
        "category": "Laptop",
        "title": "HP Spectre x360 13.5\u201d OLED Laptop",
        "rating": 4,
        "totalRatings": 132,
        "previousPrice": 589,
        "price": 501,
        "discountTag": true,
        "discountPercent": 15
    },
    {
        "id": 97,
        "category": "Laptop",
        "title": "Apple MacBook Pro 14\u201d M2 Chip",
        "rating": 4,
        "totalRatings": 377,
        "previousPrice": 1475,
        "price": 1475
    },
    {
        "id": 98,
        "category": "Headphone",
        "title": "Sennheiser HD 660S Open Back Headphones",
        "rating": 3,
        "totalRatings": 269,
        "previousPrice": 1010,
        "price": 960,
        "discountTag": true,
        "discountPercent": 5
    },
    {
        "id": 99,
        "category": "Keyboard",
        "title": "Logitech MX Keys Advanced Wireless Keyboard",
        "rating": 3,
        "totalRatings": 475,
        "previousPrice": 492,
        "price": 394,
        "discountTag": true,
        "discountPercent": 20
    },
    {
        "id": 100,
        "category": "Mouse",
        "title": "Razer DeathAdder V3 Pro Gaming Mouse",
        "rating": 4,
        "totalRatings": 247,
        "previousPrice": 931,
        "price": 931
    },
    {
        "id": 101,
        "category": "Laptop",
        "title": "HP Spectre x360 13.5\u201d OLED Laptop",
        "rating": 3,
        "totalRatings": 120,
        "previousPrice": 1405,
        "price": 1054,
        "discountTag": true,
        "discountPercent": 25
    },
    {
        "id": 102,
        "category": "Laptop",
        "title": "HP Spectre x360 13.5\u201d OLED Laptop",
        "rating": 4,
        "totalRatings": 69,
        "previousPrice": 1803,
        "price": 1803
    },
    {
        "id": 103,
        "category": "Mouse",
        "title": "Logitech MX Master 3S Wireless Mouse",
        "rating": 3,
        "totalRatings": 182,
        "previousPrice": 1967,
        "price": 1967
    },
    {
        "id": 104,
        "category": "Smartphone",
        "title": "Google Pixel 8 Pro 128GB",
        "rating": 4,
        "totalRatings": 497,
        "previousPrice": 1610,
        "price": 1610
    },
    {
        "id": 105,
        "category": "Headphone",
        "title": "Sennheiser HD 660S Open Back Headphones",
        "rating": 5,
        "totalRatings": 203,
        "previousPrice": 1988,
        "price": 1988
    },
    {
        "id": 106,
        "category": "Laptop",
        "title": "Apple MacBook Pro 14\u201d M2 Chip",
        "rating": 5,
        "totalRatings": 302,
        "previousPrice": 936,
        "price": 655,
        "discountTag": true,
        "discountPercent": 30
    },
    {
        "id": 107,
        "category": "Mouse",
        "title": "SteelSeries Rival 5 Wired Gaming Mouse",
        "rating": 5,
        "totalRatings": 219,
        "previousPrice": 1187,
        "price": 1187
    },
    {
        "id": 108,
        "category": "Laptop",
        "title": "Dell XPS 15 Touchscreen Laptop",
        "rating": 3,
        "totalRatings": 499,
        "previousPrice": 1172,
        "price": 1113,
        "discountTag": true,
        "discountPercent": 5
    },
    {
        "id": 109,
        "category": "Monitor",
        "title": "Dell UltraSharp 27\u201d QHD IPS Monitor",
        "rating": 5,
        "totalRatings": 68,
        "previousPrice": 854,
        "price": 726,
        "discountTag": true,
        "discountPercent": 15
    },
    {
        "id": 110,
        "category": "Tablet",
        "title": "Apple iPad Pro 12.9\u201d M4 Chip",
        "rating": 3,
        "totalRatings": 349,
        "previousPrice": 874,
        "price": 656,
        "discountTag": true,
        "discountPercent": 25
    },
    {
        "id": 111,
        "category": "Headphone",
        "title": "Sony WH-1000XM5 Wireless Noise-Canceling Headphones",
        "rating": 5,
        "totalRatings": 243,
        "previousPrice": 421,
        "price": 400,
        "discountTag": true,
        "discountPercent": 5
    },
    {
        "id": 112,
        "category": "Smartphone",
        "title": "Google Pixel 8 Pro 128GB",
        "rating": 4,
        "totalRatings": 200,
        "previousPrice": 1555,
        "price": 1555
    },
    {
        "id": 113,
        "category": "Smartphone",
        "title": "Apple iPhone 15 Pro Max 256GB",
        "rating": 5,
        "totalRatings": 76,
        "previousPrice": 697,
        "price": 697
    },
    {
        "id": 114,
        "category": "Tablet",
        "title": "Microsoft Surface Pro 9 Intel Evo",
        "rating": 3,
        "totalRatings": 12,
        "previousPrice": 1746,
        "price": 1746
    },
    {
        "id": 115,
        "category": "Mouse",
        "title": "Logitech MX Master 3S Wireless Mouse",
        "rating": 5,
        "totalRatings": 494,
        "previousPrice": 1654,
        "price": 1571,
        "discountTag": true,
        "discountPercent": 5
    },
    {
        "id": 116,
        "category": "Tablet",
        "title": "Samsung Galaxy Tab S9 Ultra",
        "rating": 3,
        "totalRatings": 273,
        "previousPrice": 1503,
        "price": 1052,
        "discountTag": true,
        "discountPercent": 30
    },
    {
        "id": 117,
        "category": "Laptop",
        "title": "Dell XPS 15 Touchscreen Laptop",
        "rating": 4,
        "totalRatings": 324,
        "previousPrice": 1998,
        "price": 1998
    },
    {
        "id": 118,
        "category": "Smartphone",
        "title": "Apple iPhone 15 Pro Max 256GB",
        "rating": 5,
        "totalRatings": 35,
        "previousPrice": 1239,
        "price": 1239
    },
    {
        "id": 119,
        "category": "Keyboard",
        "title": "Razer Huntsman V2 Optical Gaming Keyboard",
        "rating": 3,
        "totalRatings": 267,
        "previousPrice": 830,
        "price": 706,
        "discountTag": true,
        "discountPercent": 15
    },
    {
        "id": 120,
        "category": "Headphone",
        "title": "Sennheiser HD 660S Open Back Headphones",
        "rating": 5,
        "totalRatings": 149,
        "previousPrice": 1587,
        "price": 1587
    },
    {
        "id": 121,
        "category": "Mouse",
        "title": "Razer DeathAdder V3 Pro Gaming Mouse",
        "rating": 4,
        "totalRatings": 247,
        "previousPrice": 931,
        "price": 931
    },
    {
        "id": 122,
        "category": "Laptop",
        "title": "HP Spectre x360 13.5\u201d OLED Laptop",
        "rating": 3,
        "totalRatings": 120,
        "previousPrice": 1405,
        "price": 1054,
        "discountTag": true,
        "discountPercent": 25
    },
    {
        "id": 123,
        "category": "Laptop",
        "title": "HP Spectre x360 13.5\u201d OLED Laptop",
        "rating": 4,
        "totalRatings": 69,
        "previousPrice": 1803,
        "price": 1803
    },
    {
        "id": 124,
        "category": "Mouse",
        "title": "Logitech MX Master 3S Wireless Mouse",
        "rating": 3,
        "totalRatings": 182,
        "previousPrice": 1967,
        "price": 1967
    },
    {
        "id": 125,
        "category": "Smartphone",
        "title": "Google Pixel 8 Pro 128GB",
        "rating": 4,
        "totalRatings": 497,
        "previousPrice": 1610,
        "price": 1610
    },
    {
        "id": 126,
        "category": "Headphone",
        "title": "Sennheiser HD 660S Open Back Headphones",
        "rating": 5,
        "totalRatings": 203,
        "previousPrice": 1988,
        "price": 1988
    },
    {
        "id": 127,
        "category": "Laptop",
        "title": "Apple MacBook Pro 14\u201d M2 Chip",
        "rating": 5,
        "totalRatings": 302,
        "previousPrice": 936,
        "price": 655,
        "discountTag": true,
        "discountPercent": 30
    },
    {
        "id": 128,
        "category": "Mouse",
        "title": "SteelSeries Rival 5 Wired Gaming Mouse",
        "rating": 5,
        "totalRatings": 219,
        "previousPrice": 1187,
        "price": 1187
    },
    {
        "id": 129,
        "category": "Laptop",
        "title": "Dell XPS 15 Touchscreen Laptop",
        "rating": 3,
        "totalRatings": 499,
        "previousPrice": 1172,
        "price": 1113,
        "discountTag": true,
        "discountPercent": 5
    },
    {
        "id": 130,
        "category": "Monitor",
        "title": "Dell UltraSharp 27\u201d QHD IPS Monitor",
        "rating": 5,
        "totalRatings": 68,
        "previousPrice": 854,
        "price": 726,
        "discountTag": true,
        "discountPercent": 15
    },
    {
        "id": 131,
        "category": "Tablet",
        "title": "Apple iPad Pro 12.9\u201d M4 Chip",
        "rating": 3,
        "totalRatings": 349,
        "previousPrice": 874,
        "price": 656,
        "discountTag": true,
        "discountPercent": 25
    },
    {
        "id": 132,
        "category": "Headphone",
        "title": "Sony WH-1000XM5 Wireless Noise-Canceling Headphones",
        "rating": 5,
        "totalRatings": 243,
        "previousPrice": 421,
        "price": 400,
        "discountTag": true,
        "discountPercent": 5
    },
    {
        "id": 133,
        "category": "Smartphone",
        "title": "Google Pixel 8 Pro 128GB",
        "rating": 4,
        "totalRatings": 200,
        "previousPrice": 1555,
        "price": 1555
    },
    {
        "id": 134,
        "category": "Smartphone",
        "title": "Apple iPhone 15 Pro Max 256GB",
        "rating": 5,
        "totalRatings": 76,
        "previousPrice": 697,
        "price": 697
    },
    {
        "id": 135,
        "category": "Tablet",
        "title": "Microsoft Surface Pro 9 Intel Evo",
        "rating": 3,
        "totalRatings": 12,
        "previousPrice": 1746,
        "price": 1746
    },
    {
        "id": 136,
        "category": "Mouse",
        "title": "Logitech MX Master 3S Wireless Mouse",
        "rating": 5,
        "totalRatings": 494,
        "previousPrice": 1654,
        "price": 1571,
        "discountTag": true,
        "discountPercent": 5
    },
    {
        "id": 137,
        "category": "Tablet",
        "title": "Samsung Galaxy Tab S9 Ultra",
        "rating": 3,
        "totalRatings": 273,
        "previousPrice": 1503,
        "price": 1052,
        "discountTag": true,
        "discountPercent": 30
    },
    {
        "id": 138,
        "category": "Laptop",
        "title": "Dell XPS 15 Touchscreen Laptop",
        "rating": 4,
        "totalRatings": 324,
        "previousPrice": 1998,
        "price": 1998
    },
    {
        "id": 139,
        "category": "Smartphone",
        "title": "Apple iPhone 15 Pro Max 256GB",
        "rating": 5,
        "totalRatings": 35,
        "previousPrice": 1239,
        "price": 1239
    },
    {
        "id": 140,
        "category": "Keyboard",
        "title": "Razer Huntsman V2 Optical Gaming Keyboard",
        "rating": 3,
        "totalRatings": 267,
        "previousPrice": 830,
        "price": 706,
        "discountTag": true,
        "discountPercent": 15
    },
    {
        "id": 141,
        "category": "Headphone",
        "title": "Sennheiser HD 660S Open Back Headphones",
        "rating": 5,
        "totalRatings": 149,
        "previousPrice": 1587,
        "price": 1587
    },
    {
        "id": 142,
        "category": "Monitor",
        "title": "Dell UltraSharp 27\u201d QHD IPS Monitor",
        "rating": 5,
        "totalRatings": 68,
        "previousPrice": 854,
        "price": 726,
        "discountTag": true,
        "discountPercent": 15
    },
    {
        "id": 143,
        "category": "Tablet",
        "title": "Apple iPad Pro 12.9\u201d M4 Chip",
        "rating": 3,
        "totalRatings": 349,
        "previousPrice": 874,
        "price": 656,
        "discountTag": true,
        "discountPercent": 25
    },
    {
        "id": 144,
        "category": "Headphone",
        "title": "Sony WH-1000XM5 Wireless Noise-Canceling Headphones",
        "rating": 5,
        "totalRatings": 243,
        "previousPrice": 421,
        "price": 400,
        "discountTag": true,
        "discountPercent": 5
    },
    {
        "id": 145,
        "category": "Smartphone",
        "title": "Google Pixel 8 Pro 128GB",
        "rating": 4,
        "totalRatings": 200,
        "previousPrice": 1555,
        "price": 1555
    },
    {
        "id": 146,
        "category": "Smartphone",
        "title": "Apple iPhone 15 Pro Max 256GB",
        "rating": 5,
        "totalRatings": 76,
        "previousPrice": 697,
        "price": 697
    },
    {
        "id": 147,
        "category": "Tablet",
        "title": "Microsoft Surface Pro 9 Intel Evo",
        "rating": 3,
        "totalRatings": 12,
        "previousPrice": 1746,
        "price": 1746
    },
    {
        "id": 148,
        "category": "Mouse",
        "title": "Logitech MX Master 3S Wireless Mouse",
        "rating": 5,
        "totalRatings": 494,
        "previousPrice": 1654,
        "price": 1571,
        "discountTag": true,
        "discountPercent": 5
    },
    {
        "id": 149,
        "category": "Tablet",
        "title": "Samsung Galaxy Tab S9 Ultra",
        "rating": 3,
        "totalRatings": 273,
        "previousPrice": 1503,
        "price": 1052,
        "discountTag": true,
        "discountPercent": 30
    },
    {
        "id": 150,
        "category": "Laptop",
        "title": "Dell XPS 15 Touchscreen Laptop",
        "rating": 4,
        "totalRatings": 324,
        "previousPrice": 1998,
        "price": 1998
    },
    {
        "id": 151,
        "category": "Smartphone",
        "title": "Apple iPhone 15 Pro Max 256GB",
        "rating": 5,
        "totalRatings": 35,
        "previousPrice": 1239,
        "price": 1239
    },
    {
        "id": 152,
        "category": "Keyboard",
        "title": "Razer Huntsman V2 Optical Gaming Keyboard",
        "rating": 3,
        "totalRatings": 267,
        "previousPrice": 830,
        "price": 706,
        "discountTag": true,
        "discountPercent": 15
    },
    {
        "id": 153,
        "category": "Headphone",
        "title": "Sennheiser HD 660S Open Back Headphones",
        "rating": 5,
        "totalRatings": 149,
        "previousPrice": 1587,
        "price": 1587
    },
    {
        "id": 154,
        "category": "Smartphone",
        "title": "Apple iPhone 15 Pro Max 256GB",
        "rating": 5,
        "totalRatings": 76,
        "previousPrice": 697,
        "price": 697
    },
    {
        "id": 155,
        "category": "Tablet",
        "title": "Microsoft Surface Pro 9 Intel Evo",
        "rating": 3,
        "totalRatings": 12,
        "previousPrice": 1746,
        "price": 1746
    },
    {
        "id": 156,
        "category": "Mouse",
        "title": "Logitech MX Master 3S Wireless Mouse",
        "rating": 5,
        "totalRatings": 494,
        "previousPrice": 1654,
        "price": 1571,
        "discountTag": true,
        "discountPercent": 5
    },
    {
        "id": 157,
        "category": "Tablet",
        "title": "Samsung Galaxy Tab S9 Ultra",
        "rating": 3,
        "totalRatings": 273,
        "previousPrice": 1503,
        "price": 1052,
        "discountTag": true,
        "discountPercent": 30
    },
    {
        "id": 158,
        "category": "Laptop",
        "title": "Dell XPS 15 Touchscreen Laptop",
        "rating": 4,
        "totalRatings": 324,
        "previousPrice": 1998,
        "price": 1998
    },
    {
        "id": 159,
        "category": "Smartphone",
        "title": "Apple iPhone 15 Pro Max 256GB",
        "rating": 5,
        "totalRatings": 35,
        "previousPrice": 1239,
        "price": 1239
    },
    {
        "id": 160,
        "category": "Keyboard",
        "title": "Razer Huntsman V2 Optical Gaming Keyboard",
        "rating": 3,
        "totalRatings": 267,
        "previousPrice": 830,
        "price": 706,
        "discountTag": true,
        "discountPercent": 15
    },
];

export default productsList;