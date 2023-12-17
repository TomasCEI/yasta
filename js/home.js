//Script for Home page
/**
* Creates artist card html from detailed card data
* @param {*} restaurantCardInformation 
*/
function generateRestaurantCard(restaurantCardInformation) {
    return `<div class="restaurantCard">
            <img src="${restaurantCardInformation.img}" alt="${altTextImage}">
    <div class="restaurantInformation">
        <h2>${restaurantCardInformation.categoria}</h2>
        <h3>${restaurantCardInformation.contacto.direccion}</h3>
        <h3>${restaurantCardInformation.contacto.telefono}</h3>
    </div>
 </div>`
 }

// Creating card content variables
const dummyCardsData = [
    {   restaurante: "Carnitas Johnny",
        id: 12345,
        categoria:['carnes', 'argentino'],
        img: "https://unsplash.com/photos/cooked-dish-on-gray-bowl--YHSwy6uqvk",
        altTextImage: 'fotografía de carnes a la parrilla';
        contacto: [{
            direccion: 'Calle principal, #5',
            telefono: 633447654,
            }
        ]        
    
    },
    {   restaurante: "Vegimax",
        id: 12343,
        categoria:['vegano', 'italiano'],
        img: "https://unsplash.com/photos/a-table-topped-with-plates-of-food-and-utensils-w6udFN7vybs",
        contacto: [{
            direccion: 'Calle principal, #5',
            telefono: 633970765,
            }
        ]        
    
    },
]

// Generates html from dummyCardsData array
const restaurantCards = dummyCardsData.map((restaurantCardInformation) => {
    return generateRestaurantCard(restaurantCardInformation)
}).join('');
console.log(restaurantCards)

// Saves artist_card_container to use it later
const restaurantContainer = document.getElementById("restaurantContainer");

