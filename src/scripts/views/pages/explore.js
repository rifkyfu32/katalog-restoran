import RestaurantSource from '../../data/restaurant-source';
import { createHeroTemplate, createRestaurantItemTemplate } from '../templates/template-creator';

const ExploreRestaurants = {
  async render() {
    return `${createHeroTemplate()}
    <section class="content">
      <h2 class="content_heading">Explore Restaurants</h2>
      <div id="restaurants" class="restaurants">
      </div>
    </section>
    `;
  },
  async afterRender() {
    const restaurants = await RestaurantSource.exploreRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default ExploreRestaurants;
