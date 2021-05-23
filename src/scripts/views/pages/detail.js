import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate, createReviewTemplate } from '../templates/template-creator';
import 'img-lightbox/js/img-lightbox';

const Detail = {
  async render() {
    return `
    <section class="content">
      <article id="restaurant" class="restaurant"></article>
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    console.log(restaurant);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    const customerReviewsContainer = document.querySelector('#customerReviews');
    restaurant.customerReviews.forEach((review) => {
      customerReviewsContainer.innerHTML += createReviewTemplate(review);
    });
    // eslint-disable-next-line no-undef
    imgLightbox('img-lightbox-link');
  },
};

export default Detail;
