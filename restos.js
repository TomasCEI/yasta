let totalRest = 0;

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
