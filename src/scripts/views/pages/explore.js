import RestaurantSource from '../../data/restaurant-source';
import { createHeroTemplate, createRestaurantItemTemplate, createAlertTemplate } from '../templates/template-creator';
import 'img-lightbox/js/img-lightbox';

const ExploreRestaurants = {
  async render() {
    return `${createHeroTemplate()}
    <section class="content">
      <h2 class="content_heading">Explore Restaurants</h2>
      <div id="restaurants" class="restaurants"></div>
      <div id="error_view"></div>
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
      // eslint-disable-next-line no-undef
      imgLightbox('img-lightbox-link');
    } catch (error) {
      const errorContainer = document.querySelector('#error_view');
      errorContainer.innerHTML = createAlertTemplate(error);
    } finally {
      document.body.classList.remove('loading');
    }
  },
};

export default ExploreRestaurants;
