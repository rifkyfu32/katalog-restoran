import CONFIG from '../../globals/config';
import { shortenText, htmlEntities } from '../../utils/text-function';

const createHeroTemplate = () => `
  <section class="hero">
    <div class="hero_inner">
      <h2 class="hero_title">Temukan lokasi restoran terbaik</h2>
      <p class="hero_tagline">Menyantap makanan atau minuman lezat wajib di tempat yang nyaman</p>
    </div>
  </section>
`;

const createReviewTemplate = (review) => `
  <div class="card">
    <div class="card-header">
      <h4>${review.name ? review.name : 'anonymous'}</h4>
    </div>
    <div class="card-body">
      <p class="card-text">${htmlEntities(review.review)}</p>
      <p class="card-date">${review.date}</p>
    </div>
  </div>
`;

const createAddReviewTemplate = () => `
  <div class="panel">
    <h4>Add Your Review</h4>
    <div class="divider"></div>
    <div id="reviewError"></div>
    <form>
      <div class="form-group">
        <label class="form-label" for="reviewName">Name</label>
        <input class="form-input" type="text" id="reviewName" placeholder="Your Name">
      </div>
      <div class="form-group">
        <label class="form-label" for="reviewMessage">Message</label>
        <textarea class="form-input" id="reviewMessage" placeholder="Your Review" rows="3"></textarea>
      </div>
      <div class="form-group">
        <button type="button" id="btnSubmitReview" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article class="restaurant-item" id="${restaurant.id}">
    <div class="restaurant-item_header">
      <div class="restaurant-item_header_ribbon"><span>&#9733; ${restaurant.rating}</span></div>
      <img class="restaurant-item_header_photo"
          src="${restaurant.pictureId ? CONFIG.BASE_URL + CONFIG.IMAGE_SMALL + restaurant.pictureId : './images/placeholder.png'}"
          alt="Photo ${restaurant.name}">
    </div>
    <div class="restaurant-item_content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${shortenText(restaurant.description, 160)}...</p>
        <a href="${`/#/detail/${restaurant.id}`}" class="restaurant-item-btn">Selengkapnya</a>
    </div>
  </article>
  `;

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant_title">${restaurant.name}</h2>
  <a href="${restaurant.pictureId ? CONFIG.BASE_URL + CONFIG.IMAGE_LARGE + restaurant.pictureId : './images/placeholder.png'}"
    class="img-lightbox-link"
    data-src="${restaurant.pictureId ? CONFIG.BASE_URL + CONFIG.IMAGE_LARGE + restaurant.pictureId : './images/placeholder.png'}"
    aria-hidden="true"
    rel="lightbox">
    <img class="restaurant_photo"
      src="${restaurant.pictureId ? CONFIG.BASE_URL + CONFIG.IMAGE_LARGE + restaurant.pictureId : './images/placeholder.png'}"
      alt="Photo ${restaurant.name}">
  </a>
  <div class="restaurant_info panel">
    <h3>Information</h3>
    <h4>Alamat</h4>
    <p>${restaurant.address} - ${restaurant.city}</p>
    <h4>Kategori</h4>
    <p>${restaurant.categories.map((category) => category.name).join(', ')}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="restaurant_food panel">
    <h3>Menu Makanan</h3>
    <ul>${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}</ul>
  </div>
  <div class="restaurant_drink panel">
    <h3>Menu Minuman</h3>
    <ul>${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}</ul>
  </div>
  <div class="restaurant_description panel">
    <h3>Deskripsi</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant_review panel">
    <div class="restaurant_review_title">
      <h3>Review</h3>
      <button onclick="document.getElementById('reviewName').focus();" 
       class="btn tooltip tooltip-left" data-tooltip="Add review for this restaurant">Add Review</button>
    </div>
    <div class="divider"></div>
    <div id="customerReviews"></div>
    <div id="addReviews"></div>
  </div>
`;

const createErrorTemplate = (message) => `
  <div class="alert alert-danger" role="alert">
    <i class="icon icon-stop"></i> An error occurred because ${message} 
      . You can return to the <a href="#/explore" class="alert-link">homepage</a>.
  </div>
`;

const createAlertTemplate = (message) => `
  <div class="alert alert-warning" role="alert">
    <span class="btn-alert-close" onclick="this.parentElement.style.display='none';">&times;</span>
    <i class="icon icon-stop"></i> ${message} 
  </div>
`;

const createBookmarkButtonTemplate = () => `
  <button id="bookmarkButton" 
    class="fab fab-success tooltip tooltip-left"
    aria-label="bookmark this restaurant" 
    data-tooltip="Bookmark this restaurant">
     <i class="icon icon-bookmark icon-1x" aria-hidden="true"></i>
  </button>
`;

const createUnBookmarkButtonTemplate = () => `
  <button id="bookmarkButton" 
    class="fab fab-danger tooltip tooltip-left"
    aria-label="unbookmark this restaurant" 
    data-tooltip="Unbookmark this restaurant">
    <i class="icon icon-delete icon-1x" aria-hidden="true"></i>
  </button>
`;

export {
  createHeroTemplate,
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createReviewTemplate,
  createAddReviewTemplate,
  createErrorTemplate,
  createAlertTemplate,
  createBookmarkButtonTemplate,
  createUnBookmarkButtonTemplate,
};
