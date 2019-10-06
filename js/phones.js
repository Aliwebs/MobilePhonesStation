const phones = [{
    phone: "Samsung Galaxy S9",
    img: [
      "../assets/SamsungGalaxyS9/",
      "../assets/SamsungGalaxyS9/",
      "../assets/SamsungGalaxyS9/",
      "../assets/SamsungGalaxyS9/",
      "../assets/SamsungGalaxyS9/"
    ],
    colors: ['LightSlateGray', 'Blue', 'Purple', 'Black'],
    capacity: [64],
    stock: true,
    screen: 5.8,
    display: "5.8-inch Widescreen Quad HD display",
    fetures: ['Main camera with dual aperture', '960fps super slow motion', 'Intelligent Scan, facial recognition for extra security'],
    battery: 22,
    link: "https://www.samsung.com/uk/smartphones/galaxy-s9/",
    price: {"64":739.00}
  },
  {
    phone: "Google Pixel 3XL",
    img: [
      "../assets/GooglePixel3XL/",
      "../assets/GooglePixel3XL/",
      "../assets/GooglePixel3XL/",
      "../assets/GooglePixel3XL/",
      "../assets/GooglePixel3XL/"
    ],
    colors: ['White', 'Black', 'Pink'],
    capacity: [64, 128],
    stock: true,
    screen: 5.5,
    display: "5.5-inch FHD+ display",
    fetures: ['12MP camera', '64GB or 128GB internal storage'],
    battery: 26,
    link: "https://store.google.com/product/pixel_3",
    price: {"64":869.00,"128":959.00}
  },
  {
    phone: "Huawei Mate 20 Pro",
    img: [
      "../assets/huaweiMate20Pro/",
      "../assets/huaweiMate20Pro/",
      "../assets/huaweiMate20Pro/",
      "../assets/huaweiMate20Pro/",
      "../assets/huaweiMate20Pro/",
      "../assets/huaweiMate20Pro/"
    ],
    colors: ['Black', 'Green', 'Purple'],
    capacity: [128],
    stock: false,
    screen: 6.39,
    display: "6.39-inch Full HD+ display",
    fetures: ['Tri-lens 40MP + 20MP + 8MP camera', '128GB internal storage', 'World’s first wireless reverse charge - use your device to charge others'],
    battery: 29.8,
    link: "https://consumer.huawei.com/uk/phones/mate20-pro/",
    price: {"128":799.99}
  },
  {
    phone: "Huawei P20 Pro",
    img: [
      "../assets/HuaweiP20Pro/",
      "../assets/HuaweiP20Pro/",
      "../assets/HuaweiP20Pro/",
      "../assets/HuaweiP20Pro/",
      "../assets/HuaweiP20Pro/",
      "../assets/HuaweiP20Pro/"
    ],
    colors: ['Blue', 'Black', 'Purple'],
    capacity: [128],
    stock: true,
    screen: 6.1,
    display: "6.1-inch OLED FullView HD+ display",
    fetures: ['40MP + 20MP + 8MP triple lens camera', '128GB internal storage'],
    battery: 25,
    link: "https://consumer.huawei.com/uk/phones/m/p20/",
    price: {"128":599.99}
  },
  {
    phone: "iPhone XR",
    img: [
      "../assets/iphoneXR/",
      "../assets/iphoneXR/",
      "../assets/iphoneXR/"
    ],
    colors: ['Black', 'White', 'Blue', 'Red', 'Coral', 'Yellow'],
    capacity: [64, 128, 256],
    stock: true,
    screen: 6.1,
    display: "6.1-inch Liquid Retina HD display",
    fetures: ['12MP camera', '64GB, 128GB or 256GB internal storage'],
    battery: 25,
    link: "https://www.apple.com/uk/iphone-xr/",
    price: {"64":749.99,"128":799.00,"256":899.00}
  },
  {
    phone: "OPPO RX17 Neo",
    img: [
      "../assets/opporx17neo/",
      "../assets/opporx17neo/",
      "../assets/opporx17neo/",
      "../assets/opporx17neo/",
      "../assets/opporx17neo/"
    ],
    colors: ['Blue', 'Red'],
    capacity: [128],
    stock: true,
    screen: 6.4,
    display: "6.4-inch Full HD display",
    fetures: ['16MP + 2MP dual camera', '128GB internal storage'],
    battery: 30,
    link: "https://www.oppo.com/uk/smartphone-rx17-neo/",
    price: {"128":319.00}
  },
  {
    phone: "Samsung Note 9",
    img: [
      "../assets/SamsungNote9/",
      "../assets/SamsungNote9/",
      "../assets/SamsungNote9/",
      "../assets/SamsungNote9/",
      "../assets/SamsungNote9/",
      "../assets/SamsungNote9/"
    ],
    colors: ['Black', 'Blue', 'Lavender'],
    capacity: [128],
    stock: true,
    screen: 6.4,
    display: "6.4-inch Quad HD+ display",
    fetures: ['12MP + 12MP dual camera', '128GB or 512GB internal storage that can be expanded up to 1TB with microSD*'],
    battery: 29,
    link: "https://www.samsung.com/my/smartphones/galaxy-note9/specs/",
    price: {"128":799.99}
  },
  {
    phone: "Nokia 7.1",
    img: [
      "../assets/Nokia7.1/",
      "../assets/Nokia7.1/",
      "../assets/Nokia7.1/",
      "../assets/Nokia7.1/",
      "../assets/Nokia7.1/"
    ],
    colors: ['Blue'],
    capacity: [32],
    stock: true,
    screen: 5.8,
    display: "5.8-inch Full HD display",
    fetures: ['12MP + 5MP rear camera', '32GB internal storage', 'Android One, the best of Android Software'],
    battery: 19.5,
    link: "https://www.nokia.com/phones/en_gb/nokia-7",
    price: {"32":199.99}
  }, {
    phone: "iPhone XS",
    img: [
      "../assets/iPhoneXS/",
      "../assets/iPhoneXS/",
      "../assets/iPhoneXS/"
    ],
    colors: ['Gold', 'SlateGray', 'Silver'],
    capacity: [64, 256, 512],
    stock: true,
    screen: 5.8,
    display: "5.8-inch Super Retina HD display",
    fetures: ['12MP dual lens camera'],
    battery: 20,
    link: "https://www.apple.com/uk/iphone-xs/",
    price: {"64":999.00, "256":999.00,"512":1149.00}
  }, {
    phone: "iPhone 8",
    img: [
      "../assets/iPhone8/",
      "../assets/iPhone8/",
      "../assets/iPhone8/"
    ],
    colors: ['Gold', 'Silver', 'SlateGray'],
    capacity: [64, 256],
    stock: true,
    screen: 4.7,
    display: "4.7-inch Retina HD display",
    fetures: ['7MP front-facing lens'],
    battery: 14,
    link: "https://www.apple.com/uk/shop/buy-iphone/iphone-8",
    price: {"64":599.00,"256":1149.00}
  }, {
    phone: "Motorola G7 Plus",
    img: [
      "../assets/MotorolaG7Plus/",
      "../assets/MotorolaG7Plus/",
      "../assets/MotorolaG7Plus/",
      "../assets/MotorolaG7Plus/",
      "../assets/MotorolaG7Plus/",
      "../assets/MotorolaG7Plus/"
    ],
    colors: ['Red', 'Blue'],
    capacity: [64],
    stock: true,
    link: "https://www.motorola.co.uk/products/moto-g-plus-gen-7",
    price: {"64":269.99}
  }, {
    phone: "Motorola G7 Power",
    img: [
      "../assets/MotorolaG7Power/",
      "../assets/MotorolaG7Power/",
      "../assets/MotorolaG7Power/",
      "../assets/MotorolaG7Power/",
      "../assets/MotorolaG7Power/",
      "../assets/MotorolaG7Power/"
    ],
    colors: ['Violet', 'Black'],
    capacity: [64],
    stock: true,
    link: "https://www.motorola.com/us/products/moto-g-power-gen-7",
    price: {"64":179.99}
  }
];