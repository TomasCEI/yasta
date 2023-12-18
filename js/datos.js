const restaurantes = [
  {
    id: 3124345341,
    premium: true,
    categorias: ["Carne", "Argentino"],
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    contacto: {
      direccion: "Calle 1, #6",
      telefono: 56756798,
    },
    menu: {
      entrantes: [{
        articulo: "Bruschettas a la caprese",
        precio: 7,
        articleImg: "https://www.istockphoto.com/es/foto/bruschetta-sobre-pan-de-masa-madre-tostada-gm1155216951-314422099",
      },
      {
        articulo: "Carpacio de hongos",
        precio: 12,
        articleImg: "https://www.istockphoto.com/es/foto/carpaccio-de-setas-con-pesto-de-albahaca-y-parmesano-y-pi%C3%B1ones-gm1352250677-427729755",
      },
      {
        articulo: "Ensaladilla rusa",
        precio: 8,
        articleImg: "https://www.istockphoto.com/es/foto/chef-ensaladilla-rusa-en-estudio-y-restaurante-gm1425175318-469708322",
      }],
      principales: [{
        articulo: "Berenjenas rellenas",
        precio: 7,
        articleImg: "https://www.istockphoto.com/es/foto/comida-tradicional-turca-rellena-de-berenjenas-carne-tomate-y-especias-karniyarik-gm1416188247-464214652",
      }, {
        articulo: "Asado de vegetales",
        precio: 12,
        articleImg: "https://www.istockphoto.com/es/foto/verduras-org%C3%A1nicas-frescas-en-una-caja-gm1220501461-357400805",
      }, {
        articulo: "Lasaña de verduras",
        precio: 8,
        articleImg: "https://www.istockphoto.com/es/foto/lasa%C3%B1a-de-espinaca-y-ricota-gm508652097-46232446",
      }],
      postres: [{
        articulo: "Helado",
        precio: 7,
        articleImg: "https://unsplash.com/photos/ice-cream-with-cherry-on-clear-glass-cup-xLskrI8Dw68",
      }, {
        articulo: "Pie de limón",
        precio: 12,
        articleImg: "https://www.istockphoto.com/es/foto/tarta-de-lim%C3%B3n-amarillo-cubierta-con-rodajas-frescas-de-lim%C3%B3n-y-lima-sobre-fondo-de-gm1391177961-447883981",
      }, {
        articulo: "Tarta de chocolate",
        precio: 8,
        articleImg: "https://unsplash.com/photos/chocolate-cake-with-strawberry-on-white-ceramic-plate-W6ytTMl-FGI",
      }],
      bebidas: [{
        articulo: "Refresco",
        precio: 7,
        articleImg: "https://unsplash.com/photos/orange-juice-in-clear-drinking-glass-a2oadNIBUW8",
      }, {
        articulo: "Cerveza",
        precio: 12,
        articleImg: "https://unsplash.com/photos/clear-glass-beer-mug-with-beer-3ORoQEJY9LA",
      }, {
        plato: "Agua mineral",
        precio: 8,
        articleImg: "https://unsplash.com/photos/person-holding-bottle-pouring-water-on-drinking-glass-4bFKX8G419Q",
      }]
    },
  },
  {
    id: 673231235,
    premium: false,
    categorias: ["Vegano", "Dieta"],
    articleImg: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    contacto: {
      direccion: "Calle Colorida, #7",
      telefono: 89696898,
    },
    menu: {
      entrantes: [{
        articulo: "Bruschettas a la caprese",
        precio: 7,
        articleImg: "https://www.istockphoto.com/es/foto/bruschetta-sobre-pan-de-masa-madre-tostada-gm1155216951-314422099",
      },
      {
        articulo: "Carpacio de hongos",
        precio: 12,
        articleImg: "https://www.istockphoto.com/es/foto/carpaccio-de-setas-con-pesto-de-albahaca-y-parmesano-y-pi%C3%B1ones-gm1352250677-427729755",
      },
      {
        articulo: "Ensaladilla rusa",
        precio: 8,
        articleImg: "https://www.istockphoto.com/es/foto/chef-ensaladilla-rusa-en-estudio-y-restaurante-gm1425175318-469708322",
      }],
      principales: [{
        articulo: "Berenjenas rellenas",
        precio: 7,
        articleImg: "https://www.istockphoto.com/es/foto/comida-tradicional-turca-rellena-de-berenjenas-carne-tomate-y-especias-karniyarik-gm1416188247-464214652",
      }, {
        articulo: "Asado de vegetales",
        precio: 12,
        articleImg: "https://www.istockphoto.com/es/foto/verduras-org%C3%A1nicas-frescas-en-una-caja-gm1220501461-357400805",
      }, {
        articulo: "Lasaña de verduras",
        precio: 8,
        articleImg: "https://www.istockphoto.com/es/foto/lasa%C3%B1a-de-espinaca-y-ricota-gm508652097-46232446",
      }],
      postres: [{
        articulo: "Helado",
        precio: 7,
        articleImg: "https://unsplash.com/photos/ice-cream-with-cherry-on-clear-glass-cup-xLskrI8Dw68",
      }, {
        articulo: "Pie de limón",
        precio: 12,
        articleImg: "https://www.istockphoto.com/es/foto/tarta-de-lim%C3%B3n-amarillo-cubierta-con-rodajas-frescas-de-lim%C3%B3n-y-lima-sobre-fondo-de-gm1391177961-447883981",
      }, {
        articulo: "Tarta de chocolate",
        precio: 8,
        articleImg: "https://unsplash.com/photos/chocolate-cake-with-strawberry-on-white-ceramic-plate-W6ytTMl-FGI",
      }],
      bebidas: [{
        articulo: "Refresco",
        precio: 7,
        articleImg: "https://unsplash.com/photos/orange-juice-in-clear-drinking-glass-a2oadNIBUW8",
      }, {
        articulo: "Cerveza",
        precio: 12,
        articleImg: "https://unsplash.com/photos/clear-glass-beer-mug-with-beer-3ORoQEJY9LA",
      }, {
        plato: "Agua mineral",
        precio: 8,
        articleImg: "https://unsplash.com/photos/person-holding-bottle-pouring-water-on-drinking-glass-4bFKX8G419Q",
      }]
    },
  },
  {
    id: 764524352,
    premium: true,
    categorias: ["Italiano", "Postres"],
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    contacto: {
      direccion: "Calle Pintoresco, #8",
      telefono: 89067898,
    },
    menu: {
      entrantes: [{
        articulo: "Bruschettas a la caprese",
        precio: 7,
        articleImg: "https://www.istockphoto.com/es/foto/bruschetta-sobre-pan-de-masa-madre-tostada-gm1155216951-314422099",
      },
      {
        articulo: "Carpacio de hongos",
        precio: 12,
        articleImg: "https://www.istockphoto.com/es/foto/carpaccio-de-setas-con-pesto-de-albahaca-y-parmesano-y-pi%C3%B1ones-gm1352250677-427729755",
      },
      {
        articulo: "Ensaladilla rusa",
        precio: 8,
        articleImg: "https://www.istockphoto.com/es/foto/chef-ensaladilla-rusa-en-estudio-y-restaurante-gm1425175318-469708322",
      }],
      principales: [{
        articulo: "Berenjenas rellenas",
        precio: 7,
        articleImg: "https://www.istockphoto.com/es/foto/comida-tradicional-turca-rellena-de-berenjenas-carne-tomate-y-especias-karniyarik-gm1416188247-464214652",
      }, {
        articulo: "Asado de vegetales",
        precio: 12,
        articleImg: "https://www.istockphoto.com/es/foto/verduras-org%C3%A1nicas-frescas-en-una-caja-gm1220501461-357400805",
      }, {
        articulo: "Lasaña de verduras",
        precio: 8,
        articleImg: "https://www.istockphoto.com/es/foto/lasa%C3%B1a-de-espinaca-y-ricota-gm508652097-46232446",
      }],
      postres: [{
        articulo: "Helado",
        precio: 7,
        articleImg: "https://unsplash.com/photos/ice-cream-with-cherry-on-clear-glass-cup-xLskrI8Dw68",
      }, {
        articulo: "Pie de limón",
        precio: 12,
        articleImg: "https://www.istockphoto.com/es/foto/tarta-de-lim%C3%B3n-amarillo-cubierta-con-rodajas-frescas-de-lim%C3%B3n-y-lima-sobre-fondo-de-gm1391177961-447883981",
      }, {
        articulo: "Tarta de chocolate",
        precio: 8,
        articleImg: "https://unsplash.com/photos/chocolate-cake-with-strawberry-on-white-ceramic-plate-W6ytTMl-FGI",
      }],
      bebidas: [{
        articulo: "Refresco",
        precio: 7,
        articleImg: "https://unsplash.com/photos/orange-juice-in-clear-drinking-glass-a2oadNIBUW8",
      }, {
        articulo: "Cerveza",
        precio: 12,
        articleImg: "https://unsplash.com/photos/clear-glass-beer-mug-with-beer-3ORoQEJY9LA",
      }, {
        plato: "Agua mineral",
        precio: 8,
        articleImg: "https://unsplash.com/photos/person-holding-bottle-pouring-water-on-drinking-glass-4bFKX8G419Q",
      }]
    },
  },
]
