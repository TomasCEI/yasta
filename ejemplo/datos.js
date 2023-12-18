const datos= {
    cant: 3,
    restos: [
        {
            id: 25,
            nombre: "El Boliche de Alberto",
            tf_premium: true,
            imagen: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudGV8ZW58MHx8MHx8fDA%3D",
            descripcion:"Las mejores Carnes de la ciudad",
            contacto: {
                tel: "666-1234",
                direccion: "San Martin 1001",
                ciudad: "Bariloche",
                cp: 234123,
            },
            categorias: ["carnes", "comida regional", "almuerzos"]
        },
        {
            id: 33,
            nombre: "Heladeria Juaja",
            tf_premium: true,
            imagen: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnRlfGVufDB8fDB8fHww",
            descripcion:"Helados artesanales",
            contacto: {
                tel: "555-45345",
                direccion: "Mitre 891",
                ciudad: "Bariloche",
                cp: 234123,
            },
            categorias: ["helados", "postres"]
        },
        {
            id: 983,
            nombre: "Manush Bar",
            tf_premium: false,
            imagen: "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3RhdXJhbnRlfGVufDB8fDB8fHww",
            descripcion:"La mejor Cerveza artesanal",
            contacto: {
                tel: "444-4321",
                direccion: "Pioneros km 2.4",
                ciudad: "Bariloche",
                cp: 234123,
            },
            categorias: ["cerveza", "tapas", "almuerzos"],
            categoriasFull: [
                {nombre: "cerveza", premium: true},
                {nombre: "tapas", premium: false},
                {nombre: "almuerzos", premium: true},
            ]
        },
    ] 
}