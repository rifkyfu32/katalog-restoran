import RestaurantSource from '../../data/restaurant-source';
import {
  createHeroTemplate,
  createRestaurantItemTemplate,
  createErrorTemplate,
} from '../templates/template-creator';

const ExploreRestaurants = {
  async render() {
    return `${createHeroTemplate()}
    <section class="content">
      <h2 class="content_heading">Explore Restaurants</h2>
      <div id="restaurants" class="restaurants"></div>
      <div id="errorView"></div>
    </section>
    <div class="loader"></div>
    `;
  },
  async afterRender() {
    document.body.classList.add('loading');
    try {
      const restaurants = await RestaurantSource.exploreRestaurants();
      const restaurantsContainer = document.querySelector('#restaurants');
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      const errorContainer = document.querySelector('#errorView');
      errorContainer.innerHTML = createErrorTemplate(error);
    } finally {
      document.body.classList.remove('loading');
    }
  },
};

export default ExploreRestaurants;
