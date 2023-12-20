const params = new URLSearchParams(document.location.search);
const currentRestaurant = restaurantes.find(restaurante => restaurante.id === Number(params.get("id")));

//Get restaurant information functions
const restaurantMenuContainer = document.getElementById("restaurantMenuContainer");

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
            <h1>${restaurant.name}</h3>
            <h3>${getRestaurantCategoriesSpans(restaurant.categorias)}</h3>
            <h3>Dirección: ${restaurant.contacto.direccion}</h3>
            <h3>Teléfono: ${restaurant.contacto.telefono}</h3>       
        </div>`
    )
}



//Get restaurant menu information functions
const menuCards = document.getElementById("restaurantMenuContainer");

const getEntrantesInformationDiv = (entrante) => {
    return (
        `<div class="menuEntrantesCard">
        <img src="${entrante.articleImg}" alt="${entrante.item}"/>
            <h3>${entrante.item}</h3>
            <span>$ ${entrante.price}</span>
            <form action="input">
                <Button>Agregar al carrito</Button>
            </form>
        </div>`
    )
}

const getInformationDiv = (plato) => {
    return (
        `<div class="menuEntrantesCard">
        <img src="${plato.articleImg}" alt="${plato.item}"/>
            <h3>${plato.item}</h3>
            <span>$ ${plato.price}</span>
            <form action="input">
                <Button>Agregar al carrito</Button>
            </form>
        </div>`
    )
}

//console.log(restaurantes[0].menu.entrantes.map((entrante) => getEntrantesInformationDiv(entrante)))
//console.log(restaurantes[0].menu.bebidas[0].articleImg)
//console.log(restaurantes[0].menu.entrantes.map(getEntrantesInformationDiv).join(""))
//console.log(restaurantes[0].menu.principales.map(getPlatosPrincipalesInformationDiv).join(""))
//console.log(restaurantes[0].menu.postres.map(getPostresInformationDiv).join(""))
//console.log(restaurantes[0].menu.bebidas.map(getBebidasInformationDiv).join(""))

const cards = restaurantes.map(restaurante => {

    const menu = restaurante.menu;

    return (
        `
            <div class="menuCard"> 
                ${getRestaurantImg(restaurante.img)}
                ${getRestaurantInformationDiv(restaurante)}

                <h2>ENTRANTES</h2>
                ${menu.entrantes.map((entrantes) =>
            getInformationDiv(entrantes)
        ).join("")}
                <h2>PLATOS PRINCIPALES</h2>
                    ${menu.principales.map((principales) =>
            getInformationDiv(principales)
        ).join("")}
                        <h2>POSTRES</h2>
                ${menu.postres.map((postres) =>
            getInformationDiv(postres)
        ).join("")}

                    <h2>BEBIDAS</h2>
                ${menu.bebidas.map((bebidas) =>
            getInformationDiv(bebidas)
        ).join("")}

                    </div>
                    `
    )
}).join("")
console.log(cards)
restaurantMenuContainer.innerHTML = cards



