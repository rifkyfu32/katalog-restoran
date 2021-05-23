import CONFIG from '../../globals/config';
import shortenText from '../../utils/text-function';

const createHeroTemplate = () => `
<section class="hero">
      <div class="hero_inner">
        <h2 class="hero_title">Temukan lokasi restoran terbaik</h2>
        <p class="hero_tagline">Menyantap makanan atau minuman lezat wajib di tempat yang nyaman</p>
      </div>
    </section>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant_title">${restaurant.name}</h2>
  <img class="restaurant_photo" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId : './images/placeholder.png'}" alt="${restaurant.title}" />
  <div class="restaurant_info panel">
    <h3>Information</h3>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Alamat</h4>
    <p>${restaurant.address} - ${restaurant.city}</p>
    <h4>Kategori</h4>
    <p>${restaurant.categories.map((category) => category.name).join(', ')}</p>
  </div>
  <div class="restaurant_food panel">
    <h4>Menu Makanan</h4>
    <ul>${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}</ul>
  </div>
  <div class="restaurant_drink panel">
    <h4>Menu Minuman</h4>
    <ul>${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}</ul>
  </div>
  <div class="restaurant_description panel">
    <h3>Deskripsi</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant_review panel">
    <h3>Review</h3>
    <p>${restaurant.description}</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article class="restaurant-item" id="${restaurant.id}">
  <div class="restaurant-item_header">
    <a href="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId : './images/placeholder.png'}"
      class="img-lightbox-link"
      data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId : './images/placeholder.png'}"
      aria-hidden="true"
      rel="lightbox">
        <img class="restaurant-item_header_photo"
        src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId : './images/placeholder.png'}"
        alt="Photo ${restaurant.name}">
    </a>
    <div class="restaurant-item_header_rating">
      <p>⭐️<span class="restaurant-item_header_rating_score">${restaurant.rating}</span></p>
    </div>
  </div>
  <div class="restaurant-item_content">
      <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
      <p>${shortenText(restaurant.description, 160)}...</p>
      <a href="${`/#/detail/${restaurant.id}`}" class="restaurant-item-btn">Selengkapnya</a>
  </div>
  </article>
  `;

export { createHeroTemplate, createRestaurantDetailTemplate, createRestaurantItemTemplate };
