//  //devuelve el primer elemento que encuentra
//  let restauranteElegido=restaurantes.find(
//     (resto) => resto.id == Number(miId)
// );

// // devuelve una lista
// let restaurantesPremium=restaurantes.filter(
//     (resto) => (resto.premium == true)
// );

// //devuelve una lista
// let restaurantesVeganos=restaurantes.filter(
//     (resto) => (resto.categorias.includes("vegano"))
// )

// const parrafo=document.getElementById("contenidoRestaurante");

// restaurantesPremium.forEach( resto => {
//     parrafo.innerHTML+=`<div class="premium">${resto.nombre}</div>`;
// })

// const veganTest = restaurante => {
//     const sanitizedCategorias = restaurante.categorias.map(categoria => categoria.toLowerCase());
//     console.log(sanitizedCategorias)
//     return sanitizedCategorias.includes("vegano")
// }


const params = new URLSearchParams(document.location.search);
const currentRestaurant = restaurantes.find(restaurante => restaurante.id === Number(params.get("id")));
const premiumRestaurants = restaurantes.filter(restaurante => restaurante.premium);
const veganRestaurants = restaurantes.filter(restaurante => restaurante.categorias.includes("Vegano"));
// console.log({currentRestaurant, premiumRestaurants, veganRestaurants});

const contenidoRestaurante = document.getElementById("contenidoRestaurante");

const getRestaurantCategoriesSpans = (categories) => {
    return categories.map(categorie => {
        return `<span class="categoria"># ${categorie}</span>`
    }).join("")
} 

const getRestaurantImg = (img, alt = "decoration") => {
    return `<img src="${img}" alt="${alt}"/>`
}

const getRestaurantInformationDiv = (restaurant) => {
    return (
        `<div class="restaurantInformation">
            <h3>${getRestaurantCategoriesSpans(restaurant.categorias)}</h3>
            <h3>${restaurant.contacto.direccion}</h3>
            <h3>${restaurant.contacto.telefono}</h3>
            <a href="./restaurante.html?id=${restaurant.id}">Ver Restaurante</a>          
        </div>`
    )
}

contenidoRestaurante.innerHTML = (
    `
        <div class="restaurantCard">
            ${getRestaurantImg(currentRestaurant.img)}
            ${getRestaurantInformationDiv(currentRestaurant)}
        </div>
    `
)