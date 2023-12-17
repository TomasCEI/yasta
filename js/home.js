const restaurantCards = document.getElementById("restaurantCards");

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

// console.log(getRestaurantInformationDiv(restaurantes[2]))

const cards = restaurantes.map(restaurante => {
    return (
        `
            <div class="restaurantCard">
                ${getRestaurantImg(restaurante.img)}
                ${getRestaurantInformationDiv(restaurante)}
            </div>
        `
    )
}).join("")

restaurantCards.innerHTML = cards