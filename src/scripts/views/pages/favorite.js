import ServiceRestaurantIdb from '../../data/restaurant-idb';
import {
  createRestaurantItemTemplate,
  createAlertTemplate,
  createErrorTemplate,
} from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section class="content">
        <h2 class="content_heading">Your Favorite Restaurants</h2>
        <div id="restaurants" class="restaurants"></div>
        <div id="errorView"></div>
      </section>
      <div class="loader"></div>
    `;
  },

  async afterRender() {
    document.body.classList.add('loading');
    try {
      const restaurants = await ServiceRestaurantIdb.getAllRestaurants();
      const restaurantsContainer = document.querySelector('#restaurants');
      if (restaurants.length > 0) {
        restaurants.forEach((restaurant) => {
          restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
      } else {
        const errorContainer = document.querySelector('#errorView');
        errorContainer.innerHTML = createAlertTemplate('You don\'t have a favorite restaurant');
      }
    } catch (error) {
      const errorContainer = document.querySelector('#errorView');
      errorContainer.innerHTML = createErrorTemplate(error);
    } finally {
      document.body.classList.remove('loading');
    }
  },
};

export default Favorite;
