let totalRest = 0;
let totalMenu = 0;

const restaurantes = [
    {
        id:"",
        nombre:"Calamar a la Romina",
        imagen:"https://media.istockphoto.com/id/1288064106/es/foto/interior-del-restaurante-vac%C3%ADo.jpg?s=612x612&w=0&k=20&c=ebs-kGCosWx8T1q9TbePSL0Li8ehtZ-5Lla_UzDhCNM=",
        direccion:"Portal de Belen nº2",
        telefono:"+34 666 666 666",
        descrip:"Fusión del mar con la comida saludable para ofrecer una experiencia culinaria refrescante",
        categoria:["vegetariano","pescado"]
    },{
        id:"",
        nombre:"¿No Tomás nada?",
        imagen:"https://media.istockphoto.com/id/1146671966/es/foto/cuatro-j%C3%B3venes-amigas-reuni%C3%B3n-para-bebidas-y-comida-haciendo-un-brindis-en-el-restaurante.jpg?s=612x612&w=0&k=20&c=LlhFCl9Qi2gs5sY0S_AB5p9QEY0OdaMwK4ZRyw_M8bo=",
        direccion:"Plaza Cristina ruiDera",
        telefono:"+34 666 666 555",
        descrip:"La comodidad de la comida de toda la vida y la extravagancia de la cultura argentina que hará que tu paladar se derrita",
        categoria:["tapas","arganetina"]
    },{
        id:"",
        nombre:"A Kike hay para comer",
        imagen:"https://media.istockphoto.com/id/1343561122/es/foto/primer-plano-de-un-joven-grupo-de-amigos-que-pasan-y-sirven-comida-mientras-disfrutan-juntos.jpg?s=612x612&w=0&k=20&c=o8YLixClBzPoWAeOsq25IcbwcrjRa4tdAgF_hzns4jY=",
        direccion:"Avenida Al bar",
        telefono:"+34 666 666 444",
        descrip:"Rápido, sencillo y al gusto de todo el mundo.",
        categoria:["comida rápida","innovador"]
    },{
        id:"",
        nombre:"Alta coSina",
        imagen:"https://media.istockphoto.com/id/1388791611/es/foto/estilo-teppanyaki.jpg?s=612x612&w=0&k=20&c=U-IRyNbNwsxH4XWE2pjFRg6XM1Xhx9kpZHgk0nV20jk=",
        direccion:"Calle CEI sin Wifi",
        telefono:"+34 666 666 333",
        descrip:"Deleitate con los platos más cuidados y mejor elaborados de todo el mundo. Experimentación y profesionalidad",
        categoria:["alta cocina","innovador"]
    },{
        id:"",
        nombre:"Pasta a la Belenyesa",
        imagen:"https://media.istockphoto.com/id/1180926063/es/foto/propietario-de-una-peque%C3%B1a-empresa-en-la-entrada-mirando-la-c%C3%A1mara.jpg?s=612x612&w=0&k=20&c=y67wRjEEHjQPS8Blp4JaL2W9qoOJFf4dchOmlC4Pyng=",
        direccion:"Placita de Pablito",
        telefono:"+34 666 666 222",
        descrip:"La pasta di la mama!!! Al forno di pietra! OH QUE DELICIA",
        categoria:["pasta","vegetariano"]
    }
]   //Agrego un id a cada elemento
    restaurantes.forEach((r)=>{
        totalRest++;
        r.id = totalRest;
    })

const menus = [
    {
        id:"",
        restaurante:"Calamar a la Romina",
        nombre:"Patatas Bravas",
        categoria:"entrante",
        precio:3.5,
        descrip:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, perspiciatis ipsum adipisci placeat iste in error odit, omnis harum, natus facere voluptatibus eos temporibus cumque. Esse animi eveniet sint aperiam!",
        img:"https://cdn.pixabay.com/photo/2023/10/05/11/47/sweet-potatoes-8295778_640.jpg",
        cantidad: 0

    },  {
        id:"",
        restaurante:"¿No Tomás nada?",
        nombre:"Asado argentino",
        categoria:"principal",
        precio:22,
        descrip:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, perspiciatis ipsum adipisci placeat iste in error odit, omnis harum, natus facere voluptatibus eos temporibus cumque. Esse animi eveniet sint aperiam!",
        img:"https://media.istockphoto.com/id/1812941467/es/foto/costillas-de-ternera-y-costillas-de-cerdo-a-la-parrilla-costillas-de-ternera-y-costillas-de.jpg?s=612x612&w=0&k=20&c=9JwEpw9Qxscs2FFKe0wrnNalu3Pnl40fg2UdA7woBF4=",
        cantidad: 0

    },  {
        id:"",
        restaurante:"A Kike hay para comer",
        nombre:"Hamburguesa de pollo",
        categoria:"principal",
        precio:10,
        descrip:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, perspiciatis ipsum adipisci placeat iste in error odit, omnis harum, natus facere voluptatibus eos temporibus cumque. Esse animi eveniet sint aperiam!",
        img:"https://cdn.pixabay.com/photo/2023/05/29/17/01/hamburger-8026582_640.jpg",
        cantidad: 0

    },  {
        id:"",
        restaurante:"Alta coSina",
        nombre:"Falso flan de naranja en suelo de cacao",
        categoria:"postre",
        precio:18,
        descrip:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, perspiciatis ipsum adipisci placeat iste in error odit, omnis harum, natus facere voluptatibus eos temporibus cumque. Esse animi eveniet sint aperiam!",
        img:"https://cdn.pixabay.com/photo/2014/07/21/23/00/orange-cake-398966_640.jpg",
        cantidad: 0

    },{
        id:"",
        restaurante:"Alta coSina",
        nombre:"Falso flan de naranja en suelo de cacao 2",
        categoria:"postre",
        precio:30,
        descrip:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, perspiciatis ipsum adipisci placeat iste in error odit, omnis harum, natus facere voluptatibus eos temporibus cumque. Esse animi eveniet sint aperiam!",
        img:"https://cdn.pixabay.com/photo/2014/07/21/23/00/orange-cake-398966_640.jpg",
        cantidad: 0

    },  {
        id:"",
        restaurante:"Pasta a la Belenyesa",
        nombre:"Lasaña de la nona",
        categoria:"principal",
        precio:13.50,
        descrip:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, perspiciatis ipsum adipisci placeat iste in error odit, omnis harum, natus facere voluptatibus eos temporibus cumque. Esse animi eveniet sint aperiam!",
        img:"https://cdn.pixabay.com/photo/2021/04/06/14/43/pasta-6156586_640.jpg",
        cantidad: 0

    },
]

menus.forEach((m)=>{
    totalMenu++;
    m.id = totalMenu;
})

