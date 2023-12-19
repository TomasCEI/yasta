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

const getPlatosPrincipalesInformationDiv = (pprincipal) => {
    return (
        `<div class="menuPlatoPrincipalCard">
        <img src="${pprincipal.articleImg}" alt="${pprincipal.item}"/>
            <h3>${pprincipal.item}</h3>
            <span>$ ${pprincipal.price}</span>
            <form action="input">
                <Button>Agregar al carrito</Button>
            </form>
        </div>`
    )
}

const getPostresInformationDiv = (postre) => {
    return (
        `<div class="menuPostresCard">
        <img src="${postre.articleImg}" alt="${postre.item}"/>
            <h3>${postre.item}</h3>
            <span>$ ${postre.price}</span>
            <form action="input">
                <Button>Agregar al carrito</Button>
            </form>
        </div>`
    )
}

const getBebidasInformationDiv = (bebida) => {
    return (
        `<div class="menuBebidasCard">
        <img src="${bebida.articleImg}" alt="${bebida.item}"/>
            <h3>${bebida.item}</h3>
            <span>$ ${bebida.price}</span>
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

    const menu= restaurante.menu;

    return (
        `
            <div class="menuCard"> 
                ${getRestaurantImg(restaurante.img)}
                ${getRestaurantInformationDiv(restaurante)}

                <h2>ENTRANTES</h2>
                ${menu.entrantes.map(getEntrantesInformationDiv).join("")}

                <h2>PLATOS PRINCIPALES</h2>
                ${menu.principales.map(getPlatosPrincipalesInformationDiv).join("")}
                
                <h2>POSTRES</h2>           
                ${menu.postres.map(getPostresInformationDiv).join("")}
                
                <h2>BEBIDAS</h2>
                ${menu.bebidas.map(getBebidasInformationDiv).join("")}
            </div>
        `
    )
}).join("")
console.log(cards)
restaurantMenuContainer.innerHTML = (
    `
    <div class="menuCard">
            ${getRestaurantImg(currentRestaurant.img)}
            ${getRestaurantInformationDiv(currentRestaurant)}
            <h2>ENTRANTES</h2>
                ${getEntrantesInformationDiv(currentRestaurant.menu.entrantes)}

                <h2>PLATOS PRINCIPALES</h2>
                ${getPlatosPrincipalesInformationDiv(currentRestaurant.menu.principales)}
                
                <h2>POSTRES</h2>           
                ${getPostresInformationDiv(currentRestaurant.menu.postres)}
                
                <h2>BEBIDAS</h2>
                ${getPlatosPrincipalesInformationDiv(currentRestaurant.menu.bebidas)}
    </div>
    `
)
restaurantMenuContainer.innerHTML = cards